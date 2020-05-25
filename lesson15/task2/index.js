export const createCalculator = () => {
    let num = 0;

    function add(number) {
        return num = number + num;
    }

    function decrease(number) {
        return num = num - number;
    }

    function reset(number) {
        return num = 0;
    }

    function getMemo() {
        return num;
    }
    return {
        add,
        decrease,
        reset,
        getMemo,
    }
}

const calculate = createCalculator();
const calculate1 = createCalculator();
const calculate2 = createCalculator();