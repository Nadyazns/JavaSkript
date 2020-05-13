let m = 10;
let n = 40;

let result = 0;

for (let i = m; i <= n; i++) {
    if (i % 5 === 0) {
        // console.log('1 is called' + i);
        // console.log(i);
        continue;
    }
    if (i % 2 === 0 && i % 4 !== 0) {
        result += i;
        // console.log('1 is called' + i)
        continue;
    }
    if (i % 3 === 0) {
        result -= i;
        // console.log('2 is called' + i);
        continue;
    } else if (i % 4 === 0) {
        // console.log('3 is called' + i)
        result *= i;
        continue;
    }
}

console.log(result)