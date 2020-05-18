let transaction = {
    name: 'Nadya',
    age: 33,
    country: 'Ukraine',
}

const addPropertyV1 = (obj, key, value) => {
    obj[key] = value;
    return obj;
}

const result = addPropertyV1(transaction, 'sex', 'female');
console.log(result)

const addPropertyV2 = (obj, key, value) => {
    let a = {};
    a[key] = value;
    Object.assign(obj, a);
    return obj;
}

const result1 = addPropertyV2(transaction, 'sex', 'female');
console.log(result1);

const addPropertyV3 = (obj, key, value) => {
    let a = {};
    a[key] = value;
    Object.assign(obj, a);
    return obj;
}

const result2 = addPropertyV3(transaction, 'sex', 'female');
console.log(result2);



const addPropertyV4 = (obj, key, value) => {
    let a = {...obj };
    a[key] = value;
    Object.assign(obj, a);
    return a;
}

const result3 = addPropertyV4(transaction, 'sex', 'female');
console.log(result3);