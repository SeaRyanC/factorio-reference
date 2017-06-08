/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const setup_1 = __webpack_require__(3);
const recipes_1 = __webpack_require__(2);
const items_1 = __webpack_require__(1);
/******* Belts ***********/
setup_1.doubleRowHeaderTable({
    table: 'belt-throughput',
    origin1: setup_1.text("Interval"),
    origin2: setup_1.text("Belt"),
    rows1: [setup_1.text("per second"), setup_1.text("per minute")],
    rows2: setup_1.Belts,
    cols: ["One Lane", "Both Lanes"],
    cell(r1, r2, c, ri1, ri2, ci) {
        if (ri1 === 0) {
            return setup_1.fixed(r2.throughput / (2 - ci));
        }
        else {
            return setup_1.integer(r2.throughput / (2 - ci) * (ri1 === 0 ? 1 : 60));
        }
    }
});
// TODO: Only run even numbers; go up to 16; include closed form
// https://www.reddit.com/r/factorio/comments/67xgge/nuclear_ratios/
setup_1.staticTable("nuclear", [
    [setup_1.item("nuclear-reactor"), setup_1.item("offshore-pump"), setup_1.item("heat-exchanger"), setup_1.item("steam-turbine"), setup_1.text("Power (MW)")],
    [1, 1, 4, 7, 40],
    [2, 2, 16, 28, 160],
    [4, 5, 48, 83, 580],
    [6, 7, 80, 138, 800],
    [8, 10, 112, 193, 1120]
    // TODO: Include closed-form for last row
]);
// TODO: Figure out a closed-form mathy way to do this
// e.g. http://www.wolframalpha.com/input/?i=odds+of+40+or+more+successes+in+8000+trials+p%3D0.007
setup_1.staticTable("kovarex", [
    [setup_1.item("uranium-ore"), "Chance"],
    [setup_1.large(40000), setup_1.g(2, "%")],
    [setup_1.large(45000), setup_1.g(8, "%")],
    [setup_1.large(50000), setup_1.g(22, "%")],
    [setup_1.large(55000), setup_1.g(43, "%")],
    [setup_1.large(60000), setup_1.g(64, "%")],
    [setup_1.large(65000), setup_1.g(81, "%")],
    [setup_1.large(70000), setup_1.g(92, "%")],
    [setup_1.large(75000), setup_1.g(97, "%")],
    [setup_1.large(80000), setup_1.g(99, "%")]
]);
setup_1.basicTable({
    table: "nuclear-runtime",
    origin: "Patch Size",
    rows: [10, 25, 50, 100, 250, 500, 1000, 1500].map(n => n * 1000),
    rowHeader: n => setup_1.large(n),
    cols: [1, 2, 4, 8, 12, 20],
    colHeader: n => setup_1.nOf(n, setup_1.item("nuclear-reactor")),
    cell: (patchSize, nReactors) => {
        const fuelCells = 630 / 10000 * patchSize;
        const reactorSeconds = fuelCells * 200;
        const seconds = reactorSeconds / nReactors;
        return setup_1.long_time(seconds);
    }
});
/******* Mining ***********/
//  Regular ores come out at 0.525/s, stone at 0.65/s
//  Steel / electric furnaces are twice as fast
//  Iron/copper plate smelts at 1 ore / 3.5s
//  
//  Stone brick smelts 2 ore / 3.5s
//  Steel / electric furnaces are twice as fast
setup_1.staticTable("minersPerFurnace", [
    [setup_1.text("Output"), setup_1.item("stone-furnace"), setup_1.itemGroup("steel-furnace", "electric-furnace")],
    [setup_1.itemGroup("iron-plate", "copper-plate"),
        setup_1.ratio(setup_1.nOf(6, setup_1.item("electric-mining-drill")), setup_1.nOf(11, setup_1.item("stone-furnace"))),
        setup_1.ratio(setup_1.nOf(12, setup_1.item("electric-mining-drill")), setup_1.nOf(11, setup_1.item("steel-furnace")))],
    [setup_1.item("stone-brick"),
        setup_1.ratio(setup_1.nOf(7, setup_1.item("electric-mining-drill")), setup_1.nOf(8, setup_1.item("stone-furnace"))),
        setup_1.ratio(setup_1.nOf(7, setup_1.item("electric-mining-drill")), setup_1.nOf(4, setup_1.item("steel-furnace")))],
]);
function groupBy(items, keyFunc) {
    const outputs = [];
    for (const item of items) {
        const key = keyFunc(item);
        let group = undefined;
        for (const g of outputs) {
            if (g.key === key) {
                group = g;
                break;
            }
        }
        if (group === undefined) {
            outputs.push({ key, items: [item] });
        }
        else {
            group.items.push(item);
        }
    }
    return outputs;
}
/******* Assemblers and Belts ***********/
const interestingRecipes = [
    "transport-belt", "fast-transport-belt", "express-transport-belt",
    "inserter",
    "rail", "assembling-machine-1", "assembling-machine-2",
    "electronic-circuit", "processing-unit", "advanced-circuit",
    "rocket-fuel", "low-density-structure", "rocket-control-unit"
];
const recipeList = Object.keys(recipes_1.recipes).map(k => recipes_1.recipes[k]).filter(r => interestingRecipes.indexOf(r.name) >= 0);
recipeList.sort((a, b) => interestingRecipes.indexOf(a.name) - interestingRecipes.indexOf(b.name));
const recipeGroups = groupBy(recipeList, r => r.energy);
recipeGroups.sort((a, b) => a.key - b.key);
setup_1.doubleRowHeaderTable({
    table: "crafting",
    origin1: "Recipe / Speed",
    origin2: "Belt",
    cell: (r1, r2, c) => {
        return Math.ceil(r2.throughput * (r1.key / c.speed));
    },
    cols: setup_1.Assemblers,
    rows1: recipeGroups,
    rows2: setup_1.Belts,
    row1Header: r => setup_1.g(setup_1.p(r.key + 's'), setup_1.itemGroup(...r.items.map(i => i.name))),
    row2Header: r => setup_1.item(r.name)
});
/******* Steam Power ***********/
setup_1.staticTable("steam", [
    [setup_1.item("offshore-pump"), setup_1.item("boiler"), setup_1.item("steam-engine"), setup_1.item("electric-mining-drill"), setup_1.text("Power")],
    [setup_1.integer(1), setup_1.integer(20), setup_1.integer(40), setup_1.integer(18), setup_1.fixed(40 * 0.780, "MW")]
]);
// Boilers consume 1.8 MW and there are 20 of them per setup
const wattsConsumedPerSetup = 1800 * 20;
setup_1.basicTable({
    origin: setup_1.text(''),
    table: "steam-advanced",
    cell: (fuel, belt) => {
        const wattsProvided = fuel.energy * belt.throughput;
        return setup_1.fixed(wattsProvided / wattsConsumedPerSetup);
    },
    cols: setup_1.Belts,
    rows: setup_1.Fuels
});
const itemList = [
    ["Ores", ["iron-ore", "copper-ore", "coal", "stone", "uranium-ore"]],
    ["Smelted", ["iron-plate", "steel-plate", "copper-plate", "stone-brick", "uranium-235", "uranium-238"]],
    ["Intermediates", ["copper-cable", "electronic-circuit", "advanced-circuit", "battery", "science-pack-1", "processing-unit", "plastic-bar", "iron-gear-wheel"]],
    ["Logistics", ["transport-belt", "pipe", "rail", "repair-pack", "stone-wall", "splitter", "pipe-to-ground", "rail-signal", "train-stop"]],
    ["Power", ["small-electric-pole", "medium-electric-pole", "big-electric-pole", "substation", "solar-panel", "accumulator", "small-lamp"]],
    ["Trains", ["cargo-wagon", "locomotive", "fluid-wagon"]],
    ["Tiles", ["concrete", "hazard-concrete", "landfill"]],
    ["Ammo (all tiers)", ["piercing-rounds-magazine", "shotgun-shell", "cannon-shell", "explosive-rocket"]],
    ["Other Weapons", ["grenade", "cluster-grenade", "atomic-bomb", "land-mine"]],
    ["Rocket Parts", ["low-density-structure", "rocket-control-unit", "rocket-fuel"]]
];
function makeStackSizeTable() {
    const result = [];
    result.push(["Category", "Items", "Size"]);
    for (let i = 0; i < itemList.length; i++) {
        let sizes = [];
        let outputs = [];
        for (let j = 0; j < itemList[i][1].length; j++) {
            let size = items_1.items[itemList[i][1][j]].stack_size;
            let idx = sizes.indexOf(size);
            if (idx < 0) {
                idx = sizes.push(size) - 1;
                outputs.push([]);
            }
            outputs[idx].push(itemList[i][1][j]);
        }
        for (let j = 0; j < sizes.length; j++) {
            result.push([itemList[i][0], setup_1.itemGroup(...outputs[j]), sizes[j]]);
        }
    }
    return result;
}
/******* Stack sizes ***********/
setup_1.staticTable("stack-sizes", makeStackSizeTable());
/******* Storage ***********/
const goodNumbers = [1, 2, 4, 8, 16, 32, 64, 128, undefined];
setup_1.basicTable({
    origin: setup_1.text("#"),
    table: "storage",
    cols: setup_1.Boxes,
    rows: goodNumbers,
    rowHeader: c => c === undefined ? setup_1.text("(slots)") : setup_1.toElement(c),
    cell: (row, col) => {
        if (row === undefined) {
            return setup_1.integer(col.size);
        }
        return setup_1.large(row * col.size * 100);
    }
});
const baseLiqRatio = [
    1 / 3,
    50,
    25,
    3,
    9,
    8.75,
    7,
    17.5 // Plastic output
];
/******* Pure coal to Plastic ***********/
// https://docs.google.com/spreadsheets/d/1VzSvviSJdFffIQPJJCHYEy11BlT36NWPieb_yaEcnGk/edit?usp=sharing
setup_1.staticTable("coal-to-plastic", [
    [setup_1.item("offshore-pump"),
        setup_1.item("coal"),
        setup_1.item("oil-refinery"),
        setup_1.item("heavy-oil-cracking"),
        setup_1.item("light-oil-cracking"),
        setup_1.item("coal"),
        setup_1.item("chemical-plant"),
        setup_1.item("plastic-bar")],
    baseLiqRatio.map(setup_1.ceil),
    baseLiqRatio.map(n => setup_1.ceil(n * 2)),
    baseLiqRatio.map(n => setup_1.ceil(n * 3)),
    baseLiqRatio.map(n => setup_1.ceil(n * 4))
]);
const baseAdvancedToFuelRatio = [
    1,
    50,
    25,
    5,
    63,
    33,
    40 // Output
];
setup_1.basicTable({
    table: "advanced-oil-to-fuel",
    rows: [1 / 25, 5 / 25, 10 / 25, 15 / 25, 20 / 25, 1],
    cols: [setup_1.item("crude-oil"), setup_1.item("oil-refinery"), setup_1.item("heavy-oil-cracking"), setup_1.item("solid-fuel-from-light-oil"), setup_1.item("solid-fuel-from-petroleum-gas"), setup_1.item("solid-fuel")],
    origin: setup_1.item("offshore-pump"),
    rowHeader: r => setup_1.ceil(r),
    cell: (r, c, ri, ci) => {
        return setup_1.ceil(r * baseBasicToFuelRatio[ci]);
    }
});
const baseBasicToFuelRatio = [
    25,
    50,
    18,
    36,
    24,
    32.5 // Output
];
setup_1.basicTable({
    table: "basic-oil-to-fuel",
    rows: [1 / 25, 6 / 25, 10 / 25, 15 / 25, 20 / 25, 1],
    cols: [setup_1.item("crude-oil"), setup_1.item("solid-fuel-from-heavy-oil"), setup_1.item("solid-fuel-from-light-oil"), setup_1.item("solid-fuel-from-petroleum-gas"), setup_1.item("solid-fuel")],
    origin: setup_1.item("oil-refinery"),
    rowHeader: r => setup_1.ceil(r * baseBasicToFuelRatio[0]),
    cell: (r, c, ri, ci) => {
        return setup_1.ceil(r * baseBasicToFuelRatio[ci + 1]);
    }
});


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.items = {
    "wooden-chest": {
        "type": "item",
        "name": "wooden-chest",
        "flags": {
            "goes-to-quickbar": true
        },
        "fuel_category": "chemical",
        "stack_size": 50,
        "fuel_value": 4000000
    },
    "iron-chest": {
        "type": "item",
        "name": "iron-chest",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "steel-chest": {
        "type": "item",
        "name": "steel-chest",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "storage-tank": {
        "type": "item",
        "name": "storage-tank",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "item-with-tags": {
        "type": "item-with-tags",
        "name": "item-with-tags",
        "flags": {
            "goes-to-quickbar": true,
            "hidden": true
        },
        "stack_size": 1,
        "fuel_value": 0
    },
    "simple-entity-with-force": {
        "type": "item",
        "name": "simple-entity-with-force",
        "flags": {
            "goes-to-quickbar": true,
            "hidden": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "simple-entity-with-owner": {
        "type": "item",
        "name": "simple-entity-with-owner",
        "flags": {
            "goes-to-quickbar": true,
            "hidden": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "transport-belt": {
        "type": "item",
        "name": "transport-belt",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 100,
        "fuel_value": 0
    },
    "fast-transport-belt": {
        "type": "item",
        "name": "fast-transport-belt",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 100,
        "fuel_value": 0
    },
    "express-transport-belt": {
        "type": "item",
        "name": "express-transport-belt",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 100,
        "fuel_value": 0
    },
    "underground-belt": {
        "type": "item",
        "name": "underground-belt",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "fast-underground-belt": {
        "type": "item",
        "name": "fast-underground-belt",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "express-underground-belt": {
        "type": "item",
        "name": "express-underground-belt",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "splitter": {
        "type": "item",
        "name": "splitter",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "fast-splitter": {
        "type": "item",
        "name": "fast-splitter",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "express-splitter": {
        "type": "item",
        "name": "express-splitter",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "loader": {
        "type": "item",
        "name": "loader",
        "flags": {
            "goes-to-quickbar": true,
            "hidden": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "fast-loader": {
        "type": "item",
        "name": "fast-loader",
        "flags": {
            "goes-to-quickbar": true,
            "hidden": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "express-loader": {
        "type": "item",
        "name": "express-loader",
        "flags": {
            "goes-to-quickbar": true,
            "hidden": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "burner-inserter": {
        "type": "item",
        "name": "burner-inserter",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "inserter": {
        "type": "item",
        "name": "inserter",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "long-handed-inserter": {
        "type": "item",
        "name": "long-handed-inserter",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "fast-inserter": {
        "type": "item",
        "name": "fast-inserter",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "filter-inserter": {
        "type": "item",
        "name": "filter-inserter",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "stack-inserter": {
        "type": "item",
        "name": "stack-inserter",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "stack-filter-inserter": {
        "type": "item",
        "name": "stack-filter-inserter",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "small-electric-pole": {
        "type": "item",
        "name": "small-electric-pole",
        "flags": {
            "goes-to-quickbar": true
        },
        "fuel_category": "chemical",
        "stack_size": 50,
        "fuel_value": 4000000
    },
    "medium-electric-pole": {
        "type": "item",
        "name": "medium-electric-pole",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "big-electric-pole": {
        "type": "item",
        "name": "big-electric-pole",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "substation": {
        "type": "item",
        "name": "substation",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "pipe": {
        "type": "item",
        "name": "pipe",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 100,
        "fuel_value": 0
    },
    "pipe-to-ground": {
        "type": "item",
        "name": "pipe-to-ground",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "pump": {
        "type": "item",
        "name": "pump",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "rail": {
        "type": "rail-planner",
        "name": "rail",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 100,
        "fuel_value": 0
    },
    "train-stop": {
        "type": "item",
        "name": "train-stop",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 10,
        "fuel_value": 0
    },
    "rail-signal": {
        "type": "item",
        "name": "rail-signal",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "rail-chain-signal": {
        "type": "item",
        "name": "rail-chain-signal",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "locomotive": {
        "type": "item-with-entity-data",
        "name": "locomotive",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 5,
        "fuel_value": 0
    },
    "cargo-wagon": {
        "type": "item-with-entity-data",
        "name": "cargo-wagon",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 5,
        "fuel_value": 0
    },
    "fluid-wagon": {
        "type": "item-with-entity-data",
        "name": "fluid-wagon",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 5,
        "fuel_value": 0
    },
    "car": {
        "type": "item-with-entity-data",
        "name": "car",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 1,
        "fuel_value": 0
    },
    "tank": {
        "type": "item-with-entity-data",
        "name": "tank",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 1,
        "fuel_value": 0
    },
    "small-plane": {
        "type": "item",
        "name": "small-plane",
        "flags": {
            "goes-to-quickbar": true,
            "hidden": true
        },
        "stack_size": 1,
        "fuel_value": 0
    },
    "logistic-robot": {
        "type": "item",
        "name": "logistic-robot",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "construction-robot": {
        "type": "item",
        "name": "construction-robot",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "logistic-chest-active-provider": {
        "type": "item",
        "name": "logistic-chest-active-provider",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "logistic-chest-passive-provider": {
        "type": "item",
        "name": "logistic-chest-passive-provider",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "logistic-chest-requester": {
        "type": "item",
        "name": "logistic-chest-requester",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "logistic-chest-storage": {
        "type": "item",
        "name": "logistic-chest-storage",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "roboport": {
        "type": "item",
        "name": "roboport",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 5,
        "fuel_value": 0
    },
    "small-lamp": {
        "type": "item",
        "name": "small-lamp",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "red-wire": {
        "type": "item",
        "name": "red-wire",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 200,
        "fuel_value": 0
    },
    "green-wire": {
        "type": "item",
        "name": "green-wire",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 200,
        "fuel_value": 0
    },
    "arithmetic-combinator": {
        "type": "item",
        "name": "arithmetic-combinator",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "decider-combinator": {
        "type": "item",
        "name": "decider-combinator",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "constant-combinator": {
        "type": "item",
        "name": "constant-combinator",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "power-switch": {
        "type": "item",
        "name": "power-switch",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "programmable-speaker": {
        "type": "item",
        "name": "programmable-speaker",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "stone-brick": {
        "type": "item",
        "name": "stone-brick",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 100,
        "fuel_value": 0
    },
    "concrete": {
        "type": "item",
        "name": "concrete",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 100,
        "fuel_value": 0
    },
    "hazard-concrete": {
        "type": "item",
        "name": "hazard-concrete",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 100,
        "fuel_value": 0
    },
    "landfill": {
        "type": "item",
        "name": "landfill",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 100,
        "fuel_value": 0
    },
    "iron-axe": {
        "type": "mining-tool",
        "name": "iron-axe",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 20,
        "fuel_value": 0
    },
    "steel-axe": {
        "type": "mining-tool",
        "name": "steel-axe",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 20,
        "fuel_value": 0
    },
    "repair-pack": {
        "type": "repair-tool",
        "name": "repair-pack",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 100,
        "fuel_value": 0
    },
    "blueprint": {
        "type": "blueprint",
        "name": "blueprint",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 1,
        "fuel_value": 0
    },
    "dummy-selection-tool": {
        "type": "selection-tool",
        "name": "dummy-selection-tool",
        "flags": {
            "goes-to-quickbar": true,
            "hidden": true
        },
        "stack_size": 1,
        "fuel_value": 0
    },
    "deconstruction-planner": {
        "type": "deconstruction-item",
        "name": "deconstruction-planner",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 1,
        "fuel_value": 0
    },
    "blueprint-book": {
        "type": "blueprint-book",
        "name": "blueprint-book",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 1,
        "fuel_value": 0
    },
    "boiler": {
        "type": "item",
        "name": "boiler",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "steam-engine": {
        "type": "item",
        "name": "steam-engine",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 10,
        "fuel_value": 0
    },
    "steam-turbine": {
        "type": "item",
        "name": "steam-turbine",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 10,
        "fuel_value": 0
    },
    "solar-panel": {
        "type": "item",
        "name": "solar-panel",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "accumulator": {
        "type": "item",
        "name": "accumulator",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "electric-energy-interface": {
        "type": "item",
        "name": "electric-energy-interface",
        "flags": {
            "goes-to-quickbar": true,
            "hidden": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "nuclear-reactor": {
        "type": "item",
        "name": "nuclear-reactor",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "heat-exchanger": {
        "type": "item",
        "name": "heat-exchanger",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "heat-pipe": {
        "type": "item",
        "name": "heat-pipe",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "burner-mining-drill": {
        "type": "item",
        "name": "burner-mining-drill",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "electric-mining-drill": {
        "type": "item",
        "name": "electric-mining-drill",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "offshore-pump": {
        "type": "item",
        "name": "offshore-pump",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 20,
        "fuel_value": 0
    },
    "pumpjack": {
        "type": "item",
        "name": "pumpjack",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 20,
        "fuel_value": 0
    },
    "stone-furnace": {
        "type": "item",
        "name": "stone-furnace",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "steel-furnace": {
        "type": "item",
        "name": "steel-furnace",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "electric-furnace": {
        "type": "item",
        "name": "electric-furnace",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "assembling-machine-1": {
        "type": "item",
        "name": "assembling-machine-1",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "assembling-machine-2": {
        "type": "item",
        "name": "assembling-machine-2",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "assembling-machine-3": {
        "type": "item",
        "name": "assembling-machine-3",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "oil-refinery": {
        "type": "item",
        "name": "oil-refinery",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 10,
        "fuel_value": 0
    },
    "chemical-plant": {
        "type": "item",
        "name": "chemical-plant",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 10,
        "fuel_value": 0
    },
    "centrifuge": {
        "type": "item",
        "name": "centrifuge",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "lab": {
        "type": "item",
        "name": "lab",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 10,
        "fuel_value": 0
    },
    "beacon": {
        "type": "item",
        "name": "beacon",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 10,
        "fuel_value": 0
    },
    "speed-module": {
        "type": "module",
        "name": "speed-module",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "speed-module-2": {
        "type": "module",
        "name": "speed-module-2",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "speed-module-3": {
        "type": "module",
        "name": "speed-module-3",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "effectivity-module": {
        "type": "module",
        "name": "effectivity-module",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "effectivity-module-2": {
        "type": "module",
        "name": "effectivity-module-2",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "effectivity-module-3": {
        "type": "module",
        "name": "effectivity-module-3",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "productivity-module": {
        "type": "module",
        "name": "productivity-module",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "productivity-module-2": {
        "type": "module",
        "name": "productivity-module-2",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "productivity-module-3": {
        "type": "module",
        "name": "productivity-module-3",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "solid-fuel": {
        "type": "item",
        "name": "solid-fuel",
        "flags": {
            "goes-to-main-inventory": true
        },
        "fuel_category": "chemical",
        "stack_size": 50,
        "fuel_value": 25000000
    },
    "stone": {
        "type": "item",
        "name": "stone",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "iron-ore": {
        "type": "item",
        "name": "iron-ore",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "raw-fish": {
        "type": "capsule",
        "name": "raw-fish",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 100,
        "fuel_value": 0
    },
    "copper-ore": {
        "type": "item",
        "name": "copper-ore",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "uranium-ore": {
        "type": "item",
        "name": "uranium-ore",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "raw-wood": {
        "type": "item",
        "name": "raw-wood",
        "flags": {
            "goes-to-main-inventory": true
        },
        "fuel_category": "chemical",
        "stack_size": 100,
        "fuel_value": 4000000
    },
    "wood": {
        "type": "item",
        "name": "wood",
        "flags": {
            "goes-to-main-inventory": true
        },
        "fuel_category": "chemical",
        "stack_size": 50,
        "fuel_value": 2000000
    },
    "coal": {
        "type": "item",
        "name": "coal",
        "flags": {
            "goes-to-main-inventory": true
        },
        "fuel_category": "chemical",
        "stack_size": 50,
        "fuel_value": 8000000
    },
    "iron-plate": {
        "type": "item",
        "name": "iron-plate",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 100,
        "fuel_value": 0
    },
    "copper-plate": {
        "type": "item",
        "name": "copper-plate",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 100,
        "fuel_value": 0
    },
    "steel-plate": {
        "type": "item",
        "name": "steel-plate",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 100,
        "fuel_value": 0
    },
    "sulfur": {
        "type": "item",
        "name": "sulfur",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "plastic-bar": {
        "type": "item",
        "name": "plastic-bar",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 100,
        "fuel_value": 0
    },
    "crude-oil-barrel": {
        "type": "item",
        "name": "crude-oil-barrel",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 10,
        "fuel_value": 0
    },
    "heavy-oil-barrel": {
        "type": "item",
        "name": "heavy-oil-barrel",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 10,
        "fuel_value": 0
    },
    "light-oil-barrel": {
        "type": "item",
        "name": "light-oil-barrel",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 10,
        "fuel_value": 0
    },
    "lubricant-barrel": {
        "type": "item",
        "name": "lubricant-barrel",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 10,
        "fuel_value": 0
    },
    "petroleum-gas-barrel": {
        "type": "item",
        "name": "petroleum-gas-barrel",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 10,
        "fuel_value": 0
    },
    "sulfuric-acid-barrel": {
        "type": "item",
        "name": "sulfuric-acid-barrel",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 10,
        "fuel_value": 0
    },
    "water-barrel": {
        "type": "item",
        "name": "water-barrel",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 10,
        "fuel_value": 0
    },
    "copper-cable": {
        "type": "item",
        "name": "copper-cable",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 200,
        "fuel_value": 0
    },
    "iron-stick": {
        "type": "item",
        "name": "iron-stick",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 100,
        "fuel_value": 0
    },
    "iron-gear-wheel": {
        "type": "item",
        "name": "iron-gear-wheel",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 100,
        "fuel_value": 0
    },
    "empty-barrel": {
        "type": "item",
        "name": "empty-barrel",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 10,
        "fuel_value": 0
    },
    "electronic-circuit": {
        "type": "item",
        "name": "electronic-circuit",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 200,
        "fuel_value": 0
    },
    "advanced-circuit": {
        "type": "item",
        "name": "advanced-circuit",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 200,
        "fuel_value": 0
    },
    "processing-unit": {
        "type": "item",
        "name": "processing-unit",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 100,
        "fuel_value": 0
    },
    "uranium-235": {
        "type": "item",
        "name": "uranium-235",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 100,
        "fuel_value": 0
    },
    "uranium-238": {
        "type": "item",
        "name": "uranium-238",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 100,
        "fuel_value": 0
    },
    "engine-unit": {
        "type": "item",
        "name": "engine-unit",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "electric-engine-unit": {
        "type": "item",
        "name": "electric-engine-unit",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "used-up-uranium-fuel-cell": {
        "type": "item",
        "name": "used-up-uranium-fuel-cell",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "battery": {
        "type": "item",
        "name": "battery",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 200,
        "fuel_value": 0
    },
    "explosives": {
        "type": "item",
        "name": "explosives",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "flying-robot-frame": {
        "type": "item",
        "name": "flying-robot-frame",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "low-density-structure": {
        "type": "item",
        "name": "low-density-structure",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 10,
        "fuel_value": 0
    },
    "rocket-fuel": {
        "type": "item",
        "name": "rocket-fuel",
        "flags": {
            "goes-to-main-inventory": true
        },
        "fuel_category": "chemical",
        "stack_size": 10,
        "fuel_value": 225000000
    },
    "rocket-control-unit": {
        "type": "item",
        "name": "rocket-control-unit",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 10,
        "fuel_value": 0
    },
    "rocket-part": {
        "type": "item",
        "name": "rocket-part",
        "flags": {
            "goes-to-main-inventory": true,
            "hidden": true
        },
        "stack_size": 5,
        "fuel_value": 0
    },
    "satellite": {
        "type": "item",
        "name": "satellite",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 1,
        "fuel_value": 0
    },
    "uranium-fuel-cell": {
        "type": "item",
        "name": "uranium-fuel-cell",
        "flags": {
            "goes-to-main-inventory": true
        },
        "fuel_category": "nuclear",
        "stack_size": 50,
        "fuel_value": 8000000000
    },
    "science-pack-1": {
        "type": "tool",
        "name": "science-pack-1",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 200,
        "fuel_value": 0
    },
    "science-pack-2": {
        "type": "tool",
        "name": "science-pack-2",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 200,
        "fuel_value": 0
    },
    "science-pack-3": {
        "type": "tool",
        "name": "science-pack-3",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 200,
        "fuel_value": 0
    },
    "military-science-pack": {
        "type": "tool",
        "name": "military-science-pack",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 200,
        "fuel_value": 0
    },
    "production-science-pack": {
        "type": "tool",
        "name": "production-science-pack",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 200,
        "fuel_value": 0
    },
    "high-tech-science-pack": {
        "type": "tool",
        "name": "high-tech-science-pack",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 200,
        "fuel_value": 0
    },
    "space-science-pack": {
        "type": "tool",
        "name": "space-science-pack",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 2000,
        "fuel_value": 0
    },
    "coin": {
        "type": "item",
        "name": "coin",
        "flags": {
            "goes-to-quickbar": true,
            "hidden": true
        },
        "stack_size": 100000,
        "fuel_value": 0
    },
    "pistol": {
        "type": "gun",
        "name": "pistol",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 5,
        "fuel_value": 0
    },
    "submachine-gun": {
        "type": "gun",
        "name": "submachine-gun",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 1,
        "fuel_value": 0
    },
    "tank-machine-gun": {
        "type": "gun",
        "name": "tank-machine-gun",
        "flags": {
            "goes-to-main-inventory": true,
            "hidden": true
        },
        "stack_size": 1,
        "fuel_value": 0
    },
    "vehicle-machine-gun": {
        "type": "gun",
        "name": "vehicle-machine-gun",
        "flags": {
            "goes-to-main-inventory": true,
            "hidden": true
        },
        "stack_size": 1,
        "fuel_value": 0
    },
    "tank-flamethrower": {
        "type": "gun",
        "name": "tank-flamethrower",
        "flags": {
            "goes-to-main-inventory": true,
            "hidden": true
        },
        "stack_size": 1,
        "fuel_value": 0
    },
    "shotgun": {
        "type": "gun",
        "name": "shotgun",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 5,
        "fuel_value": 0
    },
    "combat-shotgun": {
        "type": "gun",
        "name": "combat-shotgun",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 5,
        "fuel_value": 0
    },
    "railgun": {
        "type": "gun",
        "name": "railgun",
        "flags": {
            "goes-to-main-inventory": true,
            "hidden": true
        },
        "stack_size": 5,
        "fuel_value": 0
    },
    "rocket-launcher": {
        "type": "gun",
        "name": "rocket-launcher",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 5,
        "fuel_value": 0
    },
    "flamethrower": {
        "type": "gun",
        "name": "flamethrower",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 5,
        "fuel_value": 0
    },
    "land-mine": {
        "type": "item",
        "name": "land-mine",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 100,
        "fuel_value": 0
    },
    "tank-cannon": {
        "type": "gun",
        "name": "tank-cannon",
        "flags": {
            "goes-to-main-inventory": true,
            "hidden": true
        },
        "stack_size": 5,
        "fuel_value": 0
    },
    "firearm-magazine": {
        "type": "ammo",
        "name": "firearm-magazine",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 200,
        "fuel_value": 0
    },
    "piercing-rounds-magazine": {
        "type": "ammo",
        "name": "piercing-rounds-magazine",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 200,
        "fuel_value": 0
    },
    "uranium-rounds-magazine": {
        "type": "ammo",
        "name": "uranium-rounds-magazine",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 200,
        "fuel_value": 0
    },
    "shotgun-shell": {
        "type": "ammo",
        "name": "shotgun-shell",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 200,
        "fuel_value": 0
    },
    "piercing-shotgun-shell": {
        "type": "ammo",
        "name": "piercing-shotgun-shell",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 200,
        "fuel_value": 0
    },
    "railgun-dart": {
        "type": "ammo",
        "name": "railgun-dart",
        "flags": {
            "goes-to-main-inventory": true,
            "hidden": true
        },
        "stack_size": 200,
        "fuel_value": 0
    },
    "cannon-shell": {
        "type": "ammo",
        "name": "cannon-shell",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 200,
        "fuel_value": 0
    },
    "explosive-cannon-shell": {
        "type": "ammo",
        "name": "explosive-cannon-shell",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 200,
        "fuel_value": 0
    },
    "uranium-cannon-shell": {
        "type": "ammo",
        "name": "uranium-cannon-shell",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 200,
        "fuel_value": 0
    },
    "explosive-uranium-cannon-shell": {
        "type": "ammo",
        "name": "explosive-uranium-cannon-shell",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 200,
        "fuel_value": 0
    },
    "rocket": {
        "type": "ammo",
        "name": "rocket",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 200,
        "fuel_value": 0
    },
    "explosive-rocket": {
        "type": "ammo",
        "name": "explosive-rocket",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 200,
        "fuel_value": 0
    },
    "atomic-bomb": {
        "type": "ammo",
        "name": "atomic-bomb",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 10,
        "fuel_value": 0
    },
    "flamethrower-ammo": {
        "type": "ammo",
        "name": "flamethrower-ammo",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 100,
        "fuel_value": 0
    },
    "grenade": {
        "type": "capsule",
        "name": "grenade",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 100,
        "fuel_value": 0
    },
    "cluster-grenade": {
        "type": "capsule",
        "name": "cluster-grenade",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 100,
        "fuel_value": 0
    },
    "poison-capsule": {
        "type": "capsule",
        "name": "poison-capsule",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 100,
        "fuel_value": 0
    },
    "slowdown-capsule": {
        "type": "capsule",
        "name": "slowdown-capsule",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 100,
        "fuel_value": 0
    },
    "defender-capsule": {
        "type": "capsule",
        "name": "defender-capsule",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 100,
        "fuel_value": 0
    },
    "distractor-capsule": {
        "type": "capsule",
        "name": "distractor-capsule",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 100,
        "fuel_value": 0
    },
    "destroyer-capsule": {
        "type": "capsule",
        "name": "destroyer-capsule",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 100,
        "fuel_value": 0
    },
    "discharge-defense-remote": {
        "type": "capsule",
        "name": "discharge-defense-remote",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 1,
        "fuel_value": 0
    },
    "light-armor": {
        "type": "armor",
        "name": "light-armor",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 10,
        "fuel_value": 0
    },
    "heavy-armor": {
        "type": "armor",
        "name": "heavy-armor",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 10,
        "fuel_value": 0
    },
    "modular-armor": {
        "type": "armor",
        "name": "modular-armor",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 1,
        "fuel_value": 0
    },
    "power-armor": {
        "type": "armor",
        "name": "power-armor",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 1,
        "fuel_value": 0
    },
    "power-armor-mk2": {
        "type": "armor",
        "name": "power-armor-mk2",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 1,
        "fuel_value": 0
    },
    "belt-immunity-equipment": {
        "type": "item",
        "name": "belt-immunity-equipment",
        "flags": {
            "goes-to-main-inventory": true,
            "hidden": true
        },
        "stack_size": 1,
        "fuel_value": 0
    },
    "solar-panel-equipment": {
        "type": "item",
        "name": "solar-panel-equipment",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 20,
        "fuel_value": 0
    },
    "fusion-reactor-equipment": {
        "type": "item",
        "name": "fusion-reactor-equipment",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 20,
        "fuel_value": 0
    },
    "energy-shield-equipment": {
        "type": "item",
        "name": "energy-shield-equipment",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "energy-shield-mk2-equipment": {
        "type": "item",
        "name": "energy-shield-mk2-equipment",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "battery-equipment": {
        "type": "item",
        "name": "battery-equipment",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "battery-mk2-equipment": {
        "type": "item",
        "name": "battery-mk2-equipment",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "personal-laser-defense-equipment": {
        "type": "item",
        "name": "personal-laser-defense-equipment",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 20,
        "fuel_value": 0
    },
    "discharge-defense-equipment": {
        "type": "item",
        "name": "discharge-defense-equipment",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 20,
        "fuel_value": 0
    },
    "exoskeleton-equipment": {
        "type": "item",
        "name": "exoskeleton-equipment",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 10,
        "fuel_value": 0
    },
    "personal-roboport-equipment": {
        "type": "item",
        "name": "personal-roboport-equipment",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 5,
        "fuel_value": 0
    },
    "personal-roboport-mk2-equipment": {
        "type": "item",
        "name": "personal-roboport-mk2-equipment",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 5,
        "fuel_value": 0
    },
    "night-vision-equipment": {
        "type": "item",
        "name": "night-vision-equipment",
        "flags": {
            "goes-to-main-inventory": true
        },
        "stack_size": 20,
        "fuel_value": 0
    },
    "stone-wall": {
        "type": "item",
        "name": "stone-wall",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 100,
        "fuel_value": 0
    },
    "gate": {
        "type": "item",
        "name": "gate",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "gun-turret": {
        "type": "item",
        "name": "gun-turret",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "laser-turret": {
        "type": "item",
        "name": "laser-turret",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "flamethrower-turret": {
        "type": "item",
        "name": "flamethrower-turret",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "radar": {
        "type": "item",
        "name": "radar",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 50,
        "fuel_value": 0
    },
    "rocket-silo": {
        "type": "item",
        "name": "rocket-silo",
        "flags": {
            "goes-to-quickbar": true
        },
        "stack_size": 1,
        "fuel_value": 0
    },
    "computer": {
        "type": "item",
        "name": "computer",
        "flags": {
            "goes-to-quickbar": true,
            "hidden": true
        },
        "stack_size": 1,
        "fuel_value": 0
    },
    "player-port": {
        "type": "item",
        "name": "player-port",
        "flags": {
            "goes-to-quickbar": true,
            "hidden": true
        },
        "stack_size": 50,
        "fuel_value": 0
    }
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.recipes = {
    "assembling-machine-1": {
        "name": "assembling-machine-1",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "assembling-machine-1",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 3,
                "name": "electronic-circuit"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "iron-gear-wheel"
            },
            {
                "type": "item",
                "amount": 9,
                "name": "iron-plate"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "a[assembling-machine-1]"
    },
    "firearm-magazine": {
        "name": "firearm-magazine",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "firearm-magazine",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 4,
                "name": "iron-plate"
            }
        ],
        "hidden": false,
        "energy": 1,
        "order": "a[basic-clips]-a[firearm-magazine]"
    },
    "pistol": {
        "name": "pistol",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "pistol",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 5,
                "name": "copper-plate"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "iron-plate"
            }
        ],
        "hidden": false,
        "energy": 5,
        "order": "a[basic-clips]-a[pistol]"
    },
    "piercing-rounds-magazine": {
        "name": "piercing-rounds-magazine",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "piercing-rounds-magazine",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "firearm-magazine"
            },
            {
                "type": "item",
                "amount": 1,
                "name": "steel-plate"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "copper-plate"
            }
        ],
        "hidden": false,
        "energy": 3,
        "order": "a[basic-clips]-b[piercing-rounds-magazine]"
    },
    "submachine-gun": {
        "name": "submachine-gun",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "submachine-gun",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 10,
                "name": "iron-gear-wheel"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "copper-plate"
            },
            {
                "type": "item",
                "amount": 10,
                "name": "iron-plate"
            }
        ],
        "hidden": false,
        "energy": 10,
        "order": "a[basic-clips]-b[submachine-gun]"
    },
    "uranium-rounds-magazine": {
        "name": "uranium-rounds-magazine",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "uranium-rounds-magazine",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "piercing-rounds-magazine"
            },
            {
                "type": "item",
                "amount": 1,
                "name": "uranium-238"
            }
        ],
        "hidden": false,
        "energy": 10,
        "order": "a[basic-clips]-c[uranium-rounds-magazine]"
    },
    "beacon": {
        "name": "beacon",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "beacon",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 20,
                "name": "electronic-circuit"
            },
            {
                "type": "item",
                "amount": 20,
                "name": "advanced-circuit"
            },
            {
                "type": "item",
                "amount": 10,
                "name": "steel-plate"
            },
            {
                "type": "item",
                "amount": 10,
                "name": "copper-cable"
            }
        ],
        "hidden": false,
        "energy": 15,
        "order": "a[beacon]"
    },
    "burner-inserter": {
        "name": "burner-inserter",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "burner-inserter",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "iron-plate"
            },
            {
                "type": "item",
                "amount": 1,
                "name": "iron-gear-wheel"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "a[burner-inserter]"
    },
    "copper-cable": {
        "name": "copper-cable",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "copper-cable",
                "amount": 2
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "copper-plate"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "a[copper-cable]"
    },
    "solar-panel-equipment": {
        "name": "solar-panel-equipment",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "solar-panel-equipment",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 5,
                "name": "solar-panel"
            },
            {
                "type": "item",
                "amount": 1,
                "name": "advanced-circuit"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "steel-plate"
            }
        ],
        "hidden": false,
        "energy": 10,
        "order": "a[energy-source]-a[solar-panel]"
    },
    "fusion-reactor-equipment": {
        "name": "fusion-reactor-equipment",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "fusion-reactor-equipment",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 250,
                "name": "processing-unit"
            }
        ],
        "hidden": false,
        "energy": 10,
        "order": "a[energy-source]-b[fusion-reactor]"
    },
    "small-electric-pole": {
        "name": "small-electric-pole",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "small-electric-pole",
                "amount": 2
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 2,
                "name": "wood"
            },
            {
                "type": "item",
                "amount": 2,
                "name": "copper-cable"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "a[energy]-a[small-electric-pole]"
    },
    "medium-electric-pole": {
        "name": "medium-electric-pole",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "medium-electric-pole",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 2,
                "name": "steel-plate"
            },
            {
                "type": "item",
                "amount": 2,
                "name": "copper-plate"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "a[energy]-b[medium-electric-pole]"
    },
    "big-electric-pole": {
        "name": "big-electric-pole",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "big-electric-pole",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 5,
                "name": "steel-plate"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "copper-plate"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "a[energy]-c[big-electric-pole]"
    },
    "substation": {
        "name": "substation",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "substation",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 10,
                "name": "steel-plate"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "advanced-circuit"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "copper-plate"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "a[energy]-d[substation]"
    },
    "sulfuric-acid": {
        "name": "sulfuric-acid",
        "category": "chemistry",
        "products": [
            {
                "type": "fluid",
                "name": "sulfuric-acid",
                "amount": 50
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 5,
                "name": "sulfur"
            },
            {
                "type": "item",
                "amount": 1,
                "name": "iron-plate"
            },
            {
                "type": "fluid",
                "amount": 10,
                "name": "water"
            }
        ],
        "hidden": false,
        "energy": 1,
        "order": "a[fluid]-f[sulfuric-acid]"
    },
    "grenade": {
        "name": "grenade",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "grenade",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 5,
                "name": "iron-plate"
            },
            {
                "type": "item",
                "amount": 10,
                "name": "coal"
            }
        ],
        "hidden": false,
        "energy": 8,
        "order": "a[grenade]-a[normal]"
    },
    "cluster-grenade": {
        "name": "cluster-grenade",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "cluster-grenade",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 7,
                "name": "grenade"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "explosives"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "steel-plate"
            }
        ],
        "hidden": false,
        "energy": 8,
        "order": "a[grenade]-b[cluster]"
    },
    "burner-mining-drill": {
        "name": "burner-mining-drill",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "burner-mining-drill",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 3,
                "name": "iron-gear-wheel"
            },
            {
                "type": "item",
                "amount": 1,
                "name": "stone-furnace"
            },
            {
                "type": "item",
                "amount": 3,
                "name": "iron-plate"
            }
        ],
        "hidden": false,
        "energy": 2,
        "order": "a[items]-a[burner-mining-drill]"
    },
    "wooden-chest": {
        "name": "wooden-chest",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "wooden-chest",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 4,
                "name": "wood"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "a[items]-a[wooden-chest]"
    },
    "electric-mining-drill": {
        "name": "electric-mining-drill",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "electric-mining-drill",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 3,
                "name": "electronic-circuit"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "iron-gear-wheel"
            },
            {
                "type": "item",
                "amount": 10,
                "name": "iron-plate"
            }
        ],
        "hidden": false,
        "energy": 2,
        "order": "a[items]-b[electric-mining-drill]"
    },
    "iron-chest": {
        "name": "iron-chest",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "iron-chest",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 8,
                "name": "iron-plate"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "a[items]-b[iron-chest]"
    },
    "steel-chest": {
        "name": "steel-chest",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "steel-chest",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 8,
                "name": "steel-plate"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "a[items]-c[steel-chest]"
    },
    "light-armor": {
        "name": "light-armor",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "light-armor",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 40,
                "name": "iron-plate"
            }
        ],
        "hidden": false,
        "energy": 3,
        "order": "a[light-armor]"
    },
    "small-lamp": {
        "name": "small-lamp",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "small-lamp",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "electronic-circuit"
            },
            {
                "type": "item",
                "amount": 3,
                "name": "iron-stick"
            },
            {
                "type": "item",
                "amount": 1,
                "name": "iron-plate"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "a[light]-a[small-lamp]"
    },
    "iron-axe": {
        "name": "iron-axe",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "iron-axe",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 2,
                "name": "iron-stick"
            },
            {
                "type": "item",
                "amount": 3,
                "name": "iron-plate"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "a[mining]-a[iron-axe]"
    },
    "steel-axe": {
        "name": "steel-axe",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "steel-axe",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 5,
                "name": "steel-plate"
            },
            {
                "type": "item",
                "amount": 2,
                "name": "iron-stick"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "a[mining]-b[steel-axe]"
    },
    "basic-oil-processing": {
        "name": "basic-oil-processing",
        "category": "oil-processing",
        "products": [
            {
                "type": "fluid",
                "name": "heavy-oil",
                "amount": 30
            },
            {
                "type": "fluid",
                "name": "light-oil",
                "amount": 30
            },
            {
                "type": "fluid",
                "name": "petroleum-gas",
                "amount": 40
            }
        ],
        "ingredients": [
            {
                "type": "fluid",
                "amount": 100,
                "name": "crude-oil"
            }
        ],
        "hidden": false,
        "energy": 5,
        "order": "a[oil-processing]-a[basic-oil-processing]"
    },
    "advanced-oil-processing": {
        "name": "advanced-oil-processing",
        "category": "oil-processing",
        "products": [
            {
                "type": "fluid",
                "name": "heavy-oil",
                "amount": 10
            },
            {
                "type": "fluid",
                "name": "light-oil",
                "amount": 45
            },
            {
                "type": "fluid",
                "name": "petroleum-gas",
                "amount": 55
            }
        ],
        "ingredients": [
            {
                "type": "fluid",
                "amount": 50,
                "name": "water"
            },
            {
                "type": "fluid",
                "amount": 100,
                "name": "crude-oil"
            }
        ],
        "hidden": false,
        "energy": 5,
        "order": "a[oil-processing]-b[advanced-oil-processing]"
    },
    "coal-liquefaction": {
        "name": "coal-liquefaction",
        "category": "oil-processing",
        "products": [
            {
                "type": "fluid",
                "name": "heavy-oil",
                "amount": 35
            },
            {
                "type": "fluid",
                "name": "light-oil",
                "amount": 15
            },
            {
                "type": "fluid",
                "name": "petroleum-gas",
                "amount": 20
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 10,
                "name": "coal"
            },
            {
                "type": "fluid",
                "amount": 25,
                "name": "heavy-oil"
            },
            {
                "type": "fluid",
                "amount": 50,
                "name": "water"
            }
        ],
        "hidden": false,
        "energy": 5,
        "order": "a[oil-processing]-c[coal-liquefaction]"
    },
    "pipe": {
        "name": "pipe",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "pipe",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "iron-plate"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "a[pipe]-a[pipe]"
    },
    "pipe-to-ground": {
        "name": "pipe-to-ground",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "pipe-to-ground",
                "amount": 2
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 10,
                "name": "pipe"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "iron-plate"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "a[pipe]-b[pipe-to-ground]"
    },
    "logistic-robot": {
        "name": "logistic-robot",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "logistic-robot",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "flying-robot-frame"
            },
            {
                "type": "item",
                "amount": 2,
                "name": "advanced-circuit"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "a[robot]-a[logistic-robot]"
    },
    "construction-robot": {
        "name": "construction-robot",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "construction-robot",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "flying-robot-frame"
            },
            {
                "type": "item",
                "amount": 2,
                "name": "electronic-circuit"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "a[robot]-b[construction-robot]"
    },
    "science-pack-1": {
        "name": "science-pack-1",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "science-pack-1",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "copper-plate"
            },
            {
                "type": "item",
                "amount": 1,
                "name": "iron-gear-wheel"
            }
        ],
        "hidden": false,
        "energy": 5,
        "order": "a[science-pack-1]"
    },
    "speed-module": {
        "name": "speed-module",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "speed-module",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 5,
                "name": "advanced-circuit"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "electronic-circuit"
            }
        ],
        "hidden": false,
        "energy": 15,
        "order": "a[speed]-a[speed-module-1]"
    },
    "speed-module-2": {
        "name": "speed-module-2",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "speed-module-2",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 4,
                "name": "speed-module"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "advanced-circuit"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "processing-unit"
            }
        ],
        "hidden": false,
        "energy": 30,
        "order": "a[speed]-b[speed-module-2]"
    },
    "speed-module-3": {
        "name": "speed-module-3",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "speed-module-3",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 4,
                "name": "speed-module-2"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "advanced-circuit"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "processing-unit"
            }
        ],
        "hidden": false,
        "energy": 60,
        "order": "a[speed]-c[speed-module-3]"
    },
    "stone-brick": {
        "name": "stone-brick",
        "category": "smelting",
        "products": [
            {
                "type": "item",
                "name": "stone-brick",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 2,
                "name": "stone"
            }
        ],
        "hidden": false,
        "energy": 3.5,
        "order": "a[stone-brick]"
    },
    "stone-furnace": {
        "name": "stone-furnace",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "stone-furnace",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 5,
                "name": "stone"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "a[stone-furnace]"
    },
    "stone-wall": {
        "name": "stone-wall",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "stone-wall",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 5,
                "name": "stone-brick"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "a[stone-wall]-a[stone-wall]"
    },
    "rail": {
        "name": "rail",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "rail",
                "amount": 2
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "stone"
            },
            {
                "type": "item",
                "amount": 1,
                "name": "iron-stick"
            },
            {
                "type": "item",
                "amount": 1,
                "name": "steel-plate"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "a[train-system]-a[rail]"
    },
    "train-stop": {
        "name": "train-stop",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "train-stop",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 5,
                "name": "electronic-circuit"
            },
            {
                "type": "item",
                "amount": 10,
                "name": "iron-plate"
            },
            {
                "type": "item",
                "amount": 3,
                "name": "steel-plate"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "a[train-system]-c[train-stop]"
    },
    "rail-signal": {
        "name": "rail-signal",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "rail-signal",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "electronic-circuit"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "iron-plate"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "a[train-system]-d[rail-signal]"
    },
    "rail-chain-signal": {
        "name": "rail-chain-signal",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "rail-chain-signal",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "electronic-circuit"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "iron-plate"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "a[train-system]-e[rail-signal-chain]"
    },
    "locomotive": {
        "name": "locomotive",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "locomotive",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 20,
                "name": "engine-unit"
            },
            {
                "type": "item",
                "amount": 10,
                "name": "electronic-circuit"
            },
            {
                "type": "item",
                "amount": 30,
                "name": "steel-plate"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "a[train-system]-f[diesel-locomotive]"
    },
    "cargo-wagon": {
        "name": "cargo-wagon",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "cargo-wagon",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 10,
                "name": "iron-gear-wheel"
            },
            {
                "type": "item",
                "amount": 20,
                "name": "iron-plate"
            },
            {
                "type": "item",
                "amount": 20,
                "name": "steel-plate"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "a[train-system]-g[cargo-wagon]"
    },
    "fluid-wagon": {
        "name": "fluid-wagon",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "fluid-wagon",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 10,
                "name": "iron-gear-wheel"
            },
            {
                "type": "item",
                "amount": 16,
                "name": "steel-plate"
            },
            {
                "type": "item",
                "amount": 8,
                "name": "pipe"
            },
            {
                "type": "item",
                "amount": 3,
                "name": "storage-tank"
            }
        ],
        "hidden": false,
        "energy": 1.5,
        "order": "a[train-system]-h[fluid-wagon]"
    },
    "transport-belt": {
        "name": "transport-belt",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "transport-belt",
                "amount": 2
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "iron-plate"
            },
            {
                "type": "item",
                "amount": 1,
                "name": "iron-gear-wheel"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "a[transport-belt]-a[transport-belt]"
    },
    "fast-transport-belt": {
        "name": "fast-transport-belt",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "fast-transport-belt",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 5,
                "name": "iron-gear-wheel"
            },
            {
                "type": "item",
                "amount": 1,
                "name": "transport-belt"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "a[transport-belt]-b[fast-transport-belt]"
    },
    "express-transport-belt": {
        "name": "express-transport-belt",
        "category": "crafting-with-fluid",
        "products": [
            {
                "type": "item",
                "name": "express-transport-belt",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 10,
                "name": "iron-gear-wheel"
            },
            {
                "type": "item",
                "amount": 1,
                "name": "fast-transport-belt"
            },
            {
                "type": "fluid",
                "amount": 20,
                "name": "lubricant"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "a[transport-belt]-c[express-transport-belt]"
    },
    "gate": {
        "name": "gate",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "gate",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "stone-wall"
            },
            {
                "type": "item",
                "amount": 2,
                "name": "steel-plate"
            },
            {
                "type": "item",
                "amount": 2,
                "name": "electronic-circuit"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "a[wall]-b[gate]"
    },
    "wood": {
        "name": "wood",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "wood",
                "amount": 2
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "raw-wood"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "a[wood]"
    },
    "assembling-machine-2": {
        "name": "assembling-machine-2",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "assembling-machine-2",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 9,
                "name": "iron-plate"
            },
            {
                "type": "item",
                "amount": 3,
                "name": "electronic-circuit"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "iron-gear-wheel"
            },
            {
                "type": "item",
                "amount": 1,
                "name": "assembling-machine-1"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "b[assembling-machine-2]"
    },
    "concrete": {
        "name": "concrete",
        "category": "crafting-with-fluid",
        "products": [
            {
                "type": "item",
                "name": "concrete",
                "amount": 10
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 5,
                "name": "stone-brick"
            },
            {
                "type": "item",
                "amount": 1,
                "name": "iron-ore"
            },
            {
                "type": "fluid",
                "amount": 100,
                "name": "water"
            }
        ],
        "hidden": false,
        "energy": 10,
        "order": "b[concrete]-a[plain]"
    },
    "hazard-concrete": {
        "name": "hazard-concrete",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "hazard-concrete",
                "amount": 10
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 10,
                "name": "concrete"
            }
        ],
        "hidden": false,
        "energy": 0.25,
        "order": "b[concrete]-b[hazard]"
    },
    "fill-crude-oil-barrel": {
        "name": "fill-crude-oil-barrel",
        "category": "crafting-with-fluid",
        "products": [
            {
                "type": "item",
                "name": "crude-oil-barrel",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "empty-barrel"
            },
            {
                "type": "fluid",
                "amount": 250,
                "name": "crude-oil"
            }
        ],
        "hidden": false,
        "energy": 1,
        "order": "b[fill-crude-oil-barrel]"
    },
    "fill-heavy-oil-barrel": {
        "name": "fill-heavy-oil-barrel",
        "category": "crafting-with-fluid",
        "products": [
            {
                "type": "item",
                "name": "heavy-oil-barrel",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "empty-barrel"
            },
            {
                "type": "fluid",
                "amount": 250,
                "name": "heavy-oil"
            }
        ],
        "hidden": false,
        "energy": 1,
        "order": "b[fill-heavy-oil-barrel]"
    },
    "fill-light-oil-barrel": {
        "name": "fill-light-oil-barrel",
        "category": "crafting-with-fluid",
        "products": [
            {
                "type": "item",
                "name": "light-oil-barrel",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "empty-barrel"
            },
            {
                "type": "fluid",
                "amount": 250,
                "name": "light-oil"
            }
        ],
        "hidden": false,
        "energy": 1,
        "order": "b[fill-light-oil-barrel]"
    },
    "fill-lubricant-barrel": {
        "name": "fill-lubricant-barrel",
        "category": "crafting-with-fluid",
        "products": [
            {
                "type": "item",
                "name": "lubricant-barrel",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "empty-barrel"
            },
            {
                "type": "fluid",
                "amount": 250,
                "name": "lubricant"
            }
        ],
        "hidden": false,
        "energy": 1,
        "order": "b[fill-lubricant-barrel]"
    },
    "fill-petroleum-gas-barrel": {
        "name": "fill-petroleum-gas-barrel",
        "category": "crafting-with-fluid",
        "products": [
            {
                "type": "item",
                "name": "petroleum-gas-barrel",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "empty-barrel"
            },
            {
                "type": "fluid",
                "amount": 250,
                "name": "petroleum-gas"
            }
        ],
        "hidden": false,
        "energy": 1,
        "order": "b[fill-petroleum-gas-barrel]"
    },
    "fill-sulfuric-acid-barrel": {
        "name": "fill-sulfuric-acid-barrel",
        "category": "crafting-with-fluid",
        "products": [
            {
                "type": "item",
                "name": "sulfuric-acid-barrel",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "empty-barrel"
            },
            {
                "type": "fluid",
                "amount": 250,
                "name": "sulfuric-acid"
            }
        ],
        "hidden": false,
        "energy": 1,
        "order": "b[fill-sulfuric-acid-barrel]"
    },
    "fill-water-barrel": {
        "name": "fill-water-barrel",
        "category": "crafting-with-fluid",
        "products": [
            {
                "type": "item",
                "name": "water-barrel",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "empty-barrel"
            },
            {
                "type": "fluid",
                "amount": 250,
                "name": "water"
            }
        ],
        "hidden": false,
        "energy": 1,
        "order": "b[fill-water-barrel]"
    },
    "heavy-oil-cracking": {
        "name": "heavy-oil-cracking",
        "category": "chemistry",
        "products": [
            {
                "type": "fluid",
                "name": "light-oil",
                "amount": 30
            }
        ],
        "ingredients": [
            {
                "type": "fluid",
                "amount": 30,
                "name": "water"
            },
            {
                "type": "fluid",
                "amount": 40,
                "name": "heavy-oil"
            }
        ],
        "hidden": false,
        "energy": 3,
        "order": "b[fluid-chemistry]-a[heavy-oil-cracking]"
    },
    "light-oil-cracking": {
        "name": "light-oil-cracking",
        "category": "chemistry",
        "products": [
            {
                "type": "fluid",
                "name": "petroleum-gas",
                "amount": 20
            }
        ],
        "ingredients": [
            {
                "type": "fluid",
                "amount": 30,
                "name": "water"
            },
            {
                "type": "fluid",
                "amount": 30,
                "name": "light-oil"
            }
        ],
        "hidden": false,
        "energy": 3,
        "order": "b[fluid-chemistry]-b[light-oil-cracking]"
    },
    "solid-fuel-from-light-oil": {
        "name": "solid-fuel-from-light-oil",
        "category": "chemistry",
        "products": [
            {
                "type": "item",
                "name": "solid-fuel",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "fluid",
                "amount": 10,
                "name": "light-oil"
            }
        ],
        "hidden": false,
        "energy": 3,
        "order": "b[fluid-chemistry]-c[solid-fuel-from-light-oil]"
    },
    "solid-fuel-from-petroleum-gas": {
        "name": "solid-fuel-from-petroleum-gas",
        "category": "chemistry",
        "products": [
            {
                "type": "item",
                "name": "solid-fuel",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "fluid",
                "amount": 20,
                "name": "petroleum-gas"
            }
        ],
        "hidden": false,
        "energy": 3,
        "order": "b[fluid-chemistry]-d[solid-fuel-from-petroleum-gas]"
    },
    "solid-fuel-from-heavy-oil": {
        "name": "solid-fuel-from-heavy-oil",
        "category": "chemistry",
        "products": [
            {
                "type": "item",
                "name": "solid-fuel",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "fluid",
                "amount": 20,
                "name": "heavy-oil"
            }
        ],
        "hidden": false,
        "energy": 3,
        "order": "b[fluid-chemistry]-e[solid-fuel-from-heavy-oil]"
    },
    "storage-tank": {
        "name": "storage-tank",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "storage-tank",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 20,
                "name": "iron-plate"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "steel-plate"
            }
        ],
        "hidden": false,
        "energy": 3,
        "order": "b[fluid]-a[storage-tank]"
    },
    "offshore-pump": {
        "name": "offshore-pump",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "offshore-pump",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 2,
                "name": "electronic-circuit"
            },
            {
                "type": "item",
                "amount": 1,
                "name": "pipe"
            },
            {
                "type": "item",
                "amount": 1,
                "name": "iron-gear-wheel"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "b[fluids]-a[offshore-pump]"
    },
    "pumpjack": {
        "name": "pumpjack",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "pumpjack",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 5,
                "name": "steel-plate"
            },
            {
                "type": "item",
                "amount": 10,
                "name": "iron-gear-wheel"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "electronic-circuit"
            },
            {
                "type": "item",
                "amount": 10,
                "name": "pipe"
            }
        ],
        "hidden": false,
        "energy": 10,
        "order": "b[fluids]-b[pumpjack]"
    },
    "heavy-armor": {
        "name": "heavy-armor",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "heavy-armor",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 100,
                "name": "copper-plate"
            },
            {
                "type": "item",
                "amount": 50,
                "name": "steel-plate"
            }
        ],
        "hidden": false,
        "energy": 8,
        "order": "b[heavy-armor]"
    },
    "inserter": {
        "name": "inserter",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "inserter",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "electronic-circuit"
            },
            {
                "type": "item",
                "amount": 1,
                "name": "iron-gear-wheel"
            },
            {
                "type": "item",
                "amount": 1,
                "name": "iron-plate"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "b[inserter]"
    },
    "iron-plate": {
        "name": "iron-plate",
        "category": "smelting",
        "products": [
            {
                "type": "item",
                "name": "iron-plate",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "iron-ore"
            }
        ],
        "hidden": false,
        "energy": 3.5,
        "order": "b[iron-plate]"
    },
    "iron-stick": {
        "name": "iron-stick",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "iron-stick",
                "amount": 2
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "iron-plate"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "b[iron-stick]"
    },
    "car": {
        "name": "car",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "car",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 8,
                "name": "engine-unit"
            },
            {
                "type": "item",
                "amount": 20,
                "name": "iron-plate"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "steel-plate"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "b[personal-transport]-a[car]"
    },
    "tank": {
        "name": "tank",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "tank",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 32,
                "name": "engine-unit"
            },
            {
                "type": "item",
                "amount": 50,
                "name": "steel-plate"
            },
            {
                "type": "item",
                "amount": 15,
                "name": "iron-gear-wheel"
            },
            {
                "type": "item",
                "amount": 10,
                "name": "advanced-circuit"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "b[personal-transport]-b[tank]"
    },
    "small-plane": {
        "name": "small-plane",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "small-plane",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 100,
                "name": "plastic-bar"
            },
            {
                "type": "item",
                "amount": 200,
                "name": "advanced-circuit"
            },
            {
                "type": "item",
                "amount": 20,
                "name": "electric-engine-unit"
            },
            {
                "type": "item",
                "amount": 100,
                "name": "battery"
            }
        ],
        "hidden": false,
        "energy": 30,
        "order": "b[personal-transport]-c[small-plane]"
    },
    "pump": {
        "name": "pump",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "pump",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "engine-unit"
            },
            {
                "type": "item",
                "amount": 1,
                "name": "steel-plate"
            },
            {
                "type": "item",
                "amount": 1,
                "name": "pipe"
            }
        ],
        "hidden": false,
        "energy": 2,
        "order": "b[pipe]-c[pump]"
    },
    "poison-capsule": {
        "name": "poison-capsule",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "poison-capsule",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 3,
                "name": "steel-plate"
            },
            {
                "type": "item",
                "amount": 3,
                "name": "electronic-circuit"
            },
            {
                "type": "item",
                "amount": 10,
                "name": "coal"
            }
        ],
        "hidden": false,
        "energy": 8,
        "order": "b[poison-capsule]"
    },
    "repair-pack": {
        "name": "repair-pack",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "repair-pack",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 2,
                "name": "electronic-circuit"
            },
            {
                "type": "item",
                "amount": 2,
                "name": "iron-gear-wheel"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "b[repair]-a[repair-pack]"
    },
    "science-pack-2": {
        "name": "science-pack-2",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "science-pack-2",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "inserter"
            },
            {
                "type": "item",
                "amount": 1,
                "name": "transport-belt"
            }
        ],
        "hidden": false,
        "energy": 6,
        "order": "b[science-pack-2]"
    },
    "energy-shield-equipment": {
        "name": "energy-shield-equipment",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "energy-shield-equipment",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 5,
                "name": "advanced-circuit"
            },
            {
                "type": "item",
                "amount": 10,
                "name": "steel-plate"
            }
        ],
        "hidden": false,
        "energy": 10,
        "order": "b[shield]-a[energy-shield-equipment]"
    },
    "energy-shield-mk2-equipment": {
        "name": "energy-shield-mk2-equipment",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "energy-shield-mk2-equipment",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 10,
                "name": "energy-shield-equipment"
            },
            {
                "type": "item",
                "amount": 10,
                "name": "processing-unit"
            }
        ],
        "hidden": false,
        "energy": 10,
        "order": "b[shield]-b[energy-shield-equipment-mk2]"
    },
    "shotgun": {
        "name": "shotgun",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "shotgun",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 15,
                "name": "iron-plate"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "iron-gear-wheel"
            },
            {
                "type": "item",
                "amount": 10,
                "name": "copper-plate"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "wood"
            }
        ],
        "hidden": false,
        "energy": 10,
        "order": "b[shotgun]-a[basic]"
    },
    "shotgun-shell": {
        "name": "shotgun-shell",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "shotgun-shell",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 2,
                "name": "copper-plate"
            },
            {
                "type": "item",
                "amount": 2,
                "name": "iron-plate"
            }
        ],
        "hidden": false,
        "energy": 3,
        "order": "b[shotgun]-a[basic]"
    },
    "combat-shotgun": {
        "name": "combat-shotgun",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "combat-shotgun",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 15,
                "name": "steel-plate"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "iron-gear-wheel"
            },
            {
                "type": "item",
                "amount": 10,
                "name": "copper-plate"
            },
            {
                "type": "item",
                "amount": 10,
                "name": "wood"
            }
        ],
        "hidden": false,
        "energy": 10,
        "order": "b[shotgun]-a[combat]"
    },
    "piercing-shotgun-shell": {
        "name": "piercing-shotgun-shell",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "piercing-shotgun-shell",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 2,
                "name": "shotgun-shell"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "copper-plate"
            },
            {
                "type": "item",
                "amount": 2,
                "name": "steel-plate"
            }
        ],
        "hidden": false,
        "energy": 8,
        "order": "b[shotgun]-b[piercing]"
    },
    "boiler": {
        "name": "boiler",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "boiler",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "stone-furnace"
            },
            {
                "type": "item",
                "amount": 4,
                "name": "pipe"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "b[steam-power]-a[boiler]"
    },
    "steam-engine": {
        "name": "steam-engine",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "steam-engine",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 8,
                "name": "iron-gear-wheel"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "pipe"
            },
            {
                "type": "item",
                "amount": 10,
                "name": "iron-plate"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "b[steam-power]-b[steam-engine]"
    },
    "steam-turbine": {
        "name": "steam-turbine",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "steam-turbine",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 50,
                "name": "iron-gear-wheel"
            },
            {
                "type": "item",
                "amount": 50,
                "name": "copper-plate"
            },
            {
                "type": "item",
                "amount": 20,
                "name": "pipe"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "b[steam-power]-c[steam-turbine]"
    },
    "steel-furnace": {
        "name": "steel-furnace",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "steel-furnace",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 6,
                "name": "steel-plate"
            },
            {
                "type": "item",
                "amount": 10,
                "name": "stone-brick"
            }
        ],
        "hidden": false,
        "energy": 3,
        "order": "b[steel-furnace]"
    },
    "logistic-chest-active-provider": {
        "name": "logistic-chest-active-provider",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "logistic-chest-active-provider",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "steel-chest"
            },
            {
                "type": "item",
                "amount": 3,
                "name": "electronic-circuit"
            },
            {
                "type": "item",
                "amount": 1,
                "name": "advanced-circuit"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "b[storage]-c[logistic-chest-active-provider]"
    },
    "logistic-chest-passive-provider": {
        "name": "logistic-chest-passive-provider",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "logistic-chest-passive-provider",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "steel-chest"
            },
            {
                "type": "item",
                "amount": 3,
                "name": "electronic-circuit"
            },
            {
                "type": "item",
                "amount": 1,
                "name": "advanced-circuit"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "b[storage]-c[logistic-chest-passive-provider]"
    },
    "logistic-chest-requester": {
        "name": "logistic-chest-requester",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "logistic-chest-requester",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "steel-chest"
            },
            {
                "type": "item",
                "amount": 3,
                "name": "electronic-circuit"
            },
            {
                "type": "item",
                "amount": 1,
                "name": "advanced-circuit"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "b[storage]-c[logistic-chest-requester]"
    },
    "logistic-chest-storage": {
        "name": "logistic-chest-storage",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "logistic-chest-storage",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "steel-chest"
            },
            {
                "type": "item",
                "amount": 3,
                "name": "electronic-circuit"
            },
            {
                "type": "item",
                "amount": 1,
                "name": "advanced-circuit"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "b[storage]-c[logistic-chest-storage]"
    },
    "gun-turret": {
        "name": "gun-turret",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "gun-turret",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 10,
                "name": "iron-gear-wheel"
            },
            {
                "type": "item",
                "amount": 10,
                "name": "copper-plate"
            },
            {
                "type": "item",
                "amount": 20,
                "name": "iron-plate"
            }
        ],
        "hidden": false,
        "energy": 8,
        "order": "b[turret]-a[gun-turret]"
    },
    "laser-turret": {
        "name": "laser-turret",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "laser-turret",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 20,
                "name": "steel-plate"
            },
            {
                "type": "item",
                "amount": 20,
                "name": "electronic-circuit"
            },
            {
                "type": "item",
                "amount": 12,
                "name": "battery"
            }
        ],
        "hidden": false,
        "energy": 20,
        "order": "b[turret]-b[laser-turret]"
    },
    "flamethrower-turret": {
        "name": "flamethrower-turret",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "flamethrower-turret",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 30,
                "name": "steel-plate"
            },
            {
                "type": "item",
                "amount": 15,
                "name": "iron-gear-wheel"
            },
            {
                "type": "item",
                "amount": 10,
                "name": "pipe"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "engine-unit"
            }
        ],
        "hidden": false,
        "energy": 20,
        "order": "b[turret]-c[flamethrower-turret]"
    },
    "underground-belt": {
        "name": "underground-belt",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "underground-belt",
                "amount": 2
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 10,
                "name": "iron-plate"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "transport-belt"
            }
        ],
        "hidden": false,
        "energy": 1,
        "order": "b[underground-belt]-a[underground-belt]"
    },
    "fast-underground-belt": {
        "name": "fast-underground-belt",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "fast-underground-belt",
                "amount": 2
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 20,
                "name": "iron-gear-wheel"
            },
            {
                "type": "item",
                "amount": 2,
                "name": "underground-belt"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "b[underground-belt]-b[fast-underground-belt]"
    },
    "express-underground-belt": {
        "name": "express-underground-belt",
        "category": "crafting-with-fluid",
        "products": [
            {
                "type": "item",
                "name": "express-underground-belt",
                "amount": 2
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 40,
                "name": "iron-gear-wheel"
            },
            {
                "type": "item",
                "amount": 2,
                "name": "fast-underground-belt"
            },
            {
                "type": "fluid",
                "amount": 40,
                "name": "lubricant"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "b[underground-belt]-c[express-underground-belt]"
    },
    "red-wire": {
        "name": "red-wire",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "red-wire",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "electronic-circuit"
            },
            {
                "type": "item",
                "amount": 1,
                "name": "copper-cable"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "b[wires]-a[red-wire]"
    },
    "green-wire": {
        "name": "green-wire",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "green-wire",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "electronic-circuit"
            },
            {
                "type": "item",
                "amount": 1,
                "name": "copper-cable"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "b[wires]-b[green-wire]"
    },
    "assembling-machine-3": {
        "name": "assembling-machine-3",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "assembling-machine-3",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 4,
                "name": "speed-module"
            },
            {
                "type": "item",
                "amount": 2,
                "name": "assembling-machine-2"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "c[assembling-machine-3]"
    },
    "battery-equipment": {
        "name": "battery-equipment",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "battery-equipment",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 5,
                "name": "battery"
            },
            {
                "type": "item",
                "amount": 10,
                "name": "steel-plate"
            }
        ],
        "hidden": false,
        "energy": 10,
        "order": "c[battery]-a[battery-equipment]"
    },
    "battery-mk2-equipment": {
        "name": "battery-mk2-equipment",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "battery-mk2-equipment",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 10,
                "name": "battery-equipment"
            },
            {
                "type": "item",
                "amount": 20,
                "name": "processing-unit"
            }
        ],
        "hidden": false,
        "energy": 10,
        "order": "c[battery]-b[battery-equipment-mk2]"
    },
    "arithmetic-combinator": {
        "name": "arithmetic-combinator",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "arithmetic-combinator",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 5,
                "name": "copper-cable"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "electronic-circuit"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "c[combinators]-a[arithmetic-combinator]"
    },
    "decider-combinator": {
        "name": "decider-combinator",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "decider-combinator",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 5,
                "name": "copper-cable"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "electronic-circuit"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "c[combinators]-b[decider-combinator]"
    },
    "constant-combinator": {
        "name": "constant-combinator",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "constant-combinator",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 5,
                "name": "copper-cable"
            },
            {
                "type": "item",
                "amount": 2,
                "name": "electronic-circuit"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "c[combinators]-c[constant-combinator]"
    },
    "copper-plate": {
        "name": "copper-plate",
        "category": "smelting",
        "products": [
            {
                "type": "item",
                "name": "copper-plate",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "copper-ore"
            }
        ],
        "hidden": false,
        "energy": 3.5,
        "order": "c[copper-plate]"
    },
    "effectivity-module": {
        "name": "effectivity-module",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "effectivity-module",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 5,
                "name": "advanced-circuit"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "electronic-circuit"
            }
        ],
        "hidden": false,
        "energy": 15,
        "order": "c[effectivity]-a[effectivity-module-1]"
    },
    "effectivity-module-2": {
        "name": "effectivity-module-2",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "effectivity-module-2",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 4,
                "name": "effectivity-module"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "advanced-circuit"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "processing-unit"
            }
        ],
        "hidden": false,
        "energy": 30,
        "order": "c[effectivity]-b[effectivity-module-2]"
    },
    "effectivity-module-3": {
        "name": "effectivity-module-3",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "effectivity-module-3",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 5,
                "name": "effectivity-module-2"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "advanced-circuit"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "processing-unit"
            }
        ],
        "hidden": false,
        "energy": 60,
        "order": "c[effectivity]-c[effectivity-module-3]"
    },
    "electric-furnace": {
        "name": "electric-furnace",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "electric-furnace",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 10,
                "name": "steel-plate"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "advanced-circuit"
            },
            {
                "type": "item",
                "amount": 10,
                "name": "stone-brick"
            }
        ],
        "hidden": false,
        "energy": 5,
        "order": "c[electric-furnace]"
    },
    "empty-crude-oil-barrel": {
        "name": "empty-crude-oil-barrel",
        "category": "crafting-with-fluid",
        "products": [
            {
                "type": "item",
                "name": "empty-barrel",
                "amount": 1
            },
            {
                "type": "fluid",
                "name": "crude-oil",
                "amount": 250
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "crude-oil-barrel"
            }
        ],
        "hidden": false,
        "energy": 1,
        "order": "c[empty-crude-oil-barrel]"
    },
    "empty-heavy-oil-barrel": {
        "name": "empty-heavy-oil-barrel",
        "category": "crafting-with-fluid",
        "products": [
            {
                "type": "item",
                "name": "empty-barrel",
                "amount": 1
            },
            {
                "type": "fluid",
                "name": "heavy-oil",
                "amount": 250
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "heavy-oil-barrel"
            }
        ],
        "hidden": false,
        "energy": 1,
        "order": "c[empty-heavy-oil-barrel]"
    },
    "empty-light-oil-barrel": {
        "name": "empty-light-oil-barrel",
        "category": "crafting-with-fluid",
        "products": [
            {
                "type": "item",
                "name": "empty-barrel",
                "amount": 1
            },
            {
                "type": "fluid",
                "name": "light-oil",
                "amount": 250
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "light-oil-barrel"
            }
        ],
        "hidden": false,
        "energy": 1,
        "order": "c[empty-light-oil-barrel]"
    },
    "empty-lubricant-barrel": {
        "name": "empty-lubricant-barrel",
        "category": "crafting-with-fluid",
        "products": [
            {
                "type": "item",
                "name": "empty-barrel",
                "amount": 1
            },
            {
                "type": "fluid",
                "name": "lubricant",
                "amount": 250
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "lubricant-barrel"
            }
        ],
        "hidden": false,
        "energy": 1,
        "order": "c[empty-lubricant-barrel]"
    },
    "empty-petroleum-gas-barrel": {
        "name": "empty-petroleum-gas-barrel",
        "category": "crafting-with-fluid",
        "products": [
            {
                "type": "item",
                "name": "empty-barrel",
                "amount": 1
            },
            {
                "type": "fluid",
                "name": "petroleum-gas",
                "amount": 250
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "petroleum-gas-barrel"
            }
        ],
        "hidden": false,
        "energy": 1,
        "order": "c[empty-petroleum-gas-barrel]"
    },
    "empty-sulfuric-acid-barrel": {
        "name": "empty-sulfuric-acid-barrel",
        "category": "crafting-with-fluid",
        "products": [
            {
                "type": "item",
                "name": "empty-barrel",
                "amount": 1
            },
            {
                "type": "fluid",
                "name": "sulfuric-acid",
                "amount": 250
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "sulfuric-acid-barrel"
            }
        ],
        "hidden": false,
        "energy": 1,
        "order": "c[empty-sulfuric-acid-barrel]"
    },
    "empty-water-barrel": {
        "name": "empty-water-barrel",
        "category": "crafting-with-fluid",
        "products": [
            {
                "type": "item",
                "name": "empty-barrel",
                "amount": 1
            },
            {
                "type": "fluid",
                "name": "water",
                "amount": 250
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "water-barrel"
            }
        ],
        "hidden": false,
        "energy": 1,
        "order": "c[empty-water-barrel]"
    },
    "iron-gear-wheel": {
        "name": "iron-gear-wheel",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "iron-gear-wheel",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 2,
                "name": "iron-plate"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "c[iron-gear-wheel]"
    },
    "landfill": {
        "name": "landfill",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "landfill",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 20,
                "name": "stone"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "c[landfill]-a[dirt]"
    },
    "long-handed-inserter": {
        "name": "long-handed-inserter",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "long-handed-inserter",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "iron-gear-wheel"
            },
            {
                "type": "item",
                "amount": 1,
                "name": "iron-plate"
            },
            {
                "type": "item",
                "amount": 1,
                "name": "inserter"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "c[long-handed-inserter]"
    },
    "modular-armor": {
        "name": "modular-armor",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "modular-armor",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 30,
                "name": "advanced-circuit"
            },
            {
                "type": "item",
                "amount": 50,
                "name": "steel-plate"
            }
        ],
        "hidden": false,
        "energy": 15,
        "order": "c[modular-armor]"
    },
    "productivity-module": {
        "name": "productivity-module",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "productivity-module",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 5,
                "name": "advanced-circuit"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "electronic-circuit"
            }
        ],
        "hidden": false,
        "energy": 15,
        "order": "c[productivity]-a[productivity-module-1]"
    },
    "productivity-module-2": {
        "name": "productivity-module-2",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "productivity-module-2",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 4,
                "name": "productivity-module"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "advanced-circuit"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "processing-unit"
            }
        ],
        "hidden": false,
        "energy": 30,
        "order": "c[productivity]-b[productivity-module-2]"
    },
    "productivity-module-3": {
        "name": "productivity-module-3",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "productivity-module-3",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 5,
                "name": "productivity-module-2"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "advanced-circuit"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "processing-unit"
            }
        ],
        "hidden": false,
        "energy": 60,
        "order": "c[productivity]-c[productivity-module-3]"
    },
    "railgun": {
        "name": "railgun",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "railgun",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 15,
                "name": "steel-plate"
            },
            {
                "type": "item",
                "amount": 15,
                "name": "copper-plate"
            },
            {
                "type": "item",
                "amount": 10,
                "name": "electronic-circuit"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "advanced-circuit"
            }
        ],
        "hidden": false,
        "energy": 8,
        "order": "c[railgun]"
    },
    "railgun-dart": {
        "name": "railgun-dart",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "railgun-dart",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 5,
                "name": "steel-plate"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "electronic-circuit"
            }
        ],
        "hidden": false,
        "energy": 8,
        "order": "c[railgun]"
    },
    "science-pack-3": {
        "name": "science-pack-3",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "science-pack-3",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "advanced-circuit"
            },
            {
                "type": "item",
                "amount": 1,
                "name": "engine-unit"
            },
            {
                "type": "item",
                "amount": 1,
                "name": "assembling-machine-1"
            }
        ],
        "hidden": false,
        "energy": 12,
        "order": "c[science-pack-3]"
    },
    "roboport": {
        "name": "roboport",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "roboport",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 45,
                "name": "steel-plate"
            },
            {
                "type": "item",
                "amount": 45,
                "name": "iron-gear-wheel"
            },
            {
                "type": "item",
                "amount": 45,
                "name": "advanced-circuit"
            }
        ],
        "hidden": false,
        "energy": 15,
        "order": "c[signal]-a[roboport]"
    },
    "slowdown-capsule": {
        "name": "slowdown-capsule",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "slowdown-capsule",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 2,
                "name": "steel-plate"
            },
            {
                "type": "item",
                "amount": 2,
                "name": "electronic-circuit"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "coal"
            }
        ],
        "hidden": false,
        "energy": 8,
        "order": "c[slowdown-capsule]"
    },
    "splitter": {
        "name": "splitter",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "splitter",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 5,
                "name": "electronic-circuit"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "iron-plate"
            },
            {
                "type": "item",
                "amount": 4,
                "name": "transport-belt"
            }
        ],
        "hidden": false,
        "energy": 1,
        "order": "c[splitter]-a[splitter]"
    },
    "fast-splitter": {
        "name": "fast-splitter",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "fast-splitter",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "splitter"
            },
            {
                "type": "item",
                "amount": 10,
                "name": "iron-gear-wheel"
            },
            {
                "type": "item",
                "amount": 10,
                "name": "electronic-circuit"
            }
        ],
        "hidden": false,
        "energy": 2,
        "order": "c[splitter]-b[fast-splitter]"
    },
    "express-splitter": {
        "name": "express-splitter",
        "category": "crafting-with-fluid",
        "products": [
            {
                "type": "item",
                "name": "express-splitter",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "fast-splitter"
            },
            {
                "type": "item",
                "amount": 10,
                "name": "iron-gear-wheel"
            },
            {
                "type": "item",
                "amount": 10,
                "name": "advanced-circuit"
            },
            {
                "type": "fluid",
                "amount": 80,
                "name": "lubricant"
            }
        ],
        "hidden": false,
        "energy": 2,
        "order": "c[splitter]-c[express-splitter]"
    },
    "personal-laser-defense-equipment": {
        "name": "personal-laser-defense-equipment",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "personal-laser-defense-equipment",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "processing-unit"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "steel-plate"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "laser-turret"
            }
        ],
        "hidden": false,
        "energy": 10,
        "order": "d[active-defense]-a[personal-laser-defense-equipment]"
    },
    "discharge-defense-equipment": {
        "name": "discharge-defense-equipment",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "discharge-defense-equipment",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 5,
                "name": "processing-unit"
            },
            {
                "type": "item",
                "amount": 20,
                "name": "steel-plate"
            },
            {
                "type": "item",
                "amount": 10,
                "name": "laser-turret"
            }
        ],
        "hidden": false,
        "energy": 10,
        "order": "d[active-defense]-b[discharge-defense-equipment]"
    },
    "cannon-shell": {
        "name": "cannon-shell",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "cannon-shell",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 2,
                "name": "steel-plate"
            },
            {
                "type": "item",
                "amount": 2,
                "name": "plastic-bar"
            },
            {
                "type": "item",
                "amount": 1,
                "name": "explosives"
            }
        ],
        "hidden": false,
        "energy": 8,
        "order": "d[cannon-shell]-a[basic]"
    },
    "explosive-cannon-shell": {
        "name": "explosive-cannon-shell",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "explosive-cannon-shell",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 2,
                "name": "steel-plate"
            },
            {
                "type": "item",
                "amount": 2,
                "name": "plastic-bar"
            },
            {
                "type": "item",
                "amount": 2,
                "name": "explosives"
            }
        ],
        "hidden": false,
        "energy": 8,
        "order": "d[cannon-shell]-c[explosive]"
    },
    "uranium-cannon-shell": {
        "name": "uranium-cannon-shell",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "uranium-cannon-shell",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "cannon-shell"
            },
            {
                "type": "item",
                "amount": 1,
                "name": "uranium-238"
            }
        ],
        "hidden": false,
        "energy": 12,
        "order": "d[cannon-shell]-c[uranium]"
    },
    "defender-capsule": {
        "name": "defender-capsule",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "defender-capsule",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "piercing-rounds-magazine"
            },
            {
                "type": "item",
                "amount": 2,
                "name": "electronic-circuit"
            },
            {
                "type": "item",
                "amount": 3,
                "name": "iron-gear-wheel"
            }
        ],
        "hidden": false,
        "energy": 8,
        "order": "d[defender-capsule]"
    },
    "empty-barrel": {
        "name": "empty-barrel",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "empty-barrel",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "steel-plate"
            }
        ],
        "hidden": false,
        "energy": 1,
        "order": "d[empty-barrel]"
    },
    "explosive-uranium-cannon-shell": {
        "name": "explosive-uranium-cannon-shell",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "explosive-uranium-cannon-shell",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "explosive-cannon-shell"
            },
            {
                "type": "item",
                "amount": 1,
                "name": "uranium-238"
            }
        ],
        "hidden": false,
        "energy": 12,
        "order": "d[explosive-cannon-shell]-c[uranium]"
    },
    "fast-inserter": {
        "name": "fast-inserter",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "fast-inserter",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 2,
                "name": "electronic-circuit"
            },
            {
                "type": "item",
                "amount": 2,
                "name": "iron-plate"
            },
            {
                "type": "item",
                "amount": 1,
                "name": "inserter"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "d[fast-inserter]"
    },
    "loader": {
        "name": "loader",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "loader",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 5,
                "name": "inserter"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "electronic-circuit"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "iron-gear-wheel"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "iron-plate"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "transport-belt"
            }
        ],
        "hidden": false,
        "energy": 1,
        "order": "d[loader]-a[basic-loader]"
    },
    "fast-loader": {
        "name": "fast-loader",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "fast-loader",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 5,
                "name": "fast-transport-belt"
            },
            {
                "type": "item",
                "amount": 1,
                "name": "loader"
            }
        ],
        "hidden": false,
        "energy": 3,
        "order": "d[loader]-b[fast-loader]"
    },
    "express-loader": {
        "name": "express-loader",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "express-loader",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 5,
                "name": "express-transport-belt"
            },
            {
                "type": "item",
                "amount": 1,
                "name": "fast-loader"
            }
        ],
        "hidden": false,
        "energy": 10,
        "order": "d[loader]-c[express-loader]"
    },
    "military-science-pack": {
        "name": "military-science-pack",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "military-science-pack",
                "amount": 2
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "piercing-rounds-magazine"
            },
            {
                "type": "item",
                "amount": 1,
                "name": "grenade"
            },
            {
                "type": "item",
                "amount": 1,
                "name": "gun-turret"
            }
        ],
        "hidden": false,
        "energy": 10,
        "order": "d[military-science-pack]"
    },
    "power-switch": {
        "name": "power-switch",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "power-switch",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 5,
                "name": "iron-plate"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "copper-cable"
            },
            {
                "type": "item",
                "amount": 2,
                "name": "electronic-circuit"
            }
        ],
        "hidden": false,
        "energy": 2,
        "order": "d[other]-a[power-switch]"
    },
    "programmable-speaker": {
        "name": "programmable-speaker",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "programmable-speaker",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 5,
                "name": "iron-plate"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "copper-cable"
            },
            {
                "type": "item",
                "amount": 4,
                "name": "electronic-circuit"
            }
        ],
        "hidden": false,
        "energy": 2,
        "order": "d[other]-b[programmable-speaker]"
    },
    "power-armor": {
        "name": "power-armor",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "power-armor",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 40,
                "name": "processing-unit"
            },
            {
                "type": "item",
                "amount": 20,
                "name": "electric-engine-unit"
            },
            {
                "type": "item",
                "amount": 40,
                "name": "steel-plate"
            }
        ],
        "hidden": false,
        "energy": 20,
        "order": "d[power-armor]"
    },
    "radar": {
        "name": "radar",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "radar",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 5,
                "name": "electronic-circuit"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "iron-gear-wheel"
            },
            {
                "type": "item",
                "amount": 10,
                "name": "iron-plate"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "d[radar]-a[radar]"
    },
    "oil-refinery": {
        "name": "oil-refinery",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "oil-refinery",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 15,
                "name": "steel-plate"
            },
            {
                "type": "item",
                "amount": 10,
                "name": "iron-gear-wheel"
            },
            {
                "type": "item",
                "amount": 10,
                "name": "stone-brick"
            },
            {
                "type": "item",
                "amount": 10,
                "name": "electronic-circuit"
            },
            {
                "type": "item",
                "amount": 10,
                "name": "pipe"
            }
        ],
        "hidden": false,
        "energy": 20,
        "order": "d[refinery]"
    },
    "rocket-launcher": {
        "name": "rocket-launcher",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "rocket-launcher",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 5,
                "name": "iron-plate"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "iron-gear-wheel"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "electronic-circuit"
            }
        ],
        "hidden": false,
        "energy": 10,
        "order": "d[rocket-launcher]"
    },
    "rocket": {
        "name": "rocket",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "rocket",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "electronic-circuit"
            },
            {
                "type": "item",
                "amount": 1,
                "name": "explosives"
            },
            {
                "type": "item",
                "amount": 2,
                "name": "iron-plate"
            }
        ],
        "hidden": false,
        "energy": 8,
        "order": "d[rocket-launcher]-a[basic]"
    },
    "explosive-rocket": {
        "name": "explosive-rocket",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "explosive-rocket",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "rocket"
            },
            {
                "type": "item",
                "amount": 2,
                "name": "explosives"
            }
        ],
        "hidden": false,
        "energy": 8,
        "order": "d[rocket-launcher]-b[explosive]"
    },
    "atomic-bomb": {
        "name": "atomic-bomb",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "atomic-bomb",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 20,
                "name": "processing-unit"
            },
            {
                "type": "item",
                "amount": 10,
                "name": "explosives"
            },
            {
                "type": "item",
                "amount": 30,
                "name": "uranium-235"
            }
        ],
        "hidden": false,
        "energy": 50,
        "order": "d[rocket-launcher]-c[atomic-bomb]"
    },
    "solar-panel": {
        "name": "solar-panel",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "solar-panel",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 5,
                "name": "steel-plate"
            },
            {
                "type": "item",
                "amount": 15,
                "name": "electronic-circuit"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "copper-plate"
            }
        ],
        "hidden": false,
        "energy": 10,
        "order": "d[solar-panel]-a[solar-panel]"
    },
    "steel-plate": {
        "name": "steel-plate",
        "category": "smelting",
        "products": [
            {
                "type": "item",
                "name": "steel-plate",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 5,
                "name": "iron-plate"
            }
        ],
        "hidden": false,
        "energy": 17.5,
        "order": "d[steel-plate]"
    },
    "accumulator": {
        "name": "accumulator",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "accumulator",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 2,
                "name": "iron-plate"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "battery"
            }
        ],
        "hidden": false,
        "energy": 10,
        "order": "e[accumulator]-a[accumulator]"
    },
    "chemical-plant": {
        "name": "chemical-plant",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "chemical-plant",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 5,
                "name": "steel-plate"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "iron-gear-wheel"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "electronic-circuit"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "pipe"
            }
        ],
        "hidden": false,
        "energy": 10,
        "order": "e[chemical-plant]"
    },
    "distractor-capsule": {
        "name": "distractor-capsule",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "distractor-capsule",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 4,
                "name": "defender-capsule"
            },
            {
                "type": "item",
                "amount": 3,
                "name": "advanced-circuit"
            }
        ],
        "hidden": false,
        "energy": 15,
        "order": "e[defender-capsule]"
    },
    "electric-energy-interface": {
        "name": "electric-energy-interface",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "electric-energy-interface",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 2,
                "name": "iron-plate"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "electronic-circuit"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "e[electric-energy-interface]-b[electric-energy-interface]"
    },
    "electronic-circuit": {
        "name": "electronic-circuit",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "electronic-circuit",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "iron-plate"
            },
            {
                "type": "item",
                "amount": 3,
                "name": "copper-cable"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "e[electronic-circuit]"
    },
    "exoskeleton-equipment": {
        "name": "exoskeleton-equipment",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "exoskeleton-equipment",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 10,
                "name": "processing-unit"
            },
            {
                "type": "item",
                "amount": 30,
                "name": "electric-engine-unit"
            },
            {
                "type": "item",
                "amount": 20,
                "name": "steel-plate"
            }
        ],
        "hidden": false,
        "energy": 10,
        "order": "e[exoskeleton]-a[exoskeleton-equipment]"
    },
    "filter-inserter": {
        "name": "filter-inserter",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "filter-inserter",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "fast-inserter"
            },
            {
                "type": "item",
                "amount": 4,
                "name": "electronic-circuit"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "e[filter-inserter]"
    },
    "flamethrower": {
        "name": "flamethrower",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "flamethrower",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 5,
                "name": "steel-plate"
            },
            {
                "type": "item",
                "amount": 10,
                "name": "iron-gear-wheel"
            }
        ],
        "hidden": false,
        "energy": 10,
        "order": "e[flamethrower]"
    },
    "flamethrower-ammo": {
        "name": "flamethrower-ammo",
        "category": "chemistry",
        "products": [
            {
                "type": "item",
                "name": "flamethrower-ammo",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 5,
                "name": "steel-plate"
            },
            {
                "type": "fluid",
                "amount": 50,
                "name": "light-oil"
            },
            {
                "type": "fluid",
                "amount": 50,
                "name": "heavy-oil"
            }
        ],
        "hidden": false,
        "energy": 6,
        "order": "e[flamethrower]"
    },
    "lubricant": {
        "name": "lubricant",
        "category": "chemistry",
        "products": [
            {
                "type": "fluid",
                "name": "lubricant",
                "amount": 10
            }
        ],
        "ingredients": [
            {
                "type": "fluid",
                "amount": 10,
                "name": "heavy-oil"
            }
        ],
        "hidden": false,
        "energy": 1,
        "order": "e[lubricant]"
    },
    "power-armor-mk2": {
        "name": "power-armor-mk2",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "power-armor-mk2",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 5,
                "name": "effectivity-module-3"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "speed-module-3"
            },
            {
                "type": "item",
                "amount": 40,
                "name": "processing-unit"
            },
            {
                "type": "item",
                "amount": 40,
                "name": "steel-plate"
            }
        ],
        "hidden": false,
        "energy": 25,
        "order": "e[power-armor-mk2]"
    },
    "production-science-pack": {
        "name": "production-science-pack",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "production-science-pack",
                "amount": 2
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "pumpjack"
            },
            {
                "type": "item",
                "amount": 1,
                "name": "electric-engine-unit"
            },
            {
                "type": "item",
                "amount": 1,
                "name": "electric-furnace"
            }
        ],
        "hidden": false,
        "energy": 14,
        "order": "e[production-science-pack]"
    },
    "personal-roboport-equipment": {
        "name": "personal-roboport-equipment",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "personal-roboport-equipment",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 10,
                "name": "advanced-circuit"
            },
            {
                "type": "item",
                "amount": 40,
                "name": "iron-gear-wheel"
            },
            {
                "type": "item",
                "amount": 20,
                "name": "steel-plate"
            },
            {
                "type": "item",
                "amount": 45,
                "name": "battery"
            }
        ],
        "hidden": false,
        "energy": 10,
        "order": "e[robotics]-a[personal-roboport-equipment]"
    },
    "personal-roboport-mk2-equipment": {
        "name": "personal-roboport-mk2-equipment",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "personal-roboport-mk2-equipment",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 5,
                "name": "personal-roboport-equipment"
            },
            {
                "type": "item",
                "amount": 100,
                "name": "processing-unit"
            }
        ],
        "hidden": false,
        "energy": 20,
        "order": "e[robotics]-b[personal-roboport-mk2-equipment]"
    },
    "rocket-silo": {
        "name": "rocket-silo",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "rocket-silo",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1000,
                "name": "steel-plate"
            },
            {
                "type": "item",
                "amount": 1000,
                "name": "concrete"
            },
            {
                "type": "item",
                "amount": 100,
                "name": "pipe"
            },
            {
                "type": "item",
                "amount": 200,
                "name": "processing-unit"
            },
            {
                "type": "item",
                "amount": 200,
                "name": "electric-engine-unit"
            }
        ],
        "hidden": false,
        "energy": 30,
        "order": "e[rocket-silo]"
    },
    "advanced-circuit": {
        "name": "advanced-circuit",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "advanced-circuit",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 2,
                "name": "electronic-circuit"
            },
            {
                "type": "item",
                "amount": 2,
                "name": "plastic-bar"
            },
            {
                "type": "item",
                "amount": 4,
                "name": "copper-cable"
            }
        ],
        "hidden": false,
        "energy": 6,
        "order": "f[advanced-circuit]"
    },
    "destroyer-capsule": {
        "name": "destroyer-capsule",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "destroyer-capsule",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 4,
                "name": "distractor-capsule"
            },
            {
                "type": "item",
                "amount": 1,
                "name": "speed-module"
            }
        ],
        "hidden": false,
        "energy": 15,
        "order": "f[destroyer-capsule]"
    },
    "high-tech-science-pack": {
        "name": "high-tech-science-pack",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "high-tech-science-pack",
                "amount": 2
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "battery"
            },
            {
                "type": "item",
                "amount": 3,
                "name": "processing-unit"
            },
            {
                "type": "item",
                "amount": 1,
                "name": "speed-module"
            },
            {
                "type": "item",
                "amount": 30,
                "name": "copper-cable"
            }
        ],
        "hidden": false,
        "energy": 14,
        "order": "f[high-tech-science-pack]"
    },
    "land-mine": {
        "name": "land-mine",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "land-mine",
                "amount": 4
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "steel-plate"
            },
            {
                "type": "item",
                "amount": 2,
                "name": "explosives"
            }
        ],
        "hidden": false,
        "energy": 5,
        "order": "f[land-mine]"
    },
    "night-vision-equipment": {
        "name": "night-vision-equipment",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "night-vision-equipment",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 5,
                "name": "advanced-circuit"
            },
            {
                "type": "item",
                "amount": 10,
                "name": "steel-plate"
            }
        ],
        "hidden": false,
        "energy": 10,
        "order": "f[night-vision]-a[night-vision-equipment]"
    },
    "nuclear-reactor": {
        "name": "nuclear-reactor",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "nuclear-reactor",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 500,
                "name": "concrete"
            },
            {
                "type": "item",
                "amount": 500,
                "name": "steel-plate"
            },
            {
                "type": "item",
                "amount": 500,
                "name": "advanced-circuit"
            },
            {
                "type": "item",
                "amount": 500,
                "name": "copper-plate"
            }
        ],
        "hidden": false,
        "energy": 4,
        "order": "f[nuclear-energy]-a[reactor]"
    },
    "heat-exchanger": {
        "name": "heat-exchanger",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "heat-exchanger",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 10,
                "name": "steel-plate"
            },
            {
                "type": "item",
                "amount": 100,
                "name": "copper-plate"
            },
            {
                "type": "item",
                "amount": 10,
                "name": "pipe"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "f[nuclear-energy]-b[heat-exchanger]"
    },
    "heat-pipe": {
        "name": "heat-pipe",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "heat-pipe",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 10,
                "name": "steel-plate"
            },
            {
                "type": "item",
                "amount": 20,
                "name": "copper-plate"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "f[nuclear-energy]-c[heat-pipe]"
    },
    "stack-inserter": {
        "name": "stack-inserter",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "stack-inserter",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 15,
                "name": "iron-gear-wheel"
            },
            {
                "type": "item",
                "amount": 15,
                "name": "electronic-circuit"
            },
            {
                "type": "item",
                "amount": 1,
                "name": "advanced-circuit"
            },
            {
                "type": "item",
                "amount": 1,
                "name": "fast-inserter"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "f[stack-inserter]"
    },
    "sulfur": {
        "name": "sulfur",
        "category": "chemistry",
        "products": [
            {
                "type": "item",
                "name": "sulfur",
                "amount": 2
            }
        ],
        "ingredients": [
            {
                "type": "fluid",
                "amount": 30,
                "name": "water"
            },
            {
                "type": "fluid",
                "amount": 30,
                "name": "petroleum-gas"
            }
        ],
        "hidden": false,
        "energy": 1,
        "order": "f[sulfur]"
    },
    "centrifuge": {
        "name": "centrifuge",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "centrifuge",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 100,
                "name": "concrete"
            },
            {
                "type": "item",
                "amount": 50,
                "name": "steel-plate"
            },
            {
                "type": "item",
                "amount": 100,
                "name": "advanced-circuit"
            },
            {
                "type": "item",
                "amount": 100,
                "name": "iron-gear-wheel"
            }
        ],
        "hidden": false,
        "energy": 4,
        "order": "g[centrifuge]"
    },
    "lab": {
        "name": "lab",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "lab",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 10,
                "name": "electronic-circuit"
            },
            {
                "type": "item",
                "amount": 10,
                "name": "iron-gear-wheel"
            },
            {
                "type": "item",
                "amount": 4,
                "name": "transport-belt"
            }
        ],
        "hidden": false,
        "energy": 5,
        "order": "g[lab]"
    },
    "plastic-bar": {
        "name": "plastic-bar",
        "category": "chemistry",
        "products": [
            {
                "type": "item",
                "name": "plastic-bar",
                "amount": 2
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "coal"
            },
            {
                "type": "fluid",
                "amount": 20,
                "name": "petroleum-gas"
            }
        ],
        "hidden": false,
        "energy": 1,
        "order": "g[plastic-bar]"
    },
    "processing-unit": {
        "name": "processing-unit",
        "category": "crafting-with-fluid",
        "products": [
            {
                "type": "item",
                "name": "processing-unit",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 20,
                "name": "electronic-circuit"
            },
            {
                "type": "item",
                "amount": 2,
                "name": "advanced-circuit"
            },
            {
                "type": "fluid",
                "amount": 5,
                "name": "sulfuric-acid"
            }
        ],
        "hidden": false,
        "energy": 10,
        "order": "g[processing-unit]"
    },
    "stack-filter-inserter": {
        "name": "stack-filter-inserter",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "stack-filter-inserter",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "stack-inserter"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "electronic-circuit"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "g[stack-filter-inserter]"
    },
    "engine-unit": {
        "name": "engine-unit",
        "category": "advanced-crafting",
        "products": [
            {
                "type": "item",
                "name": "engine-unit",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "steel-plate"
            },
            {
                "type": "item",
                "amount": 1,
                "name": "iron-gear-wheel"
            },
            {
                "type": "item",
                "amount": 2,
                "name": "pipe"
            }
        ],
        "hidden": false,
        "energy": 10,
        "order": "h[engine-unit]"
    },
    "uranium-processing": {
        "name": "uranium-processing",
        "category": "centrifuging",
        "products": [
            {
                "type": "item",
                "name": "uranium-235",
                "amount_min": 1,
                "amount_max": 1,
                "probability": 0.007
            },
            {
                "type": "item",
                "name": "uranium-238",
                "amount_min": 1,
                "amount_max": 1,
                "probability": 0.993
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 10,
                "name": "uranium-ore"
            }
        ],
        "hidden": false,
        "energy": 10,
        "order": "h[uranium-processing]"
    },
    "electric-engine-unit": {
        "name": "electric-engine-unit",
        "category": "crafting-with-fluid",
        "products": [
            {
                "type": "item",
                "name": "electric-engine-unit",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "engine-unit"
            },
            {
                "type": "item",
                "amount": 2,
                "name": "electronic-circuit"
            },
            {
                "type": "fluid",
                "amount": 15,
                "name": "lubricant"
            }
        ],
        "hidden": false,
        "energy": 10,
        "order": "i[electric-engine-unit]"
    },
    "battery": {
        "name": "battery",
        "category": "chemistry",
        "products": [
            {
                "type": "item",
                "name": "battery",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "iron-plate"
            },
            {
                "type": "item",
                "amount": 1,
                "name": "copper-plate"
            },
            {
                "type": "fluid",
                "amount": 20,
                "name": "sulfuric-acid"
            }
        ],
        "hidden": false,
        "energy": 5,
        "order": "j[battery]"
    },
    "explosives": {
        "name": "explosives",
        "category": "chemistry",
        "products": [
            {
                "type": "item",
                "name": "explosives",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "sulfur"
            },
            {
                "type": "item",
                "amount": 1,
                "name": "coal"
            },
            {
                "type": "fluid",
                "amount": 10,
                "name": "water"
            }
        ],
        "hidden": false,
        "energy": 5,
        "order": "j[explosives]"
    },
    "flying-robot-frame": {
        "name": "flying-robot-frame",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "flying-robot-frame",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "electric-engine-unit"
            },
            {
                "type": "item",
                "amount": 2,
                "name": "battery"
            },
            {
                "type": "item",
                "amount": 1,
                "name": "steel-plate"
            },
            {
                "type": "item",
                "amount": 3,
                "name": "electronic-circuit"
            }
        ],
        "hidden": false,
        "energy": 20,
        "order": "l[flying-robot-frame]"
    },
    "low-density-structure": {
        "name": "low-density-structure",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "low-density-structure",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 10,
                "name": "steel-plate"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "copper-plate"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "plastic-bar"
            }
        ],
        "hidden": false,
        "energy": 30,
        "order": "m[rocket-structure]"
    },
    "rocket-fuel": {
        "name": "rocket-fuel",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "rocket-fuel",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 10,
                "name": "solid-fuel"
            }
        ],
        "hidden": false,
        "energy": 30,
        "order": "n[rocket-fuel]"
    },
    "rocket-control-unit": {
        "name": "rocket-control-unit",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "rocket-control-unit",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "processing-unit"
            },
            {
                "type": "item",
                "amount": 1,
                "name": "speed-module"
            }
        ],
        "hidden": false,
        "energy": 30,
        "order": "o[rocket-control-unit]"
    },
    "rocket-part": {
        "name": "rocket-part",
        "category": "rocket-building",
        "products": [
            {
                "type": "item",
                "name": "rocket-part",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 10,
                "name": "low-density-structure"
            },
            {
                "type": "item",
                "amount": 10,
                "name": "rocket-fuel"
            },
            {
                "type": "item",
                "amount": 10,
                "name": "rocket-control-unit"
            }
        ],
        "hidden": true,
        "energy": 3,
        "order": "p[rocket-part]"
    },
    "satellite": {
        "name": "satellite",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "satellite",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 100,
                "name": "low-density-structure"
            },
            {
                "type": "item",
                "amount": 100,
                "name": "solar-panel"
            },
            {
                "type": "item",
                "amount": 100,
                "name": "accumulator"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "radar"
            },
            {
                "type": "item",
                "amount": 100,
                "name": "processing-unit"
            },
            {
                "type": "item",
                "amount": 50,
                "name": "rocket-fuel"
            }
        ],
        "hidden": false,
        "energy": 3,
        "order": "q[satellite]"
    },
    "uranium-fuel-cell": {
        "name": "uranium-fuel-cell",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "uranium-fuel-cell",
                "amount": 10
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 10,
                "name": "iron-plate"
            },
            {
                "type": "item",
                "amount": 1,
                "name": "uranium-235"
            },
            {
                "type": "item",
                "amount": 19,
                "name": "uranium-238"
            }
        ],
        "hidden": false,
        "energy": 10,
        "order": "r[uranium-processing]-a[uranium-fuel-cell]"
    },
    "nuclear-fuel-reprocessing": {
        "name": "nuclear-fuel-reprocessing",
        "category": "centrifuging",
        "products": [
            {
                "type": "item",
                "name": "uranium-238",
                "amount": 3
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 5,
                "name": "used-up-uranium-fuel-cell"
            }
        ],
        "hidden": false,
        "energy": 50,
        "order": "r[uranium-processing]-b[nuclear-fuel-reprocessing]"
    },
    "kovarex-enrichment-process": {
        "name": "kovarex-enrichment-process",
        "category": "centrifuging",
        "products": [
            {
                "type": "item",
                "name": "uranium-235",
                "amount": 41
            },
            {
                "type": "item",
                "name": "uranium-238",
                "amount": 2
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 40,
                "name": "uranium-235"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "uranium-238"
            }
        ],
        "hidden": false,
        "energy": 50,
        "order": "r[uranium-processing]-c[kovarex-enrichment-process]"
    },
    "discharge-defense-remote": {
        "name": "discharge-defense-remote",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "discharge-defense-remote",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 1,
                "name": "electronic-circuit"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "z"
    },
    "player-port": {
        "name": "player-port",
        "category": "crafting",
        "products": [
            {
                "type": "item",
                "name": "player-port",
                "amount": 1
            }
        ],
        "ingredients": [
            {
                "type": "item",
                "amount": 10,
                "name": "electronic-circuit"
            },
            {
                "type": "item",
                "amount": 5,
                "name": "iron-gear-wheel"
            },
            {
                "type": "item",
                "amount": 1,
                "name": "iron-plate"
            }
        ],
        "hidden": false,
        "energy": 0.5,
        "order": "z[not-used]"
    }
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Belt = {
    Yellow: { name: "transport-belt", throughput: 40 / 3 },
    Red: { name: "fast-transport-belt", throughput: 40 * 2 / 3 },
    Blue: { name: "express-transport-belt", throughput: 40 }
};
exports.Belts = [exports.Belt.Yellow, exports.Belt.Red, exports.Belt.Blue];
// TODO fill in hardness
exports.Ore = {
    Iron: { name: "iron-ore", hardness: 1 },
    Copper: { name: "copper-ore", hardness: 1 },
    Coal: { name: "coal", hardness: 1 },
    Stone: { name: "stone", hardness: 1 }
};
exports.Ores = [exports.Ore.Iron, exports.Ore.Copper, exports.Ore.Coal, exports.Ore.Stone];
exports.Assembler = {
    One: { name: "assembling-machine-1", speed: 0.5 },
    Two: { name: "assembling-machine-2", speed: 0.75 },
    Three: { name: "assembling-machine-3", speed: 1.25 },
};
exports.Assemblers = [exports.Assembler.One, exports.Assembler.Two, exports.Assembler.Three];
/*
type Recipe = {
    name: string;
    time: number;
    quantity: number;
}
const Recipe: { [name: string]: Recipe } = {
    IronGearWheel: { name: "iron-gear-wheel", time: 1, quantity: 2 },
    GreenCircuit: { name: "electronic-circuit", time: 0.5, quantity: 1 },
    RedCircuit: { name: "advanced-circuit", time: 8, quantity: 1 },
    PurpleCircuit: { name: "processing-unit", time: 10, quantity: 1 },
    SolarPanel: { name: "solar-panel", time: 10, quantity: 1 },
    RedScience: { name: "science-pack-1", time: 5, quantity: 1 },
    GreenScience: { name: "science-pack-2", time: 6, quantity: 1 },
    BlueScience: { name: "science-pack-3", time: 12, quantity: 2 },
    MilitaryScience: { name: "military-science-pack", time: 10, quantity: 2 },
    ProductionScience: { name: "production-science-pack", time: 14, quantity: 2 },
    HighTechScience: { name: "high-tech-science-pack", time: 14, quantity: 2 }
};
const Recipes = Object.keys(Recipe).map(k => Recipe[k]);
*/
exports.Fuel = {
    Wood: { name: "raw-wood", energy: 4000 },
    Coal: { name: "coal", energy: 8000 },
    Solid: { name: "solid-fuel", energy: 25000 },
    Rocket: { name: "rocket-fuel", energy: 225000 }
};
exports.Fuels = [exports.Fuel.Wood, exports.Fuel.Coal, exports.Fuel.Solid, exports.Fuel.Rocket];
const BoilerEfficiency = 0.5;
exports.Box = {
    Wood: { name: "wooden-chest", size: 16 },
    Wagon: { name: "cargo-wagon", size: 40 },
    Steel: { name: "steel-chest", size: 48 },
    Iron: { name: "iron-chest", size: 32 },
};
exports.Boxes = [exports.Box.Wood, exports.Box.Iron, exports.Box.Steel, exports.Box.Wagon];
exports.beltItemsPerSec = 13.3333;
const assemblerSpeed = [0.5, 0.75, 1.25];
function ceil(n) {
    return integer(Math.ceil(n));
}
exports.ceil = ceil;
function g(...items) {
    const node = document.createElement("span");
    for (let i = 0; i < items.length; i++) {
        node.appendChild(toElement(items[i]));
    }
    return node;
}
exports.g = g;
function itemGroup(...names) {
    return g(...[...names].map(item));
}
exports.itemGroup = itemGroup;
function p(s) {
    const node = document.createElement("p");
    node.appendChild(toElement(s));
    return node;
}
exports.p = p;
function text(s) {
    const node = document.createElement("span");
    node.innerText = s;
    return node;
}
exports.text = text;
function tt(s) {
    const node = document.createElement("span");
    node.innerText = s;
    node.classList.add("number");
    return node;
}
exports.tt = tt;
function nOf(n, item) {
    const node = document.createElement("span");
    node.appendChild(integer(n));
    node.appendChild(document.createTextNode(" "));
    node.appendChild(item);
    node.title = name;
    return node;
}
exports.nOf = nOf;
function item(name) {
    const node = document.createElement("p");
    node.classList.add(name);
    node.classList.add("item");
    node.title = name;
    return node;
}
exports.item = item;
function large(n) {
    const node = document.createElement("span");
    if (n < 1000) {
        node.innerText = n.toFixed(0);
    }
    else {
        var k = n / 1000;
        if (Math.floor(k) === k) {
            node.innerText = k + 'k';
        }
        else {
            node.innerText = k.toFixed(1) + 'k';
        }
    }
    node.classList.add("number");
    return node;
}
exports.large = large;
function long_time(seconds) {
    seconds = Math.round(seconds);
    const days = Math.floor(seconds / (60 * 60 * 24));
    seconds -= days * 60 * 60 * 24;
    const hours = Math.floor(seconds / (60 * 60));
    seconds -= hours * 60 * 60;
    return g(integer(days), "d ", spacePadded(hours, 2), "h");
}
exports.long_time = long_time;
function time(seconds) {
    seconds = Math.round(seconds);
    const days = Math.floor(seconds / (60 * 60 * 24));
    seconds -= days * 60 * 60 * 24;
    const hours = Math.floor(seconds / (60 * 60));
    seconds -= hours * 60 * 60;
    const minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;
    if (days > 0) {
        return g(integer(days), "d ", spacePadded(hours, 2), "h");
    }
    if (hours > 0) {
        return g(integer(hours), "h ", spacePadded(minutes, 2), "m");
    }
    if (minutes > 10) {
        return g(integer(minutes), "m");
    }
    if (minutes > 0) {
        return g(integer(minutes), "m ", spacePadded(seconds, 2), "s");
    }
    return g(integer(seconds), "s");
}
exports.time = time;
function fixed(n, units) {
    const node = document.createElement("span");
    node.innerText = n.toFixed(1);
    if (units)
        node.innerText += " " + units;
    node.classList.add("number");
    return node;
}
exports.fixed = fixed;
function spacePadded(n, width) {
    // &#8199;
    var result = n.toString();
    while (result.length < width) {
        result = String.fromCharCode(8199) + result;
    }
    const node = document.createElement("span");
    node.innerText = result;
    node.classList.add("number");
    return node;
}
exports.spacePadded = spacePadded;
function integer(n, units) {
    const node = document.createElement("span");
    let text = n.toString();
    if (text.length >= 4) {
        text = text.substr(0, text.length - 3) + "," + text.substr(text.length - 3);
    }
    node.innerText = text;
    if (units)
        node.innerText += " " + units;
    node.classList.add("number");
    return node;
}
exports.integer = integer;
function ratio(left, right) {
    // 12 <p class="item electric-drill"></p> : 11 <p class="item steel-furnace"></p>
    const node = document.createElement("span");
    node.appendChild(left);
    node.appendChild(text(" : "));
    node.appendChild(right);
    return node;
}
exports.ratio = ratio;
function doubleRowHeaderTable(opts) {
    const makeRowHeader1 = opts.row1Header || (c => toElement(c));
    const makeRowHeader2 = opts.row2Header || (c => toElement(c));
    const makeColHeader = opts.colHeader || (c => toElement(c));
    const getRow2 = opts.getRow2 || (() => opts.rows2);
    withTable(opts.table, table => {
        // Headers
        const th = table.insertRow();
        th.appendChild(document.createElement('th')).appendChild(toElement(opts.origin1));
        th.appendChild(document.createElement('th')).appendChild(toElement(opts.origin2));
        let i = 0;
        for (const col of opts.cols) {
            th.appendChild(document.createElement('th')).appendChild(toElement(makeColHeader(col, i)));
            i++;
        }
        // Body
        i = 0;
        for (const r1 of opts.rows1) {
            const r2s = getRow2(r1, i);
            const row = table.insertRow();
            const header = row.appendChild(document.createElement('th'));
            header.rowSpan = r2s.length + 1;
            header.appendChild(toElement(makeRowHeader1(r1, i)));
            let j = 0;
            for (const r2 of opts.rows2) {
                const subRow = table.insertRow();
                const subHed = document.createElement('th');
                subHed.appendChild(toElement(makeRowHeader2(r2, j)));
                subRow.appendChild(subHed);
                let k = 0;
                for (const col of opts.cols) {
                    const cel = toElement(opts.cell(r1, r2, col, i, j, k));
                    const td = document.createElement('td');
                    td.appendChild(cel);
                    subRow.appendChild(td);
                    k++;
                }
                j++;
            }
            i++;
        }
    });
}
exports.doubleRowHeaderTable = doubleRowHeaderTable;
function basicTable(opts) {
    const rowHeader = opts.rowHeader || (c => toElement(c));
    const colHeader = opts.colHeader || (c => toElement(c));
    withTable(opts.table, table => {
        const restoreFoot = stashFoot(table);
        // header
        const th = table.insertRow();
        const origin = document.createElement("th");
        origin.appendChild(toElement(opts.origin));
        th.appendChild(origin);
        for (let i = 0; i < opts.cols.length; i++) {
            const header = colHeader(opts.cols[i], i);
            th.appendChild(document.createElement("th")).appendChild(toElement(header));
        }
        // rows
        for (let i = 0; i < opts.rows.length; i++) {
            const row = table.insertRow();
            const rowHeaderCell = document.createElement("th");
            rowHeaderCell.appendChild(toElement(rowHeader(opts.rows[i], i)));
            row.appendChild(rowHeaderCell);
            for (let j = 0; j < opts.cols.length; j++) {
                const cell = row.insertCell();
                cell.appendChild(toElement(opts.cell(opts.rows[i], opts.cols[j], i, j)));
            }
        }
        restoreFoot();
    });
}
exports.basicTable = basicTable;
function toElement(x) {
    if (x instanceof HTMLElement)
        return x;
    if (typeof x === 'string') {
        return text(x);
    }
    if (typeof x === 'number') {
        return integer(x);
    }
    return item(x.name);
}
exports.toElement = toElement;
function staticTable(targetName, setup) {
    withTable(targetName, table => {
        const restoreFoot = stashFoot(table);
        const headers = setup.shift();
        // header
        const th = table.insertRow();
        for (let i = 0; i < headers.length; i++) {
            th.appendChild(document.createElement("th")).appendChild(toElement(headers[i]));
        }
        // cells
        for (const row of setup) {
            const tr = table.insertRow();
            for (const cell of row) {
                tr.insertCell().appendChild(toElement(cell));
            }
        }
        restoreFoot();
    });
}
exports.staticTable = staticTable;
const tableCallbacks = [];
window.addEventListener("DOMContentLoaded", () => {
    tableCallbacks.forEach(e => e());
});
function withTable(id, callback) {
    tableCallbacks.push(() => {
        const table = getTableById(id);
        if (table) {
            callback(table);
        }
    });
}
function stashFoot(table) {
    var foot = table.tFoot;
    if (foot) {
        table.deleteTFoot();
        return () => {
            table.tFoot = foot;
        };
    }
    else {
        return () => { };
    }
}
function getTableById(id) {
    const table = document.getElementById(id);
    if (!(table instanceof HTMLTableElement)) {
        console.error(`No table named ${id} exists in the document`);
        const tables = document.getElementsByTagName("table");
        const names = [];
        for (let i = 0; i < tables.length; i++) {
            if (tables[i].id) {
                names.push(tables[i].id);
            }
        }
        console.error(`Tables: ${names.join(", ")} `);
        return undefined;
    }
    return table;
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(0);


/***/ })
/******/ ]);
//# sourceMappingURL=main.bundle.js.map