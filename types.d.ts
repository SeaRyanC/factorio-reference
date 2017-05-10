declare const recipes: RecipeMap;
declare const items: ItemMap<Item>;

interface Item {
    type: string;
    name: string;
    flags: {};
    fuel_category: string;
    stack_size: number;
    fuel_value: number;
}

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
    category: Category;
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
