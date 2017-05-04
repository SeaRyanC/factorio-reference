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
function fillTable(opts) {
    var rowHeader = opts.rowHeader || (function (c) { return toElement(c); });
    var colHeader = opts.colHeader || (function (c) { return toElement(c); });
    var table = opts.table;
    // remove footer if any
    var foot = table.tFoot;
    if (foot) {
        table.deleteTFoot();
    }
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
    if (foot) {
        table.tFoot = foot;
    }
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
    window.addEventListener("load", function () {
        var table = document.getElementById(targetName);
        if (!(table instanceof HTMLTableElement)) {
            console.error("No table named " + targetName + " exists in the document");
            return;
        }
        // remove footer if any
        var foot = table.tFoot;
        if (foot) {
            table.deleteTFoot();
        }
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
        if (foot) {
            table.tFoot = foot;
        }
    });
}
function load() {
    // Steam
    staticTable("steam", [
        [item("offshore-pump"), item("boiler"), item("steam-engine"), item("electric-drill"), text("Power")],
        [integer(1), integer(20), integer(40), integer(18), fixed(40 * 0.780, "MW")]
    ]);
    advancedSteamTable();
    // Nuclear
    nuclearTable();
    minersPerFurnaceTable();
}
function crafting() {
    var table = document.getElementById("crafting");
    fillTable({
        origin: text("Output"),
        table: table,
        rows: Recipes,
        cols: Assemblers,
        cell: function (r, c) {
            return ceil(Belt.Yellow.throughput / (r.quantity / r.time) / c.speed);
        },
        colHeader: function (a) { return item(a.name); },
        rowHeader: function (r) { return item(r.name); }
    });
}
function advancedSteamTable() {
    // Boilers consume 1.8 MW and there are 20 of them per setup
    var wattsConsumedPerSetup = 1800 * 20;
    fillTable({
        origin: text(''),
        table: document.getElementById("steam-advanced"),
        cell: function (fuel, belt) {
            var wattsProvided = fuel.energy * belt.throughput;
            return fixed(wattsProvided / wattsConsumedPerSetup);
        },
        cols: Belts,
        rows: Fuels
    });
}
function minersPerFurnaceTable() {
    //  Regular ores come out at 0.525/s, stone at 0.65/s
    //  Steel / electric furnaces are twice as fast
    //  Iron/copper plate smelts at 1 ore / 3.5s
    //  
    //  Stone brick smelts 2 ore / 3.5s
    //  Steel / electric furnaces are twice as fast
    staticTable("minersPerFurnace", [
        [text("Output"), item("stone-furnace"), items("steel-furnace", "electric-furnace")],
        [items("iron-plate", "copper-plate"),
            ratio(nOf(6, item("electric-drill")), nOf(11, item("stone-furnace"))),
            ratio(nOf(12, item("electric-drill")), nOf(11, item("steel-furnace")))],
        [item("stone-brick"),
            ratio(nOf(7, item("electric-drill")), nOf(8, item("stone-furnace"))),
            ratio(nOf(7, item("electric-drill")), nOf(4, item("steel-furnace")))],
    ]);
    function beltThroughputTable() {
    }
    function nuclearTable() {
        // Notes on Centrifuge:
        //   Reactors burn one fuel cell per 200 seconds
        //     Consumption: 1/200 cell / s
        //   1 U235 produces 10 fuel cells
        //     Consumption: 1 / 2000 U235 / s
        //   Kovarex process produces 1 net U235 per 50 seconds
        //     U235 Production: 1/50 U235 / s / Centrifuge
        //   So one Kovarex Centrifuge can handle up to 40 (!) reactors
        //    ... or one atomic bomb every 25 minutes (lol)
        // https://www.reddit.com/r/factorio/comments/67xgge/nuclear_ratios/
        staticTable("nuclear", [
            [item("nuclear-reactor"), item("offshore-pump"), item("heat-exchanger"), item("steam-turbine"), text("Power (MW)")],
            [1, 1, 4, 7, 40],
            [2, 2, 16, 28, 160],
            [3, 3, 28, 49, 280],
            [4, 5, 48, 83, 580],
            [5, 6, 60, 104, 600],
            [6, 7, 80, 138, 800],
            [7, 8, 92, 159, 920],
            [8, 10, 112, 193, 1120]
            // TODO: Include closed-form for last row
        ]);
    }
    window.addEventListener("load", function () {
        load();
    });
}
