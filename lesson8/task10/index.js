let keysList = ['name', 'address', 'age'];
let valuesList = ['Nadya', 'Ukraine', '33'];

const buildObject = (keysList, valuesList) => {
    let obj = {};
    for (let key in keysList) {
        for (let value in valuesList) {
            obj[keysList[key]] = valuesList[key];
        }
    }
    return obj;
}

// let result = buildObject(keysList, valuesList);
// console.log(result);