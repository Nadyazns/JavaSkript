const m = 2;
let i = m;
const n = 12;
let result = 0;

while (i <= n && i >= m) {
    if (i % 5 == 0) {
        console.log(i);

    } else if (i % 2 == 0 && i % 4 != 0) {
        result += i;

    } else if (i % 3 == 0) {
        result -= i;

    } else if (i % 4 == 0) {
        result *= i;

    }
    i++;

}