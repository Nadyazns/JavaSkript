let user = {
    name: 'Nadya',
    age: 33,
    country: 'Ukraine',
}

const addProperty1 = (obj, key, value) => {
    obj[key] = value;
    return obj;
}

const a = addProperty1(user, 'sex', 'female');
console.log(a)

const addProperty2 = (obj, key, value) => {
    let a = {};
    a[key] = value;
    Object.assign(obj, a);
    return obj;
}

const b = addProperty2(user, 'sex', 'female');
console.log(b);

const addProperty3 = (obj, key, value) => {
    let a = {};
    a[key] = value;
    Object.assign(obj, a);
    return obj;
}

const c = addProperty3(user, 'sex', 'female');
console.log(c);



const addProperty4 = (obj, key, value) => {
    let a = {...obj };
    a[key] = value;
    Object.assign(obj, a);
    return a;
}

const d = addProperty4(user, 'sex', 'female');
console.log(d);