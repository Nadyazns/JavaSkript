// let arr = [1, 2, 3, 4, 5, 55, 6];

function increaseEvenEl(arr, delta) {

    if (!Array.isArray(arr)) {
        return null;
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 == 0) {
                console.log(arr[i] + delta);
                arr[i] = arr[i] + delta;

            }
            continue;
        }
    }
    return arr;
}

// increaseEvenEl(arr, 10);