import showdown = require("showdown");
import ts = require("typescript");
import fs = require("fs");
import path = require("path");

import dataset = require("../object-model/dataset");

const jsonData = JSON.parse(fs.readFileSync(path.join(__dirname, '../../data/current.json'), {encoding: 'utf-8'}));
const om = dataset.DataSet.fromJson(jsonData);

const libFileName = "lib.d.ts";
const libFile = ts.createSourceFile(libFileName, fs.readFileSync(path.join(__dirname, "../../node_modules/typescript/lib/lib.d.ts"), {encoding:'utf-8' }), ts.ScriptTarget.Latest);
const evalFileName = "input.ts";
let evalFile = ts.createSourceFile(evalFileName, "let x: number = 100", ts.ScriptTarget.Latest);

const host: ts.CompilerHost = {
    getSourceFile(fileName: string, languageVersion: ts.ScriptTarget): ts.SourceFile {
        switch(fileName) {
            case libFileName: return libFile;
            case evalFileName: return evalFile;
            default:
                console.log(`Warning: Don't know about ${fileName}`);
                return undefined!;
        }
    },

    getDefaultLibFileName(options: ts.CompilerOptions): string {
        return libFileName;
    },

    readFile(fileName: string) {
        throw new Error(`No reading files, especially ${fileName}`);
    },

    writeFile(fileName: string, data: string) {
    },

    fileExists(fileName: string) {
        throw new Error(`No querying files, especially ${fileName}`);
    },

    getCurrentDirectory(): string {
        return '/';
    },

    getDirectories(_path: string): string[] {
        return [];
    },

    getCanonicalFileName(fileName: string): string {
        return fileName;
    },

    useCaseSensitiveFileNames(): boolean {
        return true;
    },

    getNewLine(): string {
        return '\r\n';
    }    
};
const compilerOpts: ts.CompilerOptions = {};
let program = ts.createProgram([evalFileName], compilerOpts, host);
program.getTypeChecker();

const ext = [
    {
        type: "lang",
        regex: /\{(\S+)\}/g,
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
    },
    {
        type: "lang",
        regex: /```f\r?\n([\s\S]*)\r?\n```/g,
        replace: (match: any, content: any) => {
            evalFile = ts.createSourceFile(evalFileName, content, ts.ScriptTarget.Latest);
            program = ts.createProgram([evalFileName], compilerOpts, host, program);
            const diags = [...program.getSyntacticDiagnostics(), ...program.getSemanticDiagnostics()];
            if (diags.length) {
                const errString = diags.map(d => ts.flattenDiagnosticMessageText(d.messageText, "\r\n")).join("\r\n").replace(/</g, "&gt;");
                return `<pre>Type or Syntax Errors:\r\n${errString}</pre>`;
            } else {
                try {
                    return eval(ts.transpileModule(content, { compilerOptions: compilerOpts }).outputText)
                } catch (e) {
                    return `<pre>Error running code: ${e.message}\r\n${e.stack}</pre>`;
                }
            }
        }
    }
];

const conv = new showdown.Converter();
conv.addExtension(ext as any, 'facmd-input');

export function renderMarkdown(md: string) {
    return conv.makeHtml(md);
}

export function renderMarkdownAsPage(md: string, title?: string) {
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
