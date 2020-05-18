let obj1 = {
    name: 'Nadya',
    age: 33,
    country: 'Ukraine',
}
let obj2 = {
    hair: 'red',
    age: 18,
}
let obj3 = {
    name: 'Nadya',
    age: 33,
    country: 'Ukraine',
}
let obj4 = {
    hair: 'red',
    age: 18,
    sex: 'female',
}

let obj5 = {
    name: 'Nadya',
    age: 33,
    home: 'Ukraine',
}
let obj6 = {
    name: 'Nadya',
    age: 33,
    home: 'donetsk',
}

const compareObjects = (obj1, obj2) => {
    for (let key in obj1) {
        for (let key1 in obj2) {
            if (obj1[key] != obj2[key]) {
                // console.log(obj1[key] + ' and ' + obj2[key]);
                // console.log(key + ' and ' + key1);
                return false;

            }

        }


    }
    return true;
}
let result = compareObjects(obj6, obj5);
console.log(result)