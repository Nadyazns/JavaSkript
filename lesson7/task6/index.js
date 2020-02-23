function reverseArray(arr) {
    if (!Array.isArray) {
        return null;
    }
    return arr.slice().reverse();

}

// const arr = [34, 6, 2, 7, 99, 0, 142];
// console.log(reverseArray(arr))