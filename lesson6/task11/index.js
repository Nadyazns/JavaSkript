//let balances = [23, 245, 120, 25, 1];

function checker(arr) {
    let sum = 0;
    let max = arr[0];
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];

    }
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];

    }
    if (min + max < 1000)
        return false;
    return true;
}
//console.log(checker(balances))