import * as types from './types';
import { DataSet } from './dataset';
import { Entity } from './entity';

export class Item {
    name: string;
    type: types.ItemType;
    fuel: types.Fuel | null;

    group: string;
    subgroup: string;
    order: string;

    stack_size: number;

    place_result: Entity | null;

    static fromJson(json: any, dataSet: DataSet) {
        return new Item(json, dataSet);
    }

    constructor(json: any, private dataSet: DataSet) {
        this.name = json.name;
        this.type = json.type;
        this.group = json.group;
        this.subgroup = json.subgroup;
        this.order = json.order;
        this.stack_size = json.stack_size;

        this.place_result = json.place_result ? dataSet.getEntity(json.place_result) : null;

        if (json.fuel_category) {
            this.fuel = {
                category: json.fuel_category,
                acceleration_multiplier: json.fuel_acceleration_multiplier,
                top_speed_multiplier: json.fuel_top_speed_mutliplier,
                value: json.fuel_value
            };
        } else {
            this.fuel = null;            
        }
    }
}
