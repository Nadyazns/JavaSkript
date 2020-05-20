// input:number;
// output: array;

// algo:
// 1. function to return array of numbers with given start, end and length;
// 2. make it random, push into arr.

const getRandomNumbers = (arrlength, start, end) => {
    if (Math.abs(end - start) < 1)
        return null;

    let arrOfRandomNumbers = [];
    for (let i = 0; i < arrlength; i++) {
        arrOfRandomNumbers.push(Math.floor(Math.random() * (finish - start) + start));
    }
    return arrOfRandomNumbers;
}
getRandomNumbers(5, 6.75, 12);
console.log(getRandomNumbers(5, 6.75, 12));