//[1,[2,3,4],5,[6]] => [1,2,3,4,5,6]
const flatArray = arr => arr.flat();




// const flatArray = arr => {
//     const flatArray = arr.reduce((acc, elem) => {
//         return acc.concat(elem);
//     }, []);
//     return flatArray;
// };
// const initArray = [2, 5, [9, 10, 7], 9, 11, [0], 21];
// console.log(flatArray(initArray));