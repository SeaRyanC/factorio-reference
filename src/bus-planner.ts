declare function require(name: string): any;

const BELT_THROUGHPUT = 40 * 60;

const recipes: RecipeMap = require('./recipes.json');

const recipeList = Object.keys(recipes).map(k => recipes[k]);

type InputOrOutputType = "item" | "fluid";
type Category = "crafting" | 
"chemistry" | 
"centrifuging" | 
"oil-processing" | 
"smelting" |
"crafting-with-fluid" |
"rocket-building";

interface RecipeMap {
    [name: string]: Recipe;
}
interface ItemMap<T> {
    [itemName: string]: T;
}
type ItemCountMap = ItemMap<number>;

interface Recipe {
    name: string;
    category: string;
    products: InputOrOutput[];
    ingredients: InputOrOutput[];
    hidden: boolean;
    energy: number;
    order: string;
}
interface InputOrOutput {
    type: InputOrOutputType;
    name: string;
    amount: number;
    amount_min: number;
    amount_max: number;
    probability: number;
}

function near(n: number, ...m: number[]) {
    for(var i = 0; i < m.length; i++) {
        if(Math.abs(n - m[i]) < 0.001) return true;
    }
    return false;
}

// An recipe "wants" direct insertion of an input if:
//  * It can be fed in at a 1:1, 1:2, 2:1, 3:2, or 2:3 ratio
//  * We would need more belts of it due to lower density if we didn't DI
// A recipe "does not" want DI if:
//  * ?
function wantsDirectInput(consumingRecipe: Recipe, producingRecipe: Recipe) {
    const name = producingRecipe.products[0].name;
    const needed = consumingRecipe.ingredients.filter(i => i.name === name)[0].amount;
    const neededPerSecond = needed / consumingRecipe.energy;
    const produced = producingRecipe.products[0].amount;
    const producedPerSecond = produced / producingRecipe.energy;
    const ratio = producedPerSecond / neededPerSecond;
    return near(ratio, 1, 2, 3 / 2, 2 / 3, 1 / 2, 4, 1 / 4, 5, 1 / 5);
}

type IntermediateInfo = {
    recipesNeeding: number;
    directInsertVotes: ItemMap<boolean>;
};

function findRecipeForOutput(itemName: string) {
    const candidates = recipeList.filter(r => r.products.some(p => p.name === itemName) && r.products.length === 1);
    if (candidates.length === 0) {
        throw new Error(`Cannot produce ${itemName} with the inputs I have`);
    } else if(candidates.length > 1) {
        console.warn(`More than one way to make ${itemName}, choosing arbitrarily`);
    }
    return candidates[0];
}

function outputQuantityOf(itemName: string, recipe: Recipe) {
    return recipe.products.filter(p => p.name === itemName)[0].amount;
}

function solve(busProvisions: string[], wants: ItemCountMap) {
    const busConsumption: {
        [input: string]: number;
    } = {};
    const intermediateInfo: ItemMap<IntermediateInfo> = {};

    const stillWanted: typeof wants = JSON.parse(JSON.stringify(wants));
    while (true) {
        const desiredItem = Object.keys(stillWanted).pop();
        if (desiredItem === undefined) {
            return { busConsumption, intermediateInfo };
        }

        const rec = findRecipeForOutput(desiredItem);
        const outputAmount = outputQuantityOf(desiredItem, rec);

        for(const ingr of rec.ingredients) {
            if (busProvisions.indexOf(ingr.name) >= 0) {
                // Pull from main bus
                busConsumption[ingr.name] = (busConsumption[ingr.name] || 0) + ingr.amount * stillWanted[desiredItem] / outputAmount;
            } else {
                const ingredientRecipe = findRecipeForOutput(ingr.name);
                // Log intermediate consumption
                if (!intermediateInfo[ingr.name]) intermediateInfo[ingr.name] = { directInsertVotes: {}, recipesNeeding: 0 };
                const ii = intermediateInfo[ingr.name];
                ii.recipesNeeding++;
                ii.directInsertVotes[desiredItem] = wantsDirectInput(rec, ingredientRecipe);

                stillWanted[ingr.name] = (stillWanted[ingr.name] || 0) + ingr.amount * stillWanted[desiredItem] / outputAmount;
            }
        }

        delete stillWanted[desiredItem];
    }
}

// Algorithm:
// * Overall planning
//   * Calculate sum total of input belts
//   * Determine bus/no-bus of intermediates
// * Provision intermediates
//   * Arrange in dependency order
//   * Determine full-belt pulls if any
//   * Assign rows
// * Provision outputs
//   * Determine throughput categories
//   * Find common recipes
//   * Assign rows

// An item should be retrieved from the bus if...
//  * it often requires unique recipe inputs (esp. fluids)
//  * local crafting would be a speed impediment to multiple requests
//  * 

const soln = solve(
    ["iron-plate", "steel-plate", "copper-plate", "plastic-bar", "sulfuric-acid", "coal", "stone", "lubricant"],
    {
        "science-pack-1": 5,
        "science-pack-2": 5,
        "science-pack-3": 5,
        "military-science-pack": 5,
        "production-science-pack": 5,
        "high-tech-science-pack": 5,
        "construction-robot": 1,
        "express-underground-belt": 1,
        "beacon": 1,
        "speed-module-3": 0,
        "productivity-module-3": 0,
        "assembling-machine-3": 1,
        "stack-inserter": 1,
        "locomotive": 1,
        "laser-turret": 1
    }
);
console.log(JSON.stringify(soln, undefined, 4));
