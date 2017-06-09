"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const setup_1 = require("./setup");
const recipes_1 = require("./recipes");
const items_1 = require("./items");
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
    cols: [setup_1.item("offshore-pump"), setup_1.item("crude-oil"), setup_1.item("oil-refinery"), setup_1.item("heavy-oil-cracking"), setup_1.item("solid-fuel-from-light-oil"), setup_1.item("solid-fuel-from-petroleum-gas"), setup_1.item("solid-fuel")],
    noRowHeader: true,
    cell: (r, c, ri, ci) => {
        return setup_1.ceil(r * baseAdvancedToFuelRatio[ci]);
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
const baseOilToGasRatio = [
    0.1,
    5,
    1,
    7 // Light cracking
];
setup_1.basicTable({
    table: "oil-to-gas",
    rows: [1, 2, 3, 4, 5, 10, 20],
    cols: [setup_1.item("oil-refinery"), setup_1.item("heavy-oil-cracking"), setup_1.item("light-oil-cracking")],
    noRowHeader: true,
    cell: (r, c, ri, ci) => {
        return setup_1.ceil(r * baseOilToGasRatio[ci]);
    }
});
