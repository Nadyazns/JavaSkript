const myArray = [1, 67, 45, 23, 7, 34, 68, 2444];

function cloneArr(arr) {
    let clone = [];
    for (var i in arr) {
        clone[i] = arr[i];
    }
    return clone;
}

console.log(cloneArr(myArray));