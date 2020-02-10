let sum = 0;

function getSum(num1, num2) {
    for (let i = num1; i <= num2; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;

}