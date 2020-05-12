// let arr = [10, 20, 1]

function checkSum(arr) {
    let sumOfElements = 0;
    if (!Array.isArray(arr)) {
        return null;
    } else {
        for (let i = 0; i <= arr.length; i++) {
            sumOfElements += arr[i];
            //     if (sumOfElements > 100) {
            //         return true;
            //     }
            // }
            // return false;
            return Boolean(sumOfElements > 100);
        }

    }

}

// let a = checkSum(arr)
// console.log(a)