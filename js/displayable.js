define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DeferredDisplay = /** @class */ (function () {
        function DeferredDisplay() {
        }
        return DeferredDisplay;
    }());
    exports.DeferredDisplay = DeferredDisplay;
    function toElement(x) {
        if (x instanceof HTMLElement)
            return x;
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
    exports.toElement = toElement;
    /**
     * Displays the lowest integer greater than or equal to n.
     * If this isn't exactly n, displays a tooltip indicating the original value.
     * @param n The number to round
     * @param indicate_rounding Optional; defaults to true. If false, hides the rounding indicator.
     */
    function ceil(n, indicate_rounding) {
        if (indicate_rounding === void 0) { indicate_rounding = true; }
        var el = integer(Math.ceil(n));
        if (indicate_rounding && Math.ceil(n) - n > 0.0001) {
            el.title = "Rounded up from " + n.toFixed(2);
            el.classList.add('rounded');
        }
        return el;
    }
    exports.ceil = ceil;
    /**
     * Displays the greatest integer less than or equal to n.
     * If this isn't exactly n, displays a tooltip indicating the original value.
     * @param n The number to round
     * @param indicate_rounding Optional; defaults to true. If false, hides the rounding indicator.
     */
    function floor(n, indicate_rounding) {
        if (indicate_rounding === void 0) { indicate_rounding = true; }
        var el = integer(Math.floor(n));
        if (indicate_rounding && n - Math.floor(n) > 0.0001) {
            el.title = "Rounded down from " + n.toFixed(2);
            el.classList.add('rounded');
        }
        return el;
    }
    exports.floor = floor;
    /**
     * Groups items together in a row
     * @param items The items to group
     */
    function g() {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var node = document.createElement("span");
        for (var i = 0; i < items.length; i++) {
            node.appendChild(toElement(items[i]));
        }
        return node;
    }
    exports.g = g;
    /**
     * Displays a list of items together in a row
     * @param names The names of items to display
     */
    function itemGroup() {
        var names = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            names[_i] = arguments[_i];
        }
        return g.apply(void 0, names.slice().map(item));
    }
    exports.itemGroup = itemGroup;
    /**
     * Puts an item into a paragraph element
     * @param d Any displayable item
     */
    function p(d) {
        var node = document.createElement("p");
        node.appendChild(toElement(d));
        return node;
    }
    exports.p = p;
    function text(s) {
        var node = document.createElement("span");
        node.innerText = s;
        return node;
    }
    exports.text = text;
    function tt(s) {
        var node = document.createElement("span");
        node.innerText = s;
        node.classList.add("number");
        return node;
    }
    exports.tt = tt;
    function nOf(n, item) {
        var node = document.createElement("span");
        node.appendChild(integer(n));
        node.appendChild(document.createTextNode(" "));
        node.appendChild(item);
        node.title = name;
        return node;
    }
    exports.nOf = nOf;
    function item(name) {
        var node = document.createElement("p");
        node.classList.add(itemNameToRealItemName(name));
        node.classList.add("item");
        node.title = name;
        return node;
    }
    exports.item = item;
    function itemNameToRealItemName(name) {
        switch (name) {
            case "sulfuric-acid-barrel":
                return "sulfuric-acid";
            default:
                return name;
        }
    }
    function itemCount(itemName, count) {
        var group = document.createElement("div");
        group.classList.add("counted-item");
        var item = document.createElement("p");
        item.classList.add(itemNameToRealItemName(itemName));
        item.classList.add("item");
        item.title = itemName;
        group.appendChild(item);
        var cnt = document.createElement("span");
        cnt.classList.add("item-count");
        cnt.innerText = largeString(count);
        group.appendChild(cnt);
        return group;
    }
    exports.itemCount = itemCount;
    function percent(n) {
        return g((n * 100).toFixed(1), "%");
    }
    exports.percent = percent;
    function wholePercent(n) {
        return g((n * 100).toFixed(0), "%");
    }
    exports.wholePercent = wholePercent;
    function largeString(n) {
        if (n < 1000) {
            return n.toFixed(0);
        }
        else if (n < 1000000) {
            var k = n / 1000;
            return k + 'k';
        }
        else if (n < 1000000000) {
            var k = n / 1000000;
            return k + 'M';
        }
        else {
            var k = n / 1000000000;
            return k + 'G';
        }
    }
    function large(n) {
        var node = document.createElement("span");
        node.innerText = largeString(n);
        node.classList.add("number");
        return node;
    }
    exports.large = large;
    function short_time(seconds) {
        seconds = Math.round(seconds);
        var minutes = Math.floor(seconds / 60);
        seconds -= minutes * 60;
        return g(spacePadded(minutes, 2), ':', zeroPadded(seconds, 2));
    }
    exports.short_time = short_time;
    function medium_time(seconds) {
        seconds = Math.round(seconds);
        var hours = Math.floor(seconds / (60 * 60));
        seconds -= hours * 60 * 60;
        var minutes = Math.floor(seconds / 60);
        seconds -= minutes * 60;
        return g(spacePadded(hours, 2), ':', zeroPadded(minutes, 2));
    }
    exports.medium_time = medium_time;
    function long_time(seconds) {
        seconds = Math.round(seconds);
        var days = Math.floor(seconds / (60 * 60 * 24));
        seconds -= days * 60 * 60 * 24;
        var hours = Math.floor(seconds / (60 * 60));
        seconds -= hours * 60 * 60;
        return g(integer(days), "d ", spacePadded(hours, 2), "h");
    }
    exports.long_time = long_time;
    function time(seconds) {
        var totalSeconds = seconds;
        seconds = Math.round(seconds);
        var days = Math.floor(seconds / (60 * 60 * 24));
        seconds -= days * 60 * 60 * 24;
        var hours = Math.floor(seconds / (60 * 60));
        seconds -= hours * 60 * 60;
        var minutes = Math.floor(seconds / 60);
        seconds -= minutes * 60;
        var res = make();
        res.setAttribute("title", totalSeconds.toFixed(1) + " seconds");
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
    exports.time = time;
    function fixed(n, units) {
        var node = document.createElement("span");
        node.innerText = n.toFixed(1);
        if (units)
            node.innerText += " " + units;
        node.classList.add("number");
        return node;
    }
    exports.fixed = fixed;
    function spacePadded(n, width) {
        // &#8199; 'FIGURE SPACE'
        var result = n.toString();
        while (result.length < width) {
            result = String.fromCharCode(8199) + result;
        }
        var node = document.createElement("span");
        node.innerText = result;
        node.classList.add("number");
        return node;
    }
    exports.spacePadded = spacePadded;
    function zeroPadded(n, width) {
        var result = n.toString();
        while (result.length < width) {
            result = '0' + result;
        }
        var node = document.createElement("span");
        node.innerText = result;
        node.classList.add("number");
        return node;
    }
    exports.zeroPadded = zeroPadded;
    function energy(joules) {
        var node = document.createElement("span");
        node.classList.add("number");
        node.innerText = largeString(joules) + "J";
        return node;
    }
    exports.energy = energy;
    function integer(n, units) {
        var node = document.createElement("span");
        var text = n.toString();
        if (text.length >= 4) {
            text = text.substr(0, text.length - 3) + "," + text.substr(text.length - 3);
        }
        node.innerText = text;
        if (units)
            node.innerText += " " + units;
        node.classList.add("number");
        return node;
    }
    exports.integer = integer;
    function multiplied(left, factor) {
        return g(left, " x ", factor);
    }
    exports.multiplied = multiplied;
    function ratio(left, right) {
        // 12 <p class="item electric-drill"></p> : 11 <p class="item steel-furnace"></p>
        var node = document.createElement("div");
        node.classList.add('ratio');
        node.appendChild(left);
        var colon = text(" : ");
        colon.classList.add('ratio-colon');
        node.appendChild(colon);
        node.appendChild(right);
        return node;
    }
    exports.ratio = ratio;
});
