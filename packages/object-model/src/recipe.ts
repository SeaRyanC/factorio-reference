import * as types from './types';
import { Item } from './item';
import { DataSet } from './dataset';

export type Input = ItemInput | FluidInput;

export interface ItemInput {
    type: "item";
    item: Item;
    amount: number;
}

export interface FluidInput {
    type: "fluid";
    fluid: null;
    amount: number;
}

export interface Output {
    type: "item" | "fluid";
    item: Item;
    amount: number;
    probability: number;
    amountRange: [number, number];
}

export class Recipe {
    name: string;
    ingredients: Input[];
    products: Output[];
    /** In seconds */
    time: number;

    category: types.RecipeCategory;
    order: string;
    group: string;
    subgroup: string;

    constructor(json: any, private dataSet: DataSet) {
        this.name = json.name;
        this.ingredients = json.ingredients.map((i: any) => toInput(i, dataSet));
        this.products = json.products.map((i: any) => toOutput(i, dataSet));
        this.time = json.energy;

        this.category = json.category;
        this.order = json.order;
        this.group = json.group;
        this.subgroup = json.subgroup;
    }
}

function toOutput(json: any, dataSet: DataSet): Output {
    if (json.type === "item") {
        return {
            type: "item",
            amount: json.amount,
            amountRange: [json.amount, json.amount],
            item: dataSet.getItem(json.name)!,
            probability: json.probability || 1
        };
    } else if (json.type === "fluid") {
        return {
            type: "fluid",
            item: null as any,
            amount: json.amount || json.amount_max,
            amountRange: [json.amount_min, json.amount_max],
            probability: json.probability || 1
        };
    }
    throw new Error(`Unknown type ${json.type}`);
}

function toInput(json: any, dataSet: DataSet): Input {
    if (json.type === "item") {
        return {
            type: "item",
            amount: json.amount,
            item: dataSet.getItem(json.name)!
        };
    } else if (json.type === "fluid") {
        return {
            type: "fluid",
            amount: json.amount || json.amount_max,
            fluid: null
        }
    }
    throw new Error(`Unknown type ${json.type}`);
}