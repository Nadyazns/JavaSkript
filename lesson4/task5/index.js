const m = 5;
let i = m;
const n = 17;
let result = 1;

for (i = 5; i <= n; i++) {
    if (i % 2 === 0 && i % 4 != 0) {
        result += i;

    } else if (i % 3 == 0) {
        result -= i;

    } else if (i % 4 == 0) {
        result *= i;

    } else if (i % 5 == 0) {
        console.log(i)
    }
}