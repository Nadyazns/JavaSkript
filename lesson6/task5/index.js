//const arrName = [1, 2, 3, 4, 5];

function squareArray(arr) {
    let square = [];
    if (!Array.isArray(arr)) {
        return null
    }
    for (let i = 0; i <= arr.length; i++) {
        square.push(i * i);
    }
    return square;
}

//const show = squareArray(arrName);
//console.log(show)