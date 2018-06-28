import showdown = require("showdown");
import compiler = require("./compiler");
export { FileLoader } from "./compiler";
export declare function getCompilerExtension(evalFunc: (code: string) => any, loadFile: compiler.FileLoader, otherFileNames: ReadonlyArray<string>): Promise<showdown.ShowdownExtension[]>;
