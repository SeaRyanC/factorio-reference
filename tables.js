/******* Belts ***********/
basicTable({
    table: 'belt-throughput',
    origin: text("Belt"),
    rows: Belts,
    cols: ["One Lane", "Both Lanes"],
    cell: function (r, c, ri, ci) {
        return fixed(r.throughput / (2 - ci));
    }
});
/******* Nuclear ***********/
// Notes on Centrifuge:
//   Reactors burn one fuel cell per 200 seconds
//     Consumption: 1/200 cell / s
//   1 U235 produces 10 fuel cells
//     Consumption: 1 / 2000 U235 / s
//   Kovarex process produces 1 net U235 per 50 seconds
//     U235 Production: 1/50 U235 / s / Centrifuge
//   So one Kovarex Centrifuge can handle up to 40 (!) reactors
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
/******* Mining ***********/
//  Regular ores come out at 0.525/s, stone at 0.65/s
//  Steel / electric furnaces are twice as fast
//  Iron/copper plate smelts at 1 ore / 3.5s
//  
//  Stone brick smelts 2 ore / 3.5s
//  Steel / electric furnaces are twice as fast
staticTable("minersPerFurnace", [
    [text("Output"), item("stone-furnace"), items("steel-furnace", "electric-furnace")],
    [items("iron-plate", "copper-plate"),
        ratio(nOf(6, item("electric-drill")), nOf(11, item("stone-furnace"))),
        ratio(nOf(12, item("electric-drill")), nOf(11, item("steel-furnace")))],
    [item("stone-brick"),
        ratio(nOf(7, item("electric-drill")), nOf(8, item("stone-furnace"))),
        ratio(nOf(7, item("electric-drill")), nOf(4, item("steel-furnace")))],
]);
/******* Crafting ***********/
basicTable({
    table: "crafting",
    origin: text("Output"),
    rows: Recipes,
    cols: Assemblers,
    cell: function (r, c) {
        return fixed(Belt.Yellow.throughput / (r.quantity / r.time) / c.speed);
    }
});
/******* Steam Power ***********/
staticTable("steam", [
    [item("offshore-pump"), item("boiler"), item("steam-engine"), item("electric-drill"), text("Power")],
    [integer(1), integer(20), integer(40), integer(18), fixed(40 * 0.780, "MW")]
]);
// Boilers consume 1.8 MW and there are 20 of them per setup
var wattsConsumedPerSetup = 1800 * 20;
basicTable({
    origin: text(''),
    table: "steam-advanced",
    cell: function (fuel, belt) {
        var wattsProvided = fuel.energy * belt.throughput;
        return fixed(wattsProvided / wattsConsumedPerSetup);
    },
    cols: Belts,
    rows: Fuels
});
