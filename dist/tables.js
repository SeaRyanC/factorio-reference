"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixed = exports.basic = exports.doubleRowHeader = exports.itemCount = exports.renderAsMarkdown = void 0;
function renderAsMarkdown(x) {
    if (typeof x === 'string') {
        return x;
    }
    if (typeof x === 'number') {
        return numberToString(x);
    }
    if (x === undefined) {
        return "~~undefined~~";
    }
    return x.toMarkdown();
}
exports.renderAsMarkdown = renderAsMarkdown;
function numberToString(x) {
    return (Math.round(x * 1000) / 1000).toString();
}
function itemCount(itemName, count) {
    return "{" + itemName + " x " + count + "}";
}
exports.itemCount = itemCount;
function tag(name) {
    var children = [];
    var attrs = [];
    return {
        toMarkdown: toMarkdown,
        addChild: addChild,
        attr: attr
    };
    function attr(name, value) {
        attrs.push([name, value]);
    }
    function addChild(ch) {
        children.push(ch);
        return ch;
    }
    function toMarkdown() {
        var attrStr = attrs.map(function (k) { return k[0] + "=\"" + k[1] + "\""; }).join(" ");
        return "<" + name + (attrStr.length ? " " + attrStr : "") + ">" + children.map(function (ch) { return renderAsMarkdown(ch); }).join('') + "</" + name + ">";
    }
}
function doubleRowHeader(opts) {
    var makeRowHeader1 = opts.row1Header || (function (c) { return renderAsMarkdown(c); });
    var makeRowHeader2 = opts.row2Header || (function (c) { return renderAsMarkdown(c); });
    var makeColHeader = opts.colHeader || (function (c) { return renderAsMarkdown(c); });
    var getRow2 = opts.getRow2 || (function () { return opts.rows2; });
    var table = tag("table");
    // Headers
    var topRow = table.addChild(tag("tr"));
    var o1 = tag("th");
    o1.addChild(opts.origin1);
    topRow.addChild(o1);
    var o2 = tag("th");
    o2.addChild(opts.origin2);
    topRow.addChild(o2);
    var i = 0;
    for (var _i = 0, _a = opts.cols; _i < _a.length; _i++) {
        var col = _a[_i];
        var cell = tag("th");
        cell.addChild(makeColHeader(col, i));
        i++;
    }
    // Body
    i = 0;
    for (var _b = 0, _c = opts.rows1; _b < _c.length; _b++) {
        var r1 = _c[_b];
        var r2s = getRow2(r1, i);
        var row = table.addChild(tag("tr"));
        var header = row.addChild(tag('th'));
        header.attr("rowSpan", r2s.length);
        header.addChild(makeRowHeader1(r1, i));
        var j = 0;
        for (var _d = 0, r2s_1 = r2s; _d < r2s_1.length; _d++) {
            var r2 = r2s_1[_d];
            var subRow = j == 0 ? row : table.addChild(tag("tr"));
            var subHed = tag("th");
            subHed.addChild(makeRowHeader2(r2, j, r1, i));
            subRow.addChild(subHed);
            var k = 0;
            for (var _e = 0, _f = opts.cols; _e < _f.length; _e++) {
                var col = _f[_e];
                subRow.addChild(tag("td")).addChild(opts.cell(r1, r2, col, i, j, k));
                k++;
            }
            j++;
        }
        i++;
    }
    return table.toMarkdown();
}
exports.doubleRowHeader = doubleRowHeader;
function basic(opts) {
    var rowHeader = opts.rowHeader || (function (c) { return renderAsMarkdown(c); });
    var colHeader = opts.colHeader || (function (c) { return renderAsMarkdown(c); });
    var table = tag("table");
    var th = table.addChild(tag("tr"));
    if (!opts.noRowHeader) {
        th.addChild(tag("th")).addChild(opts.origin);
    }
    for (var i = 0; i < opts.cols.length; i++) {
        var header = colHeader(opts.cols[i], i);
        th.addChild(tag("th")).addChild(header);
    }
    // rows
    for (var i = 0; i < opts.rows.length; i++) {
        var row = table.addChild(tag("tr"));
        if (!opts.noRowHeader) {
            var rowHeaderCell = row.addChild(tag("th"));
            rowHeaderCell.addChild(rowHeader(opts.rows[i], i));
        }
        for (var j = 0; j < opts.cols.length; j++) {
            var cell = row.addChild(tag("td"));
            cell.addChild(opts.cell(opts.rows[i], opts.cols[j], i, j));
        }
    }
    return table.toMarkdown();
}
exports.basic = basic;
function fixed(opts) {
    var table = tag("table");
    // header
    if (opts.header) {
        var th = table.addChild(tag("tr"));
        for (var _i = 0, _a = opts.header; _i < _a.length; _i++) {
            var h = _a[_i];
            th.addChild(tag("th")).addChild(h);
        }
    }
    // cells
    for (var _b = 0, _c = opts.rows; _b < _c.length; _b++) {
        var row = _c[_b];
        var tr = table.addChild(tag("tr"));
        for (var _d = 0, row_1 = row; _d < row_1.length; _d++) {
            var cell = row_1[_d];
            tr.addChild(tag("td")).addChild(cell);
        }
    }
    return table.toMarkdown();
}
exports.fixed = fixed;
