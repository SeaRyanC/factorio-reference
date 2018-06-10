import vm = require("vm");
import showdown = require("showdown");
import ts = require("typescript");
import fs = require("fs");
import path = require("path");
import dataset = require("../object-model/dataset");

import tables = require('../tables/tables');

import compiler = require('./compiler');
import compileAndRun = require('./compile-and-run-md');
import factorio = require('./factorio-md');

const loadFile: compiler.LoadFile = (path, cb) => fs.readFile(path, { encoding: 'utf-8' }, (err, data) => cb(data));

const extraFiles = [
    'bin/object-model/dataset.d.ts',
    'bin/object-model/entity.d.ts',
    'bin/object-model/item.d.ts',
    'bin/object-model/recipe.d.ts',
    'bin/object-model/types.d.ts',
    'bin/object-model/physics.d.ts',
    'bin/tables/tables.d.ts',
    'static/globals.d.ts'
];

export function getConverter(done: (r: Renderer) => void): void {
    loadFile(`data/current.json`, dataJson => {
        const om = dataset.DataSet.fromJson(JSON.parse(dataJson));
        const items = om.items, entities = om.entities, recipes = om.recipes;
        const globalForEval = {
            om, items, entities, recipes, tables
        };

        compileAndRun.getCompilerExtension(extraFiles, globalForEval, loadFile, compileAndRunExt => {
            const conv = new showdown.Converter();
            conv.addExtension(compileAndRunExt as any, 'compile-and-run');
            conv.addExtension(factorio.extensions as any, 'factorio');
            done({
                renderMarkdown(md) { return renderMarkdown(conv, md) },
                renderMarkdownAsPage(md, title?) { return renderMarkdownAsPage(conv, md, title); },
            });
        });
    });
}

export interface Renderer {
    renderMarkdown(md: string): string;
    renderMarkdownAsPage(md: string, title?: string): string;
}

function renderMarkdown(conv: showdown.Converter, md: string) {
    return conv.makeHtml(md);
}

function renderMarkdownAsPage(conv: showdown.Converter, md: string, title?: string) {
    const match = /<!-- Title: (.*?) -->/.exec(md);
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
${renderMarkdown(conv, md)}
      </body>
    </html>`;
}
