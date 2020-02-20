// unsorted array => sorted array


const sortDesc = numbers => {
    const copy = numbers.slice();
    numbers.sort((a, b) => b - a);
    return copy;
}




// const sortArray = numbers => {
//     function compare(a, b) {
//         if (a > b) {
//             return 1;
//         }
//         return -1;
//     }
//     numbers.sort(compare);
//     return numbers;
// };

const arr = [4, 92387, 2727, 1, 0, 377, 12]
console.log(sortDesc(arr));
console.log(arr)