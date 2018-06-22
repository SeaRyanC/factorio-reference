import ws = require('ws');
import express = require('express');
import fs = require('fs');
import path = require('path');
import renderer = require('../markdown-renderer');

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

renderer.getConverter(rend => {
    const app = express();
    for (const staticServe of ['static', 'bin', 'css', 'images', 'js', 'data']) {
        const p = path.join(__dirname, '../../', staticServe);
        addWatch(p);
        app.use(`/${staticServe}`, express.static(p));
    }

    app.use(`/play`, express.static(path.join(__dirname, '../../static/playground.html')));
    app.use(`/play-md`, express.static(path.join(__dirname, '../../static/playground-md.html')));
    
    app.get(/\/.*\.html/, (req, res) => {
        const resolved = path.join(__dirname, '../../md', req.path.replace(/\.html$/, '.md'));
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
