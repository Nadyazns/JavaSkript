let sum = 1;

for (i = 1; i <= 1000; i++) {
    sum += i;

}
console.log(Boolean(Math.floor(sum / 1234) > (sum % 1234)))