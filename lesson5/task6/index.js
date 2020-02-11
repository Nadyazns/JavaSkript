function getPrimes(num) {
    for (let f = 2; f <= num; f++) {
        let i;
        for (i = 2; i < f; i++)
            if (f % i === 0) {
                return false;
            }
        console.log(i);

    }
}