export const Belt = {
    Yellow: { name: "transport-belt", throughput: 40 / 3 },
    Red: { name: "fast-transport-belt", throughput: 40 * 2 / 3 },
    Blue: { name: "express-transport-belt", throughput: 40 }
};
export const Belts = [Belt.Yellow, Belt.Red, Belt.Blue];

export const BeltLane = {
    YellowLane: { name: "transport-belt-lane", throughput: 40 / 3 / 2 },
    Yellow: { name: "transport-belt", throughput: 40 / 3 },
    RedLane: { name: "fast-transport-belt-lane", throughput: 40 * 2 / 3 / 2 },
    Red: { name: "fast-transport-belt", throughput: 40 * 2 / 3 },
    BlueLane: { name: "express-transport-belt-lane", throughput: 40 / 2 },
    Blue: { name: "express-transport-belt", throughput: 40 }
};
export const BeltLanes = [BeltLane.YellowLane, BeltLane.Yellow, BeltLane.RedLane, BeltLane.Red, BeltLane.BlueLane, BeltLane.Blue];

// TODO fill in hardness
export const Ore = {
    Iron: { name: "iron-ore", hardness: 1 },
    Copper: { name: "copper-ore", hardness: 1 },
    Coal: { name: "coal", hardness: 1 },
    Stone: { name: "stone", hardness: 1 }
};
export const Ores = [Ore.Iron, Ore.Copper, Ore.Coal, Ore.Stone];

export const Assembler = {
    One: { name: "assembling-machine-1", speed: 0.5 },
    Two: { name: "assembling-machine-2", speed: 0.75 },
    Three: { name: "assembling-machine-3", speed: 1.25 },
};
export const Assemblers = [Assembler.One, Assembler.Two, Assembler.Three];

export const Fuel = {
    Wood: { name: "raw-wood", energy: 4000000, stackSize: 100 },
    Coal: { name: "coal", energy: 8000000, stackSize: 50 },
    Solid: { name: "solid-fuel", energy: 25000000, stackSize: 50 },
    Rocket: { name: "rocket-fuel", energy: 225000000, stackSize: 10 },
    Nuclear: { name: "nuclear-fuel", energy: 1210000000, stackSize: 1 }
};
export const Fuels = [Fuel.Wood, Fuel.Coal, Fuel.Solid, Fuel.Rocket, Fuel.Nuclear];
const BoilerEfficiency = 0.5;

export const Box = {
    Wood: { name: "wooden-chest", size: 16 },
    Wagon: { name: "cargo-wagon", size: 40 },
    Steel: { name: "steel-chest", size: 48 },
    Iron: { name: "iron-chest", size: 32 },
};
export const Boxes = [Box.Wood, Box.Iron, Box.Steel, Box.Wagon];

export const beltItemsPerSec = 13.3333;

const assemblerSpeed = [0.5, 0.75, 1.25];