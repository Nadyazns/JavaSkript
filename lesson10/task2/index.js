let everything = [1, '14', 1.55, 4.72, 8, 99, 'it', {}, NaN]

const getParsedIntegers = arr => arr.map(el => Number.parseInt(el));
console.log(getParsedIntegers(everything));

const getParsedIntegersV2 = arr => arr.map(el => parseInt(el));
console.log(getParsedIntegersV2(everything));

const getParsedFloats = arr => arr.map(el => Number.parseFloat(el));
console.log(getParsedFloats(everything));

const getParsedFloatsV2 = arr => arr.map(el => parseFloat(el));
console.log(getParsedFloatsV2(everything));