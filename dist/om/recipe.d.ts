import * as types from './types';
import { Item } from './item';
import { DataSet } from './dataset';
export declare type Input = ItemInput | FluidInput;
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
export declare class Recipe {
    private dataSet;
    name: string;
    ingredients: Input[];
    products: Output[];
    /** In seconds */
    time: number;
    category: types.RecipeCategory;
    order: string;
    group: string;
    subgroup: string;
    constructor(json: any, dataSet: DataSet);
}
