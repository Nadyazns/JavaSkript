function sum(from, to) {
    let total = 0;
    for (let i = from; i <= to; i++) {
        total += i;
    }
    return total;
}



function compareSums(a, b, c, d) {
    if (sum(a, b) > sum(c, d)) {
        return true;
    } else {
        return false;
    }
}
compareSums(2, 9, 1, 2)