// let obj1 = {
//     name: 'Nadya',
//     age: 33,
//     country: 'Ukraine',
// }
// let obj2 = {
//     hair: 'red',
//     age: 18,
// }
// let obj3 = {
//     name: 'Nadya',
//     age: 33,
//     country: 'Ukraine',
// }
// let obj4 = {
//     hair: 'red',
//     age: 18,
//     sex: 'female',
// }

const compareObjects = (obj1, obj2) => {
    for (let key in obj1) {
        for (let key1 in obj2) {
            // console.log(obj1[key] + ' and ' + obj2[key1]);
            // console.log(key + ' and ' + key1);
            if (obj1[key] == obj2[key1] && key === key1) {
                return true;
            }
        }
    }
    return false;
}
let result = compareObjects(obj1, obj3);
console.log(result)