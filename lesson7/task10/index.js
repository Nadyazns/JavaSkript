const arr = [1, 2, 4, 5];

function sum(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    return arr.reduce(function(acc, num) {
        return acc + num;
    });
}


console.log(arr);
console.log(sum(arr));