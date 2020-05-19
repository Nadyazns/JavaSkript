const multiRound = num => [
    Math.floor(num),
    Math.round(num),
    Math.ceil(num),
    Math.trunc(num), +num.toFixed(1),
]

// console.log(multiRound(17));