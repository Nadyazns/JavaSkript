export const calc = initValue => {
    let result = initValue;
    const calculator = {
        add(value) {
            result += value;
            return calculator;
        },
        mult(value) {
            result *= value;
            return calculator;
        },
        substract(value) {
            result -= value;
            return calculator;
        },
        div(value) {
            result /= value;
            return this;
        },
        result() {
            return result;
        }
    };
    return calculator;
};

export const result = calc(3).add(2).mult(4).div(10).substract(5).result();
// console.log(result);