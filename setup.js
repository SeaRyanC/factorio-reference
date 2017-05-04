var Belt = {
    Yellow: { name: "yellow-belt", throughput: 40 / 3 },
    Red: { name: "red-belt", throughput: 40 * 2 / 3 },
    Blue: { name: "blue-belt", throughput: 40 }
};
var Belts = [Belt.Yellow, Belt.Red, Belt.Blue];
// TODO fill in hardness
var Ore = {
    Iron: { name: "iron-ore", hardness: 1 },
    Copper: { name: "copper-ore", hardness: 1 },
    Coal: { name: "coal", hardness: 1 },
    Stone: { name: "stone", hardness: 1 }
};
var Ores = [Ore.Iron, Ore.Copper, Ore.Coal, Ore.Stone];
var Assembler = {
    One: { name: "assembler-1", speed: 0.5 },
    Two: { name: "assembler-2", speed: 0.75 },
    Three: { name: "assembler-3", speed: 1.25 },
};
var Assemblers = [Assembler.One, Assembler.Two, Assembler.Three];
var Recipe = {
    GreenCircuit: { name: "electronic-circuit", time: 0.5, quantity: 1 },
    RedCircuit: { name: "advanced-circuit", time: 8, quantity: 1 }
};
var Recipes = [Recipe.GreenCircuit, Recipe.RedCircuit];
var Fuel = {
    Wood: { name: "raw-wood", energy: 4000 },
    Coal: { name: "coal", energy: 8000 },
    Solid: { name: "solid-fuel", energy: 25000 },
    Rocket: { name: "rocket-fuel", energy: 225000 }
};
var Fuels = [Fuel.Wood, Fuel.Coal, Fuel.Solid, Fuel.Rocket];
var BoilerEfficiency = 0.5;
var beltItemsPerSec = 13.3333;
var assemblerSpeed = [0.5, 0.75, 1.25];
function ceil(n) {
    return integer(Math.ceil(n));
}
function g() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    var node = document.createElement("span");
    for (var i = 0; i < items.length; i++) {
        node.appendChild(items[i]);
    }
    return node;
}
function items() {
    var names = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        names[_i] = arguments[_i];
    }
    return g.apply(void 0, names.slice().map(item));
}
function text(s) {
    var node = document.createElement("span");
    node.innerText = s;
    return node;
}
function tt(s) {
    var node = document.createElement("span");
    node.innerText = s;
    node.classList.add("number");
    return node;
}
function nOf(n, item) {
    var node = document.createElement("span");
    node.appendChild(integer(n));
    node.appendChild(document.createTextNode(" "));
    node.appendChild(item);
    node.title = name;
    return node;
}
function item(name) {
    var node = document.createElement("p");
    node.classList.add(name);
    node.classList.add("item");
    node.title = name;
    return node;
}
function fixed(n, units) {
    var node = document.createElement("span");
    node.innerText = n.toFixed(1);
    if (units)
        node.innerText += " " + units;
    node.classList.add("number");
    return node;
}
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
function ratio(left, right) {
    // 12 <p class="item electric-drill"></p> : 11 <p class="item steel-furnace"></p>
    var node = document.createElement("span");
    node.appendChild(left);
    node.appendChild(text(" : "));
    node.appendChild(right);
    return node;
}
function doubleRowHeaderTable(opts) {
    var makeRowHeader1 = opts.row1Header || (function (c) { return toElement(c); });
    var makeRowHeader2 = opts.row2Header || (function (c) { return toElement(c); });
    var makeColHeader = opts.colHeader || (function (c) { return toElement(c); });
    var getRow2 = opts.getRow2 || (function (r, i) { return opts.rows2[i]; });
}
function basicTable(opts) {
    var rowHeader = opts.rowHeader || (function (c) { return toElement(c); });
    var colHeader = opts.colHeader || (function (c) { return toElement(c); });
    withTable(opts.table, function (table) {
        var restoreFoot = stashFoot(table);
        // header
        var th = table.insertRow();
        var origin = document.createElement("th");
        origin.appendChild(opts.origin);
        th.appendChild(origin);
        for (var i = 0; i < opts.cols.length; i++) {
            var header = colHeader(opts.cols[i], i);
            th.appendChild(document.createElement("th")).appendChild(header);
        }
        // rows
        for (var i = 0; i < opts.rows.length; i++) {
            var row = table.insertRow();
            var rowHeaderCell = document.createElement("th");
            rowHeaderCell.appendChild(rowHeader(opts.rows[i], i));
            row.appendChild(rowHeaderCell);
            for (var j = 0; j < opts.cols.length; j++) {
                var cell = row.insertCell();
                cell.appendChild(opts.cell(opts.rows[i], opts.cols[j], i, j));
            }
        }
        restoreFoot();
    });
}
function toElement(x) {
    if (x instanceof HTMLElement)
        return x;
    if (typeof x === 'string') {
        return text(x);
    }
    if (typeof x === 'number') {
        return integer(x);
    }
    return item(x.name);
}
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
function withTable(id, callback) {
    window.addEventListener("load", function () {
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
