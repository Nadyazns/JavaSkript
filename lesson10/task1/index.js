let everything = [1, '14', 1.55, 4.72, 8, 99, 'it', {}, NaN]

const getFiniteNumbers = arr => arr.filter((el) => Number.isFinite(el));

let result = getFiniteNumbers(everything);
console.log(result);


const getFiniteNumbersV2 = arr => arr.filter((el) => isFinite(el));
let result1 = getFiniteNumbersV2(everything);
console.log(result1);

const getNaN = arr => arr.filter((el) => Number.isNaN(el));
let result2 = getNaN(everything);
console.log(result2);


const getNaNV2 = arr => arr.filter((el) => isNaN(el));
let result3 = getNaNV2(everything);
console.log(result3);

const getIntegers = arr => arr.filter((el) => Number.isInteger(el));
let result4 = getIntegers(everything);
console.log(result4);