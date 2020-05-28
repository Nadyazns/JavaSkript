// algorythm:
// 1.Compare two objects by length if === return tru/false
// 2 iterate keys and compare values. If not equal - false



//input:obj,obj
//output:boolean

let obj1 = {
    age: 20,
    name: "Denis",
    city: "Kiev"
}

let obj2 = {
    age: 20,
    name: 'Andrey',
    city: "Kiev"
}

// function compareObjects(obj1, obj2) {
//     let keys1 = Object.keys(obj1);
//     let keys2 = Object.keys(obj2);

//     if (keys1.length !== keys2.length)
//         return false;


//     keys1.reduce((acc, key, index) => {
//         if (acc === false) {
//             return false;
//         }
//         console.log("STEP " + index)
//         let value1 = obj1[key];
//         let value2 = obj2[key];
//         console.log("value1 " + value1);
//         console.log("value2 " + value2);
//         if (value1 !== value2) {
//             console.log("ACC " + acc);
//             return false;

//         } else {
//             console.log("ACC " + acc);
//             return true;
//         }
//     }, true);
// }
function compareObjects(obj1, obj2) {
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length)
        return false;


    return keys1.reduce((acc, key) => {
        if (acc === false)
            return false;

        return obj1[key] === obj2[key];
    }, true);
}

// console.log(compareObjects(obj1, obj2))