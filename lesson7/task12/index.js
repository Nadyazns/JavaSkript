// const arr = [1, 1, 1, 1];

function arrAverage(arr) {
    let sum = [];
    if (!Array.isArray(arr)) {
        return null;
    }
    sum = arr.reduce(function(acc, num) {
        return acc + num;
    });
    return sum / arr.length;
}


// console.log(arr);
// console.log(arrAverage(arr));