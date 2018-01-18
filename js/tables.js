define(["require", "exports", "./setup", "./factorio", "./displayable", "./recipes", "./items", "./data"], function (require, exports, setup_1, factorio_1, displayable_1, recipes_1, items_1, data) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var itemList = [];
    for (var _i = 0, _a = Object.keys(data.items); _i < _a.length; _i++) {
        var key = _a[_i];
        itemList.push(data.items[key]);
    }
    /******* Belts ***********/
    setup_1.header("Factorio 101");
    var SimpleTables;
    (function (SimpleTables) {
        /** Belt Throughput **/
        setup_1.doubleRowHeaderTable({
            title: "Belt Throughput",
            description: "How many items can each belt transport?",
            origin1: displayable_1.text("Interval"),
            origin2: displayable_1.text("Belt"),
            rows1: [displayable_1.text("per second"), displayable_1.text("per minute")],
            rows2: factorio_1.Belts,
            cols: ["One Lane", "Both Lanes"],
            cell: function (r1, r2, c, ri1, ri2, ci) {
                if (ri1 === 0) {
                    return displayable_1.fixed(r2.throughput / (2 - ci));
                }
                else {
                    return displayable_1.integer(r2.throughput / (2 - ci) * (ri1 === 0 ? 1 : 60));
                }
            }
        });
        /** Steam Power **/
        // TODO: Calculate this from game data
        setup_1.staticTable({
            title: "Steam Power",
            rows: [
                [displayable_1.item("offshore-pump"), displayable_1.item("boiler"), displayable_1.item("steam-engine"), displayable_1.item("electric-mining-drill"), displayable_1.text("Power")],
                [displayable_1.integer(1), displayable_1.integer(20), displayable_1.integer(40), displayable_1.integer(18), displayable_1.fixed(40 * 0.900, "MW")]
            ]
        });
    })(SimpleTables || (SimpleTables = {}));
    setup_1.header("Energy Storage");
    var EnergyStorageTables;
    (function (EnergyStorageTables) {
        var fuels = itemList.filter(function (i) { return i.fuel_value > 2000000 && i.fuel_category === "chemical" && !i["place_result"]; }).sort(function (a, b) { return a.fuel_value - b.fuel_value; });
        var fuelList = [];
        for (var _i = 0, fuels_1 = fuels; _i < fuels_1.length; _i++) {
            var f = fuels_1[_i];
            fuelList.push({ count: 1, fuel: f });
            if (f.stack_size > 1) {
                fuelList.push({ count: f.stack_size, fuel: f });
            }
        }
        setup_1.basicTable({
            title: "Energy Values",
            cols: ["energy", "boiler", "burner-inserter", "locomotive", "car", "tank"],
            colHeader: displayable_1.item,
            origin: "Fuel",
            rows: fuelList,
            rowHeader: function (r) {
                return displayable_1.itemCount(r.fuel.name, r.count);
            },
            cell: function (row, col) {
                var qty = row.count;
                var joules = row.fuel.fuel_value * qty;
                switch (col) {
                    case "energy":
                        return displayable_1.energy(joules);
                    case "boiler":
                        return displayable_1.time(joules / 3600000);
                    case "locomotive":
                        return displayable_1.time(joules / 600000);
                    case "car":
                        return displayable_1.time(joules / 250000);
                    case "tank":
                        return displayable_1.time(joules / 800000);
                    case "burner-inserter":
                        return displayable_1.time(joules / 188000);
                }
                return "meh";
            }
        });
        // joules per unit water per degree celcius
        var waterThermalCapacity = 200;
        // temperature of output water from a steam process
        var exitTemperature = 15;
        var tankCapacity = data.entities["storage-tank"].fluid_capacity;
        setup_1.basicTable({
            title: "Steam Storage",
            rows: ["steam-engine", "steam-turbine"],
            origin: "",
            rowHeader: displayable_1.item,
            cols: ["Energy (MJ)", "Run Time"],
            cell: function (row, col, ri, ci) {
                var burner = data.entities[row];
                var deltaTemp = burner.maximum_temperature - exitTemperature;
                if (ci === 0) {
                    return displayable_1.g(displayable_1.integer(waterThermalCapacity * deltaTemp * tankCapacity / 1000000));
                }
                else {
                    return displayable_1.time(tankCapacity / (burner.fluid_usage_per_tick * ci * 60));
                }
            }
        });
    })(EnergyStorageTables || (EnergyStorageTables = {}));
    setup_1.header("Nuclear Power");
    var NuclearPowerTables;
    (function (NuclearPowerTables) {
        // TODO: Only run even numbers; go up to 16; include closed form
        // https://www.reddit.com/r/factorio/comments/67xgge/nuclear_ratios/
        setup_1.staticTable({
            description: [
                "Once set up, a single enrichment centrifuge provides U235 for 30 reactors.",
                "https://www.reddit.com/r/factorio/comments/67xgge/nuclear_ratios/"
            ],
            title: "Nuclear Power Ratios",
            rows: [
                [displayable_1.item("nuclear-reactor"), displayable_1.item("offshore-pump"), displayable_1.item("heat-exchanger"), displayable_1.item("steam-turbine"), displayable_1.text("Power (MW)")],
                [1, 1, 4, 7, 40],
                [2, 2, 16, 28, 160],
                [4, 5, 48, 83, 580],
                [6, 7, 80, 138, 800],
                [8, 10, 112, 193, 1120]
            ]
        });
        // TODO: Figure out a closed-form mathy way to do this
        // e.g. http://www.wolframalpha.com/input/?i=odds+of+40+or+more+successes+in+8000+trials+p%3D0.007
        setup_1.staticTable({
            title: "Kovarex Bootstrapping Probability",
            description: "Given an amount of uranium ore, what are my odds of getting the necessary 40 U235 to start enrichment?",
            rows: [
                [displayable_1.item("uranium-ore"), displayable_1.itemCount("uranium-235", 40)],
                [displayable_1.large(40000), displayable_1.g(2, "%")],
                [displayable_1.large(45000), displayable_1.g(8, "%")],
                [displayable_1.large(50000), displayable_1.g(22, "%")],
                [displayable_1.large(55000), displayable_1.g(43, "%")],
                [displayable_1.large(60000), displayable_1.g(64, "%")],
                [displayable_1.large(65000), displayable_1.g(81, "%")],
                [displayable_1.large(70000), displayable_1.g(92, "%")],
                [displayable_1.large(75000), displayable_1.g(97, "%")],
                [displayable_1.large(80000), displayable_1.g(99, "%")]
            ]
        });
        setup_1.basicTable({
            title: "Runtime from a Nuclear Patch",
            origin: "",
            rows: [10, 25, 50, 100, 250, 500, 1000, 1500].map(function (n) { return n * 1000; }),
            rowHeader: function (n) { return displayable_1.itemCount("uranium-ore", n); },
            cols: [1, 2, 4, 8, 12, 20],
            colHeader: function (n) { return displayable_1.itemCount("nuclear-reactor", n); },
            cell: function (patchSize, nReactors) {
                var fuelCells = 630 / 10000 * patchSize;
                var reactorSeconds = fuelCells * 200;
                var seconds = reactorSeconds / nReactors;
                return displayable_1.long_time(seconds);
            }
        });
    })(NuclearPowerTables || (NuclearPowerTables = {}));
    /******* Mining ***********/
    //  Regular ores come out at 0.525/s, stone at 0.65/s
    //  Steel / electric furnaces are twice as fast
    //  Iron/copper plate smelts at 1 ore / 3.5s
    //  
    //  Stone brick smelts 2 ore / 3.5s
    //  Steel / electric furnaces are twice as fast
    setup_1.staticTable({
        title: "Miners per Furnace",
        rows: [
            [displayable_1.text("Output"), displayable_1.item("stone-furnace"), displayable_1.itemGroup("steel-furnace", "electric-furnace")],
            [displayable_1.itemGroup("iron-plate", "copper-plate"),
                displayable_1.ratio(displayable_1.itemCount("electric-mining-drill", 6), displayable_1.itemCount("stone-furnace", 11)),
                displayable_1.ratio(displayable_1.itemCount("electric-mining-drill", 12), displayable_1.itemCount("steel-furnace", 11))],
            [displayable_1.item("stone-brick"),
                displayable_1.ratio(displayable_1.itemCount("electric-mining-drill", 7), displayable_1.itemCount("stone-furnace", 8)),
                displayable_1.ratio(displayable_1.itemCount("electric-mining-drill", 7), displayable_1.itemCount("steel-furnace", 4))]
        ]
    });
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
        title: "Assemblers to Fill a Belt",
        origin1: "Recipe / Speed",
        origin2: "Belt",
        cell: function (r1, r2, c) {
            return Math.ceil(r2.throughput * (r1.key / c.speed));
        },
        cols: factorio_1.Assemblers,
        rows1: recipeGroups,
        rows2: factorio_1.Belts,
        row1Header: function (r) { return displayable_1.g(displayable_1.p(r.key + 's'), displayable_1.itemGroup.apply(void 0, r.items.map(function (i) { return i.name; }))); },
        row2Header: function (r) { return displayable_1.item(r.name); }
    });
    var itemListforStacks = [
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
    setup_1.header("Storage and Transport");
    var StorageTables;
    (function (StorageTables) {
        function makeStackSizeTable() {
            var result = [];
            result.push(["Category", "Items", "Size"]);
            for (var i = 0; i < itemListforStacks.length; i++) {
                var sizes = [];
                var outputs = [];
                for (var j = 0; j < itemListforStacks[i][1].length; j++) {
                    var size = items_1.items[itemListforStacks[i][1][j]].stack_size;
                    var idx = sizes.indexOf(size);
                    if (idx < 0) {
                        idx = sizes.push(size) - 1;
                        outputs.push([]);
                    }
                    outputs[idx].push(itemListforStacks[i][1][j]);
                }
                for (var j = 0; j < sizes.length; j++) {
                    result.push([itemListforStacks[i][0], displayable_1.itemGroup.apply(void 0, outputs[j]), sizes[j]]);
                }
            }
            return result;
        }
        /******* Stack sizes ***********/
        setup_1.staticTable({
            title: "Stack Sizes",
            description: [
                "Stack sizes for common items.",
                "Higher-tier items (e.g. red belts) always have the same stack size as their lower-tier counterparts."
            ],
            rows: makeStackSizeTable()
        });
        /******* Storage ***********/
        var goodNumbers = [0.5, 1, 2, 4, 8, 16, 32, 64, 128, undefined];
        setup_1.basicTable({
            origin: displayable_1.text("#"),
            title: "Storage Capacities",
            description: [
                "How many items can N of each container hold?",
                "This table shows item counts for items with stack size 100.",
                "For items of stack size 50, look up one row.",
                "For items of stack size 200, look down row.",
            ],
            cols: factorio_1.Boxes,
            rows: goodNumbers,
            rowHeader: function (c) { return c === undefined ? displayable_1.text("(slots)") : displayable_1.toElement(c); },
            cell: function (row, col) {
                if (row === undefined) {
                    return displayable_1.integer(col.size);
                }
                return displayable_1.large(row * col.size * 100);
            }
        });
        var TrainLoadTime;
        (function (TrainLoadTime) {
            // Basic, Fast, Stack (chest-to-chest)
            var speeds = [2.5, 6.93, 27.7];
            var reps = ["low-density-structure", "iron-ore", "iron-plate", "electronic-circuit"];
            var sizes = [10, 50, 100, 200];
            setup_1.doubleRowHeaderTable({
                title: "Train Load Time",
                origin1: 'Stack Size',
                origin2: '# of inserters',
                cols: [displayable_1.item("inserter"), displayable_1.item("fast-inserter"), displayable_1.item("stack-inserter")],
                rows1: sizes,
                rows2: [1, 4, 6, 8, 10, 12],
                row1Header: function (r, ri) { return displayable_1.itemCount(reps[ri], sizes[ri]); },
                cell: function (r1, r2, c, ri1, ri2, ci) {
                    return displayable_1.short_time(r1 * 40 / (speeds[ci] * r2));
                }
            });
        })(TrainLoadTime || (TrainLoadTime = {}));
    })(StorageTables || (StorageTables = {}));
    setup_1.header("Oil Processing");
    var OilProcessingTables;
    (function (OilProcessingTables) {
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
            title: "Coal to Plastic",
            noRowHeader: true,
            rows: [1 / 3, 1, 2, 3, 4, 5],
            cols: [displayable_1.item("offshore-pump"),
                displayable_1.item("coal"),
                displayable_1.item("oil-refinery"),
                displayable_1.item("heavy-oil-cracking"),
                displayable_1.item("light-oil-cracking"),
                displayable_1.item("coal"),
                displayable_1.item("chemical-plant"),
                displayable_1.item("plastic-bar")],
            cell: function (r, c, ri, ci) {
                if (ci === baseLiqRatio.length - 1) {
                    return displayable_1.fixed(r * baseLiqRatio[ci]);
                }
                else {
                    return displayable_1.ceil(r * baseLiqRatio[ci]);
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
            title: "Advanced Oil Processing for Solid Fuel",
            rows: [1 / 25, 5 / 25, 10 / 25, 15 / 25, 20 / 25, 1],
            cols: [displayable_1.item("offshore-pump"), displayable_1.item("crude-oil"), displayable_1.item("oil-refinery"), displayable_1.item("heavy-oil-cracking"), displayable_1.item("solid-fuel-from-light-oil"), displayable_1.item("solid-fuel-from-petroleum-gas"), displayable_1.item("solid-fuel")],
            noRowHeader: true,
            cell: function (r, c, ri, ci) {
                return displayable_1.ceil(r * baseAdvancedToFuelRatio[ci]);
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
            title: "Basic Oil Processing for Solid Fuel",
            rows: [1 / 25, 6 / 25, 10 / 25, 15 / 25, 20 / 25, 1, 31 / 25],
            cols: [displayable_1.item("oil-refinery"), displayable_1.item("crude-oil"), displayable_1.item("solid-fuel-from-heavy-oil"), displayable_1.item("solid-fuel-from-light-oil"), displayable_1.item("solid-fuel-from-petroleum-gas"), displayable_1.item("solid-fuel")],
            noRowHeader: true,
            cell: function (r, c, ri, ci) {
                if (ci === 5) {
                    return displayable_1.fixed(r * baseBasicToFuelRatio[ci]);
                }
                else {
                    return displayable_1.ceil(r * baseBasicToFuelRatio[ci]);
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
            title: "Oil Processing for Petroleum Gas",
            rows: [1, 2, 3, 4, 5, 10, 15, 20],
            cols: [displayable_1.item("offshore-pump"), displayable_1.item("oil-refinery"), displayable_1.item("heavy-oil-cracking"), displayable_1.item("light-oil-cracking"), displayable_1.item("petroleum-gas")],
            noRowHeader: true,
            cell: function (r, c, ri, ci) {
                return displayable_1.ceil(r * baseOilToGasRatio[ci]);
            }
        });
    })(OilProcessingTables || (OilProcessingTables = {}));
    setup_1.header("Advanced Mining");
    var AdvancedMiningTables;
    (function (AdvancedMiningTables) {
        var miners = [{
                speed: 1.0,
                prod: 0.0,
                header: function () { return displayable_1.item("electric-mining-drill"); }
            },
            {
                speed: 2.5,
                prod: 0.0,
                header: function () { return displayable_1.g(displayable_1.item("electric-mining-drill"), "+", displayable_1.itemCount("speed-module-3", 3)); }
            },
            {
                speed: 2.0 * 0.85,
                prod: 0.1,
                header: function () { return displayable_1.g(displayable_1.item("electric-mining-drill"), "+", displayable_1.itemCount("speed-module-3", 2), displayable_1.itemCount("productivity-module-3", 1)); }
            },
            {
                speed: 1.5 * 0.70,
                prod: 0.2,
                header: function () { return displayable_1.g(displayable_1.item("electric-mining-drill"), "+", displayable_1.itemCount("speed-module-3", 1), displayable_1.itemCount("productivity-module-3", 2)); }
            },
            {
                speed: 0.65,
                prod: 0.3,
                header: function () { return displayable_1.g(displayable_1.item("electric-mining-drill"), "+", displayable_1.itemCount("productivity-module-3", 3)); }
            }
        ];
        setup_1.basicTable({
            title: "Miners per Belt (with Productivity / Speed)",
            description: [
                "How many drills does it take to fill both lanes of a blue belt with iron, copper, or coal?",
                "Stone patches need 20% fewer drills due to higher mining speed.",
                "To fill a red belt instead, multiply by 2/3. To fill a yellow belt instead, multiply by 1/3."
            ],
            origin: "Mining Productivity",
            rows: [0, 0.1, 0.25, 0.5, 0.75, 1, 1.5, 2, 2.5, 3],
            cols: miners,
            colHeader: function (ch) {
                return ch.header();
            },
            rowHeader: function (r) { return displayable_1.wholePercent(r); },
            cell: function (row, col) {
                var output = 0.525 * (1 + row + col.prod) * col.speed;
                var target = 40;
                return displayable_1.ceil(target / output);
            }
        });
        var MineLongevity;
        (function (MineLongevity) {
            var sizes = [25000, 50000, 100000, 500000, 1000000, 2000000, 5000000, 10000000];
            var counts = [1, 5, 10, 25, 50, 100];
            setup_1.basicTable({
                title: "Ore Patch Longevity",
                rows: sizes,
                rowHeader: function (r) { return displayable_1.large(r); },
                cols: counts,
                colHeader: function (r) { return displayable_1.itemCount("electric-mining-drill", r); },
                origin: displayable_1.item("iron-ore"),
                cell: function (size, count) {
                    return displayable_1.time((size / count) / 0.525);
                }
            });
        })(MineLongevity || (MineLongevity = {}));
    })(AdvancedMiningTables || (AdvancedMiningTables = {}));
    var Landfill;
    (function (Landfill) {
        // Takes 20 stone to make 1 landfill
        // 1 chunk = 32x32
        // You can run 25 tiles per second with 6 exoskeletons
        // Cars have 80 storage slots
        // Landfill stack size is 100
        // You can fill 10 tiles per step
        setup_1.basicTable({
            title: "Landfilling a Lake",
            rows: [1, 5, 25, 50, 100, 500, 1000],
            cols: [displayable_1.item("stone"), "Trips", "Time"],
            origin: "Lake Size (Chunks)",
            cell: function (r, c, ri, ci) {
                switch (ci) {
                    case 0:
                        return displayable_1.large(r * 32 * 32 * 20);
                    case 1:
                        return displayable_1.ceil(r * 32 * 32 / (80 * 100), false);
                    case 2:
                        return displayable_1.short_time(r * 32 * 32 / (10 * 25 * 0.8));
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
            'electric-furnace',
            'assembling-machine-1',
            'inserter',
            'electric-mining-drill',
            'low-density-structure',
            'rocket-control-unit',
            'rocket-fuel',
            'satellite'
        ];
        setup_1.basicTable({
            title: "Compression Ratios",
            rows: recipesToMeasure,
            cols: ["Stack", "Belt"],
            rowHeader: displayable_1.item,
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
                    return displayable_1.integer(n);
                }
                else {
                    return displayable_1.fixed(n);
                }
            }
        });
    })(CompressionRatios || (CompressionRatios = {}));
    function roundError(n) {
        var m = 1 << 7;
        return Math.round(n * m) / m;
    }
    function isAlmostInteger(n) {
        return Math.abs(n - Math.floor(n)) < 0.00000001;
    }
    function sum(arr, reduce) {
        var res = 0;
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var el = arr_1[_i];
            res += reduce ? reduce(el) : el;
        }
        return res;
    }
    function min(arr, reduce) {
        var res = Infinity;
        var i = 0;
        for (var _i = 0, arr_2 = arr; _i < arr_2.length; _i++) {
            var el = arr_2[_i];
            var n = reduce ? reduce(el, i) : el;
            if (n < res)
                res = n;
            i++;
        }
        return res;
    }
    function max(arr, reduce) {
        var res = -Infinity;
        var i = 0;
        for (var _i = 0, arr_3 = arr; _i < arr_3.length; _i++) {
            var el = arr_3[_i];
            var n = reduce ? reduce(el, i) : el;
            if (n > res)
                res = n;
            i++;
        }
        return res;
    }
    function tab(level) {
        return new Array(level + 1).join('  ');
    }
    function increment(map, key, amount) {
        map[key] = (map[key] || 0) + amount;
    }
    function mapMap(map, fn) {
        var result = {};
        for (var _i = 0, _a = Object.keys(map); _i < _a.length; _i++) {
            var k = _a[_i];
            result[k] = fn(map[k], k);
        }
        return result;
    }
    function computeRecipeCost(recipeName, intermediateItemNames) {
        var level = 0;
        var result = {};
        getIntermediateInputs(recipes_1.recipes[recipeName]);
        return result;
        function getIntermediateInputs(r, amount) {
            if (amount === void 0) { amount = 1; }
            var outputs = r.products;
            var outputFactor = outputs[0].amount;
            if (r.name === 'copper-cable')
                outputFactor *= 1.4;
            level++;
            var _loop_1 = function (ing) {
                // Find some recipe that produces this as an output
                var recs = Object.keys(recipes_1.recipes).map(function (k) { return recipes_1.recipes[k]; }).filter(function (r) { return r.products.some(function (o) { return o.name === ing.name; }); });
                if (ing.type === "fluid") {
                    // Find the barreling recipe
                    var barrelRecs = recs.filter(function (r) { return r.category === "crafting-with-fluid" && r.products.some(function (i) { return i.name === "empty-barrel"; }); });
                    if (barrelRecs.length !== 1)
                        throw new Error("Too many barreling recipes?");
                    var br = barrelRecs[0];
                    var fluid = br.products.filter(function (i) { return i.name === ing.name; })[0];
                    var barrel = br.products.filter(function (i) { return i.name !== ing.name; })[0];
                    increment(result, br.ingredients[0].name, amount * ing.amount / fluid.amount);
                    increment(result, barrel.name, amount * ing.amount / fluid.amount);
                }
                else {
                    if (intermediateItemNames.indexOf(ing.name) >= 0) {
                        increment(result, ing.name, amount * ing.amount / outputFactor);
                    }
                    else {
                        var foundIt = false;
                        for (var _i = 0, recs_1 = recs; _i < recs_1.length; _i++) {
                            var rec = recs_1[_i];
                            if (rec.ingredients.every(function (i) { return i.type !== 'fluid'; })) {
                                getIntermediateInputs(rec, ing.amount);
                                foundIt = true;
                                break;
                            }
                        }
                        if (!foundIt) {
                            throw new Error("Didn't find any recipes to produce " + ing.name);
                        }
                    }
                }
            };
            for (var _i = 0, _a = r.ingredients; _i < _a.length; _i++) {
                var ing = _a[_i];
                _loop_1(ing);
            }
            level--;
        }
    }
    var IntegerStacks;
    (function (IntegerStacks) {
        IntegerStacks.intermediates = ["electronic-circuit",
            "iron-plate",
            "iron-gear-wheel",
            "advanced-circuit",
            "copper-plate",
            "plastic-bar",
            "engine-unit",
            "coal",
            "steel-plate",
            "electric-engine-unit",
            "electric-mining-drill",
            "processing-unit",
            "battery",
            "stone-brick",
            "electric-furnace",
            "gun-turret",
            "sulfuric-acid-barrel",
            "solid-fuel",
            "assembling-machine-1",
            "speed-module",
            "rocket-fuel",
            "solar-panel",
            "accumulator",
            "low-density-structure",
            "empty-barrel"
        ];
        var recipeNames = [
            "electronic-circuit",
            "science-pack-1",
            "science-pack-2",
            "science-pack-3",
            "gun-turret",
            "military-science-pack",
            "electric-furnace",
            "advanced-circuit",
            "production-science-pack",
            "processing-unit",
            "speed-module",
            "high-tech-science-pack",
            "solar-panel",
            "accumulator",
            "low-density-structure",
            "rocket-control-unit",
            "rocket-part",
            "radar"
        ];
    })(IntegerStacks || (IntegerStacks = {}));
    var CargoRatios;
    (function (CargoRatios) {
        function computeAllocation(recipe) {
            var unitCost = computeRecipeCost(recipe, IntegerStacks.intermediates);
            var stackCost = mapMap(unitCost, function (c, n) {
                return c / items_1.items[n].stack_size;
            });
            var minimumStackAlloc = sum(Object.keys(stackCost), function (k) { return stackCost[k]; });
            var minimumMultiplier = roundError(40 / minimumStackAlloc);
            var names = Object.keys(unitCost).sort();
            var realAlloc = [];
            for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
                var input = names_1[_i];
                realAlloc.push(1);
            }
            var lastBottleneckCount = -100;
            var lastPerfect = undefined;
            var remainingSlots = 40 - sum(realAlloc);
            var improved = true;
            var smallestOutput = getSmallestOutput();
            while (improved && (remainingSlots > 0)) {
                improved = false;
                var constrainedIndices = [];
                for (var i = 0; i < realAlloc.length; i++) {
                    if (roundError(loadFactor(i)) === 1) {
                        constrainedIndices.push(i);
                    }
                }
                if (constrainedIndices.length <= remainingSlots) {
                    for (var _a = 0, constrainedIndices_1 = constrainedIndices; _a < constrainedIndices_1.length; _a++) {
                        var i = constrainedIndices_1[_a];
                        realAlloc[i]++;
                        remainingSlots--;
                    }
                    improved = true;
                }
                var bottleneckCount = names.filter(function (n, i) { return outputFrom(i) === getSmallestOutput(); }).length;
                if (bottleneckCount >= lastBottleneckCount) {
                    lastPerfect = realAlloc.slice();
                    lastBottleneckCount = bottleneckCount;
                }
            }
            if (lastPerfect) {
                realAlloc = lastPerfect;
            }
            return ({
                output: getSmallestOutput() * recipes_1.recipes[recipe].products[0].amount,
                realAlloc: realAlloc,
                names: names,
                quantity: names.map(function (_, i) { return quantity(i); }),
                leftover: names.map(function (_, i) { return leftover(i); }),
            });
            function quantity(index) {
                return realAlloc[index] * items_1.items[names[index]].stack_size;
            }
            function leftover(index) {
                var available = quantity(index);
                var consumed = 0;
                return available - Math.floor(getSmallestOutput()) * unitCost[names[index]];
            }
            function loadFactor(index) {
                return outputFrom(index) / getSmallestOutput();
            }
            function getSmallestOutput() {
                return min(realAlloc, function (r, i) { return outputFrom(i); });
            }
            function outputFrom(index) {
                return quantity(index) / unitCost[names[index]];
            }
        }
        var recipeNames = [
            "electronic-circuit",
            "science-pack-1",
            "science-pack-2",
            "engine-unit",
            "electric-mining-drill",
            "science-pack-3",
            "battery",
            "speed-module",
            "processing-unit",
            "high-tech-science-pack",
            "assembling-machine-1",
            "electric-furnace",
            "production-science-pack",
            "solar-panel",
            "accumulator",
            "satellite"
        ];
        setup_1.doubleRowHeaderTable({
            title: "Stack Ratios for Mixed Cargo Wagons",
            rows1: recipeNames,
            getRow2: function (recipe) {
                var unitCost = computeRecipeCost(recipe, IntegerStacks.intermediates);
                return Object.keys(unitCost).sort().map(displayable_1.item);
            },
            cols: ["Stacks", "Quantity", "Leftover"],
            row1Header: function (r) {
                var output = computeAllocation(r).output;
                return displayable_1.itemCount(r, Math.floor(output));
            },
            origin1: "Recipe",
            origin2: "Input",
            cell: function (recipe, row2, col, r1i, r2i, colIndex) {
                var _a = computeAllocation(recipe), realAlloc = _a.realAlloc, names = _a.names, quantity = _a.quantity, leftover = _a.leftover;
                var cost = realAlloc[r2i];
                var itemName = names[r2i];
                switch (col) {
                    case "Stacks": return realAlloc[r2i];
                    case "Quantity": return displayable_1.itemCount(itemName, quantity[r2i]);
                    case "Leftover": return roundError(Math.round(leftover[r2i])) || "";
                    default: return "???";
                }
            }
        });
    })(CargoRatios || (CargoRatios = {}));
    setup_1.header("Advanced Trains");
    var AdvancedTrainTables;
    (function (AdvancedTrainTables) {
        // TOOD: Seems high?
        setup_1.basicTable({
            title: "Refuel Intervals",
            origin: "Stacks",
            description: [
                "How long can a train go between refuelings?"
            ],
            rows: factorio_1.Fuels,
            cols: [1, 2, 3],
            cell: function (fuel, stackCount) {
                // 600 = 600 kW consumption of trains
                var seconds = fuel.energy * stackCount * fuel.stackSize / (600);
                // Trains consume 600kW
                return displayable_1.time(seconds);
            }
        });
        setup_1.basicTable({
            title: "Fuel Requirements per Minute",
            origin: "",
            description: [
                "How much of each fuel type are consumed by N active locomotives per minute?",
                "Note that you'll need to count locomotives, not trains, and manually estimate how many are active on average"
            ],
            cols: factorio_1.Fuels,
            rows: [10, 25, 50, 100, 250],
            rowHeader: function (n) { return displayable_1.itemCount("locomotive", n); },
            cell: function (trainCount, fuel) {
                // Trains consume 600kW
                var consumption = Math.ceil((trainCount * 600 * 60) / fuel.energy);
                return displayable_1.itemCount(fuel.name, consumption);
            }
        });
    })(AdvancedTrainTables || (AdvancedTrainTables = {}));
});
