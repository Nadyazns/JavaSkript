// intput: array function
// output:array

// algo:
// 1 create Array
// 2 itarate array
// 3 if callback condition is ok - add to array, if not - skip

function filterArrayElements(arr, callback) {
    let filtered = [];

    for (let i = 0; i < arr.length; i++) {
        let res = callback(arr[i], i, arr);

        if (res) {
            filtered.push(arr[i]);
        }
    }
    return filtered;
}

// const numbers = [1, 2, 3, 4, 5, 100, 40, 44, 55, 1234];

// let callback = (el) => el % 2 === 0;
// let res = (filterArrayElements(numbers, callback))
// console.log(res);

//MAP
// input:array;
//output:array;
// call callback to every elemnt and add result to array

function mapArrayElements(arr, callback) {
    let mapped = [];
    for (let i = 0; i < arr.length; i++) {
        let res = callback(arr[i], i, arr);

        mapped.push(res);
    }
    return mapped;

}

const numbers = [1, 2, 3, 4, 5, 100, 40, 44, 55, 1234];

let callback = (el) => 0;
let res1 = mapArrayElements(numbers, callback)
console.log(res1);

//Sort

const numbers1 = [1, 235, 3, 46, 5, 100, -40, 44, 55, 1234];

console.log(numbers1.sort((el1, el2) => el1 - el2));


const text = ['text', 'aaa', 'sahfg', 'ddd']
console.log(text.sort((el1, el2) => el1.localeCompare(el2)));

// > 0 ,el1>el2
// ===0, el1===el2,
//<0, el1 < el2;