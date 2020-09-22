"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extensions = void 0;
exports.extensions = [
    {
        type: "lang",
        regex: /\{([A-Za-z0-9-]+)\}/g,
        replace: function (match, content) {
            return "<span class=\"item item-" + content + "\" data-itemname=\"" + content + "\" aria-label=\"" + content + "\"></span>";
        }
    },
    {
        type: "lang",
        regex: /\{(\S+)\s+x\s*(\d+)\}/g,
        replace: function (match, content, count) {
            return "<span class=\"counted-item item-" + content + "\" data-itemname=\"" + content + "\" data-count=\"" + count + "\" aria-label=\"" + content + "\">"
                + ("<span class=\"item-count\">" + count + "</span>")
                + "</span>";
        }
    }
];
