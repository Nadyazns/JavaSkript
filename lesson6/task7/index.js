let arr = [990, 1]
let sumOfElements = 0;

function checkSum(arr) {

    if (!Array.isArray(arr)) {
        return null;
    } else {
        for (let i = 0; i <= arr.length; i++) {
            sumOfElements += arr[i];
            if (sumOfElements > 100) {
                return true;
            }
        }


    }
    return false;
}
// // console.log(sumOfElements);
// // return Boolean(sumOfElements > 100);
// }

let a = checkSum(arr)
console.log(a)