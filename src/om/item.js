"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
var Item = /** @class */ (function () {
    function Item(json, dataSet) {
        this.dataSet = dataSet;
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
        }
        else {
            this.fuel = null;
        }
    }
    Item.fromJson = function (json, dataSet) {
        return new Item(json, dataSet);
    };
    return Item;
}());
exports.Item = Item;
