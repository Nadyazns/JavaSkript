const myArray = [1, 67, 45, 23, 7, 34, 68, 2444];

function cloneArr(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    let clone = [...rest] = arr;
    return clone;
}


console.log(myArray);
console.log(cloneArr(myArray));