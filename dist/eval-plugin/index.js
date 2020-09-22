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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCompilerExtension = exports.libFileName = void 0;
var vm = require("vm");
var compiler = require("./compiler");
var compiler_1 = require("./compiler");
Object.defineProperty(exports, "libFileName", { enumerable: true, get: function () { return compiler_1.libFileName; } });
function cleanMarkdownEscaped(code) {
    code = code.replace(/¨D/g, "$");
    code = code.replace(/¨T/g, "~");
    return code;
}
function getCompilerExtension(globalEnv, loadFile, otherFileNames) {
    return __awaiter(this, void 0, void 0, function () {
        var comp, evalFileName, matches, self, ext;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, compiler.createCompiler(loadFile, otherFileNames)];
                case 1:
                    comp = _a.sent();
                    evalFileName = 'input.ts';
                    matches = [];
                    self = false;
                    ext = [
                        {
                            type: "lang",
                            regex: /```tsf?\r?\n([\s\S]*?)\r?\n```/g,
                            replace: function (match, code) {
                                code = cleanMarkdownEscaped(code);
                                var output = comp.compile(code);
                                var result = "??????";
                                try {
                                    result = vm.runInNewContext(output.js, globalEnv);
                                    debugger;
                                }
                                catch (e) {
                                    result = "<pre>Error running code: " + e.message + "\r\n" + e.stack + "</pre>";
                                }
                                return "%FCODEVAL" + (matches.push(result) - 1) + "%";
                            }
                        },
                        {
                            type: "lang",
                            regex: /```jsf?\r?\n([\s\S]*?)\r?\n```/g,
                            replace: function (match, code) {
                                code = cleanMarkdownEscaped(code);
                                var output = comp.transpile(code);
                                var result;
                                try {
                                    result = vm.runInNewContext(output.js, globalEnv);
                                }
                                catch (e) {
                                    result = "<pre>Error running code: " + e.message + "\r\n" + e.stack + "</pre>";
                                }
                                return "%FCODEVAL" + (matches.push(result) - 1) + "%";
                            }
                        },
                        {
                            type: "output",
                            filter: function (text, converter) {
                                if (self)
                                    return text;
                                for (var i = 0; i < matches.length; i++) {
                                    var code = "%FCODEVAL" + i + "%";
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
                    return [2 /*return*/, ext];
            }
        });
    });
}
exports.getCompilerExtension = getCompilerExtension;
