import * as types from './types';
import { Item } from './item';
import { DataSet } from './dataset';

export interface Input {
    type: "item" | "fluid";
    item: Item;
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
        this.ingredients = json.ingredients;
        this.products = json.products;
        this.time = json.energy;

        this.category = json.category;
        this.order = json.order;
        this.group = json.group;
        this.subgroup = json.subgroup;
    }
}
