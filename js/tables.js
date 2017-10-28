"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var setup_1 = require("./setup");
var recipes_1 = require("./recipes");
var items_1 = require("./items");
/******* Belts ***********/
setup_1.doubleRowHeaderTable({
    table: 'belt-throughput',
    origin1: setup_1.text("Interval"),
    origin2: setup_1.text("Belt"),
    rows1: [setup_1.text("per second"), setup_1.text("per minute")],
    rows2: setup_1.Belts,
    cols: ["One Lane", "Both Lanes"],
    cell: function (r1, r2, c, ri1, ri2, ci) {
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
    [setup_1.item("uranium-ore"), setup_1.itemCount("uranium-235", 40)],
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
    origin: setup_1.item("uranium-ore"),
    rows: [10, 25, 50, 100, 250, 500, 1000, 1500].map(function (n) { return n * 1000; }),
    rowHeader: function (n) { return setup_1.large(n); },
    cols: [1, 2, 4, 8, 12, 20],
    colHeader: function (n) { return setup_1.itemCount("nuclear-reactor", n); },
    cell: function (patchSize, nReactors) {
        var fuelCells = 630 / 10000 * patchSize;
        var reactorSeconds = fuelCells * 200;
        var seconds = reactorSeconds / nReactors;
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
        setup_1.ratio(setup_1.itemCount("electric-mining-drill", 6), setup_1.itemCount("stone-furnace", 11)),
        setup_1.ratio(setup_1.itemCount("electric-mining-drill", 12), setup_1.itemCount("steel-furnace", 11))],
    [setup_1.item("stone-brick"),
        setup_1.ratio(setup_1.itemCount("electric-mining-drill", 7), setup_1.itemCount("stone-furnace", 8)),
        setup_1.ratio(setup_1.itemCount("electric-mining-drill", 7), setup_1.itemCount("steel-furnace", 4))],
]);
function groupBy(items, keyFunc) {
    var outputs = [];
    for (var _i = 0, items_2 = items; _i < items_2.length; _i++) {
        var item_1 = items_2[_i];
        var key = keyFunc(item_1);
        var group = undefined;
        for (var _a = 0, outputs_1 = outputs; _a < outputs_1.length; _a++) {
            var g_1 = outputs_1[_a];
            if (g_1.key === key) {
                group = g_1;
                break;
            }
        }
        if (group === undefined) {
            outputs.push({ key: key, items: [item_1] });
        }
        else {
            group.items.push(item_1);
        }
    }
    return outputs;
}
/******* Assemblers and Belts ***********/
var interestingRecipes = [
    "transport-belt", "fast-transport-belt", "express-transport-belt",
    "inserter",
    "rail", "assembling-machine-1", "assembling-machine-2",
    "electronic-circuit", "processing-unit", "advanced-circuit",
    "rocket-fuel", "low-density-structure", "rocket-control-unit"
];
var recipeList = Object.keys(recipes_1.recipes).map(function (k) { return recipes_1.recipes[k]; }).filter(function (r) { return interestingRecipes.indexOf(r.name) >= 0; });
recipeList.sort(function (a, b) { return interestingRecipes.indexOf(a.name) - interestingRecipes.indexOf(b.name); });
var recipeGroups = groupBy(recipeList, function (r) { return r.energy; });
recipeGroups.sort(function (a, b) { return a.key - b.key; });
setup_1.doubleRowHeaderTable({
    table: "crafting",
    origin1: "Recipe / Speed",
    origin2: "Belt",
    cell: function (r1, r2, c) {
        return Math.ceil(r2.throughput * (r1.key / c.speed));
    },
    cols: setup_1.Assemblers,
    rows1: recipeGroups,
    rows2: setup_1.Belts,
    row1Header: function (r) { return setup_1.g(setup_1.p(r.key + 's'), setup_1.itemGroup.apply(void 0, r.items.map(function (i) { return i.name; }))); },
    row2Header: function (r) { return setup_1.item(r.name); }
});
/******* Steam Power ***********/
setup_1.staticTable("steam", [
    [setup_1.item("offshore-pump"), setup_1.item("boiler"), setup_1.item("steam-engine"), setup_1.item("electric-mining-drill"), setup_1.text("Power")],
    [setup_1.integer(1), setup_1.integer(20), setup_1.integer(40), setup_1.integer(18), setup_1.fixed(40 * 0.900, "MW")]
]);
// Boilers consume 1.8 MW and there are 20 of them per setup
var wattsConsumedPerSetup = 1800 * 20;
setup_1.basicTable({
    origin: setup_1.text(''),
    table: "steam-advanced",
    cell: function (fuel, belt) {
        var wattsProvided = fuel.energy * belt.throughput;
        return setup_1.fixed(wattsProvided / wattsConsumedPerSetup);
    },
    cols: setup_1.Belts,
    rows: setup_1.Fuels
});
var itemList = [
    ["Ores", ["iron-ore", "copper-ore", "coal", "stone", "uranium-ore"]],
    ["Smelted", ["iron-plate", "steel-plate", "copper-plate", "stone-brick", "uranium-235", "uranium-238"]],
    ["Intermediates", ["copper-cable", "electronic-circuit", "advanced-circuit", "battery", "science-pack-1", "processing-unit", "plastic-bar", "iron-gear-wheel", "engine-unit", "electric-engine-unit", "speed-module"]],
    ["Logistics", ["transport-belt", "pipe", "rail", "repair-pack", "stone-wall", "splitter", "pipe-to-ground", "rail-signal", "rail-chain-signal", "train-stop"]],
    ["Power", ["small-electric-pole", "medium-electric-pole", "big-electric-pole", "substation", "solar-panel", "accumulator", "small-lamp"]],
    ["Trains", ["locomotive", "cargo-wagon", "fluid-wagon"]],
    ["Tiles", ["concrete", "hazard-concrete", "landfill"]],
    ["Ammo", ["piercing-rounds-magazine", "shotgun-shell", "cannon-shell", "explosive-rocket"]],
    ["Other Weapons", ["grenade", "cluster-grenade", "atomic-bomb", "land-mine"]],
    ["Rocket Parts", ["low-density-structure", "rocket-control-unit", "rocket-fuel", "satellite"]],
    ["Space", ["space-science-pack"]]
];
function makeStackSizeTable() {
    var result = [];
    result.push(["Category", "Items", "Size"]);
    for (var i = 0; i < itemList.length; i++) {
        var sizes = [];
        var outputs = [];
        for (var j = 0; j < itemList[i][1].length; j++) {
            var size = items_1.items[itemList[i][1][j]].stack_size;
            var idx = sizes.indexOf(size);
            if (idx < 0) {
                idx = sizes.push(size) - 1;
                outputs.push([]);
            }
            outputs[idx].push(itemList[i][1][j]);
        }
        for (var j = 0; j < sizes.length; j++) {
            result.push([itemList[i][0], setup_1.itemGroup.apply(void 0, outputs[j]), sizes[j]]);
        }
    }
    return result;
}
/******* Stack sizes ***********/
setup_1.staticTable("stack-sizes", makeStackSizeTable());
/******* Storage ***********/
var goodNumbers = [1, 2, 4, 8, 16, 32, 64, 128, undefined];
setup_1.basicTable({
    origin: setup_1.text("#"),
    table: "storage",
    cols: setup_1.Boxes,
    rows: goodNumbers,
    rowHeader: function (c) { return c === undefined ? setup_1.text("(slots)") : setup_1.toElement(c); },
    cell: function (row, col) {
        if (row === undefined) {
            return setup_1.integer(col.size);
        }
        return setup_1.large(row * col.size * 100);
    }
});
var baseLiqRatio = [
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
setup_1.basicTable({
    table: "coal-to-plastic",
    noRowHeader: true,
    rows: [1 / 3, 1, 2, 3, 4, 5],
    cols: [setup_1.item("offshore-pump"),
        setup_1.item("coal"),
        setup_1.item("oil-refinery"),
        setup_1.item("heavy-oil-cracking"),
        setup_1.item("light-oil-cracking"),
        setup_1.item("coal"),
        setup_1.item("chemical-plant"),
        setup_1.item("plastic-bar")],
    cell: function (r, c, ri, ci) {
        if (ci === baseLiqRatio.length - 1) {
            return setup_1.fixed(r * baseLiqRatio[ci]);
        }
        else {
            return setup_1.ceil(r * baseLiqRatio[ci]);
        }
    }
});
var baseAdvancedToFuelRatio = [
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
    cell: function (r, c, ri, ci) {
        return setup_1.ceil(r * baseAdvancedToFuelRatio[ci]);
    }
});
var baseBasicToFuelRatio = [
    25,
    50,
    18,
    36,
    24,
    32.5 // Output
];
setup_1.basicTable({
    table: "basic-oil-to-fuel",
    rows: [1 / 25, 6 / 25, 10 / 25, 15 / 25, 20 / 25, 1, 31 / 25],
    cols: [setup_1.item("oil-refinery"), setup_1.item("crude-oil"), setup_1.item("solid-fuel-from-heavy-oil"), setup_1.item("solid-fuel-from-light-oil"), setup_1.item("solid-fuel-from-petroleum-gas"), setup_1.item("solid-fuel")],
    noRowHeader: true,
    cell: function (r, c, ri, ci) {
        if (ci === 5) {
            return setup_1.fixed(r * baseBasicToFuelRatio[ci]);
        }
        else {
            return setup_1.ceil(r * baseBasicToFuelRatio[ci]);
        }
    }
});
var baseOilToGasRatio = [
    0.1,
    5,
    1,
    7,
    90,
];
setup_1.basicTable({
    table: "oil-to-gas",
    rows: [1, 2, 3, 4, 5, 10, 15, 20],
    cols: [setup_1.item("offshore-pump"), setup_1.item("oil-refinery"), setup_1.item("heavy-oil-cracking"), setup_1.item("light-oil-cracking"), setup_1.item("petroleum-gas")],
    noRowHeader: true,
    cell: function (r, c, ri, ci) {
        return setup_1.ceil(r * baseOilToGasRatio[ci]);
    }
});
var TrainLoadTime;
(function (TrainLoadTime) {
    // Basic, Fast, Stack (chest-to-chest)
    var speeds = [2.5, 6.93, 27.7];
    var reps = ["iron-ore", "iron-plate", "electronic-circuit"];
    var sizes = [50, 100, 200];
    setup_1.doubleRowHeaderTable({
        origin1: 'Stack Size',
        origin2: '# of inserters',
        table: "train-load-time",
        cols: [setup_1.item("inserter"), setup_1.item("fast-inserter"), setup_1.item("stack-inserter")],
        rows1: [50, 100, 200],
        rows2: [1, 4, 6, 8, 12],
        row1Header: function (r, ri) { return setup_1.itemCount(reps[ri], sizes[ri]); },
        cell: function (r1, r2, c, ri1, ri2, ci) {
            return setup_1.short_time(r1 * 40 / (speeds[ci] * (ri2 + 1)));
        }
    });
})(TrainLoadTime || (TrainLoadTime = {}));
var Landfill;
(function (Landfill) {
    // Takes 20 stone to make 1 landfill
    // 1 chunk = 32x32
    // You can run 25 tiles per second with 6 exoskeletons
    // Cars have 80 storage slots
    // Landfill stack size is 100
    // You can fill 10 tiles per step
    setup_1.basicTable({
        table: "lake-fill",
        rows: [1, 5, 25, 50, 100, 500, 1000],
        cols: [setup_1.item("stone"), "Trips", "Time"],
        origin: "Lake Size (Chunks)",
        cell: function (r, c, ri, ci) {
            switch (ci) {
                case 0:
                    return setup_1.large(r * 32 * 32 * 20);
                case 1:
                    return setup_1.ceil(r * 32 * 32 / (80 * 100), false);
                case 2:
                    return setup_1.short_time(r * 32 * 32 / (10 * 25 * 0.8));
            }
        }
    });
})(Landfill || (Landfill = {}));
var CompressionRatios;
(function (CompressionRatios) {
    // The *stack* compression ratio is how many stacks of inputs
    //  it takes to create one stack of output.
    // The *belt* compression ratio is how many items of inputs
    //  it takes to create an item of output.
    // The module-adjusted ratio is the same except with
    //  taking productivity modules into account
    function computeStackRatio(r) {
        var output = r.products[0];
        // Fraction of a stack produced per output
        var stackFractionPerOutput = output.amount / items_1.items[output.name].stack_size;
        var inputStackFraction = 0;
        for (var _i = 0, _a = r.ingredients; _i < _a.length; _i++) {
            var input = _a[_i];
            var inp = input;
            if (inp.type === 'fluid')
                continue;
            inputStackFraction += inp.amount / items_1.items[inp.name].stack_size;
        }
        return inputStackFraction / stackFractionPerOutput;
    }
    function computeBeltRatio(r) {
        var output = r.products[0];
        // Fraction of a stack produced per output
        var stackFractionPerOutput = output.amount;
        var inputStackFraction = 0;
        for (var _i = 0, _a = r.ingredients; _i < _a.length; _i++) {
            var input = _a[_i];
            var inp = input;
            if (inp.type === 'fluid')
                continue;
            inputStackFraction += inp.amount;
        }
        return inputStackFraction / stackFractionPerOutput;
    }
    var recipesToMeasure = [
        'iron-plate',
        'steel-plate',
        'copper-cable',
        'iron-gear-wheel',
        'electronic-circuit',
        'advanced-circuit',
        'processing-unit',
        'battery',
        'engine-unit',
        'electric-engine-unit',
        'low-density-structure',
        'rocket-control-unit',
        'rocket-fuel',
        'satellite'
    ];
    for (var _i = 0, recipesToMeasure_1 = recipesToMeasure; _i < recipesToMeasure_1.length; _i++) {
        var r = recipesToMeasure_1[_i];
        console.log(r + " STACK => " + computeStackRatio(recipes_1.recipes[r]));
        console.log(r + " BELT => " + computeBeltRatio(recipes_1.recipes[r]));
    }
    setup_1.basicTable({
        table: "compression-ratios",
        rows: recipesToMeasure,
        cols: ["Stack", "Belt"],
        rowHeader: setup_1.item,
        origin: "",
        cell: function (r, c) {
            var n;
            if (c === "Stack") {
                n = computeStackRatio(recipes_1.recipes[r]);
            }
            else {
                n = computeBeltRatio(recipes_1.recipes[r]);
            }
            if (n === Math.ceil(n)) {
                return setup_1.integer(n);
            }
            else {
                return setup_1.fixed(n);
            }
        }
    });
})(CompressionRatios || (CompressionRatios = {}));
var MineLongevity;
(function (MineLongevity) {
    var sizes = [25000, 50000, 100000, 500000, 1000000, 2000000, 5000000, 10000000];
    var counts = [1, 5, 10, 25, 50, 100];
    setup_1.basicTable({
        table: "patch-longevity",
        rows: sizes,
        rowHeader: function (r) { return setup_1.large(r); },
        cols: counts,
        colHeader: function (r) { return setup_1.itemCount("electric-mining-drill", r); },
        origin: setup_1.item("iron-ore"),
        cell: function (size, count) {
            return setup_1.time((size / count) / 0.525);
        }
    });
})(MineLongevity || (MineLongevity = {}));
// TODO Smelting: A [C] belt of X fuel can power Y [steel, stone] furnaces
// Steel furnace 180kW (craft speed 2)
// Stone furnace 180kW (craft speed 1)
// Craft times: 3.5 (iron, copper, stone), 17.5 (steel)
setup_1.basicTable({
    table: "smelting-fuel",
    origin: setup_1.item("steel-furnace"),
    rows: setup_1.BeltLanes,
    cols: setup_1.Fuels,
    cell: function (r, c) {
        return setup_1.floor(r.throughput * c.energy / 180);
    }
});
var SmeltingFuelRatios;
(function (SmeltingFuelRatios) {
    var costs = [3.5, 17.5];
    var speeds = [1, 2];
    var wattage = 180;
    setup_1.doubleRowHeaderTable({
        table: "smelting-fuel-ratios",
        origin1: "Input",
        origin2: "Furnace",
        rows1: [setup_1.itemGroup("copper-ore", "iron-ore", "stone"), setup_1.itemGroup("iron-plate")],
        rows2: ["stone-furnace", "steel-furnace"],
        row2Header: setup_1.item,
        cols: setup_1.Fuels,
        cell: function (r1, r2, c, ri1, ri2, ci) {
            return setup_1.fixed(c.energy / (costs[ri1] / speeds[ri2] * wattage));
        }
    });
})(SmeltingFuelRatios || (SmeltingFuelRatios = {}));
var IntegerStacks;
(function (IntegerStacks) {
    var intermediates = ["electronic-circuit",
        "iron-plate",
        "iron-gear-wheel",
        "advanced-circuit",
        "copper-plate",
        "plastic-bar",
        "engine-unit",
        "coal",
        "steel-plate",
        "electric-engine-unit",
        "processing-unit",
        "battery",
        "stone-brick",
        "electric-furnace"
    ];
    var recipeNames = ["science-pack-1", "science-pack-2", "science-pack-3", "military-science-pack", "production-science-pack", "high-tech-science-pack"];
    function calcRecipeCost(name) {
        var cost = {};
        getIntermediateInputs(recipes_1.recipes[name]);
        return Object.keys(cost).map(function (c) { return ({ name: c, count: cost[c], outputsPerStack: items_1.items[c].stack_size / cost[c], allocated: 0 }); });
        function getIntermediateInputs(r) {
            if (r.name === "production-science-pack")
                debugger;
            var outputs = r.products;
            var outputFactor = outputs[0].amount;
            console.log('of ' + outputFactor);
            var _loop_1 = function (ing) {
                if (intermediates.indexOf(ing.name) >= 0) {
                    cost[ing.name] = (cost[ing.name] || 0) + ing.amount / outputFactor;
                }
                else {
                    var rec = Object.keys(recipes_1.recipes).map(function (k) { return recipes_1.recipes[k]; }).filter(function (r) { return r.products.some(function (o) { return o.name === ing.name; }); })[0];
                    if (rec === undefined) {
                        throw new Error("Didn't find any recipes to produce " + ing.name);
                    }
                    getIntermediateInputs(rec);
                }
            };
            /*
            if (r.name === "copper-cable") {
                // Prod module
                outputFactor = outputFactor * 1.4;
            }
            */
            for (var _i = 0, _a = r.ingredients; _i < _a.length; _i++) {
                var ing = _a[_i];
                _loop_1(ing);
            }
        }
    }
    function allocate(costs) {
        for (var _i = 0, costs_1 = costs; _i < costs_1.length; _i++) {
            var c = costs_1[_i];
            c.allocated = 1;
        }
        var didAnything = true;
        while (didAnything) {
            didAnything = false;
            var targetOutput = Math.max.apply(Math, costs.map(function (c) { return c.outputsPerStack * c.allocated; }));
            for (var _a = 0, costs_2 = costs; _a < costs_2.length; _a++) {
                var c = costs_2[_a];
                if (c.outputsPerStack * c.allocated < targetOutput) {
                    c.allocated++;
                    didAnything = true;
                }
            }
        }
        return costs;
    }
    function isAlmostInteger(n) {
        return Math.abs(n - Math.floor(n)) < 0.00000001;
    }
    setup_1.doubleRowHeaderTable({
        table: "integer-stack-ratios",
        rows1: recipeNames,
        rows2: ["Slots", "Count", "Count x 8"],
        cols: [0, 1, 2, 3, 4, 5, 6, 7],
        row1Header: function (r) {
            return setup_1.item(r);
        },
        origin1: "Recipe",
        origin2: "",
        colHeader: function () { return ""; },
        cell: function (recipe, row2, col, r1i, r2i, colIndex) {
            var ii = calcRecipeCost(recipe);
            allocate(ii);
            var totalAlloc = ii.map(function (c) { return c.allocated; }).reduce(function (a, b) { return a + b; }, 0);
            console.log('ta ' + totalAlloc);
            var multiplier = Math.floor(40 / totalAlloc);
            var off = false;
            if (multiplier === 0) {
                multiplier = Math.floor(80 / totalAlloc);
            }
            if (multiplier === 0) {
                multiplier = Math.round(128 * 40 / totalAlloc) / 128;
                off = true;
            }
            if (colIndex >= ii.length) {
                if (r2i === 0 && colIndex === ii.length) {
                    return (120 - (totalAlloc * multiplier)) % 40;
                }
                return "";
            }
            var cost = ii[colIndex];
            if (r2i === 0) {
                if (off) {
                    return setup_1.g(setup_1.itemCount(cost.name, cost.allocated * multiplier), "*");
                }
                else {
                    return setup_1.itemCount(cost.name, cost.allocated * multiplier);
                }
            }
            else if (r2i === 1) {
                return setup_1.large(cost.allocated * multiplier * items_1.items[cost.name].stack_size);
            }
            else {
                return setup_1.large(cost.allocated * multiplier * items_1.items[cost.name].stack_size * (8 / multiplier));
            }
        }
    });
})(IntegerStacks || (IntegerStacks = {}));
