import vm = require("vm");
import showdown = require("showdown");
import ts = require("typescript");
import fs = require("fs");
import path = require("path");
import compiler = require("./compiler");
import dataset = require("../object-model/dataset");

const loadFile: compiler.LoadFile = (path, cb) => fs.readFile(path, { encoding: 'utf-8' }, (err, data) => cb(data));

export interface Renderer {
    renderMarkdown(md: string): string;
    renderMarkdownAsPage(md: string, title?: string): string;
}

export function getConverter(done: (r: Renderer) => void): void {
    loadFile(`data/current.json`, dataJson => {
        const om = dataset.DataSet.fromJson(JSON.parse(dataJson));
        const items = om.items, entities = om.entities, recipes = om.recipes;
        const globalForEval = {
            om, items, entities, recipes
        };

        compiler.createCompiler(loadFile, comp => {
            const evalFileName = 'input.ts';
            const matches: string[] = [];
            let self = false;

            const ext = [
                {
                    type: "lang",
                    regex: /```f\r?\n([\s\S]*)\r?\n```/g,
                    replace: (match: any, code: any) => {
                        const output = comp.compile(code);
                        let result = "??????";
                        console.log(`Code is ${code}`);
                        if (output.errors) {
                            result = `<pre>Type or Syntax Errors:\r\n${output.errors}</pre>`;
                        } else {
                            try {
                                result = vm.runInNewContext(output.js!, globalForEval);
                            } catch (e) {
                                result = `<pre>Error running code: ${e.message}\r\n${e.stack}</pre>`;
                            }
                            console.log(`Result of eval is ${result}`);
                        }

                        return `%FCODEVAL${matches.push(result) - 1}%`;
                    }
                },
                {
                    type: "output",
                    filter: function (text: string, converter: showdown.Converter) {
                        if (self) return text;
                        for (let i = 0; i < matches.length; i++) {
                            const code = `%FCODEVAL${i}%`;
                            self = true;
                            text = text.replace(new RegExp(code, 'gi'), converter.makeHtml(matches[i]));
                            self = false;
                        }
                        self = false;
                        matches.length = 0;
                        return text;
                    }
                },
                {
                    type: "lang",
                    regex: /\{([A-Za-z0-9-]+)\}/g,
                    replace: (match: any, content: any) => {
                        return `<span class="item" data-itemname="${content}">${content}</span>`;
                    }
                },
                {
                    type: "lang",
                    regex: /\{(\S+)\s+x\s*(\d+)\}/g,
                    replace: (match: any, content: any, count: any) => {
                        return `<span class="counted-item" data-itemname="${content}" data-count="${count}">${content} x ${count}</span>`;
                    }
                }
            ];

            const conv = new showdown.Converter();
            conv.addExtension(ext as any, 'facmd-input');

            done({ renderMarkdown, renderMarkdownAsPage });

            function renderMarkdown(md: string) {
                return conv.makeHtml(md);
            }

            function renderMarkdownAsPage(md: string, title?: string) {
                const match = /<!-- Title: (.*) -->/.exec(md);
                const parsedTitle = match && match[1]!;
                title = title || parsedTitle || "No Title";

                return `<!DOCTYPE html>
                <html>
                  <head>
                    <meta charset="UTF-8">
                    <title>${title}</title>
                    <link rel="stylesheet" href="css/style.css">
                    <link rel="stylesheet" href="css/images.css">
                    <script>
                        var ws;
                        if (window.location.hostname === "localhost" && typeof WebSocket === 'function') {
                            connectWs(true);
                        }
            
                        function connectWs(first) {
                            if (ws !== undefined) return;
            
                            ws = undefined;
                            try {
                                ws = new WebSocket("ws://localhost:8081/");
                                if (first) {
                                    ws.onmessage = function() {
                                        window.location.reload();
                                    };
                                } else {
                                    window.location.reload();
                                }
            
                                ws.onclose = function() {
                                    window.setInterval(3000, function() {
                                        connectWs(false);
                                    });
                                };
                            } catch {
                                ws = undefined;
                            }
                        }
                    </script>
                  </head>
                  <body>
            ${renderMarkdown(md)}
                  </body>
                </html>`;
            }
        });
    });
}
