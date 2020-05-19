let numbers = [-1, -4, 100, -200];

const getMaxAbsoluteNumber = arr => {
    if (!Array.isArray(arr) || arr.length == 0) {
        return null;
    }
    let absoluteNumbers = arr.map(num => Math.abs(num))
    return Math.max(...absoluteNumbers);
}

console.log(getMaxAbsoluteNumber(numbers))