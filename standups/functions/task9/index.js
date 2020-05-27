//input:array,array;
//output: obj;

//algo
//itarate keysList;
//get value by index &put to the obj;

//1. learn requirements
//2. input & output create algo
//3. create prototype solution
//4. refactoring & testing
//5. final solution 


// function buildObject(keysList, valuesList) {
//     return keysList.reduce((acc, key, index) => {
//         console.log("ACC" + acc);
//         console.log('KEY' + key);
//         console.log('INDEX' + index);

//         let value = valuesList[index];

//         console.log('Value' + value);
//         let obj = Object.assign({}, {
//             [key]: value
//         });
//         console.log('OBJ', obj);

//         return obj;
//     }, {})
// }
function buildObject(keysList, valuesList) {
    return keysList.reduce((acc, key, index) => {
        return Object.assign(acc, {
            [key]: value = valuesList[index]
        });
    }, {})
};

let keys = ['name', 'city', 'price'];
let values = ['Denis', 'Lviv', 300];
console.log(buildObject(keys, values));