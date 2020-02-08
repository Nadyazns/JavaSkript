const m = 5;
let i = m;
const n = 25;
let result = 1;

while (i <= n && i >= m) {
    if (i % 5 == 0) {
        console.log(i)
    } else if (i % 2 == 0 && i % 4 != 0) {
        result += i;

    } else if (i % 3 == 0) {
        result -= i;

    } else if (i % 4 == 0) {
        result *= i;

    }
    i++;
    continue;
}