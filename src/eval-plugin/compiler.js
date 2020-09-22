"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCompiler = exports.libFileName = void 0;
var ts = require("typescript");
exports.libFileName = "static/lib.d.ts";
function createCompiler(readFile, otherFiles) {
    return __awaiter(this, void 0, void 0, function () {
        var host, files, _i, files_1, file, content;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    host = createHost();
                    files = [exports.libFileName].concat(otherFiles);
                    _i = 0, files_1 = files;
                    _a.label = 1;
                case 1:
                    if (!(_i < files_1.length)) return [3 /*break*/, 4];
                    file = files_1[_i];
                    return [4 /*yield*/, readFile(file)];
                case 2:
                    content = _a.sent();
                    if (content === undefined)
                        throw new Error("Failed to read " + file);
                    host.addFile(file, content);
                    _a.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/, {
                        transpile: function (content) {
                            return { js: ts.transpileModule(content, {}).outputText };
                        },
                        compile: function (content) {
                            var evalFileName = "input.ts";
                            host.addFile(evalFileName, content);
                            var program = host.getProgram();
                            var diags = __spreadArrays(program.getSyntacticDiagnostics(), program.getSemanticDiagnostics());
                            if (diags.length) {
                                var errString = diags.map(function (d) { return ts.flattenDiagnosticMessageText(d.messageText, "\r\n"); }).join("\r\n").replace(/</g, "&gt;");
                                return { errors: errString };
                            }
                            else {
                                return { js: ts.transpileModule(content, {}).outputText };
                            }
                        }
                    }];
            }
        });
    });
}
exports.createCompiler = createCompiler;
function createHost() {
    var lookup = {};
    var rootNames = [];
    var compilerOpts = {};
    var program = undefined;
    var host = {
        getSourceFile: function (fileName, languageVersion) {
            if (fileName in lookup) {
                return lookup[fileName];
            }
            console.log("Warning: Don't know about " + fileName);
            return undefined;
        },
        getDefaultLibFileName: function (options) {
            return exports.libFileName;
        },
        readFile: function (fileName) {
            throw new Error("No reading files, especially " + fileName);
        },
        writeFile: function (fileName, data) {
        },
        fileExists: function (fileName) {
            return rootNames.indexOf(fileName) >= 0;
        },
        getCurrentDirectory: function () {
            return '';
        },
        getDirectories: function (_path) {
            return [];
        },
        getCanonicalFileName: function (fileName) {
            return fileName;
        },
        useCaseSensitiveFileNames: function () {
            return true;
        },
        getNewLine: function () {
            return '\r\n';
        }
    };
    function getProgram() {
        program = ts.createProgram(rootNames, compilerOpts, host, program);
        return program;
    }
    function addFile(name, content) {
        lookup[name] = ts.createSourceFile(name, content, ts.ScriptTarget.Latest);
        if (rootNames.indexOf(name) < 0) {
            rootNames.push(name);
        }
    }
    return {
        host: host,
        addFile: addFile,
        libFileName: exports.libFileName,
        rootNames: rootNames,
        getProgram: getProgram
    };
}
