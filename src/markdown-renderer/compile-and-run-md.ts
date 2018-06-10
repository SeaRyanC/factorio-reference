import vm = require("vm");
import fs = require("fs");
import showdown = require("showdown");
import dataset = require("../object-model/dataset");
import compiler = require("./compiler");

export function getCompilerExtension(otherFiles: ReadonlyArray<string>, globalEnv: object, loadFile: compiler.LoadFile, done: (exts: showdown.ShowdownExtension[]) => void) {
    compiler.createCompiler(loadFile, otherFiles, comp => {
        const evalFileName = 'input.ts';
        const matches: string[] = [];
        let self = false;

        const ext: showdown.ShowdownExtension[] = [
            {
                type: "lang",
                regex: /```f\r?\n([\s\S]*?)\r?\n```/g,
                replace: (match: any, code: any) => {
                    code = code.replace(/¨D/g, "$");
                    code = code.replace(/¨T/g, `~`);
                    const output = comp.compile(code);
                    let result = "??????";
                    console.log(`Code is ${code}`);
                    if (output.errors) {
                        result = `<pre>Type or Syntax Errors:\r\n${output.errors}</pre>`;
                    } else {
                        try {
                            result = vm.runInNewContext(output.js!, globalEnv);
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
            }
        ];
        done(ext);
    });
}
