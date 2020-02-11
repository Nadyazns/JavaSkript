function getPrimes(num) {
    for (let f = 2; f <= num; f++) {
        for (let i = 2; i < num; i++)
            if (num % i === 0) return false;
        return console.log(f);
    }
}