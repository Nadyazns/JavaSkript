// algo
// get var that gets years,months,days,min,secs,msecs;
// make it add, subtract,


function shmoment(date) {
    let result = date;
    const calculator = {
        add(value) {
            const day = new Date(date).getDate();
            result = new Date(date).setDate(day + value);
            return calculator;

        },
        subtract(value) {
            const day = new Date(date).getDate();
            result = new Date(date).setDate(day + value);
            return calculator;
        },
        mult(value) {
            result *= value;
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

    return result;
}