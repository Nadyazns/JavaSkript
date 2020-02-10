const m = 2;
let i = m;
const n = 12;
let result = 0;

for (i = m; i <= n && i >= m; i++) {
    if (i % 2 == 0 && i % 4 != 0) {
        console.log(result += i);
    } else if (i % 3 === 0) {
        console.log(result -= i);
    } else if (i % 4 === 0) {
        console.log(result *= 0)
    }

}