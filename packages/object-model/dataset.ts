import { Entity } from "./entity";
import { Item } from "./item";
import { Recipe } from "./recipe";

type Lookup<T> = { [name: string]: T | null };

declare global {
    const om: DataSet;
    const items: typeof om.items;
    const recipes: typeof om.recipes;
    const entities: typeof om.entities;
}

export class DataSet {
    static fromJson(json: any) {
        return new DataSet(json);
    }

    private itemMap: Lookup<Item> = {};
    private entityMap: Lookup<Entity> = {};
    private recipeMap: Lookup<Recipe> = {};

    private constructor(private json: any) {
        
    }

    private loadAll() {
        for (const name of Object.keys(this.json.items)) {
            this.getItem(name);
        }
        for (const name of Object.keys(this.json.entities)) {
            this.getEntity(name);
        }
        for (const name of Object.keys(this.json.recipes)) {
            this.getRecipe(name);
        }
    }

    private load<T>(name: string, map: Lookup<T>, json: any, ctor: new(json: any, data: DataSet) => T) {
        if (name in map) return map[name];
        if (name in json) {
            return map[name] = new ctor(json[name], this);
        }
        return null;
    }

    public get recipes() {
        this.loadAll();
        return Object.keys(this.recipeMap).map(k => this.getRecipe(k)!);
    }

    public get items() {
        this.loadAll();
        return Object.keys(this.itemMap).map(k => this.getItem(k)!);
    }

    public get entities() {
        this.loadAll();
        return Object.keys(this.entityMap).map(k => this.getEntity(k)!);
    }

    public getItem(name: string): Item | null {
        return this.load(name, this.itemMap, this.json.items, Item);
    }

    public getEntity(name: string): Entity | null {
        return this.load(name, this.entityMap, this.json.entities, Entity);
    }

    public getRecipe(name: string): Recipe | null {
        return this.load(name, this.recipeMap, this.json.recipes, Recipe);
    }
}
