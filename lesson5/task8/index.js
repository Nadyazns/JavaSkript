function sum(from, to) {
    let total = 0;
    for (let i = from; i <= to; i++) {
        total += i;
    }
    console.log(total)
}


function compareSums(a, b, c, d) {
    return Boolean((sum(a, b) > sum(c, d)))
}