export type Displayable = string | number | { name: string };

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

/**
 * Displays the lowest integer greater than or equal to n.
 * If this isn't exactly n, displays a tooltip indicating the original value.
 * @param n The number to round
 * @param indicate_rounding Optional; defaults to true. If false, hides the rounding indicator.
 */
export function ceil(n: number, indicate_rounding = true) {
    const el = integer(Math.ceil(n));
    if (indicate_rounding && Math.ceil(n) - n > 0.0001) {
        el.title = `Rounded up from ${n.toFixed(2)}`;
        el.classList.add('rounded');
    }
    return el;
}

/**
 * Displays the greatest integer less than or equal to n.
 * If this isn't exactly n, displays a tooltip indicating the original value.
 * @param n The number to round
 * @param indicate_rounding Optional; defaults to true. If false, hides the rounding indicator.
 */
export function floor(n: number, indicate_rounding = true) {
    const el = integer(Math.floor(n));
    if (indicate_rounding && n - Math.floor(n) > 0.0001) {
        el.title = `Rounded down from ${n.toFixed(2)}`;
        el.classList.add('rounded');
    }
    return el;
}

/**
 * Groups items together in a row
 * @param items The items to group
 */
export function g(...items: Displayable[]): HTMLElement {
    const node = document.createElement("span");
    for (let i = 0; i < items.length; i++) {
        node.appendChild(toElement(items[i]));
    }
    return node;
}

/**
 * Displays a list of items together in a row
 * @param names The names of items to display
 */
export function itemGroup(...names: string[]): HTMLElement {
    return g(...[...names].map(item));
}

/**
 * Puts an item into a paragraph element
 * @param d Any displayable item
 */
export function p(d: Displayable) {
    const node = document.createElement("p");
    node.appendChild(toElement(d));
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
    switch (name) {
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
    cnt.innerText = largeString(count);

    group.appendChild(cnt);

    return group;
}

export function percent(n: number) {
    return g((n * 100).toFixed(1), "%");
}

export function wholePercent(n: number) {
    return g((n * 100).toFixed(0), "%");
}

function largeString(n: number) {
    if (n < 1000) {
        return n.toFixed(0);
    } else if (n < 1000000) {
        var k = n / 1000;
        return k + 'k';
    } else if (n < 1000000000) {
        var k = n / 1000000;
        return k + 'M';
    } else {
        var k = n / 1000000000;
        return k + 'G';
    }

}

export function large(n: number) {
    const node = document.createElement("span");
    node.innerText = largeString(n);
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
    const totalSeconds = seconds;
    seconds = Math.round(seconds);

    const days = Math.floor(seconds / (60 * 60 * 24));
    seconds -= days * 60 * 60 * 24;

    const hours = Math.floor(seconds / (60 * 60));
    seconds -= hours * 60 * 60;
    const minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;

    const res = make();
    res.setAttribute("title", `${totalSeconds.toFixed(1)} seconds`);
    return res;

    function make() {
        if (days > 0) {
            return g(integer(days), "d ", spacePadded(hours, 2), "h");
        }
        if (hours > 0) {
            return g(integer(hours), "h ", spacePadded(minutes, 2), "m");
        }
        if (minutes > 30) {
            return g(integer(minutes), "m");
        }
        if (minutes > 0) {
            return g(integer(minutes), "m ", spacePadded(seconds, 2), "s");
        }
        return g(integer(seconds), "s");
    }
}

export function fixed(n: number, units?: string) {
    const node = document.createElement("span");
    node.innerText = n.toFixed(1);
    if (units) node.innerText += " " + units;
    node.classList.add("number");
    return node;
}

export function spacePadded(n: number, width: number) {
    // &#8199; 'FIGURE SPACE'
    var result = n.toString();
    while (result.length < width) {
        result = String.fromCharCode(8199) + result;
    }
    const node = document.createElement("span");
    node.innerText = result;
    node.classList.add("number");
    return node;
}

export function zeroPadded(n: number, width: number) {
    var result = n.toString();
    while (result.length < width) {
        result = '0' + result;
    }
    const node = document.createElement("span");
    node.innerText = result;
    node.classList.add("number");
    return node;
}

export function energy(joules: number) {
    const node = document.createElement("span");
    node.classList.add("number");
    node.innerText = largeString(joules) + "J";
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

export interface CoreTableOptions {
    title?: string;
    description?: Displayable | Displayable[];
}

export interface StaticTableOptions extends CoreTableOptions {
    header?: Displayable[];
    rows: Displayable[][];
}

export interface TableOpts<R, C> extends CoreTableOptions {
    origin?: Displayable;
    rows: R[];
    cols: C[];
    noRowHeader?: true;
    rowHeader?: (row: R, i: number) => Displayable;
    colHeader?: (col: C, i: number) => Displayable;
    cell?: (row: R, col: C, rowIndex: number, colIndex: number) => Displayable;
}

export interface DoubleRowHeaderTableOpts<R1, R2, C> extends CoreTableOptions {
    origin1: Displayable;
    origin2: Displayable;
    cols: C[];
    rows1: R1[];
    rows2?: R2[];
    getRow2?: (row1: R1, i: number) => R2[];
    row1Header?: (row: R1, i: number) => Displayable;
    row2Header?: (row: R2, i: number, row1: R1, row1Index: number) => Displayable;
    colHeader?: (col: C, i: number) => Displayable;
    cell?: (row1: R1, row2: R2, col: C, rowIndex1: number, rowIndex2: number, colIndex: number) => Displayable;
}

export function markdown(text: string) {
    const div = document.createElement('div');
    div.innerHTML = converter.makeHtml(text);
    target.appendChild(div);
}

export function doubleRowHeaderTable<R1, R2, C>(opts: DoubleRowHeaderTableOpts<R1, R2, C>) {
    const makeRowHeader1 = opts.row1Header || (c => toElement(<any>c));
    const makeRowHeader2 = opts.row2Header || (c => toElement(<any>c));
    const makeColHeader = opts.colHeader || (c => toElement(<any>c));
    const getRow2 = opts.getRow2 || (() => opts.rows2);

    renderTable(opts, table => {
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
            header.rowSpan = r2s.length;
            header.appendChild(toElement(makeRowHeader1(r1, i)));
            let j = 0;
            for (const r2 of r2s) {
                const subRow = j == 0 ? row : table.insertRow();
                const subHed = document.createElement('th');
                subHed.appendChild(toElement(makeRowHeader2(r2, j, r1, i)));
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

    renderTable(opts, table => {
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
    });
}


export function staticTable(opts: StaticTableOptions) {
    renderTable(opts, table => {
        // header
        if (opts.header) {
            const th = table.insertRow();
            for(const h of opts.header) {
                th.appendChild(document.createElement("th")).appendChild(toElement(h));
            }
        }

        // cells
        for (const row of opts.rows) {
            const tr = table.insertRow();
            for (const cell of row) {
                tr.insertCell().appendChild(toElement(cell));
            }
        }
    });
}
