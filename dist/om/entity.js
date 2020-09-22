"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
var Entity = /** @class */ (function () {
    function Entity(json, dataSet) {
        this.dataSet = dataSet;
        Object.assign(this, json);
    }
    Entity.fromJson = function (json, dataSet) {
        return new Entity(json, dataSet);
    };
    return Entity;
}());
exports.Entity = Entity;
