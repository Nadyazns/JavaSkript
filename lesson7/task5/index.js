const squareArray = arr => {
    const square = [];
    if (!Array.isArray(arr)) {
        return null;
    }

    function doTheMath(num) {
        num *= num;
        square.push(num);
    }
    arr.forEach(doTheMath);

    return square;
}


arr = [2, 5, 7, 9]
console.log(squareArray(arr))
console.log(arr)