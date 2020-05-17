let userData = {
    name: 'Nadya',
    age: 33,
    country: 'Ukraine',
}

let userId = '11111';

const addPropertyV1 = (userData, userId) => {
    userData.id = userId;
    return userData;
}
const result = addPropertyV1(userData, userId);

console.log(result);

const addPropertyV2 = (userData, userId) => {
    let a = {};
    a.id = userId;

    Object.assign(userData, a);
    return userData;
}
const result2 = addPropertyV2(userData, userId);
console.log(result2);


const addPropertyV3 = (userData, userId) => {
    let userData1 = Object.assign({}, userData);

    userData1.id = userId;

    return userData1;
}
const result3 = addPropertyV3(userData, userId);
console.log(result3);


const addPropertyV4 = (userData, userId) => {
    let cloneData = {...userData };

    cloneData.id = userId;

    return cloneData;
}
const result4 = addPropertyV4(userData, userId);
console.log(result4);