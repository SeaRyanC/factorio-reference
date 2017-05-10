/******* Belts ***********/
basicTable({
    table: 'belt-throughput',
    origin: text("Belt"),
    rows: Belts, 
    cols: ["One Lane", "Both Lanes"],
    cell(r, c, ri, ci) {
        return fixed(r.throughput / (2 - ci));
    }
})

/******* Nuclear ***********/
// TODO this math is wrong
// Notes on Centrifuge:
//   Reactors burn one fuel cell per 200 seconds
//     Consumption: 1/200 cell / s
//   1 U235 produces 10 fuel cells
//     Consumption: 1 / 2000 U235 / s
//   Kovarex process produces 1 net U235 per (50 / 0.75) seconds
//     U235 Production: 1/50 U235 / s / Centrifuge
//   So one Kovarex Centrifuge can handle up to 30 (!) reactors
//    ... or one atomic bomb every 25 minutes (lol)

// https://www.reddit.com/r/factorio/comments/67xgge/nuclear_ratios/
staticTable("nuclear", [
    [item("nuclear-reactor"), item("offshore-pump"), item("heat-exchanger"), item("steam-turbine"), text("Power (MW)")],
    [1, 1, 4, 7, 40],
    [2, 2, 16, 28, 160],
    [3, 3, 28, 49, 280],
    [4, 5, 48, 83, 580],
    [5, 6, 60, 104, 600],
    [6, 7, 80, 138, 800],
    [7, 8, 92, 159, 920],
    [8, 10, 112, 193, 1120]
    // TODO: Include closed-form for last row
]);

staticTable("kovarex", [
    [item("uranium-ore"), "Chance"],
    [large(40000), g(2, "%")],
    [large(50000), g(22, "%")],
    [large(55000), g(52, "%")],
    [large(60000), g(64, "%")],
    [large(70000), g(92, "%")],
    [large(80000), g(99, "%")]
]);

/******* Nuclear runtime with enrichment ***********/
// Math: Uranium processing takes 10 uranium and produces 0.993 U238 and 0.007 U238
// Kovarex turns (net) 3 U238 into 1 U235
// With reprocessing, 10x fuel cell needs 13 (net) U238 + 1 U235
// So from a 10k patch we get (on average):
//  997 U238
//    3 U235
// How much kovarexing should we do? Produce 'n' U235 to reach 13:1 ratio:
// 997 - (n * 3) = 13 * (n + 3)
// 997 - 3n = 13n + 39
// 997 - 39 = 13n + 3n
// 958 = 16n
// n = ~60
// Thus one 10K ore patch yields
//   63 U235 + 817 U238 ==> 630 fuel cells
// Each fuel cell is good for 200s per reactor
//  -> 35 hours in 1 reactor
basicTable({
    table: "nuclear-runtime",
    origin: "Patch Size",
    rows: [10, 25, 50, 100, 250, 500].map(n => n * 1000),
    rowHeader: n => large(n),
    cols: [1, 2, 4, 8, 12, 20],
    colHeader: n => nOf(n, item("nuclear-reactor")),
    cell: (patchSize, nReactors) => {
        const fuelCells = 630 / 10000 * patchSize;
        const reactorSeconds = fuelCells * 200;
        const seconds = reactorSeconds / nReactors;
        return time(seconds);
    }
});

/******* Mining ***********/
//  Regular ores come out at 0.525/s, stone at 0.65/s
//  Steel / electric furnaces are twice as fast
//  Iron/copper plate smelts at 1 ore / 3.5s
//  
//  Stone brick smelts 2 ore / 3.5s
//  Steel / electric furnaces are twice as fast
staticTable("minersPerFurnace", [
    [text("Output"), item("stone-furnace"), itemGroup("steel-furnace", "electric-furnace")],
    [itemGroup("iron-plate", "copper-plate"),
    ratio(nOf(6, item("electric-mining-drill")), nOf(11, item("stone-furnace"))),
    ratio(nOf(12, item("electric-mining-drill")), nOf(11, item("steel-furnace")))],

    [item("stone-brick"),
    ratio(nOf(7, item("electric-mining-drill")), nOf(8, item("stone-furnace"))),
    ratio(nOf(7, item("electric-mining-drill")), nOf(4, item("steel-furnace")))],
]);

function groupBy<T, K>(items: T[], keyFunc: (x: T) => K): { key: K; items: T[] }[] {
    const outputs: { key: K; items: T[] }[] = [];
    for(const item of items) {
        const key = keyFunc(item);
        let group: { key: K; items: T[] } | undefined = undefined;
        for(const g of outputs) {
            if (g.key === key) {
                group = g;
                break;
            }
        }
        if (group === undefined) {
            outputs.push({ key, items: [item]});
        } else {
            group.items.push(item);
        }
    }
    return outputs;
}

/******* Assemblers and Belts ***********/
const interestingRecipes: string[] = [
    "transport-belt", "fast-transport-belt", "express-transport-belt",
    "inserter",
    "rail", "assembling-machine-1", "assembling-machine-2",
    "electronic-circuit", "processing-unit", "advanced-circuit",
    "rocket-fuel", "low-density-structure", "rocket-control-unit"
];
const recipeList = Object.keys(recipes).map(k => recipes[k]).filter(r => interestingRecipes.indexOf(r.name) >= 0);
recipeList.sort((a, b) => interestingRecipes.indexOf(a.name) - interestingRecipes.indexOf(b.name));
const recipeGroups = groupBy(recipeList, r => r.energy);
recipeGroups.sort((a, b) => a.key - b.key);
doubleRowHeaderTable({
    table: "crafting",
    origin1: "Recipe / Speed",
    origin2: "Belt",
    cell: (r1, r2, c) => {
        return Math.ceil(r2.throughput * (r1.key / c.speed));
    },
    cols: Assemblers,
    rows1: recipeGroups,
    rows2: Belts,
    row1Header: r => g(p(r.key + 's'), itemGroup(...r.items.map(i => i.name))),
    row2Header: r => item(r.name)
});

/******* Steam Power ***********/
staticTable("steam", [
    [item("offshore-pump"), item("boiler"), item("steam-engine"), item("electric-mining-drill"), text("Power")],
    [integer(1), integer(20), integer(40), integer(18), fixed(40 * 0.780, "MW")]
]);

// Boilers consume 1.8 MW and there are 20 of them per setup
const wattsConsumedPerSetup = 1800 * 20;
basicTable({
    origin: text(''),
    table: "steam-advanced",
    cell: (fuel, belt) => {
        const wattsProvided = fuel.energy * belt.throughput;
        return fixed(wattsProvided / wattsConsumedPerSetup);
    },
    cols: Belts,
    rows: Fuels
});

const itemList: Array<[string, string[]]> = [
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

function makeStackSizeTable(): Displayable[][] {
    const result: Displayable[][] = [];
    result.push(["Category", "Items", "Size"]);

    for(let i = 0; i < itemList.length; i++) {
        let sizes: number[] = [];
        let outputs: string[][] = [];
        for (let j = 0; j < itemList[i][1].length; j++) {
            let size = items[itemList[i][1][j]].stack_size;
            let idx = sizes.indexOf(size);
            if (idx < 0) {
                idx = sizes.push(size) - 1;
                outputs.push([]);
            }
            outputs[idx].push(itemList[i][1][j]);
        }
        for(let j = 0; j < sizes.length; j++) {
            result.push([itemList[i][0], itemGroup(...outputs[j]), sizes[j]]);
        }
    }
    return result;
}

/******* Stack sizes ***********/
staticTable("stack-sizes", makeStackSizeTable());

/******* Storage ***********/
const goodNumbers = [1, 2, 4, 8, 16, 32, 64, 128, undefined];
basicTable({
    origin: text("#"),
    table: "storage",
    cols: Boxes,
    rows: goodNumbers,
    rowHeader: c => c === undefined ? text("(slots)") : toElement(c),
    cell: (row, col) => {
        if (row === undefined) {
            return integer(col.size);
        }
        return large(row * col.size * 100);
    }
});


/******* Pure coal to Plastic ***********/
// Coal liquefaction (5 seconds) @ 1.0x
// Consumes 10 coal      => 2 coal / s
//          50 water     => 10 water / s 
// Produces 10 heavy oil => 2 heavy / s
//          15 light oil => 3 light / s
//          20 gas       => 4 gas / s

// Heavy oil cracking (3 seconds) @ 1.25x
//   40 heavy in  => 50/3 heavy / s in
//   30 water in  => 12.5 water / s in
//   30 light out => 12.5 light / s out

// LCM: produce+consume 50 heavy/s
// -> 25 refineries
// -> 3 heavy crackers
// == Light out: (25*3 + 3*25/2) = 112.5/s
// == Gas out: 20*25 = 500/s
// == 197.5 water/s in

// Light oil cracking (3 seconds) @ 1.25x
// Consumes 30 light oil => 12.5 light /s
//          30 water => 12.5 water / s
// Produces 20 gas => 20 / 3 * (5/4) = 25/3 / s

// 112.5 / 12.5 = 9
// Total output / input
// 25 refineries
//    50 coal / s (2 red belts worth)
//    250 water / s
//    100 gas / s
// 3 heavy oil crackers:
//    37.5 water/s
// 9 light oil crackers:
//    112.5 water/s
//    75 gas/s
// Total out: 175 gas / s
// Total water in: 400 water/sec (1/3 of a pump)
// Plastic takes 20 petroleum, 1 coal, 0.75 second for 2 plastic
//  -> We can feed 11.6 plastic machines, adding 15.5 coal/s consumption (slighly more than half a red belt)
// total coal in: 65.5 coal/s (more than 1.5 blue belts)

// or triple the whole setup for 35 plastic machines!
// 