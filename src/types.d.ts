interface Item {
    type: string;
    name: string;
    flags: {};
    stack_size: number;
    fuel_value?: number;
    fuel_category?: string;
}

type InputOrOutputType = "item" | "fluid";
type Category = "crafting" | 
    "advanced-crafting" | 
    "chemistry" | 
    "centrifuging" | 
    "oil-processing" | 
    "smelting" |
    "crafting-with-fluid" |
    "rocket-building";

interface RecipeMap {
    [name: string]: Recipe;
}
interface ItemMap {
    [itemName: string]: Item;
}

interface Recipe {
    name: string;
    category: Category;
    products: InputOrOutput[];
    ingredients: InputOrOutputDeterministic[];
    hidden: boolean;
    energy: number;
    order: string;
}

type InputOrOutput = InputOrOutputDeterministic | InputOrOutputProbabilistic;

interface InputOrOutputDeterministic {
    type: InputOrOutputType;
    name: string;
    amount: number;
}

interface InputOrOutputProbabilistic {
    type: InputOrOutputType;
    name: string;

    amount_min: number;
    amount_max: number;
    probability: number;
}
