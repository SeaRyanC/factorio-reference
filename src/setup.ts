import { toElement, Displayable } from './displayable';

let target: Element = null;
export function setRenderTarget(element: HTMLElement) {
    target = element;
}
window.addEventListener("DOMContentLoaded", () => {
    target = window.document.body;
});

function onDocumentReady(callback: () => void) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        callback();
    } else {
        window.addEventListener("DOMContentLoaded", function() {
            callback();
        });
    }
}

export function header(name: string) {
    onDocumentReady(() => {
        const id = encodeURIComponent(name);
        const selfLink = document.createElement("a");
        selfLink.href = "#" + id;
        selfLink.innerText = name;
        const header = document.createElement("h1");
        header.id = id;
        header.appendChild(selfLink);
        target.appendChild(header);
    });
}

function renderTable(opts: CoreTableOptions, render: (t: HTMLTableElement) => void) {
    onDocumentReady(performRender);
    function performRender() {
        const document = target.ownerDocument;
        const id = encodeURIComponent(opts.title);
        const selfLink = document.createElement("a");
        selfLink.href = "#" + id;
        selfLink.innerText = opts.title;
        const header = document.createElement("h2");
        header.id = id;
        header.appendChild(selfLink);

        const tableDiv = document.createElement("div");
        tableDiv.classList.add("table");
        const table = document.createElement("table");
        tableDiv.appendChild(table);
        const notesDiv = document.createElement("div");
        notesDiv.classList.add("notes");
        if (Array.isArray(opts.description)) {
            for(const d of opts.description) {
                const p = document.createElement('p');
                p.appendChild(toElement(d));
                notesDiv.appendChild(p);
            }
        } else if (opts.description !== undefined) {
            notesDiv.appendChild(toElement(opts.description));
        }

        const containerDiv = document.createElement("div");
        containerDiv.classList.add("annotated");
        containerDiv.appendChild(tableDiv);
        containerDiv.appendChild(notesDiv);
        
        render(table);
        target.appendChild(header);
        target.appendChild(containerDiv);
    }
}

export interface CoreTableOptions {
    title: string;
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
    cell: (row: R, col: C, rowIndex: number, colIndex: number) => Displayable;
}

export interface DoubleRowHeaderTableOpts<R1, R2, C> extends CoreTableOptions {
    origin1: Displayable;
    origin2: Displayable;
    rows1: R1[];
    cols: C[];
    rows2?: R2[];
    getRow2?: (row1: R1, i: number) => R2[];
    row1Header?: (row: R1, i: number) => Displayable;
    row2Header?: (row: R2, i: number, row1: R1, row1Index: number) => Displayable;
    colHeader?: (col: C, i: number) => Displayable;
    cell: (row1: R1, row2: R2, col: C, rowIndex1: number, rowIndex2: number, colIndex: number) => Displayable;
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
