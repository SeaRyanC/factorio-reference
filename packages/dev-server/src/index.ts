import browserify = require('browserify');
import ws = require('ws');
import express = require('express');
import fs = require('fs');
import path = require('path');
import renderer = require('@referencio/markdown-renderer');

const repoRoot = path.join(__dirname, "../../../");

function makeBrowserBundle(globalName: string, ignores: ReadonlyArray<string>, ...roots: string[]): Promise<string> {
    const b = new browserify([], { standalone: globalName });
    for (const i of ignores) b.ignore(i);
    for (const root of roots) {
        b.add(path.join(repoRoot, root), {});
    }

    return new Promise((res, rej) => {
        b.bundle((err, src) => {
            if (err) return rej(err);
            res(src.toString());
        });
    });
}

async function main() {
    const rend = await renderer.getConverter();

    const app = express();
    for (const staticServe of ['static', 'css', 'images', 'data', 'js']) {
        const p = path.join(repoRoot, staticServe);
        addWatch(p);
        app.use(`/${staticServe}`, express.static(p));
    }

    const dtsPath = /\/dts\/(.*)\/(.*)$/;
    app.get(dtsPath, (req, res) => {
        const match = dtsPath.exec(req.path)!;
        const actualPath = path.join(repoRoot, "packages", match[1], "lib", match[2]);
        res.send(fs.readFileSync(actualPath, { encoding: "utf-8" }));
    });

    app.get(`static/lib.d.ts`, (req, res) => {
        fs.readFile(path.join(repoRoot, 'static/lib.d.ts'), { encoding: 'utf-8'}, (err, data) => {
            res.send(data);
        });
    });

    app.get(`/bundles/markdown-renderer.js`, async (req, res) => {
        res.send(await makeBrowserBundle("renderer", ["source-map-support"], "packages/markdown-renderer/lib/index.js"));
    });

    app.get(`/bundles/object-model.js`, (req, res) => {
        const b = new browserify([], { standalone: "objectmodel" });
        b.add(path.join(repoRoot, "packages/object-model/lib/index.js"), {});
        b.bundle().pipe(res);
    });

    app.get(`/bundles/tables.js`, (req, res) => {
        const b = new browserify([], { standalone: "tables" });
        b.add(path.join(repoRoot, "packages/tables/lib/index.js"), {});
        b.bundle().pipe(res);
    });

    app.get(`/bundles/showdown-factorio.js`, (req, res) => {
        const b = new browserify([], { standalone: "factoriomd" });
        b.add(path.join(repoRoot, "packages/showdown-factorio/lib/index.js"), {});
        b.bundle().pipe(res);
    });

    app.use(`/play`, express.static(path.join(repoRoot, 'static/playground.html')));
    app.use(`/play-md`, express.static(path.join(repoRoot, 'static/playground-md.html')));
    
    app.get(/\/.*\.html/, (req, res) => {
        const resolved = path.join(repoRoot, 'md', req.path.replace(/\.html$/, '.md'));
        fs.exists(resolved, exists => {
            if (!exists) {
                res.status(404).send(`${resolved} does not exist`);
                return;
            }
            fs.readFile(resolved, {encoding: 'utf-8'}, (err, md) => {
                const html = rend.renderMarkdownAsPage(md);
                res.status(200).send(html).end();
            });
            addWatch(resolved);
        });
    });
    
    const port = 8080;
    app.listen(port, () => {
        console.log(`Ready and listening at http://localhost:${port}`);
    });    
}

const wss = new ws.Server({ port: 8081 });
const listeners: Array<() => void> = [];
wss.on("connection", function (conn) {
    const trigger = () => {
        conn.send("1");
    };
    listeners.push(trigger);

    conn.on("close", closed => {
        listeners.splice(listeners.indexOf(trigger), 1);
    });
});

const watches: any = {};
function addWatch(path: string) {
    console.log(`Watch ${path}`);
    if (watches[path]) return;
    watches[path] = true;
    fs.watch(path, () => {
        listeners.forEach(f => f());
    });
}

main();
