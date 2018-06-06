export interface Fuel {
    category: "chemical" | "nuclear";
    acceleration_multiplier: number;
    top_speed_multiplier: number;
    /** In Joules */
    value: number;
}

export interface Burner {
    emissions: number;
    category: "basic_solid";
    fuel_category: "chemical"
}

export type ItemType = "item"
    | "item-with-entity-data" 
    | "blueprint-book" 
    | "blueprint" 
    | "deconstruction-item"
    | "selection-tool" 
    | "repair-tool" 
    | "mining-tool" 
    | "capsule" 
    | "module" 
    | "tool" 
    | "gun" 
    | "ammo" 
    | "armor" 
    | "item-with-inventory"
    | "item-with-label"
    | "item-with-tags";

export enum ItemFlags {
    GoesToQuickbar = 1 << 0,
    Hidden = 1 << 1,
}

export type RecipeCategory = "crafting"
    | "oil-processing"
    | "smelting"
    | "crafting-with-fluid"
    | "chemistry"
    | "centrifuging";

export type EntityType = "container"
    | "storage-tank"
    | "transport-belt"
    | "underground-belt"
    | "splitter"
    | "loader"
    | "inserter"
    | "electric-pole"
    | "pipe"
    | "pipe-to-ground"
    | "pump"
    | "curved-rail"
    | "straight-rail"
    | "train-stop"
    | "rail-signal"
    | "rail-chain-signal"
    | "locomotive"
    | "cargon-wagon"
    | "fluid-wagon"
    | "artillery-wagon"
    | "car"
    | "logistic-robot"
    | "construction-robot"
    | "logistic-container"
    | "roboport"
    | "lamp"
    | "arithmetic-combinator"
    | "decider-combinator"
    | "constant-combinator"
    | "power-switch"
    | "programmable-speaker"
    | "boiler"
    | "generator"
    | "solar-panel"
    | "accumulator"
    | "electric-energy-interface"
    | "reactor"
    | "heat-pipe"
    | "mining-drill"
    | "offshore-pump"
    | "furnace"
    | "assembling-machine"
    | "lab"
    | "beacon"
    | "land-mine"
    | "wall"
    | "gate"
    | "ammo-turret"
    | "electric-turret"
    | "fluid-turret"
    | "artillery-turret"
    | "radar"
    | "rocket-silo"
    | "player";
