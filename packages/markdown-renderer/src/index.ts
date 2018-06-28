import showdown = require("showdown");
import fs = require("fs");
import path = require("path");
import object_model = require("@referencio/object-model");
import compileAndRun = require("@referencio/showdown-eval");
import factorio = require("@referencio/showdown-factorio");
import tables = require("@referencio/tables");

process.on("unhandledRejection", err => { throw err; });

const repoRoot = path.join(__dirname, "../../../");

const loadFile: compileAndRun.FileLoader = fileName => {
    if (fileName === compileAndRun.libFileName) {
        fileName = path.join(repoRoot, "static/lib.d.ts");
    }
    return new Promise<string>((resolve, reject) => {
        fs.readFile(fileName, { encoding: "utf-8" }, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

const extraFiles = [
    'packages/object-model/lib/dataset.d.ts',
    'packages/object-model/lib/entity.d.ts',
    'packages/object-model/lib/item.d.ts',
    'packages/object-model/lib/recipe.d.ts',
    'packages/object-model/lib/types.d.ts',
    'packages/object-model/lib/physics.d.ts',
    'packages/tables/lib/index.d.ts',
    'static/globals.d.ts'
];

export async function getConverter(): Promise<Renderer>{
    const dataJson = await loadFile(path.join(repoRoot, `data/current.json`));
    if (!dataJson) throw new Error("Failed to load data");

    const om = object_model.DataSet.fromJson(JSON.parse(dataJson));
    const items = om.items, entities = om.entities, recipes = om.recipes;
    const globalForEval = {
        om, items, entities, recipes, tables
    };

    const compileAndRunExt = await compileAndRun.getCompilerExtension({ om }, loadFile, extraFiles.map(e => path.join(repoRoot, e)));
    const conv = new showdown.Converter();
    conv.addExtension(compileAndRunExt as any, 'compile-and-run');
    conv.addExtension(factorio.extensions as any, 'factorio');

    return {
        renderMarkdown(md) { return renderMarkdown(conv, md) },
        renderMarkdownAsPage(md, title?) { return renderMarkdownAsPage(conv, md, title); },
    };
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
