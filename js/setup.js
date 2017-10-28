"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Belt = {
    Yellow: { name: "transport-belt", throughput: 40 / 3 },
    Red: { name: "fast-transport-belt", throughput: 40 * 2 / 3 },
    Blue: { name: "express-transport-belt", throughput: 40 }
};
exports.Belts = [exports.Belt.Yellow, exports.Belt.Red, exports.Belt.Blue];
exports.BeltLane = {
    YellowLane: { name: "transport-belt-lane", throughput: 40 / 3 / 2 },
    Yellow: { name: "transport-belt", throughput: 40 / 3 },
    RedLane: { name: "fast-transport-belt-lane", throughput: 40 * 2 / 3 / 2 },
    Red: { name: "fast-transport-belt", throughput: 40 * 2 / 3 },
    BlueLane: { name: "express-transport-belt-lane", throughput: 40 / 2 },
    Blue: { name: "express-transport-belt", throughput: 40 }
};
exports.BeltLanes = [exports.BeltLane.YellowLane, exports.BeltLane.Yellow, exports.BeltLane.RedLane, exports.BeltLane.Red, exports.BeltLane.BlueLane, exports.BeltLane.Blue];
// TODO fill in hardness
exports.Ore = {
    Iron: { name: "iron-ore", hardness: 1 },
    Copper: { name: "copper-ore", hardness: 1 },
    Coal: { name: "coal", hardness: 1 },
    Stone: { name: "stone", hardness: 1 }
};
exports.Ores = [exports.Ore.Iron, exports.Ore.Copper, exports.Ore.Coal, exports.Ore.Stone];
exports.Assembler = {
    One: { name: "assembling-machine-1", speed: 0.5 },
    Two: { name: "assembling-machine-2", speed: 0.75 },
    Three: { name: "assembling-machine-3", speed: 1.25 },
};
exports.Assemblers = [exports.Assembler.One, exports.Assembler.Two, exports.Assembler.Three];
/*
type Recipe = {
    name: string;
    time: number;
    quantity: number;
}
const Recipe: { [name: string]: Recipe } = {
    IronGearWheel: { name: "iron-gear-wheel", time: 1, quantity: 2 },
    GreenCircuit: { name: "electronic-circuit", time: 0.5, quantity: 1 },
    RedCircuit: { name: "advanced-circuit", time: 8, quantity: 1 },
    PurpleCircuit: { name: "processing-unit", time: 10, quantity: 1 },
    SolarPanel: { name: "solar-panel", time: 10, quantity: 1 },
    RedScience: { name: "science-pack-1", time: 5, quantity: 1 },
    GreenScience: { name: "science-pack-2", time: 6, quantity: 1 },
    BlueScience: { name: "science-pack-3", time: 12, quantity: 2 },
    MilitaryScience: { name: "military-science-pack", time: 10, quantity: 2 },
    ProductionScience: { name: "production-science-pack", time: 14, quantity: 2 },
    HighTechScience: { name: "high-tech-science-pack", time: 14, quantity: 2 }
};
const Recipes = Object.keys(Recipe).map(k => Recipe[k]);
*/
exports.Fuel = {
    Wood: { name: "raw-wood", energy: 4000 },
    Coal: { name: "coal", energy: 8000 },
    Solid: { name: "solid-fuel", energy: 25000 },
    Rocket: { name: "rocket-fuel", energy: 225000 }
};
exports.Fuels = [exports.Fuel.Wood, exports.Fuel.Coal, exports.Fuel.Solid, exports.Fuel.Rocket];
var BoilerEfficiency = 0.5;
exports.Box = {
    Wood: { name: "wooden-chest", size: 16 },
    Wagon: { name: "cargo-wagon", size: 40 },
    Steel: { name: "steel-chest", size: 48 },
    Iron: { name: "iron-chest", size: 32 },
};
exports.Boxes = [exports.Box.Wood, exports.Box.Iron, exports.Box.Steel, exports.Box.Wagon];
exports.beltItemsPerSec = 13.3333;
var assemblerSpeed = [0.5, 0.75, 1.25];
function ceil(n, indicate_rounding) {
    if (indicate_rounding === void 0) { indicate_rounding = true; }
    var el = integer(Math.ceil(n));
    if (indicate_rounding && Math.ceil(n) - n > 0.0001) {
        el.title = "Rounded up from " + n.toFixed(2);
        el.classList.add('rounded');
    }
    return el;
}
exports.ceil = ceil;
function floor(n) {
    var el = integer(Math.floor(n));
    if (n - Math.floor(n) > 0.0001) {
        el.title = "Rounded down from " + n.toFixed(2);
        el.classList.add('rounded');
    }
    return el;
}
exports.floor = floor;
function g() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    var node = document.createElement("span");
    for (var i = 0; i < items.length; i++) {
        node.appendChild(toElement(items[i]));
    }
    return node;
}
exports.g = g;
function itemGroup() {
    var names = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        names[_i] = arguments[_i];
    }
    return g.apply(void 0, names.slice().map(item));
}
exports.itemGroup = itemGroup;
function p(s) {
    var node = document.createElement("p");
    node.appendChild(toElement(s));
    return node;
}
exports.p = p;
function text(s) {
    var node = document.createElement("span");
    node.innerText = s;
    return node;
}
exports.text = text;
function tt(s) {
    var node = document.createElement("span");
    node.innerText = s;
    node.classList.add("number");
    return node;
}
exports.tt = tt;
function nOf(n, item) {
    var node = document.createElement("span");
    node.appendChild(integer(n));
    node.appendChild(document.createTextNode(" "));
    node.appendChild(item);
    node.title = name;
    return node;
}
exports.nOf = nOf;
function item(name) {
    var node = document.createElement("p");
    node.classList.add(name);
    node.classList.add("item");
    node.title = name;
    return node;
}
exports.item = item;
function itemCount(itemName, count) {
    var group = document.createElement("div");
    group.classList.add("counted-item");
    var item = document.createElement("p");
    item.classList.add(itemName);
    item.classList.add("item");
    item.title = itemName;
    group.appendChild(item);
    var cnt = document.createElement("span");
    cnt.classList.add("item-count");
    cnt.innerText = count.toString();
    group.appendChild(cnt);
    return group;
}
exports.itemCount = itemCount;
function large(n) {
    var node = document.createElement("span");
    if (n < 1000) {
        node.innerText = n.toFixed(0);
    }
    else if (n < 1000000) {
        var k = n / 1000;
        if (Math.floor(k) === k) {
            node.innerText = k + 'k';
        }
        else {
            node.innerText = k + 'k';
        }
    }
    else if (n < 1000000000) {
        var k = n / 1000000;
        if (Math.floor(k) === k) {
            node.innerText = k + 'M';
        }
        else {
            node.innerText = k + 'M';
        }
    }
    else {
        var k = n / 1000000000;
        if (Math.floor(k) === k) {
            node.innerText = k + 'G';
        }
        else {
            node.innerText = k + 'G';
        }
    }
    node.classList.add("number");
    return node;
}
exports.large = large;
function short_time(seconds) {
    seconds = Math.round(seconds);
    var minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;
    return g(spacePadded(minutes, 2), ':', zeroPadded(seconds, 2));
}
exports.short_time = short_time;
function medium_time(seconds) {
    seconds = Math.round(seconds);
    var hours = Math.floor(seconds / (60 * 60));
    seconds -= hours * 60 * 60;
    var minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;
    return g(spacePadded(hours, 2), ':', zeroPadded(minutes, 2));
}
exports.medium_time = medium_time;
function long_time(seconds) {
    seconds = Math.round(seconds);
    var days = Math.floor(seconds / (60 * 60 * 24));
    seconds -= days * 60 * 60 * 24;
    var hours = Math.floor(seconds / (60 * 60));
    seconds -= hours * 60 * 60;
    return g(integer(days), "d ", spacePadded(hours, 2), "h");
}
exports.long_time = long_time;
function time(seconds) {
    seconds = Math.round(seconds);
    var days = Math.floor(seconds / (60 * 60 * 24));
    seconds -= days * 60 * 60 * 24;
    var hours = Math.floor(seconds / (60 * 60));
    seconds -= hours * 60 * 60;
    var minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;
    if (days > 0) {
        return g(integer(days), "d ", spacePadded(hours, 2), "h");
    }
    if (hours > 0) {
        return g(integer(hours), "h ", spacePadded(minutes, 2), "m");
    }
    if (minutes > 10) {
        return g(integer(minutes), "m");
    }
    if (minutes > 0) {
        return g(integer(minutes), "m ", spacePadded(seconds, 2), "s");
    }
    return g(integer(seconds), "s");
}
exports.time = time;
function fixed(n, units) {
    var node = document.createElement("span");
    node.innerText = n.toFixed(1);
    if (units)
        node.innerText += " " + units;
    node.classList.add("number");
    return node;
}
exports.fixed = fixed;
function spacePadded(n, width) {
    // &#8199;
    var result = n.toString();
    while (result.length < width) {
        result = String.fromCharCode(8199) + result;
    }
    var node = document.createElement("span");
    node.innerText = result;
    node.classList.add("number");
    return node;
}
exports.spacePadded = spacePadded;
function zeroPadded(n, width) {
    // &#8199;
    var result = n.toString();
    while (result.length < width) {
        result = '0' + result;
    }
    var node = document.createElement("span");
    node.innerText = result;
    node.classList.add("number");
    return node;
}
exports.zeroPadded = zeroPadded;
function integer(n, units) {
    var node = document.createElement("span");
    var text = n.toString();
    if (text.length >= 4) {
        text = text.substr(0, text.length - 3) + "," + text.substr(text.length - 3);
    }
    node.innerText = text;
    if (units)
        node.innerText += " " + units;
    node.classList.add("number");
    return node;
}
exports.integer = integer;
function ratio(left, right) {
    // 12 <p class="item electric-drill"></p> : 11 <p class="item steel-furnace"></p>
    var node = document.createElement("div");
    node.classList.add('ratio');
    node.appendChild(left);
    var colon = text(" : ");
    colon.classList.add('ratio-colon');
    node.appendChild(colon);
    node.appendChild(right);
    return node;
}
exports.ratio = ratio;
function doubleRowHeaderTable(opts) {
    var makeRowHeader1 = opts.row1Header || (function (c) { return toElement(c); });
    var makeRowHeader2 = opts.row2Header || (function (c) { return toElement(c); });
    var makeColHeader = opts.colHeader || (function (c) { return toElement(c); });
    var getRow2 = opts.getRow2 || (function () { return opts.rows2; });
    withTable(opts.table, function (table) {
        // Headers
        var th = table.insertRow();
        th.appendChild(document.createElement('th')).appendChild(toElement(opts.origin1));
        th.appendChild(document.createElement('th')).appendChild(toElement(opts.origin2));
        var i = 0;
        for (var _i = 0, _a = opts.cols; _i < _a.length; _i++) {
            var col = _a[_i];
            th.appendChild(document.createElement('th')).appendChild(toElement(makeColHeader(col, i)));
            i++;
        }
        // Body
        i = 0;
        for (var _b = 0, _c = opts.rows1; _b < _c.length; _b++) {
            var r1 = _c[_b];
            var r2s = getRow2(r1, i);
            var row = table.insertRow();
            var header = row.appendChild(document.createElement('th'));
            header.rowSpan = r2s.length + 1;
            header.appendChild(toElement(makeRowHeader1(r1, i)));
            var j = 0;
            for (var _d = 0, _e = opts.rows2; _d < _e.length; _d++) {
                var r2 = _e[_d];
                var subRow = table.insertRow();
                var subHed = document.createElement('th');
                subHed.appendChild(toElement(makeRowHeader2(r2, j)));
                subRow.appendChild(subHed);
                var k = 0;
                for (var _f = 0, _g = opts.cols; _f < _g.length; _f++) {
                    var col = _g[_f];
                    var cel = toElement(opts.cell(r1, r2, col, i, j, k));
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
    var rowHeader = opts.rowHeader || (function (c) { return toElement(c); });
    var colHeader = opts.colHeader || (function (c) { return toElement(c); });
    withTable(opts.table, function (table) {
        var restoreFoot = stashFoot(table);
        // header
        var th = table.insertRow();
        if (!opts.noRowHeader) {
            var origin = document.createElement("th");
            origin.appendChild(toElement(opts.origin));
            th.appendChild(origin);
        }
        for (var i = 0; i < opts.cols.length; i++) {
            var header = colHeader(opts.cols[i], i);
            th.appendChild(document.createElement("th")).appendChild(toElement(header));
        }
        // rows
        for (var i = 0; i < opts.rows.length; i++) {
            var row = table.insertRow();
            if (!opts.noRowHeader) {
                var rowHeaderCell = document.createElement("th");
                rowHeaderCell.appendChild(toElement(rowHeader(opts.rows[i], i)));
                row.appendChild(rowHeaderCell);
            }
            for (var j = 0; j < opts.cols.length; j++) {
                var cell = row.insertCell();
                cell.appendChild(toElement(opts.cell(opts.rows[i], opts.cols[j], i, j)));
            }
        }
        restoreFoot();
    });
}
exports.basicTable = basicTable;
function toElement(x) {
    if (x instanceof HTMLElement)
        return x;
    if (typeof x === 'string') {
        return text(x);
    }
    if (typeof x === 'number') {
        return integer(x);
    }
    if (x === undefined) {
        return text("[undef]");
    }
    return item(x.name);
}
exports.toElement = toElement;
function staticTable(targetName, setup) {
    withTable(targetName, function (table) {
        var restoreFoot = stashFoot(table);
        var headers = setup.shift();
        // header
        var th = table.insertRow();
        for (var i = 0; i < headers.length; i++) {
            th.appendChild(document.createElement("th")).appendChild(toElement(headers[i]));
        }
        // cells
        for (var _i = 0, setup_1 = setup; _i < setup_1.length; _i++) {
            var row = setup_1[_i];
            var tr = table.insertRow();
            for (var _a = 0, row_1 = row; _a < row_1.length; _a++) {
                var cell = row_1[_a];
                tr.insertCell().appendChild(toElement(cell));
            }
        }
        restoreFoot();
    });
}
exports.staticTable = staticTable;
var tableCallbacks = [];
window.addEventListener("DOMContentLoaded", function () {
    tableCallbacks.forEach(function (e) { return e(); });
});
function withTable(id, callback) {
    tableCallbacks.push(function () {
        var table = getTableById(id);
        if (table) {
            callback(table);
        }
    });
}
function stashFoot(table) {
    var foot = table.tFoot;
    if (foot) {
        table.deleteTFoot();
        return function () {
            table.tFoot = foot;
        };
    }
    else {
        return function () { };
    }
}
function getTableById(id) {
    var table = document.getElementById(id);
    if (!(table instanceof HTMLTableElement)) {
        console.error("No table named " + id + " exists in the document");
        var tables = document.getElementsByTagName("table");
        var names = [];
        for (var i = 0; i < tables.length; i++) {
            if (tables[i].id) {
                names.push(tables[i].id);
            }
        }
        console.error("Tables: " + names.join(", ") + " ");
        return undefined;
    }
    return table;
}
