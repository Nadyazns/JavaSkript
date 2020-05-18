let obj1 = {
    name: 'Nadya',
    age: 33,
    country: 'Ukraine',
}
let obj2 = {
    hair: 'red',
    age: 18,
}

const mergeObjectsV1 = (obj1, obj2) => {
    Object.assign(obj1, obj2)
    return obj1;
}

let result = mergeObjectsV1(obj1, obj2);
console.log(result);


const mergeObjectsV2 = (obj1, obj2) => {
    Object.assign(obj2, obj1)
    return obj2;
}

let result1 = mergeObjectsV2(obj1, obj2);
console.log(result1);
const mergeObjectsV3 = (obj1, obj2) => {
    let a = {...obj1, ...obj2 };

    return a;
}

let result2 = mergeObjectsV3(obj1, obj2);
console.log(result2);


const mergeObjectsV4 = (obj1, obj2) => {
    let a = {...obj2, ...obj1 }
    return a;
}

let result3 = mergeObjectsV4(obj1, obj2);
console.log(result3);