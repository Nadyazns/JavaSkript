const arr = [1, 'text']
const transformToObject = arr => {
    let obj = {};
    arr.forEach(a => {
        obj[a] = a;
    })
    return obj;
}

console.log(transformToObject(arr))


// const prop = 'my';

// const obj = {
//     age: 17,
//     name: "Tom",
//     'my name': "Nadya",
//     [prop + 'name']: 'value',
// };

// console.log(obj.age); // 17

// obj.age = 22;
// console.log(obj.age); // 22

// console.log(obj['my name']) // Nadya
// console.log(obj[prop + 'name'])//value