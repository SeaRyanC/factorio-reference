var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "./displayable"], function (require, exports, displayable_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var showdown = window['showdown'];
    var converter = new showdown.Converter();
    var target = null;
    function setRenderTarget(element) {
        target = element;
    }
    exports.setRenderTarget = setRenderTarget;
    window.addEventListener("DOMContentLoaded", function () {
        target = window.document.body;
    });
    function onDocumentReady(callback) {
        if (document.readyState === "complete" || document.readyState === "interactive") {
            callback();
        }
        else {
            window.addEventListener("DOMContentLoaded", function () {
                callback();
            });
        }
    }
    function header(name) {
        onDocumentReady(function () {
            var id = encodeURIComponent(name);
            var selfLink = document.createElement("a");
            selfLink.href = "#" + id;
            selfLink.innerText = name;
            var header = document.createElement("h1");
            header.id = id;
            header.appendChild(selfLink);
            target.appendChild(header);
        });
    }
    exports.header = header;
    function renderTable(opts, render) {
        onDocumentReady(performRender);
        function performRender() {
            var document = target.ownerDocument;
            var header = undefined;
            if (opts.title) {
                var id = encodeURIComponent(opts.title);
                var selfLink = document.createElement("a");
                selfLink.href = "#" + id;
                selfLink.innerText = opts.title;
                header = document.createElement("h2");
                header.id = id;
                header.appendChild(selfLink);
            }
            var tableDiv = document.createElement("div");
            tableDiv.classList.add("table");
            var table = document.createElement("table");
            tableDiv.appendChild(table);
            var notesDiv = document.createElement("div");
            notesDiv.classList.add("notes");
            if (Array.isArray(opts.description)) {
                for (var _i = 0, _a = opts.description; _i < _a.length; _i++) {
                    var d = _a[_i];
                    var p = document.createElement('p');
                    p.appendChild(displayable_1.toElement(d));
                    notesDiv.appendChild(p);
                }
            }
            else if (opts.description !== undefined) {
                notesDiv.appendChild(displayable_1.toElement(opts.description));
            }
            var containerDiv = document.createElement("div");
            containerDiv.classList.add("annotated");
            containerDiv.appendChild(tableDiv);
            containerDiv.appendChild(notesDiv);
            render(table);
            if (header) {
                target.appendChild(header);
            }
            target.appendChild(containerDiv);
        }
    }
    var DeferredDisplayable = /** @class */ (function () {
        function DeferredDisplayable(render) {
            this.render = render;
        }
        DeferredDisplayable.prototype.renderTo = function (element) {
            this.render(element);
        };
        return DeferredDisplayable;
    }());
    exports.DeferredDisplayable = DeferredDisplayable;
    var ComputedColumn = /** @class */ (function () {
        function ComputedColumn() {
        }
        ComputedColumn.prototype.header = function () {
            return "???";
        };
        ComputedColumn.prototype.render1 = function (row, rowIndex) {
            return undefined;
        };
        ComputedColumn.prototype.render2 = function (row1, row2, row1index, row2index) {
            return undefined;
        };
        return ComputedColumn;
    }());
    exports.ComputedColumn = ComputedColumn;
    var TimeColumn = /** @class */ (function (_super) {
        __extends(TimeColumn, _super);
        function TimeColumn() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return TimeColumn;
    }(ComputedColumn));
    exports.TimeColumn = TimeColumn;
    function markdown(text) {
        var div = document.createElement('div');
        div.innerHTML = converter.makeHtml(text);
        target.appendChild(div);
    }
    exports.markdown = markdown;
    function doubleRowHeaderTable(opts) {
        var makeRowHeader1 = opts.row1Header || (function (c) { return displayable_1.toElement(c); });
        var makeRowHeader2 = opts.row2Header || (function (c) { return displayable_1.toElement(c); });
        var makeColHeader = opts.colHeader || (function (c) { return displayable_1.toElement(c); });
        var getRow2 = opts.getRow2 || (function () { return opts.rows2; });
        renderTable(opts, function (table) {
            // Headers
            var th = table.insertRow();
            th.appendChild(document.createElement('th')).appendChild(displayable_1.toElement(opts.origin1));
            th.appendChild(document.createElement('th')).appendChild(displayable_1.toElement(opts.origin2));
            var i = 0;
            for (var _i = 0, _a = opts.cols; _i < _a.length; _i++) {
                var col = _a[_i];
                th.appendChild(document.createElement('th')).appendChild(displayable_1.toElement(makeColHeader(col, i)));
                i++;
            }
            // Body
            i = 0;
            for (var _b = 0, _c = opts.rows1; _b < _c.length; _b++) {
                var r1 = _c[_b];
                var r2s = getRow2(r1, i);
                var row = table.insertRow();
                var header_1 = row.appendChild(document.createElement('th'));
                header_1.rowSpan = r2s.length;
                header_1.appendChild(displayable_1.toElement(makeRowHeader1(r1, i)));
                var j = 0;
                for (var _d = 0, r2s_1 = r2s; _d < r2s_1.length; _d++) {
                    var r2 = r2s_1[_d];
                    var subRow = j == 0 ? row : table.insertRow();
                    var subHed = document.createElement('th');
                    subHed.appendChild(displayable_1.toElement(makeRowHeader2(r2, j, r1, i)));
                    subRow.appendChild(subHed);
                    var k = 0;
                    for (var _e = 0, _f = opts.cols; _e < _f.length; _e++) {
                        var col = _f[_e];
                        var cel = displayable_1.toElement(opts.cell(r1, r2, col, i, j, k));
                        var td = document.createElement('td');
                        td.appendChild(cel);
                        subRow.appendChild(td);
                        k++;
                    }
                    j++;
                }
                i++;
            }
        });
    }
    exports.doubleRowHeaderTable = doubleRowHeaderTable;
    function basicTable(opts) {
        var rowHeader = opts.rowHeader || (function (c) { return displayable_1.toElement(c); });
        var colHeader = opts.colHeader || (function (c) { return displayable_1.toElement(c); });
        renderTable(opts, function (table) {
            // header
            var th = table.insertRow();
            if (!opts.noRowHeader) {
                var origin = document.createElement("th");
                origin.appendChild(displayable_1.toElement(opts.origin));
                th.appendChild(origin);
            }
            for (var i = 0; i < opts.cols.length; i++) {
                var header_2 = colHeader(opts.cols[i], i);
                th.appendChild(document.createElement("th")).appendChild(displayable_1.toElement(header_2));
            }
            // rows
            for (var i = 0; i < opts.rows.length; i++) {
                var row = table.insertRow();
                if (!opts.noRowHeader) {
                    var rowHeaderCell = document.createElement("th");
                    rowHeaderCell.appendChild(displayable_1.toElement(rowHeader(opts.rows[i], i)));
                    row.appendChild(rowHeaderCell);
                }
                for (var j = 0; j < opts.cols.length; j++) {
                    var cell = row.insertCell();
                    cell.appendChild(displayable_1.toElement(opts.cell(opts.rows[i], opts.cols[j], i, j)));
                }
            }
        });
    }
    exports.basicTable = basicTable;
    function staticTable(opts) {
        renderTable(opts, function (table) {
            // header
            if (opts.header) {
                var th = table.insertRow();
                for (var _i = 0, _a = opts.header; _i < _a.length; _i++) {
                    var h = _a[_i];
                    th.appendChild(document.createElement("th")).appendChild(displayable_1.toElement(h));
                }
            }
            // cells
            for (var _b = 0, _c = opts.rows; _b < _c.length; _b++) {
                var row = _c[_b];
                var tr = table.insertRow();
                for (var _d = 0, row_1 = row; _d < row_1.length; _d++) {
                    var cell = row_1[_d];
                    tr.insertCell().appendChild(displayable_1.toElement(cell));
                }
            }
        });
    }
    exports.staticTable = staticTable;
});
