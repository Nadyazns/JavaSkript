let sum = 0;

for (i = 0; i <= 1000; i++) {
    sum += i;
}

console.log(Boolean((sum / 1234) > (sum % 1234)));