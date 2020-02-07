const m = 1;
let i = m;
const n = 23;
let result = 1;
do {
    if (i % 2 === 1) {
        result *= i;
    }
    i++;
} while (i <= n);

console.log('Result: ' + result);