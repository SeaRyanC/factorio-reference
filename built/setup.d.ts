import { Displayable } from './displayable';
export declare function setRenderTarget(element: HTMLElement): void;
export declare function header(name: string): void;
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
export declare class DeferredDisplayable {
    private render;
    constructor(render: (element: HTMLElement) => void);
    renderTo(element: HTMLElement): void;
}
export declare abstract class ComputedColumn<R, R2 = never> {
    header(): string;
    render1(row: R, rowIndex: number): Displayable | undefined | DeferredDisplayable;
    render2(row1: R, row2: R2, row1index: number, row2index: number): Displayable | undefined | DeferredDisplayable;
}
export declare class TimeColumn<R, R2 = never> extends ComputedColumn<R, R2> {
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
export declare function markdown(text: string): void;
export declare function doubleRowHeaderTable<R1, R2, C>(opts: DoubleRowHeaderTableOpts<R1, R2, C>): void;
export declare function basicTable<R, C>(opts: TableOpts<R, C>): void;
export declare function staticTable(opts: StaticTableOptions): void;
