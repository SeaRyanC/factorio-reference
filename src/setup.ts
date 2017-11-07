export const Belt = {
    Yellow: { name: "transport-belt", throughput: 40 / 3 },
    Red: { name: "fast-transport-belt", throughput: 40 * 2 / 3 },
    Blue: { name: "express-transport-belt", throughput: 40 }
};
export const Belts = [Belt.Yellow, Belt.Red, Belt.Blue];

export const BeltLane = {
    YellowLane: { name: "transport-belt-lane", throughput: 40 / 3 / 2 },
    Yellow: { name: "transport-belt", throughput: 40 / 3 },
    RedLane: { name: "fast-transport-belt-lane", throughput: 40 * 2 / 3 / 2 },
    Red: { name: "fast-transport-belt", throughput: 40 * 2 / 3 },
    BlueLane: { name: "express-transport-belt-lane", throughput: 40 / 2 },
    Blue: { name: "express-transport-belt", throughput: 40 }
};
export const BeltLanes = [BeltLane.YellowLane, BeltLane.Yellow, BeltLane.RedLane, BeltLane.Red, BeltLane.BlueLane, BeltLane.Blue];

// TODO fill in hardness
export const Ore = {
    Iron: { name: "iron-ore", hardness: 1 },
    Copper: { name: "copper-ore", hardness: 1 },
    Coal: { name: "coal", hardness: 1 },
    Stone: { name: "stone", hardness: 1 }
};
export const Ores = [Ore.Iron, Ore.Copper, Ore.Coal, Ore.Stone];

export const Assembler = {
    One: { name: "assembling-machine-1", speed: 0.5 },
    Two: { name: "assembling-machine-2", speed: 0.75 },
    Three: { name: "assembling-machine-3", speed: 1.25 },
};
export const Assemblers = [Assembler.One, Assembler.Two, Assembler.Three];

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

export const Fuel = {
    Wood: { name: "raw-wood", energy: 4000 },
    Coal: { name: "coal", energy: 8000 },
    Solid: { name: "solid-fuel", energy: 25000 },
    Rocket: { name: "rocket-fuel", energy: 225000 }
}
export const Fuels = [Fuel.Wood, Fuel.Coal, Fuel.Solid, Fuel.Rocket];
const BoilerEfficiency = 0.5;

export const Box = {
    Wood: { name: "wooden-chest", size: 16 },
    Wagon: { name: "cargo-wagon", size: 40 },
    Steel: { name: "steel-chest", size: 48 },
    Iron: { name: "iron-chest", size: 32 },
};
export const Boxes = [Box.Wood, Box.Iron, Box.Steel, Box.Wagon];

export const beltItemsPerSec = 13.3333;

const assemblerSpeed = [0.5, 0.75, 1.25];

export type Displayable = HTMLElement | string | number | { name: string };

export function ceil(n: number, indicate_rounding = true) {
    const el = integer(Math.ceil(n));
    if (indicate_rounding && Math.ceil(n) - n > 0.0001) {
        el.title = `Rounded up from ${n.toFixed(2)}`;
        el.classList.add('rounded');
    }
    return el;
}

export function floor(n: number) {
    const el = integer(Math.floor(n));
    if (n - Math.floor(n) > 0.0001) {
        el.title = `Rounded down from ${n.toFixed(2)}`;
        el.classList.add('rounded');
    }
    return el;
}

export function g(...items: Displayable[]): HTMLElement {
    const node = document.createElement("span");
    for (let i = 0; i < items.length; i++) {
        node.appendChild(toElement(items[i]));
    }
    return node;
}

export function itemGroup(...names: string[]): HTMLElement {
    return g(...[...names].map(item));
}

export function p(s: Displayable) {
    const node = document.createElement("p");
    node.appendChild(toElement(s));
    return node;    
}

export function text(s: string) {
    const node = document.createElement("span");
    node.innerText = s;
    return node;
}

export function tt(s: string) {
    const node = document.createElement("span");
    node.innerText = s;
    node.classList.add("number");
    return node;
}

export function nOf(n: number, item: HTMLElement) {
    const node = document.createElement("span");
    node.appendChild(integer(n));
    node.appendChild(document.createTextNode(" "));
    node.appendChild(item);
    node.title = name;
    return node;
}

export function item(name: string) {
    const node = document.createElement("p");
    node.classList.add(itemNameToRealItemName(name));
    node.classList.add("item");
    node.title = name;
    return node;
}

function itemNameToRealItemName(name: string) {
    switch(name) {
        case "sulfuric-acid-barrel":
            return "sulfuric-acid";
        default:
            return name;
    }
}

export function itemCount(itemName: string, count: number) {
    const group = document.createElement("div");
    group.classList.add("counted-item");

    const item = document.createElement("p");
    item.classList.add(itemNameToRealItemName(itemName));
    item.classList.add("item");
    item.title = itemName;
    group.appendChild(item);

    const cnt = document.createElement("span");
    cnt.classList.add("item-count");
    cnt.innerText = count.toString();

    group.appendChild(cnt);

    return group;
}

export function percent(n: number) {
    return g((n * 100).toFixed(1), "%");
}

export function large(n: number) {
    const node = document.createElement("span");
    if (n < 1000) {
        node.innerText = n.toFixed(0);
    } else if (n < 1000000) {
        var k = n / 1000;
        if (Math.floor(k) === k) {
            node.innerText = k + 'k';
        } else {
            node.innerText = k + 'k';
        }
    } else if (n < 1000000000) {
        var k = n / 1000000;
        if (Math.floor(k) === k) {
            node.innerText = k + 'M';
        } else {
            node.innerText = k + 'M';
        }
    } else {
        var k = n / 1000000000;
        if (Math.floor(k) === k) {
            node.innerText = k + 'G';
        } else {
            node.innerText = k + 'G';
        }
    }
    node.classList.add("number");
    return node;
}


export function short_time(seconds: number): HTMLElement {
    seconds = Math.round(seconds);

    const minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;

    return g(spacePadded(minutes, 2), ':', zeroPadded(seconds, 2));
}

export function medium_time(seconds: number): HTMLElement {
    seconds = Math.round(seconds);

    const hours = Math.floor(seconds / (60 * 60));
    seconds -= hours * 60 * 60;

    const minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;

    return g(spacePadded(hours, 2), ':', zeroPadded(minutes, 2));
}

export function long_time(seconds: number): HTMLElement {
    seconds = Math.round(seconds);

    const days = Math.floor(seconds / (60 * 60 * 24));
    seconds -= days * 60 * 60 * 24;

    const hours = Math.floor(seconds / (60 * 60));
    seconds -= hours * 60 * 60;

    return g(integer(days), "d ", spacePadded(hours, 2), "h");
}

export function time(seconds: number): HTMLElement {
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

export function fixed(n: number, units?: string) {
    const node = document.createElement("span");
    node.innerText = n.toFixed(1);
    if (units) node.innerText += " " + units;
    node.classList.add("number");
    return node;
}

export function spacePadded(n: number, width: number) {
    // &#8199;
    var result = n.toString();
    while(result.length < width) {
        result = String.fromCharCode(8199) + result;
    }
    const node = document.createElement("span");
    node.innerText = result;
    node.classList.add("number");
    return node;
}

export function zeroPadded(n: number, width: number) {
    // &#8199;
    var result = n.toString();
    while(result.length < width) {
        result = '0' + result;
    }
    const node = document.createElement("span");
    node.innerText = result;
    node.classList.add("number");
    return node;
}

export function integer(n: number, units?: string) {
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

export function multiplied(left: Displayable, factor: number): HTMLElement {
    return g(left, " x ", factor);
}

export function ratio(left: HTMLElement, right: HTMLElement): HTMLElement {
    // 12 <p class="item electric-drill"></p> : 11 <p class="item steel-furnace"></p>
    const node = document.createElement("div");
    node.classList.add('ratio');
    node.appendChild(left);
    const colon = text(" : ");
    colon.classList.add('ratio-colon')
    node.appendChild(colon);
    node.appendChild(right);
    return node;
}

export interface TableOpts<R, C> {
    table: string;
    origin?: Displayable;
    rows: R[];
    cols: C[];
    noRowHeader?: true;
    rowHeader?: (row: R, i: number) => Displayable;
    colHeader?: (col: C, i: number) => Displayable;
    cell: (row: R, col: C, rowIndex: number, colIndex: number) => Displayable;
}

export interface DoubleRowHeaderTableOpts<R1, R2, C> {
    table: string;
    origin1: Displayable;
    origin2: Displayable;
    rows1: R1[];
    cols: C[];
    rows2?: R2[];
    getRow2?: (row1: R1, i: number) => R2[];
    row1Header?: (row: R1, i: number) => Displayable;
    row2Header?: (row: R2, i: number) => Displayable;
    colHeader?: (col: C, i: number) => Displayable;
    cell: (row1: R1, row2: R2, col: C, rowIndex1: number, rowIndex2: number, colIndex: number) => Displayable;
}

export function doubleRowHeaderTable<R1, R2, C>(opts: DoubleRowHeaderTableOpts<R1, R2, C>) {
    const makeRowHeader1 = opts.row1Header || (c => toElement(<any>c));
    const makeRowHeader2 = opts.row2Header || (c => toElement(<any>c));
    const makeColHeader = opts.colHeader || (c => toElement(<any>c));
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
            for (const r2 of r2s) {
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

export function basicTable<R, C>(opts: TableOpts<R, C>) {
    const rowHeader = opts.rowHeader || (c => toElement(<any>c));
    const colHeader = opts.colHeader || (c => toElement(<any>c));

    withTable(opts.table, table => {
        const restoreFoot = stashFoot(table);

        // header
        const th = table.insertRow();
        if (!opts.noRowHeader) {
            const origin = document.createElement("th");
            origin.appendChild(toElement(opts.origin));
            th.appendChild(origin);
        }
        for (let i = 0; i < opts.cols.length; i++) {
            const header = colHeader(opts.cols[i], i);
            th.appendChild(document.createElement("th")).appendChild(toElement(header));
        }
        // rows
        for (let i = 0; i < opts.rows.length; i++) {
            const row = table.insertRow();
            if (!opts.noRowHeader) {
                const rowHeaderCell = document.createElement("th");
                rowHeaderCell.appendChild(toElement(rowHeader(opts.rows[i], i)));
                row.appendChild(rowHeaderCell);
            }
            for (let j = 0; j < opts.cols.length; j++) {
                const cell = row.insertCell();
                cell.appendChild(toElement(opts.cell(opts.rows[i], opts.cols[j], i, j)));
            }
        }

        restoreFoot();
    });
}

export function toElement(x: Displayable): HTMLElement;
export function toElement(x: Displayable | undefined): HTMLElement | undefined;
export function toElement(x: Displayable): HTMLElement {
    if (x instanceof HTMLElement) return x;
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

export function staticTable(targetName: string, setup: Displayable[][]) {
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

const tableCallbacks: Array<() => void> = [];
window.addEventListener("DOMContentLoaded", () => {
    tableCallbacks.forEach(e => e());
});

function withTable(id: string, callback: (t: HTMLTableElement) => void) {
    tableCallbacks.push(() => {
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
