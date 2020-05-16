// input: Array;
// output: Array;

// algo:
// 1 if not array returns null;
// 2 list of new even array:if array of array[i] % 2 === 0
// 3 map each + delta

function increaseEvenEl(arr, delta) {
    if (!Array.isArray) {
        return null;
    }
    return arr.filter(i => i % 2 == 0)
        .map(each => each + delta);
}
// let arr = [1, 2, 15, 12, 19, 6];
// console.log(increaseEvenEl(arr, 2))











// function compareNumeric(a, b) {
//     console.log(a + " > " + b);
//     if (a > b) return 1;
//     console.log(a + " == " + b);
//     if (a == b) return 0;
//     console.log(a + " < " + b);
//     if (a < b) return -1;
// }

// let arr = [1, 2, 15, 0, 19, 6];

// arr.sort(compareNumeric);

// console.log(arr); // 1, 2, 15