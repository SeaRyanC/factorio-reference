export type Displayable = string | number | { toMarkdown(): string } | undefined;

export function renderAsMarkdown(x: Displayable): string {
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

function numberToString(x: number) {
    return (Math.round(x * 1000) / 1000).toString();
}

export function itemCount(itemName: string, count: number) {
    return `{${itemName} x ${count}}`;
}

function tag(name: string) {
    const children: Displayable[] = [];
    const attrs: [string, string | number][] = [];
    return {
        toMarkdown,
        addChild,
        attr
    };

    function attr(name: string, value: string | number) {
        attrs.push([name, value]);
    }

    function addChild<T extends Displayable>(ch: T): T {
        children.push(ch);
        return ch;
    }

    function toMarkdown() {
        const attrStr = attrs.map(k => `${k[0]}="${k[1]}"`).join(" ");
        return `<${name}${attrStr.length ? " " + attrStr : ""}>${children.map(ch => renderAsMarkdown(ch)).join('')}</${name}>`;
    }
}

export interface StaticTableOptions {
    header?: Displayable[];
    rows: Displayable[][];
}

export interface TableOpts<R, C> {
    origin?: Displayable;
    rows: R[];
    cols: C[];
    noRowHeader?: true;
    rowHeader?: (row: R, i: number) => Displayable;
    colHeader?: (col: C, i: number) => Displayable;
    cell?: (row: R, col: C, rowIndex: number, colIndex: number) => Displayable;
}

export interface DoubleRowHeaderTableOpts<R1, R2, C> {
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

export function doubleRowHeader<R1, R2, C>(opts: DoubleRowHeaderTableOpts<R1, R2, C>) {
    const makeRowHeader1 = opts.row1Header || (c => renderAsMarkdown(<any>c));
    const makeRowHeader2 = opts.row2Header || (c => renderAsMarkdown(<any>c));
    const makeColHeader = opts.colHeader || (c => renderAsMarkdown(<any>c));
    const getRow2: typeof opts.getRow2 = opts.getRow2 || (() => opts.rows2!);

    const table = tag("table");

    // Headers
    const topRow = table.addChild(tag("tr"));
    const o1 = tag("th");
    o1.addChild(opts.origin1)
    topRow.addChild(o1);
    const o2 = tag("th");
    o2.addChild(opts.origin2);
    topRow.addChild(o2);
    let i = 0;
    for (const col of opts.cols) {
        const cell = tag("th");
        cell.addChild(makeColHeader(col, i));
        i++;
    }

    // Body
    i = 0;
    for (const r1 of opts.rows1) {
        const r2s = getRow2(r1, i);

        const row = table.addChild(tag("tr"));
        const header = row.addChild(tag('th'));
        header.attr("rowSpan", r2s.length);
        header.addChild(makeRowHeader1(r1, i));
        let j = 0;
        for (const r2 of r2s) {
            const subRow = j == 0 ? row : table.addChild(tag("tr"));
            const subHed = tag("th");
            subHed.addChild(makeRowHeader2(r2, j, r1, i));
            subRow.addChild(subHed);

            let k = 0;
            for (const col of opts.cols) {
                subRow.addChild(tag("td")).addChild(opts.cell!(r1, r2, col, i, j, k));
                k++;
            }

            j++;
        }

        i++;
    }

    return table.toMarkdown();
}

export function basic<R, C>(opts: TableOpts<R, C>) {
    const rowHeader = opts.rowHeader || (c => renderAsMarkdown(<any>c));
    const colHeader = opts.colHeader || (c => renderAsMarkdown(<any>c));

    const table = tag("table");

    const th = table.addChild(tag("tr"));
    if (!opts.noRowHeader) {
        th.addChild(tag("th")).addChild(opts.origin);
    }
    for (let i = 0; i < opts.cols.length; i++) {
        const header = colHeader(opts.cols[i], i);
        th.addChild(tag("th")).addChild(header);
    }
    // rows
    for (let i = 0; i < opts.rows.length; i++) {
        const row = table.addChild(tag("tr"));
        if (!opts.noRowHeader) {
            const rowHeaderCell = row.addChild(tag("th"));
            rowHeaderCell.addChild(rowHeader(opts.rows[i], i));
        }
        for (let j = 0; j < opts.cols.length; j++) {
            const cell = row.addChild(tag("td"));
            cell.addChild(opts.cell!(opts.rows[i], opts.cols[j], i, j));
        }
    }

    return table.toMarkdown();
}

export function fixed(opts: StaticTableOptions) {
    const table = tag("table");

    // header
    if (opts.header) {
        const th = table.addChild(tag("tr"));
        for (const h of opts.header) {
            th.addChild(tag("th")).addChild(h);
        }
    }

    // cells
    for (const row of opts.rows) {
        const tr = table.addChild(tag("tr"));
        for (const cell of row) {
            tr.addChild(tag("td")).addChild(cell);
        }
    }
    return table.toMarkdown();
}
