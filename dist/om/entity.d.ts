import * as types from './types';
import { DataSet } from './dataset';
export interface EntityFlags {
    [name: string]: true;
}
export interface Resistance {
    decrease: number;
    percent: number;
}
export declare class Entity {
    private dataSet;
    name: string;
    type: types.EntityType;
    flags: EntityFlags;
    order: string;
    group: string;
    subgroup: string;
    inventory_size: number | null;
    max_health: number | null;
    resistances: {
        [type: string]: Resistance;
    } | null;
    static fromJson(json: any, dataSet: DataSet): Entity;
    constructor(json: any, dataSet: DataSet);
}
