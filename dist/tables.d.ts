export declare type Displayable = string | number | {
    toMarkdown(): string;
} | undefined;
export declare function renderAsMarkdown(x: Displayable): string;
export declare function itemCount(itemName: string, count: number): string;
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
export declare function doubleRowHeader<R1, R2, C>(opts: DoubleRowHeaderTableOpts<R1, R2, C>): string;
export declare function basic<R, C>(opts: TableOpts<R, C>): string;
export declare function fixed(opts: StaticTableOptions): string;
