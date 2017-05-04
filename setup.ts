const Belt = {
    Yellow: { name: "yellow-belt", throughput: 40 / 3 },
    Red: { name: "red-belt", throughput: 40 * 2 / 3 },
    Blue: { name: "blue-belt", throughput: 40 }
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
    One: { name: "assembler-1", speed: 0.5 },
    Two: { name: "assembler-2", speed: 0.75 },
    Three: { name: "assembler-3", speed: 1.25 },
};
const Assemblers = [Assembler.One, Assembler.Two, Assembler.Three];

const Recipe = {
    GreenCircuit: { name: "electronic-circuit", time: 0.5, quantity: 1 },
    RedCircuit: { name: "advanced-circuit", time: 8, quantity: 1 }
}
const Recipes = [Recipe.GreenCircuit, Recipe.RedCircuit];

const Fuel = {
    Wood: { name: "raw-wood", energy: 4000 },
    Coal: { name: "coal", energy: 8000 },
    Solid: { name: "solid-fuel", energy: 25000 },
    Rocket: { name: "rocket-fuel", energy: 225000 }
}
const Fuels = [Fuel.Wood, Fuel.Coal, Fuel.Solid, Fuel.Rocket];
const BoilerEfficiency = 0.5;

const beltItemsPerSec = 13.3333;

const assemblerSpeed = [0.5, 0.75, 1.25]

type Displayable = HTMLElement | string | number | { name: string };

function ceil(n: number) {
    return integer(Math.ceil(n));
}

function g(...items: HTMLElement[]): HTMLElement {
    const node = document.createElement("span");
    for (let i = 0; i < items.length; i++) {
        node.appendChild(items[i]);
    }
    return node;
}

function items(...names: string[]): HTMLElement {
    return g(...[...names].map(item));
}

function text(s: string) {
    const node = document.createElement("span");
    node.innerText = s;
    return node;
}

function tt(s: string) {
    const node = document.createElement("span");
    node.innerText = s;
    node.classList.add("number");
    return node;
}

function nOf(n: number, item: HTMLElement) {
    const node = document.createElement("span");
    node.appendChild(integer(n));
    node.appendChild(document.createTextNode(" "));
    node.appendChild(item);
    node.title = name;
    return node;
}

function item(name: string) {
    const node = document.createElement("p");
    node.classList.add(name);
    node.classList.add("item");
    node.title = name;
    return node;
}

function fixed(n: number, units?: string) {
    const node = document.createElement("span");
    node.innerText = n.toFixed(1);
    if (units) node.innerText += " " + units;
    node.classList.add("number");
    return node;
}

function integer(n: number, units?: string) {
    const node = document.createElement("span");
    let text = n.toString();
    if (text.length >= 4) {
        text = text.substr(0, text.length - 3) + "," + text.substr(text.length - 3);
    }
    node.innerText = text;
    if (units) node.innerText += " " + units;
    node.classList.add("number");
    return node;
}

function ratio(left: HTMLElement, right: HTMLElement): HTMLElement {
    // 12 <p class="item electric-drill"></p> : 11 <p class="item steel-furnace"></p>
    const node = document.createElement("span");
    node.appendChild(left);
    node.appendChild(text(" : "));
    node.appendChild(right);
    return node;
}

interface TableOpts<R, C> {
    table: string;
    origin: HTMLElement;
    rows: R[];
    cols: C[];
    rowHeader?: (row: R, i: number) => HTMLElement;
    colHeader?: (col: C, i: number) => HTMLElement;
    cell: (row: R, col: C, rowIndex: number, colIndex: number) => HTMLElement;
}

interface DoubleRowHeaderTableOpts<R1, R2, C> {
    table: string;
    origin1: HTMLElement;
    origin2: HTMLElement;
    rows1: R1[];
    cols: C[];
    rows2?: R2[];
    getRow2?: (row1: R1, i: number) => R2[];
    row1Header?: (row: R1, i: number) => HTMLElement;
    row2Header?: (row: R2, i: number) => HTMLElement;
    colHeader?: (col: C, i: number) => HTMLElement;
    cell: (row1: R1, row2: R2, col: C, rowIndex1: number, rowIndex2: number, colIndex: number) => HTMLElement;
}

function doubleRowHeaderTable<R1, R2, C>(opts: DoubleRowHeaderTableOpts<R1, R2, C>) {
    const makeRowHeader1 = opts.row1Header || (c => toElement(<any>c));
    const makeRowHeader2 = opts.row2Header || (c => toElement(<any>c));
    const makeColHeader = opts.colHeader || (c => toElement(<any>c));
    const getRow2 = opts.getRow2 || ((r, i) => opts.rows2[i]);

    
}

function basicTable<R, C>(opts: TableOpts<R, C>) {
    const rowHeader = opts.rowHeader || (c => toElement(<any>c));
    const colHeader = opts.colHeader || (c => toElement(<any>c));

    withTable(opts.table, table => {
        const restoreFoot = stashFoot(table);

        // header
        const th = table.insertRow();
        const origin = document.createElement("th");
        origin.appendChild(opts.origin);
        th.appendChild(origin);
        for (let i = 0; i < opts.cols.length; i++) {
            const header = colHeader(opts.cols[i], i);
            th.appendChild(document.createElement("th")).appendChild(header);
        }
        // rows
        for (let i = 0; i < opts.rows.length; i++) {
            const row = table.insertRow();
            const rowHeaderCell = document.createElement("th");
            rowHeaderCell.appendChild(rowHeader(opts.rows[i], i));
            row.appendChild(rowHeaderCell);
            for (let j = 0; j < opts.cols.length; j++) {
                const cell = row.insertCell();
                cell.appendChild(opts.cell(opts.rows[i], opts.cols[j], i, j));
            }
        }

        restoreFoot();
    });
}

function toElement(x: Displayable): HTMLElement {
    if (x instanceof HTMLElement) return x;
    if (typeof x === 'string') {
        return text(x);
    }
    if (typeof x === 'number') {
        return integer(x);

    }
    return item(x.name);
}

function staticTable(targetName: string, setup: (HTMLElement | string | number)[][]) {
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

function withTable(id: string, callback: (t: HTMLTableElement) => void) {
    window.addEventListener("load", () => {
        const table = getTableById(id);
        if (table) {
            callback(table);
        }
    });
}

function stashFoot(table: HTMLTableElement) {
    var foot = table.tFoot;
    if (foot) {
        table.deleteTFoot();
        return () => {
            table.tFoot = foot;
        }
    } else {
        return () => {};
    }
}

function getTableById(id: string): HTMLTableElement | undefined {
    const table = document.getElementById(id) as HTMLTableElement;
    if (!(table instanceof HTMLTableElement)) {
        console.error(`No table named ${id} exists in the document`);
        const tables = document.getElementsByTagName("table");
        const names:string[] = [];
        for(let i = 0; i < tables.length; i++) {
            if (tables[i].id) {
                names.push(tables[i].id);
            }
        }
        console.error(`Tables: ${names.join(", ")} `);
        return undefined;
    }
    return table;
}