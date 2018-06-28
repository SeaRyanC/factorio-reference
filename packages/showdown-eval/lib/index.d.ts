import showdown = require("showdown");
import compiler = require("./compiler");
export declare function getCompilerExtension2(evalFunc: (code: string) => any, loadFile: compiler.FileLoader, otherFileNames: ReadonlyArray<string>): Promise<showdown.ShowdownExtension[]>;
