import fs = require("fs");
import path = require("path");
import sharp = require("sharp");
import s = require("staticy");
import renderer = require("./renderer");

const FactorioPath = path.join(process.env["USERPROFILE"]!, "Dropbox/Factorio_1.0.0");

const site = s.site.createSite({fileRoot: "../"});

process.on("unhandledRejection", err => { throw err; });

site.addFileProvider({
    async getServerFiles() {
        const res: s.ServerFile[] = [];
        const home = path.join(FactorioPath, "data/base/graphics/icons");
        for (const f of fs.readdirSync(home)) {
            const fn = path.join(home, f);
            res.push({
                serverPath: "images/" + f,
                async generate(context) {
                    return {
                        kind: "raw",
                        mimeType: "image/png",
                        async getBuffer() {
                            return sharp(fn).extract({ left: 64, top: 0, height: 32, width: 32 }).png().toBuffer();
                        }
                    }
                }
            });

            res.push({
                serverPath: "images/half-" + f,
                async generate(context) {
                    return {
                        kind: "raw",
                        mimeType: "image/png",
                        async getBuffer() {
                            return sharp(fn).extract({ left: 64, top: 0, height: 32, width: 16 }).png().toBuffer();
                        }
                    }
                }
            });

        }
        return res;
    }
})

async function go() {
    const r = await renderer.getConverter();
    const MarkdownRenderer: s.TextTransform = {
        async transform(content) {
            return {
                content: r.renderMarkdownAsPage(content.content)
            };
        },
        changeFileName(fn) {
            return fn.replace(".md", ".html");
        }
    }
    
    site.addDirectory("./css", { serverPath: "/css" });
    // site.addDirectory("./images", { serverPath: "/images" });
    site.addDirectory("./md", {
        serverPath: "/",
        textTransformer: MarkdownRenderer
    });
    
    site.runDevServer();
}

go();