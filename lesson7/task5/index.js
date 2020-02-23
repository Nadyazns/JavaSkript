function squareArray(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    return arr.map(num => num * num);
}

// const squareArray = arr => arr
// .forEach(num => num*=num).push(num);

// arr = [2, 5, 7, 9];
// console.log(squareArray(arr));
// console.log(arr);