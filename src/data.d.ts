// To parse this data:
//
//   import { Convert, DataD } from "./file";
//
//   const dataD = Convert.toDataD(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface DataD {
    items:    Items;
    recipes:  Recipes;
    entities: Entities;
}

export interface Entities {
    "wooden-chest":                        EntitiesAccumulator;
    "iron-chest":                          EntitiesAccumulator;
    "steel-chest":                         EntitiesAccumulator;
    "storage-tank":                        EntitiesAccumulator;
    "transport-belt":                      EntitiesAccumulator;
    "fast-transport-belt":                 EntitiesAccumulator;
    "express-transport-belt":              EntitiesAccumulator;
    "underground-belt":                    EntitiesAccumulator;
    "fast-underground-belt":               EntitiesAccumulator;
    "express-underground-belt":            EntitiesAccumulator;
    splitter:                              EntitiesAccumulator;
    "fast-splitter":                       EntitiesAccumulator;
    "express-splitter":                    EntitiesAccumulator;
    loader:                                EntitiesAccumulator;
    "fast-loader":                         EntitiesAccumulator;
    "express-loader":                      EntitiesAccumulator;
    "burner-inserter":                     ArtilleryTurret;
    inserter:                              EntitiesAccumulator;
    "long-handed-inserter":                EntitiesAccumulator;
    "fast-inserter":                       EntitiesAccumulator;
    "filter-inserter":                     EntitiesAccumulator;
    "stack-inserter":                      EntitiesAccumulator;
    "stack-filter-inserter":               EntitiesAccumulator;
    "small-electric-pole":                 EntitiesAccumulator;
    "medium-electric-pole":                EntitiesAccumulator;
    "big-electric-pole":                   EntitiesAccumulator;
    substation:                            EntitiesAccumulator;
    pipe:                                  EntitiesAccumulator;
    "pipe-to-ground":                      EntitiesAccumulator;
    pump:                                  ElectricMiningDrill;
    "curved-rail":                         EntitiesAccumulator;
    "straight-rail":                       EntitiesAccumulator;
    "train-stop":                          EntitiesAccumulator;
    "rail-signal":                         EntitiesAccumulator;
    "rail-chain-signal":                   EntitiesAccumulator;
    locomotive:                            EntitiesAccumulator;
    "cargo-wagon":                         Wagon;
    "fluid-wagon":                         EntitiesAccumulator;
    "artillery-wagon":                     Wagon;
    car:                                   Car;
    tank:                                  Car;
    "logistic-robot":                      Robot;
    "construction-robot":                  Robot;
    "logistic-chest-active-provider":      EntitiesAccumulator;
    "logistic-chest-passive-provider":     EntitiesAccumulator;
    "logistic-chest-storage":              EntitiesAccumulator;
    "logistic-chest-buffer":               EntitiesAccumulator;
    "logistic-chest-requester":            EntitiesAccumulator;
    roboport:                              EntitiesAccumulator;
    "small-lamp":                          EntitiesAccumulator;
    "arithmetic-combinator":               EntitiesAccumulator;
    "decider-combinator":                  EntitiesAccumulator;
    "constant-combinator":                 EntitiesAccumulator;
    "power-switch":                        EntitiesAccumulator;
    "programmable-speaker":                EntitiesAccumulator;
    boiler:                                Boiler;
    "steam-engine":                        EntitiesAccumulator;
    "steam-turbine":                       EntitiesAccumulator;
    "solar-panel":                         EntitiesAccumulator;
    accumulator:                           EntitiesAccumulator;
    "electric-energy-interface":           EntitiesAccumulator;
    "nuclear-reactor":                     EntitiesAccumulator;
    "heat-exchanger":                      EntitiesAccumulator;
    "heat-pipe":                           EntitiesAccumulator;
    "burner-mining-drill":                 BurnerMiningDrill;
    "electric-mining-drill":               ElectricMiningDrill;
    "offshore-pump":                       EntitiesAccumulator;
    pumpjack:                              ElectricMiningDrill;
    "stone-furnace":                       Furnace;
    "steel-furnace":                       Furnace;
    "electric-furnace":                    Furnace;
    "assembling-machine-1":                AssemblingMachine1;
    "assembling-machine-2":                AssemblingMachine;
    "assembling-machine-3":                AssemblingMachine;
    "oil-refinery":                        OilRefinery;
    "chemical-plant":                      ChemicalPlant;
    centrifuge:                            Centrifuge;
    lab:                                   EntitiesAccumulator;
    beacon:                                Beacon;
    "land-mine":                           EntitiesAccumulator;
    "stone-wall":                          EntitiesAccumulator;
    gate:                                  EntitiesAccumulator;
    "gun-turret":                          EntitiesAccumulator;
    "laser-turret":                        EntitiesAccumulator;
    "flamethrower-turret":                 EntitiesAccumulator;
    "artillery-turret":                    ArtilleryTurret;
    radar:                                 EntitiesAccumulator;
    "rocket-silo":                         RocketSilo;
    "player-port":                         EntitiesAccumulator;
    "infinity-chest":                      EntitiesAccumulator;
    "simple-entity-with-force":            EntitiesAccumulator;
    "simple-entity-with-owner":            EntitiesAccumulator;
    cliff:                                 EntitiesAccumulator;
    "small-cliff":                         EntitiesAccumulator;
    player:                                Player;
    fish:                                  EntitiesAccumulator;
    "tree-01":                             EntitiesAccumulator;
    "tree-02":                             EntitiesAccumulator;
    "tree-03":                             EntitiesAccumulator;
    "tree-04":                             EntitiesAccumulator;
    "tree-05":                             EntitiesAccumulator;
    "tree-09":                             EntitiesAccumulator;
    "tree-02-red":                         EntitiesAccumulator;
    "tree-07":                             EntitiesAccumulator;
    "tree-06":                             EntitiesAccumulator;
    "tree-06-brown":                       EntitiesAccumulator;
    "tree-09-brown":                       EntitiesAccumulator;
    "tree-09-red":                         EntitiesAccumulator;
    "tree-08":                             EntitiesAccumulator;
    "tree-08-brown":                       EntitiesAccumulator;
    "tree-08-red":                         EntitiesAccumulator;
    "dead-dry-hairy-tree":                 EntitiesAccumulator;
    "dead-grey-trunk":                     EntitiesAccumulator;
    "dead-tree-desert":                    EntitiesAccumulator;
    "dry-hairy-tree":                      EntitiesAccumulator;
    "dry-tree":                            EntitiesAccumulator;
    "rock-huge":                           EntitiesAccumulator;
    "rock-big":                            EntitiesAccumulator;
    "small-biter-corpse":                  EntitiesAccumulator;
    "medium-biter-corpse":                 EntitiesAccumulator;
    "behemoth-biter-corpse":               TerCorpse;
    "big-biter-corpse":                    TerCorpse;
    "biter-spawner-corpse":                EntitiesAccumulator;
    "small-spitter-corpse":                EntitiesAccumulator;
    "medium-spitter-corpse":               EntitiesAccumulator;
    "big-spitter-corpse":                  EntitiesAccumulator;
    "behemoth-spitter-corpse":             TerCorpse;
    "spitter-spawner-corpse":              EntitiesAccumulator;
    "small-worm-corpse":                   EntitiesAccumulator;
    "medium-worm-corpse":                  EntitiesAccumulator;
    "big-worm-corpse":                     EntitiesAccumulator;
    "small-remnants":                      EntitiesAccumulator;
    "medium-remnants":                     EntitiesAccumulator;
    "big-remnants":                        BigRemnants;
    "straight-rail-remnants":              EntitiesAccumulator;
    "curved-rail-remnants":                EntitiesAccumulator;
    "small-scorchmark":                    EntitiesAccumulator;
    "tree-01-stump":                       EntitiesAccumulator;
    "tree-02-stump":                       EntitiesAccumulator;
    "tree-03-stump":                       EntitiesAccumulator;
    "tree-04-stump":                       EntitiesAccumulator;
    "tree-05-stump":                       EntitiesAccumulator;
    "tree-06-stump":                       EntitiesAccumulator;
    "tree-07-stump":                       EntitiesAccumulator;
    "tree-08-stump":                       EntitiesAccumulator;
    "tree-09-stump":                       EntitiesAccumulator;
    "wall-remnants":                       EntitiesAccumulator;
    "sand-rock-big":                       EntitiesAccumulator;
    "big-ship-wreck-1":                    BigShipWreck;
    "big-ship-wreck-2":                    BigShipWreck;
    "big-ship-wreck-3":                    BigShipWreck;
    "medium-ship-wreck":                   EntitiesAccumulator;
    "small-ship-wreck":                    EntitiesAccumulator;
    "small-biter":                         EntitiesAccumulator;
    "medium-biter":                        EntitiesAccumulator;
    "big-biter":                           Ter;
    "behemoth-biter":                      Ter;
    "small-spitter":                       EntitiesAccumulator;
    "small-worm-turret":                   EntitiesAccumulator;
    "medium-spitter":                      EntitiesAccumulator;
    "medium-worm-turret":                  EntitiesAccumulator;
    "behemoth-spitter":                    Ter;
    "big-spitter":                         EntitiesAccumulator;
    "big-worm-turret":                     EntitiesAccumulator;
    "biter-spawner":                       EntitiesAccumulator;
    "spitter-spawner":                     EntitiesAccumulator;
    market:                                EntitiesAccumulator;
    defender:                              EntitiesAccumulator;
    distractor:                            EntitiesAccumulator;
    destroyer:                             EntitiesAccumulator;
    "acid-projectile-purple":              AcidProjectilePurple;
    "acid-splash-purple":                  AcidProjectilePurple;
    "artillery-cannon-muzzle-flash":       AcidProjectilePurple;
    "artillery-flare":                     ArtilleryFlare;
    "artillery-projectile":                AcidProjectilePurple;
    "atomic-bomb-wave":                    AcidProjectilePurple;
    "atomic-rocket":                       AcidProjectilePurple;
    "big-artillery-explosion":             AcidProjectilePurple;
    "big-explosion":                       AcidProjectilePurple;
    "big-ship-wreck-grass":                EntitiesAccumulator;
    "blood-explosion-big":                 EntitiesAccumulator;
    "blood-explosion-huge":                EntitiesAccumulator;
    "blood-explosion-small":               EntitiesAccumulator;
    "blood-fountain":                      EntitiesAccumulator;
    "blood-fountain-big":                  EntitiesAccumulator;
    "blood-particle":                      EntitiesAccumulator;
    "blue-laser":                          EntitiesAccumulator;
    "branch-particle":                     EntitiesAccumulator;
    "brown-asterisk":                      EntitiesAccumulator;
    "brown-cane-cluster":                  EntitiesAccumulator;
    "brown-cane-single":                   EntitiesAccumulator;
    "brown-carpet-grass":                  EntitiesAccumulator;
    "brown-coral-mini":                    EntitiesAccumulator;
    "brown-fluff":                         EntitiesAccumulator;
    "brown-fluff-dry":                     EntitiesAccumulator;
    "brown-hairy-grass":                   EntitiesAccumulator;
    "cannon-projectile":                   EntitiesAccumulator;
    "character-corpse":                    EntitiesAccumulator;
    "cliff-explosives":                    EntitiesAccumulator;
    "cluster-grenade":                     EntitiesAccumulator;
    "coal-particle":                       EntitiesAccumulator;
    "copper-ore-particle":                 EntitiesAccumulator;
    "deconstructible-tile-proxy":          EntitiesAccumulator;
    "defender-capsule":                    EntitiesAccumulator;
    "destroyer-capsule":                   EntitiesAccumulator;
    "distractor-capsule":                  EntitiesAccumulator;
    "dummy-flame-thrower-explosion":       EntitiesAccumulator;
    "electric-beam":                       EntitiesAccumulator;
    "electric-beam-no-sound":              EntitiesAccumulator;
    "entity-ghost":                        EntitiesAccumulator;
    explosion:                             EntitiesAccumulator;
    "explosion-gunshot":                   EntitiesAccumulator;
    "explosion-gunshot-small":             EntitiesAccumulator;
    "explosion-hit":                       EntitiesAccumulator;
    "explosion-remnants-particle":         EntitiesAccumulator;
    "explosive-cannon-projectile":         EntitiesAccumulator;
    "explosive-rocket":                    EntitiesAccumulator;
    "explosive-uranium-cannon-projectile": EntitiesAccumulator;
    "fake-selection-box-2x2":              EntitiesAccumulator;
    "fire-flame":                          EntitiesAccumulator;
    "fire-flame-on-tree":                  EntitiesAccumulator;
    "fire-sticker":                        EntitiesAccumulator;
    "flamethrower-fire-stream":            EntitiesAccumulator;
    "flying-text":                         EntitiesAccumulator;
    garballo:                              EntitiesAccumulator;
    "garballo-mini-dry":                   EntitiesAccumulator;
    "green-asterisk":                      EntitiesAccumulator;
    "green-bush-mini":                     EntitiesAccumulator;
    "green-carpet-grass":                  EntitiesAccumulator;
    "green-coral-mini":                    EntitiesAccumulator;
    "green-hairy-grass":                   EntitiesAccumulator;
    "green-pita":                          EntitiesAccumulator;
    "green-pita-mini":                     EntitiesAccumulator;
    "green-small-grass":                   EntitiesAccumulator;
    grenade:                               EntitiesAccumulator;
    "ground-explosion":                    EntitiesAccumulator;
    "handheld-flamethrower-fire-stream":   EntitiesAccumulator;
    "iron-ore-particle":                   EntitiesAccumulator;
    "item-on-ground":                      EntitiesAccumulator;
    "item-request-proxy":                  EntitiesAccumulator;
    laser:                                 EntitiesAccumulator;
    "laser-bubble":                        EntitiesAccumulator;
    "leaf-particle":                       EntitiesAccumulator;
    "massive-explosion":                   EntitiesAccumulator;
    "medium-explosion":                    EntitiesAccumulator;
    "orange-arrow-with-circle":            EntitiesAccumulator;
    "orange-coral-mini":                   EntitiesAccumulator;
    "piercing-shotgun-pellet":             EntitiesAccumulator;
    "poison-capsule":                      EntitiesAccumulator;
    "poison-cloud":                        EntitiesAccumulator;
    "railgun-beam":                        EntitiesAccumulator;
    "red-asterisk":                        EntitiesAccumulator;
    rocket:                                EntitiesAccumulator;
    "rocket-silo-rocket":                  EntitiesAccumulator;
    "rocket-silo-rocket-shadow":           EntitiesAccumulator;
    "root-A":                              EntitiesAccumulator;
    "root-B":                              EntitiesAccumulator;
    "shell-particle":                      EntitiesAccumulator;
    "shotgun-pellet":                      EntitiesAccumulator;
    "slowdown-capsule":                    EntitiesAccumulator;
    "slowdown-sticker":                    EntitiesAccumulator;
    "small-ship-wreck-grass":              EntitiesAccumulator;
    "smoke-for-migration":                 EntitiesAccumulator;
    "stone-particle":                      EntitiesAccumulator;
    "stun-sticker":                        EntitiesAccumulator;
    "tank-flamethrower-fire-stream":       EntitiesAccumulator;
    "tile-ghost":                          EntitiesAccumulator;
    "tutorial-flying-text":                EntitiesAccumulator;
    "uranium-cannon-explosion":            EntitiesAccumulator;
    "uranium-cannon-projectile":           EntitiesAccumulator;
    "uranium-cannon-shell-explosion":      EntitiesAccumulator;
    "water-splash":                        EntitiesAccumulator;
    "wooden-particle":                     EntitiesAccumulator;
    "crude-oil":                           EntitiesAccumulator;
    "iron-ore":                            EntitiesAccumulator;
    "copper-ore":                          EntitiesAccumulator;
    "uranium-ore":                         EntitiesAccumulator;
    coal:                                  EntitiesAccumulator;
    stone:                                 EntitiesAccumulator;
    "blue-chest":                          EntitiesAccumulator;
    "hidden-electric-energy-interface":    EntitiesAccumulator;
    "red-chest":                           EntitiesAccumulator;
}

export interface AcidProjectilePurple {
    name:           string;
    type:           string;
    flags:          AcidProjectilePurpleFlags;
    order:          string;
    group:          string;
    subgroup:       string;
    fluid_capacity: number;
}

export interface AcidProjectilePurpleFlags {
    "not-on-map": boolean;
}

export interface EntitiesAccumulator {
    name:                              string;
    type:                              string;
    order:                             string;
    group:                             BigShipWreckGrassGroup;
    subgroup:                          string;
    fluid_capacity:                    number;
    flags?:                            { [key: string]: boolean };
    belt_speed?:                       number;
    electric_energy_source_prototype?: AccumulatorElectricEnergySourcePrototype;
    inventory_size?:                   number;
    burner_prototype?:                 AccumulatorBurnerPrototype;
    energy_usage?:                     number;
    max_underground_distance?:         number;
    braking_force?:                    number;
    production?:                       number;
    pumping_speed?:                    number;
    target_temperature?:               number;
    max_energy?:                       number;
    maximum_temperature?:              number;
    fluid_usage_per_tick?:             number;
}

export interface AccumulatorBurnerPrototype {
    emissions:            number;
    category:             string;
    effectivity:          number;
    fuel_inventory_size:  number;
    burnt_inventory_size: number;
    fuel_category:        string;
}

export interface AccumulatorElectricEnergySourcePrototype {
    buffer_capacity:   number;
    usage_priority:    string;
    input_flow_limit:  number;
    output_flow_limit: number;
    drain:             number;
    emissions:         number;
    category:          ElectricEnergySourcePrototypeCategory;
    effectivity:       number;
}

export enum ElectricEnergySourcePrototypeCategory {
    BasicSolid = "basic-solid",
}

export enum BigShipWreckGrassGroup {
    Combat = "combat",
    Enemies = "enemies",
    Environment = "environment",
    Logistics = "logistics",
    Other = "other",
    Production = "production",
}

export interface ArtilleryFlare {
    name:           string;
    type:           string;
    flags:          ArtilleryFlareFlags;
    order:          string;
    group:          string;
    subgroup:       string;
    fluid_capacity: number;
}

export interface ArtilleryFlareFlags {
    "placeable-off-grid": boolean;
    "not-on-map":         boolean;
}

export interface ArtilleryTurret {
    name:              string;
    type:              string;
    flags:             Flags1;
    order:             string;
    group:             string;
    subgroup:          string;
    inventory_size:    number;
    fluid_capacity:    number;
    burner_prototype?: AccumulatorBurnerPrototype;
}

export interface Flags1 {
    "placeable-neutral": boolean;
    "placeable-player":  boolean;
    "player-creation":   boolean;
}

export interface Wagon {
    name:           string;
    type:           string;
    flags:          BehemothBiterCorpseFlags;
    order:          string;
    group:          string;
    subgroup:       string;
    inventory_size: number;
    braking_force:  number;
    fluid_capacity: number;
}

export interface BehemothBiterCorpseFlags {
    "placeable-neutral"?:        boolean;
    "placeable-off-grid"?:       boolean;
    "building-direction-8-way"?: boolean;
    "not-on-map"?:               boolean;
    "placeable-player"?:         boolean;
    "player-creation"?:          boolean;
    "not-repairable"?:           boolean;
    pushable?:                   boolean;
    "placeable-enemy"?:          boolean;
}

export interface AssemblingMachine1 {
    name:                             string;
    type:                             string;
    flags:                            Flags1;
    order:                            string;
    group:                            string;
    subgroup:                         string;
    crafting_speed:                   number;
    crafting_categories:              AssemblingMachine1_CraftingCategories;
    energy_usage:                     number;
    electric_energy_source_prototype: AssemblingMachine1_ElectricEnergySourcePrototype;
    fluid_capacity:                   number;
}

export interface AssemblingMachine1_CraftingCategories {
    crafting: boolean;
}

export interface AssemblingMachine1_ElectricEnergySourcePrototype {
    buffer_capacity:   number;
    usage_priority:    string;
    input_flow_limit:  number;
    output_flow_limit: number;
    drain:             number;
    emissions:         number;
    category:          string;
    effectivity:       number;
}

export interface AssemblingMachine {
    name:                             string;
    type:                             string;
    flags:                            Flags1;
    order:                            string;
    group:                            string;
    subgroup:                         string;
    crafting_speed:                   number;
    crafting_categories:              AssemblingMachine2_CraftingCategories;
    energy_usage:                     number;
    electric_energy_source_prototype: AssemblingMachine2_ElectricEnergySourcePrototype;
    fluid_capacity:                   number;
}

export interface AssemblingMachine2_CraftingCategories {
    crafting:              boolean;
    "advanced-crafting":   boolean;
    "crafting-with-fluid": boolean;
}

export interface AssemblingMachine2_ElectricEnergySourcePrototype {
    buffer_capacity:   number;
    usage_priority:    string;
    input_flow_limit:  number;
    output_flow_limit: number;
    drain:             number;
    emissions:         number;
    category:          string;
    effectivity:       number;
}

export interface Ter {
    name:           string;
    type:           string;
    flags:          BehemothBiterFlags;
    order:          string;
    group:          string;
    subgroup:       string;
    fluid_capacity: number;
}

export interface BehemothBiterFlags {
    "placeable-player"?:   boolean;
    "placeable-enemy":     boolean;
    "placeable-off-grid"?: boolean;
    "breaths-air"?:        boolean;
    "not-repairable":      boolean;
}

export interface TerCorpse {
    name:           string;
    type:           string;
    flags:          BehemothBiterCorpseFlags;
    order:          string;
    group:          string;
    subgroup:       string;
    fluid_capacity: number;
}

export interface BigRemnants {
    name:           string;
    type:           string;
    flags:          BigRemnantsFlags;
    order:          string;
    group:          string;
    subgroup:       string;
    fluid_capacity: number;
}

export interface BigRemnantsFlags {
    "placeable-neutral": boolean;
    "not-on-map":        boolean;
}

export interface BigShipWreck {
    name:           string;
    type:           string;
    flags:          BigShipWreck1_Flags;
    order:          string;
    group:          string;
    subgroup:       string;
    inventory_size: number;
    fluid_capacity: number;
}

export interface BigShipWreck1_Flags {
    "placeable-neutral": boolean;
}

export interface BurnerMiningDrill {
    name:                string;
    type:                string;
    flags:               Flags3;
    order:               string;
    group:               string;
    subgroup:            string;
    resource_categories: BurnerMiningDrillResourceCategories;
    inventory_size:      number;
    mining_speed:        number;
    mining_power:        number;
    energy_usage:        number;
    burner_prototype:    BurnerMiningDrillBurnerPrototype;
    fluid_capacity:      number;
}

export interface BurnerMiningDrillBurnerPrototype {
    emissions:            number;
    category:             string;
    effectivity:          number;
    fuel_inventory_size:  number;
    burnt_inventory_size: number;
    fuel_category:        string;
}

export interface Flags3 {
    "placeable-neutral": boolean;
    "player-creation":   boolean;
}

export interface BurnerMiningDrillResourceCategories {
    "basic-solid": boolean;
}

export interface ChemicalPlant {
    name:                             string;
    type:                             string;
    flags:                            Flags1;
    order:                            string;
    group:                            string;
    subgroup:                         string;
    crafting_speed:                   number;
    crafting_categories:              ChemicalPlantCraftingCategories;
    energy_usage:                     number;
    electric_energy_source_prototype: AssemblingMachine2_ElectricEnergySourcePrototype;
    fluid_capacity:                   number;
}

export interface ChemicalPlantCraftingCategories {
    chemistry: boolean;
}

export interface Robot {
    name:             string;
    type:             string;
    flags:            BehemothBiterCorpseFlags;
    order:            string;
    group:            string;
    subgroup:         string;
    inventory_size:   number;
    max_payload_size: number;
    max_energy:       number;
    fluid_capacity:   number;
}

export interface Furnace {
    name:                              string;
    type:                              string;
    flags:                             Flags1;
    order:                             string;
    group:                             string;
    subgroup:                          string;
    crafting_speed:                    number;
    crafting_categories:               ElectricFurnaceCraftingCategories;
    energy_usage:                      number;
    electric_energy_source_prototype?: AssemblingMachine1_ElectricEnergySourcePrototype;
    fluid_capacity:                    number;
    inventory_size?:                   number;
    burner_prototype?:                 BurnerMiningDrillBurnerPrototype;
}

export interface ElectricFurnaceCraftingCategories {
    smelting: boolean;
}

export interface ElectricMiningDrill {
    name:                             string;
    type:                             string;
    flags:                            Flags3;
    order:                            string;
    group:                            string;
    subgroup:                         string;
    resource_categories?:             ElectricMiningDrillResourceCategories;
    mining_speed?:                    number;
    mining_power?:                    number;
    energy_usage:                     number;
    electric_energy_source_prototype: AssemblingMachine1_ElectricEnergySourcePrototype;
    fluid_capacity:                   number;
    pumping_speed?:                   number;
}

export interface ElectricMiningDrillResourceCategories {
    "basic-solid"?: boolean;
    "basic-fluid"?: boolean;
}

export interface OilRefinery {
    name:                             string;
    type:                             string;
    flags:                            Flags3;
    order:                            string;
    group:                            string;
    subgroup:                         string;
    crafting_speed:                   number;
    crafting_categories:              OilRefineryCraftingCategories;
    energy_usage:                     number;
    electric_energy_source_prototype: AssemblingMachine2_ElectricEnergySourcePrototype;
    fluid_capacity:                   number;
}

export interface OilRefineryCraftingCategories {
    "oil-processing": boolean;
}

export interface RocketSilo {
    name:                             string;
    type:                             string;
    flags:                            Flags2;
    order:                            string;
    group:                            string;
    subgroup:                         string;
    crafting_speed:                   number;
    crafting_categories:              RocketSiloCraftingCategories;
    energy_usage:                     number;
    electric_energy_source_prototype: RocketSiloElectricEnergySourcePrototype;
    fluid_capacity:                   number;
}

export interface RocketSiloCraftingCategories {
    "rocket-building": boolean;
}

export interface RocketSiloElectricEnergySourcePrototype {
    buffer_capacity:   number;
    usage_priority:    string;
    input_flow_limit:  number;
    output_flow_limit: number;
    drain:             number;
    emissions:         number;
    category:          string;
    effectivity:       number;
}

export interface Flags2 {
    "placeable-player": boolean;
    "player-creation":  boolean;
}

export interface Beacon {
    name:                             string;
    type:                             string;
    flags:                            Flags2;
    order:                            string;
    group:                            string;
    subgroup:                         string;
    inventory_size:                   number;
    energy_usage:                     number;
    electric_energy_source_prototype: BeaconElectricEnergySourcePrototype;
    fluid_capacity:                   number;
}

export interface BeaconElectricEnergySourcePrototype {
    buffer_capacity:   number;
    usage_priority:    string;
    input_flow_limit:  number;
    output_flow_limit: number;
    drain:             number;
    emissions:         number;
    category:          ElectricEnergySourcePrototypeCategory;
    effectivity:       number;
}

export interface Boiler {
    name:               string;
    type:               string;
    flags:              Flags3;
    order:              string;
    group:              string;
    subgroup:           string;
    inventory_size:     number;
    burner_prototype:   BoilerBurnerPrototype;
    target_temperature: number;
    fluid_capacity:     number;
}

export interface BoilerBurnerPrototype {
    emissions:            number;
    category:             string;
    effectivity:          number;
    fuel_inventory_size:  number;
    burnt_inventory_size: number;
    fuel_category:        string;
}

export interface Car {
    name:             string;
    type:             string;
    flags:            BehemothBiterCorpseFlags;
    order:            string;
    group:            string;
    subgroup:         string;
    inventory_size:   number;
    braking_force:    number;
    burner_prototype: CarBurnerPrototype;
    fluid_capacity:   number;
}

export interface CarBurnerPrototype {
    emissions:            number;
    category:             string;
    effectivity:          number;
    fuel_inventory_size:  number;
    burnt_inventory_size: number;
    fuel_category:        string;
}

export interface Centrifuge {
    name:                             string;
    type:                             string;
    flags:                            Flags1;
    order:                            string;
    group:                            string;
    subgroup:                         string;
    crafting_speed:                   number;
    crafting_categories:              CentrifugeCraftingCategories;
    energy_usage:                     number;
    electric_energy_source_prototype: AssemblingMachine2_ElectricEnergySourcePrototype;
    fluid_capacity:                   number;
}

export interface CentrifugeCraftingCategories {
    centrifuging: boolean;
}

export interface Player {
    name:                string;
    type:                string;
    flags:               PlayerFlags;
    order:               string;
    group:               string;
    subgroup:            string;
    crafting_categories: AssemblingMachine1_CraftingCategories;
    inventory_size:      number;
    mining_speed:        number;
    fluid_capacity:      number;
}

export interface PlayerFlags {
    pushable:             boolean;
    "placeable-off-grid": boolean;
    "breaths-air":        boolean;
    "not-repairable":     boolean;
    "not-on-map":         boolean;
}

export interface Items {
    "wooden-chest":                     ItemsAccumulator;
    "iron-chest":                       ItemsAccumulator;
    "steel-chest":                      ItemsAccumulator;
    "storage-tank":                     ItemsAccumulator;
    "transport-belt":                   ItemsAccumulator;
    "fast-transport-belt":              ItemsAccumulator;
    "express-transport-belt":           ItemsAccumulator;
    "underground-belt":                 ItemsAccumulator;
    "fast-underground-belt":            ItemsAccumulator;
    "express-underground-belt":         ItemsAccumulator;
    splitter:                           ItemsAccumulator;
    "fast-splitter":                    ItemsAccumulator;
    "express-splitter":                 ItemsAccumulator;
    loader:                             Coin;
    "fast-loader":                      Coin;
    "express-loader":                   Coin;
    "burner-inserter":                  ItemsAccumulator;
    inserter:                           ItemsAccumulator;
    "long-handed-inserter":             ItemsAccumulator;
    "fast-inserter":                    ItemsAccumulator;
    "filter-inserter":                  ItemsAccumulator;
    "stack-inserter":                   ItemsAccumulator;
    "stack-filter-inserter":            ItemsAccumulator;
    "small-electric-pole":              ItemsAccumulator;
    "medium-electric-pole":             ItemsAccumulator;
    "big-electric-pole":                ItemsAccumulator;
    substation:                         ItemsAccumulator;
    pipe:                               ItemsAccumulator;
    "pipe-to-ground":                   ItemsAccumulator;
    pump:                               ItemsAccumulator;
    rail:                               ItemsAccumulator;
    "train-stop":                       ItemsAccumulator;
    "rail-signal":                      ItemsAccumulator;
    "rail-chain-signal":                ItemsAccumulator;
    locomotive:                         ItemsAccumulator;
    "cargo-wagon":                      ItemsAccumulator;
    "fluid-wagon":                      ItemsAccumulator;
    "artillery-wagon":                  ItemsAccumulator;
    car:                                ItemsAccumulator;
    tank:                               ItemsAccumulator;
    "small-plane":                      Coin;
    "logistic-robot":                   ItemsAccumulator;
    "construction-robot":               AdvancedCircuit;
    "logistic-chest-active-provider":   ItemsAccumulator;
    "logistic-chest-passive-provider":  ItemsAccumulator;
    "logistic-chest-storage":           ItemsAccumulator;
    "logistic-chest-buffer":            ItemsAccumulator;
    "logistic-chest-requester":         ItemsAccumulator;
    roboport:                           ItemsAccumulator;
    "small-lamp":                       ItemsAccumulator;
    "red-wire":                         ItemsAccumulator;
    "green-wire":                       ItemsAccumulator;
    "arithmetic-combinator":            ItemsAccumulator;
    "decider-combinator":               ItemsAccumulator;
    "constant-combinator":              ItemsAccumulator;
    "power-switch":                     ItemsAccumulator;
    "programmable-speaker":             ItemsAccumulator;
    "stone-brick":                      AdvancedCircuit;
    concrete:                           AdvancedCircuit;
    "hazard-concrete":                  AdvancedCircuit;
    landfill:                           AdvancedCircuit;
    "cliff-explosives":                 ItemsAccumulator;
    "iron-axe":                         AdvancedCircuit;
    "steel-axe":                        AdvancedCircuit;
    "repair-pack":                      ItemsAccumulator;
    blueprint:                          ItemsAccumulator;
    "dummy-selection-tool":             Coin;
    "deconstruction-planner":           ItemsAccumulator;
    "blueprint-book":                   ItemsAccumulator;
    boiler:                             ItemsAccumulator;
    "steam-engine":                     ItemsAccumulator;
    "steam-turbine":                    ItemsAccumulator;
    "solar-panel":                      ItemsAccumulator;
    accumulator:                        ItemsAccumulator;
    "electric-energy-interface":        Coin;
    "nuclear-reactor":                  ItemsAccumulator;
    "heat-exchanger":                   ItemsAccumulator;
    "heat-pipe":                        ItemsAccumulator;
    "burner-mining-drill":              ItemsAccumulator;
    "electric-mining-drill":            ItemsAccumulator;
    "offshore-pump":                    ItemsAccumulator;
    pumpjack:                           ItemsAccumulator;
    "stone-furnace":                    ItemsAccumulator;
    "steel-furnace":                    ItemsAccumulator;
    "electric-furnace":                 ItemsAccumulator;
    "assembling-machine-1":             ItemsAccumulator;
    "assembling-machine-2":             ItemsAccumulator;
    "assembling-machine-3":             ItemsAccumulator;
    "oil-refinery":                     ItemsAccumulator;
    "chemical-plant":                   ItemsAccumulator;
    centrifuge:                         ItemsAccumulator;
    lab:                                ItemsAccumulator;
    beacon:                             ItemsAccumulator;
    "speed-module":                     AdvancedCircuit;
    "speed-module-2":                   AdvancedCircuit;
    "speed-module-3":                   AdvancedCircuit;
    "effectivity-module":               AdvancedCircuit;
    "effectivity-module-2":             AdvancedCircuit;
    "effectivity-module-3":             AdvancedCircuit;
    "productivity-module":              AdvancedCircuit;
    "productivity-module-2":            AdvancedCircuit;
    "productivity-module-3":            AdvancedCircuit;
    "raw-wood":                         AdvancedCircuit;
    coal:                               AdvancedCircuit;
    stone:                              AdvancedCircuit;
    "iron-ore":                         AdvancedCircuit;
    "copper-ore":                       AdvancedCircuit;
    "uranium-ore":                      AdvancedCircuit;
    "raw-fish":                         ItemsAccumulator;
    wood:                               AdvancedCircuit;
    "iron-plate":                       AdvancedCircuit;
    "copper-plate":                     AdvancedCircuit;
    "solid-fuel":                       Fuel;
    "steel-plate":                      AdvancedCircuit;
    "plastic-bar":                      AdvancedCircuit;
    sulfur:                             AdvancedCircuit;
    battery:                            AdvancedCircuit;
    explosives:                         AdvancedCircuit;
    "crude-oil-barrel":                 AdvancedCircuit;
    "heavy-oil-barrel":                 AdvancedCircuit;
    "light-oil-barrel":                 AdvancedCircuit;
    "lubricant-barrel":                 AdvancedCircuit;
    "petroleum-gas-barrel":             AdvancedCircuit;
    "sulfuric-acid-barrel":             AdvancedCircuit;
    "water-barrel":                     AdvancedCircuit;
    "copper-cable":                     AdvancedCircuit;
    "iron-stick":                       AdvancedCircuit;
    "iron-gear-wheel":                  AdvancedCircuit;
    "empty-barrel":                     AdvancedCircuit;
    "electronic-circuit":               AdvancedCircuit;
    "advanced-circuit":                 AdvancedCircuit;
    "processing-unit":                  AdvancedCircuit;
    "engine-unit":                      AdvancedCircuit;
    "electric-engine-unit":             AdvancedCircuit;
    "flying-robot-frame":               AdvancedCircuit;
    satellite:                          AdvancedCircuit;
    "rocket-control-unit":              AdvancedCircuit;
    "low-density-structure":            AdvancedCircuit;
    "rocket-fuel":                      Fuel;
    "rocket-part":                      ArtilleryWagonCannon;
    "nuclear-fuel":                     Fuel;
    "uranium-235":                      AdvancedCircuit;
    "uranium-238":                      AdvancedCircuit;
    "uranium-fuel-cell":                AdvancedCircuit;
    "used-up-uranium-fuel-cell":        AdvancedCircuit;
    "science-pack-1":                   AdvancedCircuit;
    "science-pack-2":                   AdvancedCircuit;
    "science-pack-3":                   AdvancedCircuit;
    "military-science-pack":            AdvancedCircuit;
    "production-science-pack":          AdvancedCircuit;
    "high-tech-science-pack":           AdvancedCircuit;
    "space-science-pack":               AdvancedCircuit;
    coin:                               Coin;
    pistol:                             AdvancedCircuit;
    "submachine-gun":                   AdvancedCircuit;
    "tank-machine-gun":                 ArtilleryWagonCannon;
    "vehicle-machine-gun":              ArtilleryWagonCannon;
    "tank-flamethrower":                ArtilleryWagonCannon;
    shotgun:                            AdvancedCircuit;
    "combat-shotgun":                   AdvancedCircuit;
    railgun:                            ArtilleryWagonCannon;
    "rocket-launcher":                  AdvancedCircuit;
    flamethrower:                       AdvancedCircuit;
    "land-mine":                        ItemsAccumulator;
    "artillery-wagon-cannon":           ArtilleryWagonCannon;
    "tank-cannon":                      ArtilleryWagonCannon;
    "firearm-magazine":                 AdvancedCircuit;
    "piercing-rounds-magazine":         AdvancedCircuit;
    "uranium-rounds-magazine":          AdvancedCircuit;
    "shotgun-shell":                    AdvancedCircuit;
    "piercing-shotgun-shell":           AdvancedCircuit;
    "railgun-dart":                     ArtilleryWagonCannon;
    "cannon-shell":                     AdvancedCircuit;
    "explosive-cannon-shell":           AdvancedCircuit;
    "uranium-cannon-shell":             AdvancedCircuit;
    "explosive-uranium-cannon-shell":   AdvancedCircuit;
    "artillery-shell":                  AdvancedCircuit;
    rocket:                             AdvancedCircuit;
    "explosive-rocket":                 AdvancedCircuit;
    "atomic-bomb":                      AdvancedCircuit;
    "flamethrower-ammo":                AdvancedCircuit;
    grenade:                            ItemsAccumulator;
    "cluster-grenade":                  ItemsAccumulator;
    "poison-capsule":                   ItemsAccumulator;
    "slowdown-capsule":                 ItemsAccumulator;
    "defender-capsule":                 ItemsAccumulator;
    "distractor-capsule":               ItemsAccumulator;
    "destroyer-capsule":                ItemsAccumulator;
    "discharge-defense-remote":         ItemsAccumulator;
    "artillery-targeting-remote":       ItemsAccumulator;
    "light-armor":                      AdvancedCircuit;
    "heavy-armor":                      AdvancedCircuit;
    "modular-armor":                    AdvancedCircuit;
    "power-armor":                      AdvancedCircuit;
    "power-armor-mk2":                  AdvancedCircuit;
    "belt-immunity-equipment":          ArtilleryWagonCannon;
    "solar-panel-equipment":            AdvancedCircuit;
    "fusion-reactor-equipment":         AdvancedCircuit;
    "energy-shield-equipment":          AdvancedCircuit;
    "energy-shield-mk2-equipment":      AdvancedCircuit;
    "battery-equipment":                AdvancedCircuit;
    "battery-mk2-equipment":            AdvancedCircuit;
    "personal-laser-defense-equipment": AdvancedCircuit;
    "discharge-defense-equipment":      AdvancedCircuit;
    "exoskeleton-equipment":            AdvancedCircuit;
    "personal-roboport-equipment":      AdvancedCircuit;
    "personal-roboport-mk2-equipment":  AdvancedCircuit;
    "night-vision-equipment":           AdvancedCircuit;
    "stone-wall":                       ItemsAccumulator;
    gate:                               ItemsAccumulator;
    "gun-turret":                       ItemsAccumulator;
    "laser-turret":                     ItemsAccumulator;
    "flamethrower-turret":              ItemsAccumulator;
    "artillery-turret":                 ItemsAccumulator;
    radar:                              ItemsAccumulator;
    "rocket-silo":                      ItemsAccumulator;
    computer:                           Coin;
    "player-port":                      Coin;
    "item-with-inventory":              Coin;
    "item-with-label":                  Coin;
    "item-with-tags":                   Coin;
    "simple-entity-with-force":         Coin;
    "simple-entity-with-owner":         Coin;
    "infinity-chest":                   Coin;
}

export interface AdvancedCircuit {
    name:                         string;
    type:                         AdvancedCircuitType;
    flags:                        AdvancedCircuitFlags;
    stack_size:                   number;
    fuel_value:                   number;
    fuel_acceleration_multiplier: number;
    fuel_top_speed_multiplier:    number;
    group:                        AdvancedCircuitGroup;
    subgroup:                     string;
    order:                        string;
    fuel_category?:               string;
    place_result?:                string;
}

export interface AdvancedCircuitFlags {
    "goes-to-main-inventory": boolean;
}

export enum AdvancedCircuitGroup {
    Combat = "combat",
    IntermediateProducts = "intermediate-products",
    Logistics = "logistics",
    Production = "production",
}

export enum AdvancedCircuitType {
    Ammo = "ammo",
    Armor = "armor",
    Gun = "gun",
    Item = "item",
    MiningTool = "mining-tool",
    Module = "module",
    Tool = "tool",
}

export interface ItemsAccumulator {
    name:                         string;
    type:                         AccumulatorType;
    flags:                        AccumulatorFlags;
    stack_size:                   number;
    fuel_value:                   number;
    fuel_acceleration_multiplier: number;
    fuel_top_speed_multiplier:    number;
    group:                        AdvancedCircuitGroup;
    subgroup:                     string;
    order:                        string;
    place_result?:                string;
    fuel_category?:               string;
    inventory_size?:              number;
}

export interface AccumulatorFlags {
    "goes-to-quickbar": boolean;
}

export enum AccumulatorType {
    Blueprint = "blueprint",
    BlueprintBook = "blueprint-book",
    Capsule = "capsule",
    DeconstructionItem = "deconstruction-item",
    Item = "item",
    ItemWithEntityData = "item-with-entity-data",
    RailPlanner = "rail-planner",
    RepairTool = "repair-tool",
}

export interface ArtilleryWagonCannon {
    name:                         string;
    type:                         string;
    flags:                        ArtilleryWagonCannonFlags;
    stack_size:                   number;
    fuel_value:                   number;
    fuel_acceleration_multiplier: number;
    fuel_top_speed_multiplier:    number;
    group:                        string;
    subgroup:                     string;
    order:                        string;
}

export interface ArtilleryWagonCannonFlags {
    "goes-to-main-inventory": boolean;
    hidden:                   boolean;
}

export interface Coin {
    name:                         string;
    type:                         string;
    flags:                        CoinFlags;
    stack_size:                   number;
    fuel_value:                   number;
    fuel_acceleration_multiplier: number;
    fuel_top_speed_multiplier:    number;
    group:                        string;
    subgroup:                     string;
    order:                        string;
    place_result?:                string;
    inventory_size?:              number;
}

export interface CoinFlags {
    "goes-to-quickbar": boolean;
    hidden:             boolean;
}

export interface Fuel {
    name:                         string;
    type:                         string;
    flags:                        AdvancedCircuitFlags;
    fuel_category:                string;
    stack_size:                   number;
    fuel_value:                   number;
    fuel_acceleration_multiplier: number;
    fuel_top_speed_multiplier:    number;
    group:                        string;
    subgroup:                     string;
    order:                        string;
}

export interface Recipes {
    "assembling-machine-1":             ArithmeticCombinator;
    "firearm-magazine":                 RecipesAccumulator;
    pistol:                             RecipesAccumulator;
    "piercing-rounds-magazine":         RecipesAccumulator;
    "submachine-gun":                   RecipesAccumulator;
    "uranium-rounds-magazine":          RecipesAccumulator;
    beacon:                             RecipesAccumulator;
    "burner-inserter":                  ArithmeticCombinator;
    "copper-cable":                     ArithmeticCombinator;
    "solar-panel-equipment":            RecipesAccumulator;
    "fusion-reactor-equipment":         RecipesAccumulator;
    "small-electric-pole":              ArithmeticCombinator;
    "medium-electric-pole":             ArithmeticCombinator;
    "big-electric-pole":                ArithmeticCombinator;
    substation:                         ArithmeticCombinator;
    "sulfuric-acid":                    AdvancedOilProcessing;
    grenade:                            RecipesAccumulator;
    "cluster-grenade":                  RecipesAccumulator;
    "burner-mining-drill":              RecipesAccumulator;
    "wooden-chest":                     ArithmeticCombinator;
    "electric-mining-drill":            RecipesAccumulator;
    "iron-chest":                       ArithmeticCombinator;
    "steel-chest":                      ArithmeticCombinator;
    "light-armor":                      RecipesAccumulator;
    "small-lamp":                       ArithmeticCombinator;
    "iron-axe":                         ArithmeticCombinator;
    "steel-axe":                        ArithmeticCombinator;
    "basic-oil-processing":             AdvancedOilProcessing;
    "advanced-oil-processing":          AdvancedOilProcessing;
    "coal-liquefaction":                AdvancedOilProcessing;
    pipe:                               ArithmeticCombinator;
    "pipe-to-ground":                   ArithmeticCombinator;
    "logistic-robot":                   ArithmeticCombinator;
    "construction-robot":               ArithmeticCombinator;
    "science-pack-1":                   RecipesAccumulator;
    "speed-module":                     RecipesAccumulator;
    "speed-module-2":                   RecipesAccumulator;
    "speed-module-3":                   RecipesAccumulator;
    "stone-brick":                      ArithmeticCombinator;
    "stone-furnace":                    ArithmeticCombinator;
    "stone-wall":                       ArithmeticCombinator;
    rail:                               ArithmeticCombinator;
    "train-stop":                       ArithmeticCombinator;
    "rail-signal":                      ArithmeticCombinator;
    "rail-chain-signal":                ArithmeticCombinator;
    locomotive:                         RecipesAccumulator;
    "cargo-wagon":                      RecipesAccumulator;
    "fluid-wagon":                      ArithmeticCombinator;
    "artillery-wagon":                  RecipesAccumulator;
    "transport-belt":                   ArithmeticCombinator;
    "fast-transport-belt":              ArithmeticCombinator;
    "express-transport-belt":           ArithmeticCombinator;
    gate:                               ArithmeticCombinator;
    wood:                               ArithmeticCombinator;
    "assembling-machine-2":             ArithmeticCombinator;
    concrete:                           RecipesAccumulator;
    "hazard-concrete":                  ArithmeticCombinator;
    "fill-crude-oil-barrel":            RecipesAccumulator;
    "fill-heavy-oil-barrel":            RecipesAccumulator;
    "fill-light-oil-barrel":            RecipesAccumulator;
    "fill-lubricant-barrel":            RecipesAccumulator;
    "fill-petroleum-gas-barrel":        RecipesAccumulator;
    "fill-sulfuric-acid-barrel":        RecipesAccumulator;
    "fill-water-barrel":                RecipesAccumulator;
    "heavy-oil-cracking":               AdvancedOilProcessing;
    "light-oil-cracking":               AdvancedOilProcessing;
    "solid-fuel-from-light-oil":        RecipesAccumulator;
    "solid-fuel-from-petroleum-gas":    RecipesAccumulator;
    "solid-fuel-from-heavy-oil":        RecipesAccumulator;
    "storage-tank":                     RecipesAccumulator;
    "offshore-pump":                    ArithmeticCombinator;
    pumpjack:                           RecipesAccumulator;
    "heavy-armor":                      RecipesAccumulator;
    inserter:                           ArithmeticCombinator;
    "iron-plate":                       ArithmeticCombinator;
    "iron-stick":                       ArithmeticCombinator;
    car:                                RecipesAccumulator;
    tank:                               RecipesAccumulator;
    "small-plane":                      RecipesAccumulator;
    pump:                               RecipesAccumulator;
    "poison-capsule":                   RecipesAccumulator;
    "repair-pack":                      ArithmeticCombinator;
    "science-pack-2":                   RecipesAccumulator;
    "energy-shield-equipment":          RecipesAccumulator;
    "energy-shield-mk2-equipment":      RecipesAccumulator;
    shotgun:                            RecipesAccumulator;
    "shotgun-shell":                    RecipesAccumulator;
    "combat-shotgun":                   RecipesAccumulator;
    "piercing-shotgun-shell":           RecipesAccumulator;
    boiler:                             ArithmeticCombinator;
    "steam-engine":                     ArithmeticCombinator;
    "steam-turbine":                    RecipesAccumulator;
    "steel-furnace":                    RecipesAccumulator;
    "logistic-chest-active-provider":   ArithmeticCombinator;
    "logistic-chest-passive-provider":  ArithmeticCombinator;
    "logistic-chest-storage":           ArithmeticCombinator;
    "logistic-chest-buffer":            ArithmeticCombinator;
    "logistic-chest-requester":         ArithmeticCombinator;
    "gun-turret":                       RecipesAccumulator;
    "laser-turret":                     RecipesAccumulator;
    "flamethrower-turret":              RecipesAccumulator;
    "artillery-turret":                 RecipesAccumulator;
    "underground-belt":                 RecipesAccumulator;
    "fast-underground-belt":            RecipesAccumulator;
    "express-underground-belt":         RecipesAccumulator;
    "red-wire":                         ArithmeticCombinator;
    "green-wire":                       ArithmeticCombinator;
    "assembling-machine-3":             ArithmeticCombinator;
    "battery-equipment":                RecipesAccumulator;
    "battery-mk2-equipment":            RecipesAccumulator;
    "arithmetic-combinator":            ArithmeticCombinator;
    "decider-combinator":               ArithmeticCombinator;
    "constant-combinator":              ArithmeticCombinator;
    "copper-plate":                     ArithmeticCombinator;
    "effectivity-module":               RecipesAccumulator;
    "effectivity-module-2":             RecipesAccumulator;
    "effectivity-module-3":             RecipesAccumulator;
    "electric-furnace":                 RecipesAccumulator;
    "empty-crude-oil-barrel":           AdvancedOilProcessing;
    "empty-heavy-oil-barrel":           AdvancedOilProcessing;
    "empty-light-oil-barrel":           AdvancedOilProcessing;
    "empty-lubricant-barrel":           AdvancedOilProcessing;
    "empty-petroleum-gas-barrel":       AdvancedOilProcessing;
    "empty-sulfuric-acid-barrel":       AdvancedOilProcessing;
    "empty-water-barrel":               AdvancedOilProcessing;
    "iron-gear-wheel":                  ArithmeticCombinator;
    landfill:                           ArithmeticCombinator;
    "long-handed-inserter":             ArithmeticCombinator;
    "modular-armor":                    RecipesAccumulator;
    "productivity-module":              RecipesAccumulator;
    "productivity-module-2":            RecipesAccumulator;
    "productivity-module-3":            RecipesAccumulator;
    railgun:                            RecipesAccumulator;
    "railgun-dart":                     RecipesAccumulator;
    "science-pack-3":                   RecipesAccumulator;
    roboport:                           RecipesAccumulator;
    "slowdown-capsule":                 RecipesAccumulator;
    splitter:                           RecipesAccumulator;
    "fast-splitter":                    RecipesAccumulator;
    "express-splitter":                 RecipesAccumulator;
    "personal-laser-defense-equipment": RecipesAccumulator;
    "discharge-defense-equipment":      RecipesAccumulator;
    "cannon-shell":                     RecipesAccumulator;
    "explosive-cannon-shell":           RecipesAccumulator;
    "uranium-cannon-shell":             RecipesAccumulator;
    "cliff-explosives":                 RecipesAccumulator;
    "defender-capsule":                 RecipesAccumulator;
    "empty-barrel":                     RecipesAccumulator;
    "explosive-uranium-cannon-shell":   RecipesAccumulator;
    "artillery-shell":                  RecipesAccumulator;
    "fast-inserter":                    ArithmeticCombinator;
    loader:                             RecipesAccumulator;
    "fast-loader":                      RecipesAccumulator;
    "express-loader":                   RecipesAccumulator;
    "military-science-pack":            RecipesAccumulator;
    "power-switch":                     RecipesAccumulator;
    "programmable-speaker":             RecipesAccumulator;
    "power-armor":                      RecipesAccumulator;
    radar:                              ArithmeticCombinator;
    "oil-refinery":                     RecipesAccumulator;
    "rocket-launcher":                  RecipesAccumulator;
    rocket:                             RecipesAccumulator;
    "explosive-rocket":                 RecipesAccumulator;
    "atomic-bomb":                      RecipesAccumulator;
    "solar-panel":                      RecipesAccumulator;
    "steel-plate":                      ArithmeticCombinator;
    accumulator:                        RecipesAccumulator;
    "chemical-plant":                   RecipesAccumulator;
    "distractor-capsule":               RecipesAccumulator;
    "electric-energy-interface":        ArithmeticCombinator;
    "electronic-circuit":               ArithmeticCombinator;
    "exoskeleton-equipment":            RecipesAccumulator;
    "filter-inserter":                  ArithmeticCombinator;
    flamethrower:                       RecipesAccumulator;
    "flamethrower-ammo":                RecipesAccumulator;
    lubricant:                          AdvancedOilProcessing;
    "power-armor-mk2":                  RecipesAccumulator;
    "production-science-pack":          RecipesAccumulator;
    "personal-roboport-equipment":      RecipesAccumulator;
    "personal-roboport-mk2-equipment":  RecipesAccumulator;
    "rocket-silo":                      RecipesAccumulator;
    "advanced-circuit":                 RecipesAccumulator;
    "destroyer-capsule":                RecipesAccumulator;
    "high-tech-science-pack":           RecipesAccumulator;
    "land-mine":                        RecipesAccumulator;
    "night-vision-equipment":           RecipesAccumulator;
    "nuclear-reactor":                  RecipesAccumulator;
    "heat-exchanger":                   RecipesAccumulator;
    "heat-pipe":                        RecipesAccumulator;
    "plastic-bar":                      RecipesAccumulator;
    "stack-inserter":                   ArithmeticCombinator;
    centrifuge:                         RecipesAccumulator;
    lab:                                RecipesAccumulator;
    "processing-unit":                  RecipesAccumulator;
    "stack-filter-inserter":            ArithmeticCombinator;
    sulfur:                             RecipesAccumulator;
    battery:                            RecipesAccumulator;
    "engine-unit":                      RecipesAccumulator;
    "electric-engine-unit":             RecipesAccumulator;
    explosives:                         RecipesAccumulator;
    "uranium-processing":               UraniumProcessing;
    "flying-robot-frame":               RecipesAccumulator;
    satellite:                          RecipesAccumulator;
    "rocket-control-unit":              RecipesAccumulator;
    "low-density-structure":            RecipesAccumulator;
    "rocket-fuel":                      RecipesAccumulator;
    "rocket-part":                      RecipesAccumulator;
    "nuclear-fuel":                     RecipesAccumulator;
    "uranium-fuel-cell":                RecipesAccumulator;
    "nuclear-fuel-reprocessing":        RecipesAccumulator;
    "kovarex-enrichment-process":       RecipesAccumulator;
    "discharge-defense-remote":         ArithmeticCombinator;
    "player-port":                      ArithmeticCombinator;
    "artillery-targeting-remote":       ArithmeticCombinator;
}

export interface RecipesAccumulator {
    name:        string;
    enabled:     boolean;
    category:    AccumulatorCategory;
    ingredients: Ingredient[];
    products:    Ingredient[];
    hidden:      boolean;
    energy:      number;
    order:       string;
    group:       AdvancedCircuitGroup;
    subgroup:    string;
}

export enum AccumulatorCategory {
    AdvancedCrafting = "advanced-crafting",
    Centrifuging = "centrifuging",
    Chemistry = "chemistry",
    Crafting = "crafting",
    CraftingWithFluid = "crafting-with-fluid",
    RocketBuilding = "rocket-building",
}

export interface Ingredient {
    type:   IngredientType;
    name:   string;
    amount: number;
}

export enum IngredientType {
    Fluid = "fluid",
    Item = "item",
}

export interface AdvancedOilProcessing {
    name:        string;
    enabled:     boolean;
    category:    string;
    ingredients: Ingredient[];
    products:    AdvancedOilProcessingProduct[];
    hidden:      boolean;
    energy:      number;
    order:       string;
    group:       string;
    subgroup:    string;
}

export interface AdvancedOilProcessingProduct {
    type:         IngredientType;
    name:         string;
    amount?:      number;
    amount_min?:  number;
    amount_max?:  number;
    probability?: number;
}

export interface ArithmeticCombinator {
    name:        string;
    enabled:     boolean;
    category:    ArithmeticCombinatorCategory;
    ingredients: Ingredient[];
    products:    Ingredient[];
    hidden:      boolean;
    energy:      number;
    order:       string;
    group:       AdvancedCircuitGroup;
    subgroup:    string;
}

export enum ArithmeticCombinatorCategory {
    Crafting = "crafting",
    CraftingWithFluid = "crafting-with-fluid",
    Smelting = "smelting",
}

export interface UraniumProcessing {
    name:        string;
    enabled:     boolean;
    category:    string;
    ingredients: Ingredient[];
    products:    UraniumProcessingProduct[];
    hidden:      boolean;
    energy:      number;
    order:       string;
    group:       string;
    subgroup:    string;
}

export interface UraniumProcessingProduct {
    type:        string;
    name:        string;
    amount_min:  number;
    amount_max:  number;
    probability: number;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export module Convert {
    export function toDataD(json: string): DataD {
        return cast(JSON.parse(json), O("DataD"));
    }

    export function dataDToJson(value: DataD): string {
        return JSON.stringify(value, null, 2);
    }
    
    function cast<T>(obj: any, typ: any): T {
        if (!isValid(typ, obj)) {
            throw `Invalid value`;
        }
        return obj;
    }

    function isValid(typ: any, val: any): boolean {
        if (typ === undefined) return true;
        if (typ === null) return val === null || val === undefined;
        return typ.isUnion  ? isValidUnion(typ.typs, val)
                : typ.isArray  ? isValidArray(typ.typ, val)
                : typ.isMap    ? isValidMap(typ.typ, val)
                : typ.isEnum   ? isValidEnum(typ.name, val)
                : typ.isObject ? isValidObject(typ.cls, val)
                :                isValidPrimitive(typ, val);
    }

    function isValidPrimitive(typ: string, val: any) {
        return typeof typ === typeof val;
    }

    function isValidUnion(typs: any[], val: any): boolean {
        // val must validate against one typ in typs
        return typs.find(typ => isValid(typ, val)) !== undefined;
    }

    function isValidEnum(enumName: string, val: any): boolean {
        const cases = typeMap[enumName];
        return cases.indexOf(val) !== -1;
    }

    function isValidArray(typ: any, val: any): boolean {
        // val must be an array with no invalid elements
        return Array.isArray(val) && val.every((element, i) => {
            return isValid(typ, element);
        });
    }

    function isValidMap(typ: any, val: any): boolean {
        if (val === null || typeof val !== "object" || Array.isArray(val)) return false;
        // all values in the map must be typ
        return Object.keys(val).every(prop => {
            if (!Object.prototype.hasOwnProperty.call(val, prop)) return true;
            return isValid(typ, val[prop]);
        });
    }

    function isValidObject(className: string, val: any): boolean {
        if (val === null || typeof val !== "object" || Array.isArray(val)) return false;
        let typeRep = typeMap[className];
        return Object.keys(typeRep).every(prop => {
            if (!Object.prototype.hasOwnProperty.call(typeRep, prop)) return true;
            return isValid(typeRep[prop], val[prop]);
        });
    }

    function A(typ: any) {
        return { typ, isArray: true };
    }

    function E(name: string) {
        return { name, isEnum: true };
    }

    function U(...typs: any[]) {
        return { typs, isUnion: true };
    }

    function M(typ: any) {
        return { typ, isMap: true };
    }

    function O(className: string) {
        return { cls: className, isObject: true };
    }

    const typeMap: any = {
        "DataD": {
            items: O("Items"),
            recipes: O("Recipes"),
            entities: O("Entities"),
        },
        "Entities": {
            "wooden-chest": O("EntitiesAccumulator"),
            "iron-chest": O("EntitiesAccumulator"),
            "steel-chest": O("EntitiesAccumulator"),
            "storage-tank": O("EntitiesAccumulator"),
            "transport-belt": O("EntitiesAccumulator"),
            "fast-transport-belt": O("EntitiesAccumulator"),
            "express-transport-belt": O("EntitiesAccumulator"),
            "underground-belt": O("EntitiesAccumulator"),
            "fast-underground-belt": O("EntitiesAccumulator"),
            "express-underground-belt": O("EntitiesAccumulator"),
            splitter: O("EntitiesAccumulator"),
            "fast-splitter": O("EntitiesAccumulator"),
            "express-splitter": O("EntitiesAccumulator"),
            loader: O("EntitiesAccumulator"),
            "fast-loader": O("EntitiesAccumulator"),
            "express-loader": O("EntitiesAccumulator"),
            "burner-inserter": O("ArtilleryTurret"),
            inserter: O("EntitiesAccumulator"),
            "long-handed-inserter": O("EntitiesAccumulator"),
            "fast-inserter": O("EntitiesAccumulator"),
            "filter-inserter": O("EntitiesAccumulator"),
            "stack-inserter": O("EntitiesAccumulator"),
            "stack-filter-inserter": O("EntitiesAccumulator"),
            "small-electric-pole": O("EntitiesAccumulator"),
            "medium-electric-pole": O("EntitiesAccumulator"),
            "big-electric-pole": O("EntitiesAccumulator"),
            substation: O("EntitiesAccumulator"),
            pipe: O("EntitiesAccumulator"),
            "pipe-to-ground": O("EntitiesAccumulator"),
            pump: O("ElectricMiningDrill"),
            "curved-rail": O("EntitiesAccumulator"),
            "straight-rail": O("EntitiesAccumulator"),
            "train-stop": O("EntitiesAccumulator"),
            "rail-signal": O("EntitiesAccumulator"),
            "rail-chain-signal": O("EntitiesAccumulator"),
            locomotive: O("EntitiesAccumulator"),
            "cargo-wagon": O("Wagon"),
            "fluid-wagon": O("EntitiesAccumulator"),
            "artillery-wagon": O("Wagon"),
            car: O("Car"),
            tank: O("Car"),
            "logistic-robot": O("Robot"),
            "construction-robot": O("Robot"),
            "logistic-chest-active-provider": O("EntitiesAccumulator"),
            "logistic-chest-passive-provider": O("EntitiesAccumulator"),
            "logistic-chest-storage": O("EntitiesAccumulator"),
            "logistic-chest-buffer": O("EntitiesAccumulator"),
            "logistic-chest-requester": O("EntitiesAccumulator"),
            roboport: O("EntitiesAccumulator"),
            "small-lamp": O("EntitiesAccumulator"),
            "arithmetic-combinator": O("EntitiesAccumulator"),
            "decider-combinator": O("EntitiesAccumulator"),
            "constant-combinator": O("EntitiesAccumulator"),
            "power-switch": O("EntitiesAccumulator"),
            "programmable-speaker": O("EntitiesAccumulator"),
            boiler: O("Boiler"),
            "steam-engine": O("EntitiesAccumulator"),
            "steam-turbine": O("EntitiesAccumulator"),
            "solar-panel": O("EntitiesAccumulator"),
            accumulator: O("EntitiesAccumulator"),
            "electric-energy-interface": O("EntitiesAccumulator"),
            "nuclear-reactor": O("EntitiesAccumulator"),
            "heat-exchanger": O("EntitiesAccumulator"),
            "heat-pipe": O("EntitiesAccumulator"),
            "burner-mining-drill": O("BurnerMiningDrill"),
            "electric-mining-drill": O("ElectricMiningDrill"),
            "offshore-pump": O("EntitiesAccumulator"),
            pumpjack: O("ElectricMiningDrill"),
            "stone-furnace": O("Furnace"),
            "steel-furnace": O("Furnace"),
            "electric-furnace": O("Furnace"),
            "assembling-machine-1": O("AssemblingMachine1"),
            "assembling-machine-2": O("AssemblingMachine"),
            "assembling-machine-3": O("AssemblingMachine"),
            "oil-refinery": O("OilRefinery"),
            "chemical-plant": O("ChemicalPlant"),
            centrifuge: O("Centrifuge"),
            lab: O("EntitiesAccumulator"),
            beacon: O("Beacon"),
            "land-mine": O("EntitiesAccumulator"),
            "stone-wall": O("EntitiesAccumulator"),
            gate: O("EntitiesAccumulator"),
            "gun-turret": O("EntitiesAccumulator"),
            "laser-turret": O("EntitiesAccumulator"),
            "flamethrower-turret": O("EntitiesAccumulator"),
            "artillery-turret": O("ArtilleryTurret"),
            radar: O("EntitiesAccumulator"),
            "rocket-silo": O("RocketSilo"),
            "player-port": O("EntitiesAccumulator"),
            "infinity-chest": O("EntitiesAccumulator"),
            "simple-entity-with-force": O("EntitiesAccumulator"),
            "simple-entity-with-owner": O("EntitiesAccumulator"),
            cliff: O("EntitiesAccumulator"),
            "small-cliff": O("EntitiesAccumulator"),
            player: O("Player"),
            fish: O("EntitiesAccumulator"),
            "tree-01": O("EntitiesAccumulator"),
            "tree-02": O("EntitiesAccumulator"),
            "tree-03": O("EntitiesAccumulator"),
            "tree-04": O("EntitiesAccumulator"),
            "tree-05": O("EntitiesAccumulator"),
            "tree-09": O("EntitiesAccumulator"),
            "tree-02-red": O("EntitiesAccumulator"),
            "tree-07": O("EntitiesAccumulator"),
            "tree-06": O("EntitiesAccumulator"),
            "tree-06-brown": O("EntitiesAccumulator"),
            "tree-09-brown": O("EntitiesAccumulator"),
            "tree-09-red": O("EntitiesAccumulator"),
            "tree-08": O("EntitiesAccumulator"),
            "tree-08-brown": O("EntitiesAccumulator"),
            "tree-08-red": O("EntitiesAccumulator"),
            "dead-dry-hairy-tree": O("EntitiesAccumulator"),
            "dead-grey-trunk": O("EntitiesAccumulator"),
            "dead-tree-desert": O("EntitiesAccumulator"),
            "dry-hairy-tree": O("EntitiesAccumulator"),
            "dry-tree": O("EntitiesAccumulator"),
            "rock-huge": O("EntitiesAccumulator"),
            "rock-big": O("EntitiesAccumulator"),
            "small-biter-corpse": O("EntitiesAccumulator"),
            "medium-biter-corpse": O("EntitiesAccumulator"),
            "behemoth-biter-corpse": O("TerCorpse"),
            "big-biter-corpse": O("TerCorpse"),
            "biter-spawner-corpse": O("EntitiesAccumulator"),
            "small-spitter-corpse": O("EntitiesAccumulator"),
            "medium-spitter-corpse": O("EntitiesAccumulator"),
            "big-spitter-corpse": O("EntitiesAccumulator"),
            "behemoth-spitter-corpse": O("TerCorpse"),
            "spitter-spawner-corpse": O("EntitiesAccumulator"),
            "small-worm-corpse": O("EntitiesAccumulator"),
            "medium-worm-corpse": O("EntitiesAccumulator"),
            "big-worm-corpse": O("EntitiesAccumulator"),
            "small-remnants": O("EntitiesAccumulator"),
            "medium-remnants": O("EntitiesAccumulator"),
            "big-remnants": O("BigRemnants"),
            "straight-rail-remnants": O("EntitiesAccumulator"),
            "curved-rail-remnants": O("EntitiesAccumulator"),
            "small-scorchmark": O("EntitiesAccumulator"),
            "tree-01-stump": O("EntitiesAccumulator"),
            "tree-02-stump": O("EntitiesAccumulator"),
            "tree-03-stump": O("EntitiesAccumulator"),
            "tree-04-stump": O("EntitiesAccumulator"),
            "tree-05-stump": O("EntitiesAccumulator"),
            "tree-06-stump": O("EntitiesAccumulator"),
            "tree-07-stump": O("EntitiesAccumulator"),
            "tree-08-stump": O("EntitiesAccumulator"),
            "tree-09-stump": O("EntitiesAccumulator"),
            "wall-remnants": O("EntitiesAccumulator"),
            "sand-rock-big": O("EntitiesAccumulator"),
            "big-ship-wreck-1": O("BigShipWreck"),
            "big-ship-wreck-2": O("BigShipWreck"),
            "big-ship-wreck-3": O("BigShipWreck"),
            "medium-ship-wreck": O("EntitiesAccumulator"),
            "small-ship-wreck": O("EntitiesAccumulator"),
            "small-biter": O("EntitiesAccumulator"),
            "medium-biter": O("EntitiesAccumulator"),
            "big-biter": O("Ter"),
            "behemoth-biter": O("Ter"),
            "small-spitter": O("EntitiesAccumulator"),
            "small-worm-turret": O("EntitiesAccumulator"),
            "medium-spitter": O("EntitiesAccumulator"),
            "medium-worm-turret": O("EntitiesAccumulator"),
            "behemoth-spitter": O("Ter"),
            "big-spitter": O("EntitiesAccumulator"),
            "big-worm-turret": O("EntitiesAccumulator"),
            "biter-spawner": O("EntitiesAccumulator"),
            "spitter-spawner": O("EntitiesAccumulator"),
            market: O("EntitiesAccumulator"),
            defender: O("EntitiesAccumulator"),
            distractor: O("EntitiesAccumulator"),
            destroyer: O("EntitiesAccumulator"),
            "acid-projectile-purple": O("AcidProjectilePurple"),
            "acid-splash-purple": O("AcidProjectilePurple"),
            "artillery-cannon-muzzle-flash": O("AcidProjectilePurple"),
            "artillery-flare": O("ArtilleryFlare"),
            "artillery-projectile": O("AcidProjectilePurple"),
            "atomic-bomb-wave": O("AcidProjectilePurple"),
            "atomic-rocket": O("AcidProjectilePurple"),
            "big-artillery-explosion": O("AcidProjectilePurple"),
            "big-explosion": O("AcidProjectilePurple"),
            "big-ship-wreck-grass": O("EntitiesAccumulator"),
            "blood-explosion-big": O("EntitiesAccumulator"),
            "blood-explosion-huge": O("EntitiesAccumulator"),
            "blood-explosion-small": O("EntitiesAccumulator"),
            "blood-fountain": O("EntitiesAccumulator"),
            "blood-fountain-big": O("EntitiesAccumulator"),
            "blood-particle": O("EntitiesAccumulator"),
            "blue-laser": O("EntitiesAccumulator"),
            "branch-particle": O("EntitiesAccumulator"),
            "brown-asterisk": O("EntitiesAccumulator"),
            "brown-cane-cluster": O("EntitiesAccumulator"),
            "brown-cane-single": O("EntitiesAccumulator"),
            "brown-carpet-grass": O("EntitiesAccumulator"),
            "brown-coral-mini": O("EntitiesAccumulator"),
            "brown-fluff": O("EntitiesAccumulator"),
            "brown-fluff-dry": O("EntitiesAccumulator"),
            "brown-hairy-grass": O("EntitiesAccumulator"),
            "cannon-projectile": O("EntitiesAccumulator"),
            "character-corpse": O("EntitiesAccumulator"),
            "cliff-explosives": O("EntitiesAccumulator"),
            "cluster-grenade": O("EntitiesAccumulator"),
            "coal-particle": O("EntitiesAccumulator"),
            "copper-ore-particle": O("EntitiesAccumulator"),
            "deconstructible-tile-proxy": O("EntitiesAccumulator"),
            "defender-capsule": O("EntitiesAccumulator"),
            "destroyer-capsule": O("EntitiesAccumulator"),
            "distractor-capsule": O("EntitiesAccumulator"),
            "dummy-flame-thrower-explosion": O("EntitiesAccumulator"),
            "electric-beam": O("EntitiesAccumulator"),
            "electric-beam-no-sound": O("EntitiesAccumulator"),
            "entity-ghost": O("EntitiesAccumulator"),
            explosion: O("EntitiesAccumulator"),
            "explosion-gunshot": O("EntitiesAccumulator"),
            "explosion-gunshot-small": O("EntitiesAccumulator"),
            "explosion-hit": O("EntitiesAccumulator"),
            "explosion-remnants-particle": O("EntitiesAccumulator"),
            "explosive-cannon-projectile": O("EntitiesAccumulator"),
            "explosive-rocket": O("EntitiesAccumulator"),
            "explosive-uranium-cannon-projectile": O("EntitiesAccumulator"),
            "fake-selection-box-2x2": O("EntitiesAccumulator"),
            "fire-flame": O("EntitiesAccumulator"),
            "fire-flame-on-tree": O("EntitiesAccumulator"),
            "fire-sticker": O("EntitiesAccumulator"),
            "flamethrower-fire-stream": O("EntitiesAccumulator"),
            "flying-text": O("EntitiesAccumulator"),
            garballo: O("EntitiesAccumulator"),
            "garballo-mini-dry": O("EntitiesAccumulator"),
            "green-asterisk": O("EntitiesAccumulator"),
            "green-bush-mini": O("EntitiesAccumulator"),
            "green-carpet-grass": O("EntitiesAccumulator"),
            "green-coral-mini": O("EntitiesAccumulator"),
            "green-hairy-grass": O("EntitiesAccumulator"),
            "green-pita": O("EntitiesAccumulator"),
            "green-pita-mini": O("EntitiesAccumulator"),
            "green-small-grass": O("EntitiesAccumulator"),
            grenade: O("EntitiesAccumulator"),
            "ground-explosion": O("EntitiesAccumulator"),
            "handheld-flamethrower-fire-stream": O("EntitiesAccumulator"),
            "iron-ore-particle": O("EntitiesAccumulator"),
            "item-on-ground": O("EntitiesAccumulator"),
            "item-request-proxy": O("EntitiesAccumulator"),
            laser: O("EntitiesAccumulator"),
            "laser-bubble": O("EntitiesAccumulator"),
            "leaf-particle": O("EntitiesAccumulator"),
            "massive-explosion": O("EntitiesAccumulator"),
            "medium-explosion": O("EntitiesAccumulator"),
            "orange-arrow-with-circle": O("EntitiesAccumulator"),
            "orange-coral-mini": O("EntitiesAccumulator"),
            "piercing-shotgun-pellet": O("EntitiesAccumulator"),
            "poison-capsule": O("EntitiesAccumulator"),
            "poison-cloud": O("EntitiesAccumulator"),
            "railgun-beam": O("EntitiesAccumulator"),
            "red-asterisk": O("EntitiesAccumulator"),
            rocket: O("EntitiesAccumulator"),
            "rocket-silo-rocket": O("EntitiesAccumulator"),
            "rocket-silo-rocket-shadow": O("EntitiesAccumulator"),
            "root-A": O("EntitiesAccumulator"),
            "root-B": O("EntitiesAccumulator"),
            "shell-particle": O("EntitiesAccumulator"),
            "shotgun-pellet": O("EntitiesAccumulator"),
            "slowdown-capsule": O("EntitiesAccumulator"),
            "slowdown-sticker": O("EntitiesAccumulator"),
            "small-ship-wreck-grass": O("EntitiesAccumulator"),
            "smoke-for-migration": O("EntitiesAccumulator"),
            "stone-particle": O("EntitiesAccumulator"),
            "stun-sticker": O("EntitiesAccumulator"),
            "tank-flamethrower-fire-stream": O("EntitiesAccumulator"),
            "tile-ghost": O("EntitiesAccumulator"),
            "tutorial-flying-text": O("EntitiesAccumulator"),
            "uranium-cannon-explosion": O("EntitiesAccumulator"),
            "uranium-cannon-projectile": O("EntitiesAccumulator"),
            "uranium-cannon-shell-explosion": O("EntitiesAccumulator"),
            "water-splash": O("EntitiesAccumulator"),
            "wooden-particle": O("EntitiesAccumulator"),
            "crude-oil": O("EntitiesAccumulator"),
            "iron-ore": O("EntitiesAccumulator"),
            "copper-ore": O("EntitiesAccumulator"),
            "uranium-ore": O("EntitiesAccumulator"),
            coal: O("EntitiesAccumulator"),
            stone: O("EntitiesAccumulator"),
            "blue-chest": O("EntitiesAccumulator"),
            "hidden-electric-energy-interface": O("EntitiesAccumulator"),
            "red-chest": O("EntitiesAccumulator"),
        },
        "AcidProjectilePurple": {
            name: "",
            type: "",
            flags: O("AcidProjectilePurpleFlags"),
            order: "",
            group: "",
            subgroup: "",
            fluid_capacity: 0,
        },
        "AcidProjectilePurpleFlags": {
            "not-on-map": false,
        },
        "EntitiesAccumulator": {
            name: "",
            type: "",
            order: "",
            group: E("BigShipWreckGrassGroup"),
            subgroup: "",
            fluid_capacity: 0,
            flags: U(null, M(false)),
            belt_speed: U(null, 3.14),
            electric_energy_source_prototype: U(null, O("AccumulatorElectricEnergySourcePrototype")),
            inventory_size: U(null, 0),
            burner_prototype: U(null, O("AccumulatorBurnerPrototype")),
            energy_usage: U(null, 3.14),
            max_underground_distance: U(null, 0),
            braking_force: U(null, 3.14),
            production: U(null, 0),
            pumping_speed: U(null, 0),
            target_temperature: U(null, 0),
            max_energy: U(null, 0),
            maximum_temperature: U(null, 0),
            fluid_usage_per_tick: U(null, 3.14),
        },
        "AccumulatorBurnerPrototype": {
            emissions: 0,
            category: "",
            effectivity: 0,
            fuel_inventory_size: 0,
            burnt_inventory_size: 0,
            fuel_category: "",
        },
        "AccumulatorElectricEnergySourcePrototype": {
            buffer_capacity: 3.14,
            usage_priority: "",
            input_flow_limit: 3.14,
            output_flow_limit: 3.14,
            drain: 3.14,
            emissions: 0,
            category: E("ElectricEnergySourcePrototypeCategory"),
            effectivity: 0,
        },
        "ArtilleryFlare": {
            name: "",
            type: "",
            flags: O("ArtilleryFlareFlags"),
            order: "",
            group: "",
            subgroup: "",
            fluid_capacity: 0,
        },
        "ArtilleryFlareFlags": {
            "placeable-off-grid": false,
            "not-on-map": false,
        },
        "ArtilleryTurret": {
            name: "",
            type: "",
            flags: O("Flags1"),
            order: "",
            group: "",
            subgroup: "",
            inventory_size: 0,
            fluid_capacity: 0,
            burner_prototype: U(null, O("AccumulatorBurnerPrototype")),
        },
        "Flags1": {
            "placeable-neutral": false,
            "placeable-player": false,
            "player-creation": false,
        },
        "Wagon": {
            name: "",
            type: "",
            flags: O("BehemothBiterCorpseFlags"),
            order: "",
            group: "",
            subgroup: "",
            inventory_size: 0,
            braking_force: 3.14,
            fluid_capacity: 0,
        },
        "BehemothBiterCorpseFlags": {
            "placeable-neutral": U(null, false),
            "placeable-off-grid": U(null, false),
            "building-direction-8-way": U(null, false),
            "not-on-map": U(null, false),
            "placeable-player": U(null, false),
            "player-creation": U(null, false),
            "not-repairable": U(null, false),
            pushable: U(null, false),
            "placeable-enemy": U(null, false),
        },
        "AssemblingMachine1": {
            name: "",
            type: "",
            flags: O("Flags1"),
            order: "",
            group: "",
            subgroup: "",
            crafting_speed: 3.14,
            crafting_categories: O("AssemblingMachine1_CraftingCategories"),
            energy_usage: 0,
            electric_energy_source_prototype: O("AssemblingMachine1_ElectricEnergySourcePrototype"),
            fluid_capacity: 0,
        },
        "AssemblingMachine1_CraftingCategories": {
            crafting: false,
        },
        "AssemblingMachine1_ElectricEnergySourcePrototype": {
            buffer_capacity: 0,
            usage_priority: "",
            input_flow_limit: 0,
            output_flow_limit: 0,
            drain: 0,
            emissions: 3.14,
            category: "",
            effectivity: 0,
        },
        "AssemblingMachine": {
            name: "",
            type: "",
            flags: O("Flags1"),
            order: "",
            group: "",
            subgroup: "",
            crafting_speed: 3.14,
            crafting_categories: O("AssemblingMachine2_CraftingCategories"),
            energy_usage: 0,
            electric_energy_source_prototype: O("AssemblingMachine2_ElectricEnergySourcePrototype"),
            fluid_capacity: 0,
        },
        "AssemblingMachine2_CraftingCategories": {
            crafting: false,
            "advanced-crafting": false,
            "crafting-with-fluid": false,
        },
        "AssemblingMachine2_ElectricEnergySourcePrototype": {
            buffer_capacity: 3.14,
            usage_priority: "",
            input_flow_limit: 0,
            output_flow_limit: 0,
            drain: 3.14,
            emissions: 3.14,
            category: "",
            effectivity: 0,
        },
        "Ter": {
            name: "",
            type: "",
            flags: O("BehemothBiterFlags"),
            order: "",
            group: "",
            subgroup: "",
            fluid_capacity: 0,
        },
        "BehemothBiterFlags": {
            "placeable-player": U(null, false),
            "placeable-enemy": false,
            "placeable-off-grid": U(null, false),
            "breaths-air": U(null, false),
            "not-repairable": false,
        },
        "TerCorpse": {
            name: "",
            type: "",
            flags: O("BehemothBiterCorpseFlags"),
            order: "",
            group: "",
            subgroup: "",
            fluid_capacity: 0,
        },
        "BigRemnants": {
            name: "",
            type: "",
            flags: O("BigRemnantsFlags"),
            order: "",
            group: "",
            subgroup: "",
            fluid_capacity: 0,
        },
        "BigRemnantsFlags": {
            "placeable-neutral": false,
            "not-on-map": false,
        },
        "BigShipWreck": {
            name: "",
            type: "",
            flags: O("BigShipWreck1_Flags"),
            order: "",
            group: "",
            subgroup: "",
            inventory_size: 0,
            fluid_capacity: 0,
        },
        "BigShipWreck1_Flags": {
            "placeable-neutral": false,
        },
        "BurnerMiningDrill": {
            name: "",
            type: "",
            flags: O("Flags3"),
            order: "",
            group: "",
            subgroup: "",
            resource_categories: O("BurnerMiningDrillResourceCategories"),
            inventory_size: 0,
            mining_speed: 3.14,
            mining_power: 3.14,
            energy_usage: 0,
            burner_prototype: O("BurnerMiningDrillBurnerPrototype"),
            fluid_capacity: 0,
        },
        "BurnerMiningDrillBurnerPrototype": {
            emissions: 3.14,
            category: "",
            effectivity: 0,
            fuel_inventory_size: 0,
            burnt_inventory_size: 0,
            fuel_category: "",
        },
        "Flags3": {
            "placeable-neutral": false,
            "player-creation": false,
        },
        "BurnerMiningDrillResourceCategories": {
            "basic-solid": false,
        },
        "ChemicalPlant": {
            name: "",
            type: "",
            flags: O("Flags1"),
            order: "",
            group: "",
            subgroup: "",
            crafting_speed: 3.14,
            crafting_categories: O("ChemicalPlantCraftingCategories"),
            energy_usage: 0,
            electric_energy_source_prototype: O("AssemblingMachine2_ElectricEnergySourcePrototype"),
            fluid_capacity: 0,
        },
        "ChemicalPlantCraftingCategories": {
            chemistry: false,
        },
        "Robot": {
            name: "",
            type: "",
            flags: O("BehemothBiterCorpseFlags"),
            order: "",
            group: "",
            subgroup: "",
            inventory_size: 0,
            max_payload_size: 0,
            max_energy: 0,
            fluid_capacity: 0,
        },
        "Furnace": {
            name: "",
            type: "",
            flags: O("Flags1"),
            order: "",
            group: "",
            subgroup: "",
            crafting_speed: 0,
            crafting_categories: O("ElectricFurnaceCraftingCategories"),
            energy_usage: 0,
            electric_energy_source_prototype: U(null, O("AssemblingMachine1_ElectricEnergySourcePrototype")),
            fluid_capacity: 0,
            inventory_size: U(null, 0),
            burner_prototype: U(null, O("BurnerMiningDrillBurnerPrototype")),
        },
        "ElectricFurnaceCraftingCategories": {
            smelting: false,
        },
        "ElectricMiningDrill": {
            name: "",
            type: "",
            flags: O("Flags3"),
            order: "",
            group: "",
            subgroup: "",
            resource_categories: U(null, O("ElectricMiningDrillResourceCategories")),
            mining_speed: U(null, 3.14),
            mining_power: U(null, 0),
            energy_usage: 0,
            electric_energy_source_prototype: O("AssemblingMachine1_ElectricEnergySourcePrototype"),
            fluid_capacity: 0,
            pumping_speed: U(null, 0),
        },
        "ElectricMiningDrillResourceCategories": {
            "basic-solid": U(null, false),
            "basic-fluid": U(null, false),
        },
        "OilRefinery": {
            name: "",
            type: "",
            flags: O("Flags3"),
            order: "",
            group: "",
            subgroup: "",
            crafting_speed: 0,
            crafting_categories: O("OilRefineryCraftingCategories"),
            energy_usage: 0,
            electric_energy_source_prototype: O("AssemblingMachine2_ElectricEnergySourcePrototype"),
            fluid_capacity: 0,
        },
        "OilRefineryCraftingCategories": {
            "oil-processing": false,
        },
        "RocketSilo": {
            name: "",
            type: "",
            flags: O("Flags2"),
            order: "",
            group: "",
            subgroup: "",
            crafting_speed: 0,
            crafting_categories: O("RocketSiloCraftingCategories"),
            energy_usage: 3.14,
            electric_energy_source_prototype: O("RocketSiloElectricEnergySourcePrototype"),
            fluid_capacity: 0,
        },
        "RocketSiloCraftingCategories": {
            "rocket-building": false,
        },
        "RocketSiloElectricEnergySourcePrototype": {
            buffer_capacity: 3.14,
            usage_priority: "",
            input_flow_limit: 0,
            output_flow_limit: 0,
            drain: 3.14,
            emissions: 0,
            category: "",
            effectivity: 0,
        },
        "Flags2": {
            "placeable-player": false,
            "player-creation": false,
        },
        "Beacon": {
            name: "",
            type: "",
            flags: O("Flags2"),
            order: "",
            group: "",
            subgroup: "",
            inventory_size: 0,
            energy_usage: 0,
            electric_energy_source_prototype: O("BeaconElectricEnergySourcePrototype"),
            fluid_capacity: 0,
        },
        "BeaconElectricEnergySourcePrototype": {
            buffer_capacity: 0,
            usage_priority: "",
            input_flow_limit: 0,
            output_flow_limit: 0,
            drain: 0,
            emissions: 0,
            category: E("ElectricEnergySourcePrototypeCategory"),
            effectivity: 0,
        },
        "Boiler": {
            name: "",
            type: "",
            flags: O("Flags3"),
            order: "",
            group: "",
            subgroup: "",
            inventory_size: 0,
            burner_prototype: O("BoilerBurnerPrototype"),
            target_temperature: 0,
            fluid_capacity: 0,
        },
        "BoilerBurnerPrototype": {
            emissions: 3.14,
            category: "",
            effectivity: 3.14,
            fuel_inventory_size: 0,
            burnt_inventory_size: 0,
            fuel_category: "",
        },
        "Car": {
            name: "",
            type: "",
            flags: O("BehemothBiterCorpseFlags"),
            order: "",
            group: "",
            subgroup: "",
            inventory_size: 0,
            braking_force: 3.14,
            burner_prototype: O("CarBurnerPrototype"),
            fluid_capacity: 0,
        },
        "CarBurnerPrototype": {
            emissions: 0,
            category: "",
            effectivity: 3.14,
            fuel_inventory_size: 0,
            burnt_inventory_size: 0,
            fuel_category: "",
        },
        "Centrifuge": {
            name: "",
            type: "",
            flags: O("Flags1"),
            order: "",
            group: "",
            subgroup: "",
            crafting_speed: 3.14,
            crafting_categories: O("CentrifugeCraftingCategories"),
            energy_usage: 3.14,
            electric_energy_source_prototype: O("AssemblingMachine2_ElectricEnergySourcePrototype"),
            fluid_capacity: 0,
        },
        "CentrifugeCraftingCategories": {
            centrifuging: false,
        },
        "Player": {
            name: "",
            type: "",
            flags: O("PlayerFlags"),
            order: "",
            group: "",
            subgroup: "",
            crafting_categories: O("AssemblingMachine1_CraftingCategories"),
            inventory_size: 0,
            mining_speed: 3.14,
            fluid_capacity: 0,
        },
        "PlayerFlags": {
            pushable: false,
            "placeable-off-grid": false,
            "breaths-air": false,
            "not-repairable": false,
            "not-on-map": false,
        },
        "Items": {
            "wooden-chest": O("ItemsAccumulator"),
            "iron-chest": O("ItemsAccumulator"),
            "steel-chest": O("ItemsAccumulator"),
            "storage-tank": O("ItemsAccumulator"),
            "transport-belt": O("ItemsAccumulator"),
            "fast-transport-belt": O("ItemsAccumulator"),
            "express-transport-belt": O("ItemsAccumulator"),
            "underground-belt": O("ItemsAccumulator"),
            "fast-underground-belt": O("ItemsAccumulator"),
            "express-underground-belt": O("ItemsAccumulator"),
            splitter: O("ItemsAccumulator"),
            "fast-splitter": O("ItemsAccumulator"),
            "express-splitter": O("ItemsAccumulator"),
            loader: O("Coin"),
            "fast-loader": O("Coin"),
            "express-loader": O("Coin"),
            "burner-inserter": O("ItemsAccumulator"),
            inserter: O("ItemsAccumulator"),
            "long-handed-inserter": O("ItemsAccumulator"),
            "fast-inserter": O("ItemsAccumulator"),
            "filter-inserter": O("ItemsAccumulator"),
            "stack-inserter": O("ItemsAccumulator"),
            "stack-filter-inserter": O("ItemsAccumulator"),
            "small-electric-pole": O("ItemsAccumulator"),
            "medium-electric-pole": O("ItemsAccumulator"),
            "big-electric-pole": O("ItemsAccumulator"),
            substation: O("ItemsAccumulator"),
            pipe: O("ItemsAccumulator"),
            "pipe-to-ground": O("ItemsAccumulator"),
            pump: O("ItemsAccumulator"),
            rail: O("ItemsAccumulator"),
            "train-stop": O("ItemsAccumulator"),
            "rail-signal": O("ItemsAccumulator"),
            "rail-chain-signal": O("ItemsAccumulator"),
            locomotive: O("ItemsAccumulator"),
            "cargo-wagon": O("ItemsAccumulator"),
            "fluid-wagon": O("ItemsAccumulator"),
            "artillery-wagon": O("ItemsAccumulator"),
            car: O("ItemsAccumulator"),
            tank: O("ItemsAccumulator"),
            "small-plane": O("Coin"),
            "logistic-robot": O("ItemsAccumulator"),
            "construction-robot": O("AdvancedCircuit"),
            "logistic-chest-active-provider": O("ItemsAccumulator"),
            "logistic-chest-passive-provider": O("ItemsAccumulator"),
            "logistic-chest-storage": O("ItemsAccumulator"),
            "logistic-chest-buffer": O("ItemsAccumulator"),
            "logistic-chest-requester": O("ItemsAccumulator"),
            roboport: O("ItemsAccumulator"),
            "small-lamp": O("ItemsAccumulator"),
            "red-wire": O("ItemsAccumulator"),
            "green-wire": O("ItemsAccumulator"),
            "arithmetic-combinator": O("ItemsAccumulator"),
            "decider-combinator": O("ItemsAccumulator"),
            "constant-combinator": O("ItemsAccumulator"),
            "power-switch": O("ItemsAccumulator"),
            "programmable-speaker": O("ItemsAccumulator"),
            "stone-brick": O("AdvancedCircuit"),
            concrete: O("AdvancedCircuit"),
            "hazard-concrete": O("AdvancedCircuit"),
            landfill: O("AdvancedCircuit"),
            "cliff-explosives": O("ItemsAccumulator"),
            "iron-axe": O("AdvancedCircuit"),
            "steel-axe": O("AdvancedCircuit"),
            "repair-pack": O("ItemsAccumulator"),
            blueprint: O("ItemsAccumulator"),
            "dummy-selection-tool": O("Coin"),
            "deconstruction-planner": O("ItemsAccumulator"),
            "blueprint-book": O("ItemsAccumulator"),
            boiler: O("ItemsAccumulator"),
            "steam-engine": O("ItemsAccumulator"),
            "steam-turbine": O("ItemsAccumulator"),
            "solar-panel": O("ItemsAccumulator"),
            accumulator: O("ItemsAccumulator"),
            "electric-energy-interface": O("Coin"),
            "nuclear-reactor": O("ItemsAccumulator"),
            "heat-exchanger": O("ItemsAccumulator"),
            "heat-pipe": O("ItemsAccumulator"),
            "burner-mining-drill": O("ItemsAccumulator"),
            "electric-mining-drill": O("ItemsAccumulator"),
            "offshore-pump": O("ItemsAccumulator"),
            pumpjack: O("ItemsAccumulator"),
            "stone-furnace": O("ItemsAccumulator"),
            "steel-furnace": O("ItemsAccumulator"),
            "electric-furnace": O("ItemsAccumulator"),
            "assembling-machine-1": O("ItemsAccumulator"),
            "assembling-machine-2": O("ItemsAccumulator"),
            "assembling-machine-3": O("ItemsAccumulator"),
            "oil-refinery": O("ItemsAccumulator"),
            "chemical-plant": O("ItemsAccumulator"),
            centrifuge: O("ItemsAccumulator"),
            lab: O("ItemsAccumulator"),
            beacon: O("ItemsAccumulator"),
            "speed-module": O("AdvancedCircuit"),
            "speed-module-2": O("AdvancedCircuit"),
            "speed-module-3": O("AdvancedCircuit"),
            "effectivity-module": O("AdvancedCircuit"),
            "effectivity-module-2": O("AdvancedCircuit"),
            "effectivity-module-3": O("AdvancedCircuit"),
            "productivity-module": O("AdvancedCircuit"),
            "productivity-module-2": O("AdvancedCircuit"),
            "productivity-module-3": O("AdvancedCircuit"),
            "raw-wood": O("AdvancedCircuit"),
            coal: O("AdvancedCircuit"),
            stone: O("AdvancedCircuit"),
            "iron-ore": O("AdvancedCircuit"),
            "copper-ore": O("AdvancedCircuit"),
            "uranium-ore": O("AdvancedCircuit"),
            "raw-fish": O("ItemsAccumulator"),
            wood: O("AdvancedCircuit"),
            "iron-plate": O("AdvancedCircuit"),
            "copper-plate": O("AdvancedCircuit"),
            "solid-fuel": O("Fuel"),
            "steel-plate": O("AdvancedCircuit"),
            "plastic-bar": O("AdvancedCircuit"),
            sulfur: O("AdvancedCircuit"),
            battery: O("AdvancedCircuit"),
            explosives: O("AdvancedCircuit"),
            "crude-oil-barrel": O("AdvancedCircuit"),
            "heavy-oil-barrel": O("AdvancedCircuit"),
            "light-oil-barrel": O("AdvancedCircuit"),
            "lubricant-barrel": O("AdvancedCircuit"),
            "petroleum-gas-barrel": O("AdvancedCircuit"),
            "sulfuric-acid-barrel": O("AdvancedCircuit"),
            "water-barrel": O("AdvancedCircuit"),
            "copper-cable": O("AdvancedCircuit"),
            "iron-stick": O("AdvancedCircuit"),
            "iron-gear-wheel": O("AdvancedCircuit"),
            "empty-barrel": O("AdvancedCircuit"),
            "electronic-circuit": O("AdvancedCircuit"),
            "advanced-circuit": O("AdvancedCircuit"),
            "processing-unit": O("AdvancedCircuit"),
            "engine-unit": O("AdvancedCircuit"),
            "electric-engine-unit": O("AdvancedCircuit"),
            "flying-robot-frame": O("AdvancedCircuit"),
            satellite: O("AdvancedCircuit"),
            "rocket-control-unit": O("AdvancedCircuit"),
            "low-density-structure": O("AdvancedCircuit"),
            "rocket-fuel": O("Fuel"),
            "rocket-part": O("ArtilleryWagonCannon"),
            "nuclear-fuel": O("Fuel"),
            "uranium-235": O("AdvancedCircuit"),
            "uranium-238": O("AdvancedCircuit"),
            "uranium-fuel-cell": O("AdvancedCircuit"),
            "used-up-uranium-fuel-cell": O("AdvancedCircuit"),
            "science-pack-1": O("AdvancedCircuit"),
            "science-pack-2": O("AdvancedCircuit"),
            "science-pack-3": O("AdvancedCircuit"),
            "military-science-pack": O("AdvancedCircuit"),
            "production-science-pack": O("AdvancedCircuit"),
            "high-tech-science-pack": O("AdvancedCircuit"),
            "space-science-pack": O("AdvancedCircuit"),
            coin: O("Coin"),
            pistol: O("AdvancedCircuit"),
            "submachine-gun": O("AdvancedCircuit"),
            "tank-machine-gun": O("ArtilleryWagonCannon"),
            "vehicle-machine-gun": O("ArtilleryWagonCannon"),
            "tank-flamethrower": O("ArtilleryWagonCannon"),
            shotgun: O("AdvancedCircuit"),
            "combat-shotgun": O("AdvancedCircuit"),
            railgun: O("ArtilleryWagonCannon"),
            "rocket-launcher": O("AdvancedCircuit"),
            flamethrower: O("AdvancedCircuit"),
            "land-mine": O("ItemsAccumulator"),
            "artillery-wagon-cannon": O("ArtilleryWagonCannon"),
            "tank-cannon": O("ArtilleryWagonCannon"),
            "firearm-magazine": O("AdvancedCircuit"),
            "piercing-rounds-magazine": O("AdvancedCircuit"),
            "uranium-rounds-magazine": O("AdvancedCircuit"),
            "shotgun-shell": O("AdvancedCircuit"),
            "piercing-shotgun-shell": O("AdvancedCircuit"),
            "railgun-dart": O("ArtilleryWagonCannon"),
            "cannon-shell": O("AdvancedCircuit"),
            "explosive-cannon-shell": O("AdvancedCircuit"),
            "uranium-cannon-shell": O("AdvancedCircuit"),
            "explosive-uranium-cannon-shell": O("AdvancedCircuit"),
            "artillery-shell": O("AdvancedCircuit"),
            rocket: O("AdvancedCircuit"),
            "explosive-rocket": O("AdvancedCircuit"),
            "atomic-bomb": O("AdvancedCircuit"),
            "flamethrower-ammo": O("AdvancedCircuit"),
            grenade: O("ItemsAccumulator"),
            "cluster-grenade": O("ItemsAccumulator"),
            "poison-capsule": O("ItemsAccumulator"),
            "slowdown-capsule": O("ItemsAccumulator"),
            "defender-capsule": O("ItemsAccumulator"),
            "distractor-capsule": O("ItemsAccumulator"),
            "destroyer-capsule": O("ItemsAccumulator"),
            "discharge-defense-remote": O("ItemsAccumulator"),
            "artillery-targeting-remote": O("ItemsAccumulator"),
            "light-armor": O("AdvancedCircuit"),
            "heavy-armor": O("AdvancedCircuit"),
            "modular-armor": O("AdvancedCircuit"),
            "power-armor": O("AdvancedCircuit"),
            "power-armor-mk2": O("AdvancedCircuit"),
            "belt-immunity-equipment": O("ArtilleryWagonCannon"),
            "solar-panel-equipment": O("AdvancedCircuit"),
            "fusion-reactor-equipment": O("AdvancedCircuit"),
            "energy-shield-equipment": O("AdvancedCircuit"),
            "energy-shield-mk2-equipment": O("AdvancedCircuit"),
            "battery-equipment": O("AdvancedCircuit"),
            "battery-mk2-equipment": O("AdvancedCircuit"),
            "personal-laser-defense-equipment": O("AdvancedCircuit"),
            "discharge-defense-equipment": O("AdvancedCircuit"),
            "exoskeleton-equipment": O("AdvancedCircuit"),
            "personal-roboport-equipment": O("AdvancedCircuit"),
            "personal-roboport-mk2-equipment": O("AdvancedCircuit"),
            "night-vision-equipment": O("AdvancedCircuit"),
            "stone-wall": O("ItemsAccumulator"),
            gate: O("ItemsAccumulator"),
            "gun-turret": O("ItemsAccumulator"),
            "laser-turret": O("ItemsAccumulator"),
            "flamethrower-turret": O("ItemsAccumulator"),
            "artillery-turret": O("ItemsAccumulator"),
            radar: O("ItemsAccumulator"),
            "rocket-silo": O("ItemsAccumulator"),
            computer: O("Coin"),
            "player-port": O("Coin"),
            "item-with-inventory": O("Coin"),
            "item-with-label": O("Coin"),
            "item-with-tags": O("Coin"),
            "simple-entity-with-force": O("Coin"),
            "simple-entity-with-owner": O("Coin"),
            "infinity-chest": O("Coin"),
        },
        "AdvancedCircuit": {
            name: "",
            type: E("AdvancedCircuitType"),
            flags: O("AdvancedCircuitFlags"),
            stack_size: 0,
            fuel_value: 0,
            fuel_acceleration_multiplier: 0,
            fuel_top_speed_multiplier: 0,
            group: E("AdvancedCircuitGroup"),
            subgroup: "",
            order: "",
            fuel_category: U(null, ""),
            place_result: U(null, ""),
        },
        "AdvancedCircuitFlags": {
            "goes-to-main-inventory": false,
        },
        "ItemsAccumulator": {
            name: "",
            type: E("AccumulatorType"),
            flags: O("AccumulatorFlags"),
            stack_size: 0,
            fuel_value: 0,
            fuel_acceleration_multiplier: 0,
            fuel_top_speed_multiplier: 0,
            group: E("AdvancedCircuitGroup"),
            subgroup: "",
            order: "",
            place_result: U(null, ""),
            fuel_category: U(null, ""),
            inventory_size: U(null, 0),
        },
        "AccumulatorFlags": {
            "goes-to-quickbar": false,
        },
        "ArtilleryWagonCannon": {
            name: "",
            type: "",
            flags: O("ArtilleryWagonCannonFlags"),
            stack_size: 0,
            fuel_value: 0,
            fuel_acceleration_multiplier: 0,
            fuel_top_speed_multiplier: 0,
            group: "",
            subgroup: "",
            order: "",
        },
        "ArtilleryWagonCannonFlags": {
            "goes-to-main-inventory": false,
            hidden: false,
        },
        "Coin": {
            name: "",
            type: "",
            flags: O("CoinFlags"),
            stack_size: 0,
            fuel_value: 0,
            fuel_acceleration_multiplier: 0,
            fuel_top_speed_multiplier: 0,
            group: "",
            subgroup: "",
            order: "",
            place_result: U(null, ""),
            inventory_size: U(null, 0),
        },
        "CoinFlags": {
            "goes-to-quickbar": false,
            hidden: false,
        },
        "Fuel": {
            name: "",
            type: "",
            flags: O("AdvancedCircuitFlags"),
            fuel_category: "",
            stack_size: 0,
            fuel_value: 0,
            fuel_acceleration_multiplier: 3.14,
            fuel_top_speed_multiplier: 3.14,
            group: "",
            subgroup: "",
            order: "",
        },
        "Recipes": {
            "assembling-machine-1": O("ArithmeticCombinator"),
            "firearm-magazine": O("RecipesAccumulator"),
            pistol: O("RecipesAccumulator"),
            "piercing-rounds-magazine": O("RecipesAccumulator"),
            "submachine-gun": O("RecipesAccumulator"),
            "uranium-rounds-magazine": O("RecipesAccumulator"),
            beacon: O("RecipesAccumulator"),
            "burner-inserter": O("ArithmeticCombinator"),
            "copper-cable": O("ArithmeticCombinator"),
            "solar-panel-equipment": O("RecipesAccumulator"),
            "fusion-reactor-equipment": O("RecipesAccumulator"),
            "small-electric-pole": O("ArithmeticCombinator"),
            "medium-electric-pole": O("ArithmeticCombinator"),
            "big-electric-pole": O("ArithmeticCombinator"),
            substation: O("ArithmeticCombinator"),
            "sulfuric-acid": O("AdvancedOilProcessing"),
            grenade: O("RecipesAccumulator"),
            "cluster-grenade": O("RecipesAccumulator"),
            "burner-mining-drill": O("RecipesAccumulator"),
            "wooden-chest": O("ArithmeticCombinator"),
            "electric-mining-drill": O("RecipesAccumulator"),
            "iron-chest": O("ArithmeticCombinator"),
            "steel-chest": O("ArithmeticCombinator"),
            "light-armor": O("RecipesAccumulator"),
            "small-lamp": O("ArithmeticCombinator"),
            "iron-axe": O("ArithmeticCombinator"),
            "steel-axe": O("ArithmeticCombinator"),
            "basic-oil-processing": O("AdvancedOilProcessing"),
            "advanced-oil-processing": O("AdvancedOilProcessing"),
            "coal-liquefaction": O("AdvancedOilProcessing"),
            pipe: O("ArithmeticCombinator"),
            "pipe-to-ground": O("ArithmeticCombinator"),
            "logistic-robot": O("ArithmeticCombinator"),
            "construction-robot": O("ArithmeticCombinator"),
            "science-pack-1": O("RecipesAccumulator"),
            "speed-module": O("RecipesAccumulator"),
            "speed-module-2": O("RecipesAccumulator"),
            "speed-module-3": O("RecipesAccumulator"),
            "stone-brick": O("ArithmeticCombinator"),
            "stone-furnace": O("ArithmeticCombinator"),
            "stone-wall": O("ArithmeticCombinator"),
            rail: O("ArithmeticCombinator"),
            "train-stop": O("ArithmeticCombinator"),
            "rail-signal": O("ArithmeticCombinator"),
            "rail-chain-signal": O("ArithmeticCombinator"),
            locomotive: O("RecipesAccumulator"),
            "cargo-wagon": O("RecipesAccumulator"),
            "fluid-wagon": O("ArithmeticCombinator"),
            "artillery-wagon": O("RecipesAccumulator"),
            "transport-belt": O("ArithmeticCombinator"),
            "fast-transport-belt": O("ArithmeticCombinator"),
            "express-transport-belt": O("ArithmeticCombinator"),
            gate: O("ArithmeticCombinator"),
            wood: O("ArithmeticCombinator"),
            "assembling-machine-2": O("ArithmeticCombinator"),
            concrete: O("RecipesAccumulator"),
            "hazard-concrete": O("ArithmeticCombinator"),
            "fill-crude-oil-barrel": O("RecipesAccumulator"),
            "fill-heavy-oil-barrel": O("RecipesAccumulator"),
            "fill-light-oil-barrel": O("RecipesAccumulator"),
            "fill-lubricant-barrel": O("RecipesAccumulator"),
            "fill-petroleum-gas-barrel": O("RecipesAccumulator"),
            "fill-sulfuric-acid-barrel": O("RecipesAccumulator"),
            "fill-water-barrel": O("RecipesAccumulator"),
            "heavy-oil-cracking": O("AdvancedOilProcessing"),
            "light-oil-cracking": O("AdvancedOilProcessing"),
            "solid-fuel-from-light-oil": O("RecipesAccumulator"),
            "solid-fuel-from-petroleum-gas": O("RecipesAccumulator"),
            "solid-fuel-from-heavy-oil": O("RecipesAccumulator"),
            "storage-tank": O("RecipesAccumulator"),
            "offshore-pump": O("ArithmeticCombinator"),
            pumpjack: O("RecipesAccumulator"),
            "heavy-armor": O("RecipesAccumulator"),
            inserter: O("ArithmeticCombinator"),
            "iron-plate": O("ArithmeticCombinator"),
            "iron-stick": O("ArithmeticCombinator"),
            car: O("RecipesAccumulator"),
            tank: O("RecipesAccumulator"),
            "small-plane": O("RecipesAccumulator"),
            pump: O("RecipesAccumulator"),
            "poison-capsule": O("RecipesAccumulator"),
            "repair-pack": O("ArithmeticCombinator"),
            "science-pack-2": O("RecipesAccumulator"),
            "energy-shield-equipment": O("RecipesAccumulator"),
            "energy-shield-mk2-equipment": O("RecipesAccumulator"),
            shotgun: O("RecipesAccumulator"),
            "shotgun-shell": O("RecipesAccumulator"),
            "combat-shotgun": O("RecipesAccumulator"),
            "piercing-shotgun-shell": O("RecipesAccumulator"),
            boiler: O("ArithmeticCombinator"),
            "steam-engine": O("ArithmeticCombinator"),
            "steam-turbine": O("RecipesAccumulator"),
            "steel-furnace": O("RecipesAccumulator"),
            "logistic-chest-active-provider": O("ArithmeticCombinator"),
            "logistic-chest-passive-provider": O("ArithmeticCombinator"),
            "logistic-chest-storage": O("ArithmeticCombinator"),
            "logistic-chest-buffer": O("ArithmeticCombinator"),
            "logistic-chest-requester": O("ArithmeticCombinator"),
            "gun-turret": O("RecipesAccumulator"),
            "laser-turret": O("RecipesAccumulator"),
            "flamethrower-turret": O("RecipesAccumulator"),
            "artillery-turret": O("RecipesAccumulator"),
            "underground-belt": O("RecipesAccumulator"),
            "fast-underground-belt": O("RecipesAccumulator"),
            "express-underground-belt": O("RecipesAccumulator"),
            "red-wire": O("ArithmeticCombinator"),
            "green-wire": O("ArithmeticCombinator"),
            "assembling-machine-3": O("ArithmeticCombinator"),
            "battery-equipment": O("RecipesAccumulator"),
            "battery-mk2-equipment": O("RecipesAccumulator"),
            "arithmetic-combinator": O("ArithmeticCombinator"),
            "decider-combinator": O("ArithmeticCombinator"),
            "constant-combinator": O("ArithmeticCombinator"),
            "copper-plate": O("ArithmeticCombinator"),
            "effectivity-module": O("RecipesAccumulator"),
            "effectivity-module-2": O("RecipesAccumulator"),
            "effectivity-module-3": O("RecipesAccumulator"),
            "electric-furnace": O("RecipesAccumulator"),
            "empty-crude-oil-barrel": O("AdvancedOilProcessing"),
            "empty-heavy-oil-barrel": O("AdvancedOilProcessing"),
            "empty-light-oil-barrel": O("AdvancedOilProcessing"),
            "empty-lubricant-barrel": O("AdvancedOilProcessing"),
            "empty-petroleum-gas-barrel": O("AdvancedOilProcessing"),
            "empty-sulfuric-acid-barrel": O("AdvancedOilProcessing"),
            "empty-water-barrel": O("AdvancedOilProcessing"),
            "iron-gear-wheel": O("ArithmeticCombinator"),
            landfill: O("ArithmeticCombinator"),
            "long-handed-inserter": O("ArithmeticCombinator"),
            "modular-armor": O("RecipesAccumulator"),
            "productivity-module": O("RecipesAccumulator"),
            "productivity-module-2": O("RecipesAccumulator"),
            "productivity-module-3": O("RecipesAccumulator"),
            railgun: O("RecipesAccumulator"),
            "railgun-dart": O("RecipesAccumulator"),
            "science-pack-3": O("RecipesAccumulator"),
            roboport: O("RecipesAccumulator"),
            "slowdown-capsule": O("RecipesAccumulator"),
            splitter: O("RecipesAccumulator"),
            "fast-splitter": O("RecipesAccumulator"),
            "express-splitter": O("RecipesAccumulator"),
            "personal-laser-defense-equipment": O("RecipesAccumulator"),
            "discharge-defense-equipment": O("RecipesAccumulator"),
            "cannon-shell": O("RecipesAccumulator"),
            "explosive-cannon-shell": O("RecipesAccumulator"),
            "uranium-cannon-shell": O("RecipesAccumulator"),
            "cliff-explosives": O("RecipesAccumulator"),
            "defender-capsule": O("RecipesAccumulator"),
            "empty-barrel": O("RecipesAccumulator"),
            "explosive-uranium-cannon-shell": O("RecipesAccumulator"),
            "artillery-shell": O("RecipesAccumulator"),
            "fast-inserter": O("ArithmeticCombinator"),
            loader: O("RecipesAccumulator"),
            "fast-loader": O("RecipesAccumulator"),
            "express-loader": O("RecipesAccumulator"),
            "military-science-pack": O("RecipesAccumulator"),
            "power-switch": O("RecipesAccumulator"),
            "programmable-speaker": O("RecipesAccumulator"),
            "power-armor": O("RecipesAccumulator"),
            radar: O("ArithmeticCombinator"),
            "oil-refinery": O("RecipesAccumulator"),
            "rocket-launcher": O("RecipesAccumulator"),
            rocket: O("RecipesAccumulator"),
            "explosive-rocket": O("RecipesAccumulator"),
            "atomic-bomb": O("RecipesAccumulator"),
            "solar-panel": O("RecipesAccumulator"),
            "steel-plate": O("ArithmeticCombinator"),
            accumulator: O("RecipesAccumulator"),
            "chemical-plant": O("RecipesAccumulator"),
            "distractor-capsule": O("RecipesAccumulator"),
            "electric-energy-interface": O("ArithmeticCombinator"),
            "electronic-circuit": O("ArithmeticCombinator"),
            "exoskeleton-equipment": O("RecipesAccumulator"),
            "filter-inserter": O("ArithmeticCombinator"),
            flamethrower: O("RecipesAccumulator"),
            "flamethrower-ammo": O("RecipesAccumulator"),
            lubricant: O("AdvancedOilProcessing"),
            "power-armor-mk2": O("RecipesAccumulator"),
            "production-science-pack": O("RecipesAccumulator"),
            "personal-roboport-equipment": O("RecipesAccumulator"),
            "personal-roboport-mk2-equipment": O("RecipesAccumulator"),
            "rocket-silo": O("RecipesAccumulator"),
            "advanced-circuit": O("RecipesAccumulator"),
            "destroyer-capsule": O("RecipesAccumulator"),
            "high-tech-science-pack": O("RecipesAccumulator"),
            "land-mine": O("RecipesAccumulator"),
            "night-vision-equipment": O("RecipesAccumulator"),
            "nuclear-reactor": O("RecipesAccumulator"),
            "heat-exchanger": O("RecipesAccumulator"),
            "heat-pipe": O("RecipesAccumulator"),
            "plastic-bar": O("RecipesAccumulator"),
            "stack-inserter": O("ArithmeticCombinator"),
            centrifuge: O("RecipesAccumulator"),
            lab: O("RecipesAccumulator"),
            "processing-unit": O("RecipesAccumulator"),
            "stack-filter-inserter": O("ArithmeticCombinator"),
            sulfur: O("RecipesAccumulator"),
            battery: O("RecipesAccumulator"),
            "engine-unit": O("RecipesAccumulator"),
            "electric-engine-unit": O("RecipesAccumulator"),
            explosives: O("RecipesAccumulator"),
            "uranium-processing": O("UraniumProcessing"),
            "flying-robot-frame": O("RecipesAccumulator"),
            satellite: O("RecipesAccumulator"),
            "rocket-control-unit": O("RecipesAccumulator"),
            "low-density-structure": O("RecipesAccumulator"),
            "rocket-fuel": O("RecipesAccumulator"),
            "rocket-part": O("RecipesAccumulator"),
            "nuclear-fuel": O("RecipesAccumulator"),
            "uranium-fuel-cell": O("RecipesAccumulator"),
            "nuclear-fuel-reprocessing": O("RecipesAccumulator"),
            "kovarex-enrichment-process": O("RecipesAccumulator"),
            "discharge-defense-remote": O("ArithmeticCombinator"),
            "player-port": O("ArithmeticCombinator"),
            "artillery-targeting-remote": O("ArithmeticCombinator"),
        },
        "RecipesAccumulator": {
            name: "",
            enabled: false,
            category: E("AccumulatorCategory"),
            ingredients: A(O("Ingredient")),
            products: A(O("Ingredient")),
            hidden: false,
            energy: 0,
            order: "",
            group: E("AdvancedCircuitGroup"),
            subgroup: "",
        },
        "Ingredient": {
            type: E("IngredientType"),
            name: "",
            amount: 0,
        },
        "AdvancedOilProcessing": {
            name: "",
            enabled: false,
            category: "",
            ingredients: A(O("Ingredient")),
            products: A(O("AdvancedOilProcessingProduct")),
            hidden: false,
            energy: 0,
            order: "",
            group: "",
            subgroup: "",
        },
        "AdvancedOilProcessingProduct": {
            type: E("IngredientType"),
            name: "",
            amount: U(null, 0),
            amount_min: U(null, 0),
            amount_max: U(null, 0),
            probability: U(null, 0),
        },
        "ArithmeticCombinator": {
            name: "",
            enabled: false,
            category: E("ArithmeticCombinatorCategory"),
            ingredients: A(O("Ingredient")),
            products: A(O("Ingredient")),
            hidden: false,
            energy: 3.14,
            order: "",
            group: E("AdvancedCircuitGroup"),
            subgroup: "",
        },
        "UraniumProcessing": {
            name: "",
            enabled: false,
            category: "",
            ingredients: A(O("Ingredient")),
            products: A(O("UraniumProcessingProduct")),
            hidden: false,
            energy: 0,
            order: "",
            group: "",
            subgroup: "",
        },
        "UraniumProcessingProduct": {
            type: "",
            name: "",
            amount_min: 0,
            amount_max: 0,
            probability: 3.14,
        },
        "ElectricEnergySourcePrototypeCategory": [
            ElectricEnergySourcePrototypeCategory.BasicSolid,
        ],
        "BigShipWreckGrassGroup": [
            BigShipWreckGrassGroup.Combat,
            BigShipWreckGrassGroup.Enemies,
            BigShipWreckGrassGroup.Environment,
            BigShipWreckGrassGroup.Logistics,
            BigShipWreckGrassGroup.Other,
            BigShipWreckGrassGroup.Production,
        ],
        "AdvancedCircuitGroup": [
            AdvancedCircuitGroup.Combat,
            AdvancedCircuitGroup.IntermediateProducts,
            AdvancedCircuitGroup.Logistics,
            AdvancedCircuitGroup.Production,
        ],
        "AdvancedCircuitType": [
            AdvancedCircuitType.Ammo,
            AdvancedCircuitType.Armor,
            AdvancedCircuitType.Gun,
            AdvancedCircuitType.Item,
            AdvancedCircuitType.MiningTool,
            AdvancedCircuitType.Module,
            AdvancedCircuitType.Tool,
        ],
        "AccumulatorType": [
            AccumulatorType.Blueprint,
            AccumulatorType.BlueprintBook,
            AccumulatorType.Capsule,
            AccumulatorType.DeconstructionItem,
            AccumulatorType.Item,
            AccumulatorType.ItemWithEntityData,
            AccumulatorType.RailPlanner,
            AccumulatorType.RepairTool,
        ],
        "AccumulatorCategory": [
            AccumulatorCategory.AdvancedCrafting,
            AccumulatorCategory.Centrifuging,
            AccumulatorCategory.Chemistry,
            AccumulatorCategory.Crafting,
            AccumulatorCategory.CraftingWithFluid,
            AccumulatorCategory.RocketBuilding,
        ],
        "IngredientType": [
            IngredientType.Fluid,
            IngredientType.Item,
        ],
        "ArithmeticCombinatorCategory": [
            ArithmeticCombinatorCategory.Crafting,
            ArithmeticCombinatorCategory.CraftingWithFluid,
            ArithmeticCombinatorCategory.Smelting,
        ],
    };
}
