// let array1 = [2, 4, 6, 7];

// console.log(array1[array1.length - 2]);
//inout: array of numbers;
//output: array of numbers;


function squareArray(arr) {
    if (!Array.isArray(arr))
        return null;

    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] * arr[i]);
        //result[i]=arr[i]*arr[i];
    }
    return result;
}

// function squareArray2(arr) {
//     if (!Array.isArray(arr))
//         return null;

//     let result = [...arr];
//     for (let i = 0; i < arr.length; i++) {
//         result[i] = arr[i] * arr[i];
//         //result[i]=arr[i]*arr[i];
//     }
//     return result;
// }

// function squareArray3(arr) {
//     if (!Array.isArray(arr))
//         return null;
//     let result = [];

//     for (let el of arr) {
//         result.push(el * el);
//         //result[i]=arr[i]*arr[i];
//     }
//     return result;
// }