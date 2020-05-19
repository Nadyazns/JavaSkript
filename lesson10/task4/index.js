let numbers = [2, -4, 78, -99]

const getMaxAbsoluteNumber = arr => {
    if (!Array.isArray(arr) || arr == []) {
        return null;
    }
    let absoluteNumbers = arr.map(num => Math.abs(num))
    return Math.max(...absoluteNumbers);
}

console.log(getMaxAbsoluteNumber(numbers))