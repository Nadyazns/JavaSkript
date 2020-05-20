// input:Number
// output:array

const superRound = (num, aftercoma) => {
        let roundedNumbers = [];
        let n = Math.pow(10, aftercoma);
        roundedNumbers.push(Math.floor(num * n) / n);
        roundedNumbers.push(Math.round(num * n) / n);
        roundedNumbers.push(Math.ceil(num * n) / n);
        roundedNumbers.push(Math.trunc(num * n) / n);
        roundedNumbers.push(+num.toFixed(aftercoma));
        return roundedNumbers;
    }
    // console.log(superRound(4.96059483, 5));