function isPrime(number) {
    for (let i = 2; i < number; i++)
        if (number % i === 0)
            return false;
    return true;
}

function getPrimes(num) {
    for (let f = 2; f <= num; f++) {
        if (isPrime(f)) {
            console.log(f);
        }
    }
}