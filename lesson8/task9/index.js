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

// algorythm:
// 1. write a function to transform keys and values into array;
// 2 check if the length of the objects is the same
// 3  compare values;
// 4 if true return true else return
// 5 if false return false.


const compareObjects = (a, b) => {
    let keys1 = Object.keys(a);
    let keys2 = Object.keys(b);
    let val1 = Object.values(a);
    let val2 = Object.values(b);

    if (keys1.length != keys2.length) {
        return false;
    } else {
        for (let i = 0; i < keys1.length; i++) {
            if (keys1[i] != keys2[i]) {
                return false;
            }
        }
    }
    for (let d = 0; d < val1.length; d++) {
        if (val1[d] != val2[d]) {
            return false;

        }
    }
    return true;
}



let result = compareObjects(obj1, obj2);
console.log(result);