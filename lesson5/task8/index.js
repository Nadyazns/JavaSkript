function sum(from, to) {
    let total = 0;
    for (let a = from; a <= to; a++) {
        total += a;
    }
    console.log(total)
}


function compareSums(a, b, c, d) {
    if (sum(a, b) > sum(b, c)) return true;
    return false;
}