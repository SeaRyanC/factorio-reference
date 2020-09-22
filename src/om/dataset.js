"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataSet = void 0;
var entity_1 = require("./entity");
var item_1 = require("./item");
var recipe_1 = require("./recipe");
var DataSet = /** @class */ (function () {
    function DataSet(json) {
        this.json = json;
        this.itemMap = {};
        this.entityMap = {};
        this.recipeMap = {};
    }
    DataSet.fromJson = function (json) {
        return new DataSet(json);
    };
    DataSet.prototype.loadAll = function () {
        for (var _i = 0, _a = Object.keys(this.json.items); _i < _a.length; _i++) {
            var name_1 = _a[_i];
            this.getItem(name_1);
        }
        for (var _b = 0, _c = Object.keys(this.json.entities); _b < _c.length; _b++) {
            var name_2 = _c[_b];
            this.getEntity(name_2);
        }
        for (var _d = 0, _e = Object.keys(this.json.recipes); _d < _e.length; _d++) {
            var name_3 = _e[_d];
            this.getRecipe(name_3);
        }
    };
    DataSet.prototype.load = function (name, map, json, ctor) {
        if (name in map)
            return map[name];
        if (name in json) {
            return map[name] = new ctor(json[name], this);
        }
        return null;
    };
    Object.defineProperty(DataSet.prototype, "recipes", {
        get: function () {
            var _this = this;
            this.loadAll();
            return Object.keys(this.recipeMap).map(function (k) { return _this.getRecipe(k); });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataSet.prototype, "items", {
        get: function () {
            var _this = this;
            this.loadAll();
            return Object.keys(this.itemMap).map(function (k) { return _this.getItem(k); });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataSet.prototype, "entities", {
        get: function () {
            var _this = this;
            this.loadAll();
            return Object.keys(this.entityMap).map(function (k) { return _this.getEntity(k); });
        },
        enumerable: false,
        configurable: true
    });
    DataSet.prototype.getItem = function (name) {
        return this.load(name, this.itemMap, this.json.items, item_1.Item);
    };
    DataSet.prototype.getEntity = function (name) {
        return this.load(name, this.entityMap, this.json.entities, entity_1.Entity);
    };
    DataSet.prototype.getRecipe = function (name) {
        return this.load(name, this.recipeMap, this.json.recipes, recipe_1.Recipe);
    };
    return DataSet;
}());
exports.DataSet = DataSet;
