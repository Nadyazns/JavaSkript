let sum = 0;

for (i = 0; i <= 1000; i++) {
    sum += i;
}
console.log(sum)
let a = sum / 1234;
let b = sum % 1234;
console.log(Boolean(a > b));