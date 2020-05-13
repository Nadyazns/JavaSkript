// let arr = [12, 7, 45, 99];


function getSubArray(arr, num) {
    let subArray = [];
    for (let i = 0; i <= num - 1; i++) {
        subArray.push(arr[i]);
    }
    return subArray;
}

// console.log(getSubArray(arr, 1));