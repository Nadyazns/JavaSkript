//const arrName = [10, 2, 3, 4, 5];
let square = [];

function squareArray(arr) {

    if (!Array.isArray(arr)) {
        return null;
    }
    for (let i = 0; i < arr.length; i++) {
        num = arr[i];

        if (num != 0) {
            square.push(arr[i] * arr[i]);
        }

    }
    return square;
}

//const show = squareArray(arrName);
//console.log(show)