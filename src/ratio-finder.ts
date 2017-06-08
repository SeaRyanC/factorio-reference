
interface Output {
    processes: {
        recipeName: string;
        quantity: number;
    }[];

    // A number between 0 and 1 indicating the total utilization factor
    // for all inputs
    exactness: number;
}

function finder() {

    function addFreeInput(name: string, quantity: number) {

    }

    function addRecipe(name: string, speed: number) {

    }

    function getResult(desiredOutputItem: string): Output[] {
        return null;
    }

    return {
        addRecipe,
        getResult
    }
}
