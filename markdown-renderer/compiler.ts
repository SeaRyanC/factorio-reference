import ts = require("typescript");
import fs = require("fs");
import dataset = require("../object-model/dataset");
import path = require("path");

export interface Compiler {
    compile(md: string): { errors?: string; js?: string };
}

export type LoadFile = (path: string, callback: (content: string) => void) => void;

export function createCompiler(readFile: LoadFile, done: (compiler: Compiler) => void) {
    readFile('data/current.json', dataJson => {
        const om = dataset.DataSet.fromJson(JSON.parse(dataJson));
        void om;

        done({
            compile(content) {
                host.addFile(evalFileName, content);
                const program = host.getProgram();
                const diags = [...program.getSyntacticDiagnostics(), ...program.getSemanticDiagnostics()];
                if (diags.length) {
                    const errString = diags.map(d => ts.flattenDiagnosticMessageText(d.messageText, "\r\n")).join("\r\n").replace(/</g, "&gt;");
                    return { errors: errString };
                } else {
                    return { js: ts.transpileModule(content, {}).outputText };
                }
            }
        });
    });
}

const jsonData = JSON.parse(fs.readFileSync(path.join(__dirname, '../../data/current.json'), { encoding: 'utf-8' }));
const om = dataset.DataSet.fromJson(jsonData);

const evalFileName = "input.ts";
let evalFile = ts.createSourceFile(evalFileName, "let x: number = 100", ts.ScriptTarget.Latest);

// const globalsFileName = "globals.d.ts";
// const globalFile = ts.createSourceFile(globalsFileName, createGlobalsContent(), ts.ScriptTarget.Latest);
const omFileNames = ["dataset", "entity", "item", "physics", "recipe", "types"];

const host = createHost();
host.addFile(host.libFileName, fs.readFileSync(path.join(__dirname, "../../node_modules/typescript/lib/lib.d.ts"), { encoding: 'utf-8' }));

function createGlobalsContent() {
    return `
    import * as ds from './om/dataset';
    declare global {
        const om: ds.DataSet;
    }
    `;
}

function createHost() {
    const libFileName = "lib.d.ts";
    const lookup: any = {};
    const rootNames: string[] = [];
    const compilerOpts: ts.CompilerOptions = {};
    let program: undefined | ts.Program = undefined;

    const host: ts.CompilerHost = {
        getSourceFile(fileName: string, languageVersion: ts.ScriptTarget): ts.SourceFile {
            if (fileName in lookup) {
                return lookup[fileName];
            }
            console.log(`Warning: Don't know about ${fileName}`);
            return undefined!;
        },

        getDefaultLibFileName(options: ts.CompilerOptions): string {
            return libFileName;
        },

        readFile(fileName: string) {
            throw new Error(`No reading files, especially ${fileName}`);
        },

        writeFile(fileName: string, data: string) {
        },

        fileExists(fileName: string) {
            throw new Error(`No querying files, especially ${fileName}`);
        },

        getCurrentDirectory(): string {
            return '/';
        },

        getDirectories(_path: string): string[] {
            return [];
        },

        getCanonicalFileName(fileName: string): string {
            return fileName;
        },

        useCaseSensitiveFileNames(): boolean {
            return true;
        },

        getNewLine(): string {
            return '\r\n';
        }
    };

    function getProgram() {
        program = ts.createProgram(rootNames, compilerOpts, host, program);
        return program;
    }

    function addFile(name: string, content: string) {
        lookup[name] = ts.createSourceFile(name, content, ts.ScriptTarget.Latest);
        if (rootNames.indexOf(name) < 0) {
            rootNames.push(name);
        }
    }

    return {
        host,
        addFile,
        libFileName,
        rootNames,
        getProgram
    };
}

