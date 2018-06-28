import * as types from './types';
import * as physics from './physics';
import { DataSet } from './dataset';

export interface EntityFlags {
    [name: string]: true;
}

export interface Resistance {
    decrease: number;
    percent: number;
}

export class Entity {
    name: string;
    type: types.EntityType;
    flags: EntityFlags;
    order: string;
    group: string;
    subgroup: string;

    inventory_size: number | null;
    /*
    max_energy_usage: physics.Power | null;
    fluid_capacity: number | null;
    belt_speed: physics.Speed | null;
    max_underground_distance: physics.Distance | null;

    burner: types.BurnerPrototype | null;
    electric: types.ElectricPrototype | null;
    */

    max_health: number | null;
    resistances: { [type: string]: Resistance } | null;

    static fromJson(json: any, dataSet: DataSet) {
        return new Entity(json, dataSet);
    }

    constructor(json: any, private dataSet: DataSet) {
        this.name = json.name;
        this.type = json.type;
        this.flags = json.flags;
        this.order = json.order;
        this.group = json.group;
        this.subgroup = json.subgroup;
        this.inventory_size = json.inventory_size || null;

        this.max_health = json.max_health || null;
        this.resistances = json.resistances || null;
    }
}
