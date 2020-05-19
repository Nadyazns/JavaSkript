let everything = [1, 1.55, 4.72, 8, 99, 12.0928]


const getTotalPrice = arr => {
    let sum = arr.reduce((acc, a) => acc + a);
    sum = Math.floor(sum * 100) / 100;
    return ('$' + sum);
}

console.log(getTotalPrice(everything));