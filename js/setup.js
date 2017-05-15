const Belt = {
    Yellow: { name: "transport-belt", throughput: 40 / 3 },
    Red: { name: "fast-transport-belt", throughput: 40 * 2 / 3 },
    Blue: { name: "express-transport-belt", throughput: 40 }
};
const Belts = [Belt.Yellow, Belt.Red, Belt.Blue];
// TODO fill in hardness
const Ore = {
    Iron: { name: "iron-ore", hardness: 1 },
    Copper: { name: "copper-ore", hardness: 1 },
    Coal: { name: "coal", hardness: 1 },
    Stone: { name: "stone", hardness: 1 }
};
const Ores = [Ore.Iron, Ore.Copper, Ore.Coal, Ore.Stone];
const Assembler = {
    One: { name: "assembling-machine-1", speed: 0.5 },
    Two: { name: "assembling-machine-2", speed: 0.75 },
    Three: { name: "assembling-machine-3", speed: 1.25 },
};
const Assemblers = [Assembler.One, Assembler.Two, Assembler.Three];
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
const Fuel = {
    Wood: { name: "raw-wood", energy: 4000 },
    Coal: { name: "coal", energy: 8000 },
    Solid: { name: "solid-fuel", energy: 25000 },
    Rocket: { name: "rocket-fuel", energy: 225000 }
};
const Fuels = [Fuel.Wood, Fuel.Coal, Fuel.Solid, Fuel.Rocket];
const BoilerEfficiency = 0.5;
const Box = {
    Wood: { name: "wooden-chest", size: 16 },
    Wagon: { name: "cargo-wagon", size: 40 },
    Steel: { name: "steel-chest", size: 48 },
    Iron: { name: "iron-chest", size: 32 },
};
const Boxes = [Box.Wood, Box.Iron, Box.Steel, Box.Wagon];
const beltItemsPerSec = 13.3333;
const assemblerSpeed = [0.5, 0.75, 1.25];
function ceil(n) {
    return integer(Math.ceil(n));
}
function g(...items) {
    const node = document.createElement("span");
    for (let i = 0; i < items.length; i++) {
        node.appendChild(toElement(items[i]));
    }
    return node;
}
function itemGroup(...names) {
    return g(...[...names].map(item));
}
function p(s) {
    const node = document.createElement("p");
    node.appendChild(toElement(s));
    return node;
}
function text(s) {
    const node = document.createElement("span");
    node.innerText = s;
    return node;
}
function tt(s) {
    const node = document.createElement("span");
    node.innerText = s;
    node.classList.add("number");
    return node;
}
function nOf(n, item) {
    const node = document.createElement("span");
    node.appendChild(integer(n));
    node.appendChild(document.createTextNode(" "));
    node.appendChild(item);
    node.title = name;
    return node;
}
function item(name) {
    const node = document.createElement("p");
    node.classList.add(name);
    node.classList.add("item");
    node.title = name;
    return node;
}
function large(n) {
    const node = document.createElement("span");
    if (n < 1000) {
        node.innerText = n.toFixed(0);
    }
    else {
        var k = n / 1000;
        if (Math.floor(k) === k) {
            node.innerText = k + 'k';
        }
        else {
            node.innerText = k.toFixed(1) + 'k';
        }
    }
    node.classList.add("number");
    return node;
}
function time(seconds) {
    seconds = Math.round(seconds);
    const days = Math.floor(seconds / (60 * 60 * 24));
    seconds -= days * 60 * 60 * 24;
    const hours = Math.floor(seconds / (60 * 60));
    seconds -= hours * 60 * 60;
    const minutes = Math.floor(seconds / 60);
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
function fixed(n, units) {
    const node = document.createElement("span");
    node.innerText = n.toFixed(1);
    if (units)
        node.innerText += " " + units;
    node.classList.add("number");
    return node;
}
function spacePadded(n, width) {
    // &#8199;
    var result = n.toString();
    while (result.length < width) {
        result = String.fromCharCode(8199) + result;
    }
    const node = document.createElement("span");
    node.innerText = result;
    node.classList.add("number");
    return node;
}
function integer(n, units) {
    const node = document.createElement("span");
    let text = n.toString();
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
    const node = document.createElement("span");
    node.appendChild(left);
    node.appendChild(text(" : "));
    node.appendChild(right);
    return node;
}
function doubleRowHeaderTable(opts) {
    const makeRowHeader1 = opts.row1Header || (c => toElement(c));
    const makeRowHeader2 = opts.row2Header || (c => toElement(c));
    const makeColHeader = opts.colHeader || (c => toElement(c));
    const getRow2 = opts.getRow2 || (() => opts.rows2);
    withTable(opts.table, table => {
        // Headers
        const th = table.insertRow();
        th.appendChild(document.createElement('th')).appendChild(toElement(opts.origin1));
        th.appendChild(document.createElement('th')).appendChild(toElement(opts.origin2));
        let i = 0;
        for (const col of opts.cols) {
            th.appendChild(document.createElement('th')).appendChild(toElement(makeColHeader(col, i)));
            i++;
        }
        // Body
        i = 0;
        for (const r1 of opts.rows1) {
            const r2s = getRow2(r1, i);
            const row = table.insertRow();
            const header = row.appendChild(document.createElement('th'));
            header.rowSpan = r2s.length + 1;
            header.appendChild(toElement(makeRowHeader1(r1, i)));
            let j = 0;
            for (const r2 of opts.rows2) {
                const subRow = table.insertRow();
                const subHed = document.createElement('th');
                subHed.appendChild(toElement(makeRowHeader2(r2, j)));
                subRow.appendChild(subHed);
                let k = 0;
                for (const col of opts.cols) {
                    const cel = toElement(opts.cell(r1, r2, col, i, j, k));
                    const td = document.createElement('td');
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
function basicTable(opts) {
    const rowHeader = opts.rowHeader || (c => toElement(c));
    const colHeader = opts.colHeader || (c => toElement(c));
    withTable(opts.table, table => {
        const restoreFoot = stashFoot(table);
        // header
        const th = table.insertRow();
        const origin = document.createElement("th");
        origin.appendChild(toElement(opts.origin));
        th.appendChild(origin);
        for (let i = 0; i < opts.cols.length; i++) {
            const header = colHeader(opts.cols[i], i);
            th.appendChild(document.createElement("th")).appendChild(toElement(header));
        }
        // rows
        for (let i = 0; i < opts.rows.length; i++) {
            const row = table.insertRow();
            const rowHeaderCell = document.createElement("th");
            rowHeaderCell.appendChild(toElement(rowHeader(opts.rows[i], i)));
            row.appendChild(rowHeaderCell);
            for (let j = 0; j < opts.cols.length; j++) {
                const cell = row.insertCell();
                cell.appendChild(toElement(opts.cell(opts.rows[i], opts.cols[j], i, j)));
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
    withTable(targetName, table => {
        const restoreFoot = stashFoot(table);
        const headers = setup.shift();
        // header
        const th = table.insertRow();
        for (let i = 0; i < headers.length; i++) {
            th.appendChild(document.createElement("th")).appendChild(toElement(headers[i]));
        }
        // cells
        for (const row of setup) {
            const tr = table.insertRow();
            for (const cell of row) {
                tr.insertCell().appendChild(toElement(cell));
            }
        }
        restoreFoot();
    });
}
const tableCallbacks = [];
window.addEventListener("DOMContentLoaded", () => {
    tableCallbacks.forEach(e => e());
});
function withTable(id, callback) {
    tableCallbacks.push(() => {
        const table = getTableById(id);
        if (table) {
            callback(table);
        }
    });
}
function stashFoot(table) {
    var foot = table.tFoot;
    if (foot) {
        table.deleteTFoot();
        return () => {
            table.tFoot = foot;
        };
    }
    else {
        return () => { };
    }
}
function getTableById(id) {
    const table = document.getElementById(id);
    if (!(table instanceof HTMLTableElement)) {
        console.error(`No table named ${id} exists in the document`);
        const tables = document.getElementsByTagName("table");
        const names = [];
        for (let i = 0; i < tables.length; i++) {
            if (tables[i].id) {
                names.push(tables[i].id);
            }
        }
        console.error(`Tables: ${names.join(", ")} `);
        return undefined;
    }
    return table;
}
