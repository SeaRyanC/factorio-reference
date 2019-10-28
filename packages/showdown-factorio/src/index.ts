import showdown = require("showdown");

export const extensions: showdown.ShowdownExtension[] = [
    {
        type: "lang",
        regex: /\{([A-Za-z0-9-]+)\}/g,
        replace: (match: any, content: any) => {
            return `<span class="item item-${content}" data-itemname="${content}" aria-label="${content}"></span>`;
        }
    },
    {
        type: "lang",
        regex: /\{(\S+)\s+x\s*(\d+)\}/g,
        replace: (match: any, content: any, count: any) => {
            return `<span class="counted-item item-${content}" data-itemname="${content}" data-count="${count}" aria-label="${content}">`
                + `<span class="item-count">${count}</span>`
                + `</span>`;
        }
    }
];
