import vm = require("vm");
import showdown = require("showdown");
import compiler = require("./compiler");

export { FileLoader } from "./compiler";

function cleanMarkdownEscaped(code: string) {
    code = code.replace(/¨D/g, "$");
    code = code.replace(/¨T/g, `~`);
    return code;
}

export async function getCompilerExtension(evalFunc: (code: string) => any, loadFile: compiler.FileLoader, otherFileNames: ReadonlyArray<string>): Promise<showdown.ShowdownExtension[]> {
    const comp = await compiler.createCompiler(loadFile, otherFileNames);

    const evalFileName = 'input.ts';
    const matches: string[] = [];
    let self = false;
    const globalEnv = {};

    const ext: showdown.ShowdownExtension[] = [
        {
            type: "lang",
            regex: /```tsf\r?\n([\s\S]*?)\r?\n```/g,
            replace: (match: any, code: any) => {
                code = cleanMarkdownEscaped(code);
                const output = comp.compile(code);
                let result = "??????";
                if (output.errors) {
                    result = `<pre>Type or Syntax Errors:\r\n${output.errors}</pre>`;
                } else {
                    try {
                        result = vm.runInNewContext(output.js!, globalEnv);
                    } catch (e) {
                        result = `<pre>Error running code: ${e.message}\r\n${e.stack}</pre>`;
                    }
                }

                return `%FCODEVAL${matches.push(result) - 1}%`;
            }
        },

        {
            type: "lang",
            regex: /```jsf\r?\n([\s\S]*?)\r?\n```/g,
            replace: (match: any, code: any) => {
                code = cleanMarkdownEscaped(code);
                const output = comp.transpile(code);
                let result: string;
                try {
                    result = vm.runInNewContext(output.js, globalEnv);
                } catch (e) {
                    result = `<pre>Error running code: ${e.message}\r\n${e.stack}</pre>`;
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

    return ext;
}
