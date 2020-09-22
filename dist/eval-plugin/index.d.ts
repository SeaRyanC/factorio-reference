import showdown = require("showdown");
import compiler = require("./compiler");
export { FileLoader, libFileName } from "./compiler";
export declare function getCompilerExtension(globalEnv: object, loadFile: compiler.FileLoader, otherFileNames: ReadonlyArray<string>): Promise<showdown.ShowdownExtension[]>;
