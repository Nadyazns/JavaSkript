const getSpecialNumbers = numbers =>
    numbers.filter(num => num % 3 === 0);

const arr = [1, 2, 3, 4, 5, 6, 8, 9, 12, 34, 35, 36];
console.log(getSpecialNumbers(arr))

// 3)
// const getSpecialNumbers = numbers => {
//     let specialNumbers = [];
//     const result = numbers.filter(num => {
//         if (num % 3 === 0) {
//             return true;
//         }
//         return false;
//     })
//     return result;
// }
// const arr = [1, 2, 3, 4, 5, 6, 8, 9, 12, 34, 35, 36]
// console.log(getSpecialNumbers(arr))



// 2)
// const arr = [1, 5, 6, 7, 9, 12, 14, 15, 99];
// const getSpecialNumbers = numbers => {
//     let specialNumbers = [];

//     function checkSpecialNumbers(num) {
//         if (num % 3 === 0) {
//             specialNumbers.push(num)
//         }
//     }

//     numbers.forEach(checkSpecialNumbers);// для каждого элемента массива checkSpecialNumbers
//     return specialNumbers;
// }
// console.log(getSpecialNumbers(arr))



//    1)
//   function getSpecialNumbers(arr) {
//     for (let i = 0; i < arr.length; i++)
//    if (arr[i] % 3 === 0) {
//      specialNumbers.push(arr[i])
//    }
//   return specialNumbers;