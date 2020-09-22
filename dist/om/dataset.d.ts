import { Entity } from "./entity";
import { Item } from "./item";
import { Recipe } from "./recipe";
declare global {
    const om: DataSet;
    const items: typeof om.items;
    const recipes: typeof om.recipes;
    const entities: typeof om.entities;
}
export declare class DataSet {
    private json;
    static fromJson(json: any): DataSet;
    private itemMap;
    private entityMap;
    private recipeMap;
    private constructor();
    private loadAll;
    private load;
    get recipes(): Recipe[];
    get items(): Item[];
    get entities(): Entity[];
    getItem(name: string): Item | null;
    getEntity(name: string): Entity | null;
    getRecipe(name: string): Recipe | null;
}
