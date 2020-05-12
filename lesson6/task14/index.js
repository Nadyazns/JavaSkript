arr = [12, 7, 45, 99]


function getSubArray(arr, num) {
    let subArray = []
    for (let i = 0; i <= num - 1; i++) {
        subArray.unshift(arr[i]);
        console.log(subArray)
    }

    return subArray;
}

getSubArray(arr, 2);