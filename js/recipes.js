var recipes = {
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
}