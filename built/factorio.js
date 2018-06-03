define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Belt = {
        Yellow: { name: "transport-belt", throughput: 40 / 3 },
        Red: { name: "fast-transport-belt", throughput: 40 * 2 / 3 },
        Blue: { name: "express-transport-belt", throughput: 40 }
    };
    exports.Belts = [exports.Belt.Yellow, exports.Belt.Red, exports.Belt.Blue];
    exports.BeltLane = {
        YellowLane: { name: "transport-belt-lane", throughput: 40 / 3 / 2 },
        Yellow: { name: "transport-belt", throughput: 40 / 3 },
        RedLane: { name: "fast-transport-belt-lane", throughput: 40 * 2 / 3 / 2 },
        Red: { name: "fast-transport-belt", throughput: 40 * 2 / 3 },
        BlueLane: { name: "express-transport-belt-lane", throughput: 40 / 2 },
        Blue: { name: "express-transport-belt", throughput: 40 }
    };
    exports.BeltLanes = [exports.BeltLane.YellowLane, exports.BeltLane.Yellow, exports.BeltLane.RedLane, exports.BeltLane.Red, exports.BeltLane.BlueLane, exports.BeltLane.Blue];
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
    exports.Fuel = {
        Wood: { name: "raw-wood", energy: 4000000, stackSize: 100 },
        Coal: { name: "coal", energy: 8000000, stackSize: 50 },
        Solid: { name: "solid-fuel", energy: 25000000, stackSize: 50 },
        Rocket: { name: "rocket-fuel", energy: 225000000, stackSize: 10 },
        Nuclear: { name: "nuclear-fuel", energy: 1210000000, stackSize: 1 }
    };
    exports.Fuels = [exports.Fuel.Wood, exports.Fuel.Coal, exports.Fuel.Solid, exports.Fuel.Rocket, exports.Fuel.Nuclear];
    var BoilerEfficiency = 0.5;
    exports.Box = {
        Wood: { name: "wooden-chest", size: 16 },
        Wagon: { name: "cargo-wagon", size: 40 },
        Steel: { name: "steel-chest", size: 48 },
        Iron: { name: "iron-chest", size: 32 },
    };
    exports.Boxes = [exports.Box.Wood, exports.Box.Iron, exports.Box.Steel, exports.Box.Wagon];
    exports.beltItemsPerSec = 13.3333;
    var assemblerSpeed = [0.5, 0.75, 1.25];
});
