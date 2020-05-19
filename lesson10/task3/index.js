const multiRound = num => [
    Math.floor(num),
    Math.round(num),
    Math.ceil(num),
    Math.trunc(num),
    Number(num.toFixed(2)),
]

console.log(multiRound(-17.295));