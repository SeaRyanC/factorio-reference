"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
var Entity = /** @class */ (function () {
    function Entity(json, dataSet) {
        this.dataSet = dataSet;
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
    Entity.fromJson = function (json, dataSet) {
        return new Entity(json, dataSet);
    };
    return Entity;
}());
exports.Entity = Entity;
