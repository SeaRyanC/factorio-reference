export declare type Displayable = HTMLElement | string | number | {
    name: string;
};
export declare function toElement(x: Displayable): HTMLElement;
export declare function toElement(x: Displayable | undefined): HTMLElement | undefined;
/**
 * Displays the lowest integer greater than or equal to n.
 * If this isn't exactly n, displays a tooltip indicating the original value.
 * @param n The number to round
 * @param indicate_rounding Optional; defaults to true. If false, hides the rounding indicator.
 */
export declare function ceil(n: number, indicate_rounding?: boolean): HTMLSpanElement;
/**
 * Displays the greatest integer less than or equal to n.
 * If this isn't exactly n, displays a tooltip indicating the original value.
 * @param n The number to round
 * @param indicate_rounding Optional; defaults to true. If false, hides the rounding indicator.
 */
export declare function floor(n: number, indicate_rounding?: boolean): HTMLSpanElement;
/**
 * Groups items together in a row
 * @param items The items to group
 */
export declare function g(...items: Displayable[]): HTMLElement;
/**
 * Displays a list of items together in a row
 * @param names The names of items to display
 */
export declare function itemGroup(...names: string[]): HTMLElement;
/**
 * Puts an item into a paragraph element
 * @param d Any displayable item
 */
export declare function p(d: Displayable): HTMLParagraphElement;
export declare function text(s: string): HTMLSpanElement;
export declare function tt(s: string): HTMLSpanElement;
export declare function nOf(n: number, item: HTMLElement): HTMLSpanElement;
export declare function item(name: string): HTMLParagraphElement;
export declare function itemCount(itemName: string, count: number): HTMLDivElement;
export declare function percent(n: number): HTMLElement;
export declare function wholePercent(n: number): HTMLElement;
export declare function large(n: number): HTMLSpanElement;
export declare function short_time(seconds: number): HTMLElement;
export declare function medium_time(seconds: number): HTMLElement;
export declare function long_time(seconds: number): HTMLElement;
export declare function time(seconds: number): HTMLElement;
export declare function fixed(n: number, units?: string): HTMLSpanElement;
export declare function spacePadded(n: number, width: number): HTMLSpanElement;
export declare function zeroPadded(n: number, width: number): HTMLSpanElement;
export declare function integer(n: number, units?: string): HTMLSpanElement;
export declare function multiplied(left: Displayable, factor: number): HTMLElement;
export declare function ratio(left: HTMLElement, right: HTMLElement): HTMLElement;
