import ts = require("typescript");
import fs = require("fs");
import dataset = require("../object-model/dataset");
import path = require("path");

export interface Compiler {
    compile(ts: string): { errors?: string; js?: string };
    transpile(js: string): { js: string };
}

export type LoadFile = (path: string, callback: (content: string) => void) => void;

export function createCompiler(readFile: LoadFile, otherFiles: ReadonlyArray<string>, done: (compiler: Compiler) => void) {
    const host = createHost();
    const files = ['static/lib.d.ts'].concat(otherFiles);

    loadNextFile();

    function loadNextFile() {
        if (files.length === 0) {
            done({
                transpile(content) {
                    return { js: ts.transpileModule(content, {}).outputText };
                },
                compile(content) {
                    const evalFileName = "input.ts";
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
        } else {
            const next = files.pop()!;
            readFile(next, file => {
                if (file === undefined) throw new Error(`Failed to load '${next}'`);
                host.addFile(next, file);
                loadNextFile();
            });
        }
    }
}

function createHost() {
    const libFileName = "static/lib.d.ts";
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
            return rootNames.indexOf(fileName) >= 0;
        },

        getCurrentDirectory(): string {
            return '';
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
