// let arr = [19, 8, 3, 88];

function includes(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == num) {
            return true;
        }
    }
    return false
}
// console.log(includes(arr, 0));