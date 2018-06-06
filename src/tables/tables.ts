export type Displayable = HTMLElement | string | number | { name: string };

export abstract class DeferredDisplay {
    abstract renderTo(element: HTMLElement): void;
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