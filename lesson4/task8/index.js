let sum = 0;

for (i = 1; i <= 1000; i++) {
    sum += i;
    console.log(sum);
}
(Math.floor(sum / 1234) > (sum % 1234)) ? console.log('true'): console.log('false');