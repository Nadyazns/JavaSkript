let transaction = {
    name: 'Nadya',
    age: 33,
    country: 'Ukraine',
}

const addProperty1 = (obj, key, value) => {
    obj[key] = value;
    return obj;
}

const result = addProperty1(transaction, 'sex', 'female');
console.log(result)

const addProperty2 = (obj, key, value) => {
    let a = {};
    a[key] = value;
    Object.assign(obj, a);
    return obj;
}

const result1 = addProperty2(transaction, 'sex', 'female');
console.log(result1);

const addProperty3 = (obj, key, value) => {
    let a = {};
    a[key] = value;
    Object.assign(obj, a);
    return obj;
}

const result2 = addProperty3(transaction, 'sex', 'female');
console.log(result2);



const addProperty4 = (obj, key, value) => {
    let a = {...obj };
    a[key] = value;
    Object.assign(obj, a);
    return a;
}

const result3 = addProperty4(transaction, 'sex', 'female');
console.log(result3);