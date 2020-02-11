function sum(from, to) {
    let total = 0;
    for (let a = from; a <= to; a++) {
        total += a;
    }
    console.log(total)
}


function compareSums(a, b, c, d) {
    return Boolean(sum(a, b) > sum(c, d));
}