const arrName = [10, 2, 3, 4, 5];
let square = [];

function squareArray(arr) {

    if (!Array.isArray(arr)) {
        return null;
    }
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];

        if (num != 0) {
            square.push(num * num);
        }

    }
    return square;
}

const show = squareArray(arrName);
console.log(show)