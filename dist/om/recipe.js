"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recipe = void 0;
var Recipe = /** @class */ (function () {
    function Recipe(json, dataSet) {
        this.dataSet = dataSet;
        this.name = json.name;
        this.ingredients = json.ingredients.map(function (i) { return toInput(i, dataSet); });
        this.products = json.products.map(function (i) { return toOutput(i, dataSet); });
        this.time = json.energy;
        this.category = json.category;
        this.order = json.order;
        this.group = json.group;
        this.subgroup = json.subgroup;
    }
    return Recipe;
}());
exports.Recipe = Recipe;
function toOutput(json, dataSet) {
    if (json.type === "item") {
        return {
            type: "item",
            amount: json.amount,
            amountRange: [json.amount, json.amount],
            item: dataSet.getItem(json.name),
            probability: json.probability || 1
        };
    }
    else if (json.type === "fluid") {
        return {
            type: "fluid",
            item: null,
            amount: json.amount || json.amount_max,
            amountRange: [json.amount_min, json.amount_max],
            probability: json.probability || 1
        };
    }
    throw new Error("Unknown type " + json.type);
}
function toInput(json, dataSet) {
    if (json.type === "item") {
        return {
            type: "item",
            amount: json.amount,
            item: dataSet.getItem(json.name)
        };
    }
    else if (json.type === "fluid") {
        return {
            type: "fluid",
            amount: json.amount || json.amount_max,
            fluid: null
        };
    }
    throw new Error("Unknown type " + json.type);
}
