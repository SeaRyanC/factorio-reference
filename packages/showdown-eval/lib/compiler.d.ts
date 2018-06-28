export interface Compiler {
    compile(ts: string): {
        errors?: string;
        js?: string;
    };
    transpile(js: string): {
        js: string;
    };
}
export declare type FileLoader = (path: string) => Promise<string | undefined>;
export declare function createCompiler(readFile: FileLoader, otherFiles: ReadonlyArray<string>): Promise<Compiler>;
