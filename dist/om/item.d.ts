import * as types from './types';
import { DataSet } from './dataset';
import { Entity } from './entity';
export declare class Item {
    private dataSet;
    name: string;
    type: types.ItemType;
    fuel: types.Fuel | null;
    group: string;
    subgroup: string;
    order: string;
    stack_size: number;
    place_result: Entity | null;
    static fromJson(json: any, dataSet: DataSet): Item;
    constructor(json: any, dataSet: DataSet);
}
