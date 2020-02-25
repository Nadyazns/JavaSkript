// const obj = {
//     name: 'Nadya',
//     sex: 'Female',
//     'fav color': 'Brown',
//     music: 'Soul',
//     age: 32,
// }

// const arr = ['name', "age"];


const pickProps = (obj, arr) => {
    let myObj = {};
    arr.forEach(a => {
        if (obj[a]) {
            myObj[a] = obj[a];
        };
    });
    return myObj;
}

//console.log(pickProps(obj, arr));


// const baseObject = { xml: 4, http: 2, rest: 2, js: 10 };
// const baseFields = ["xml", "js"];

// function mapObject(baseObject, baseFields) {
//     let obj = {};
//     baseFields.forEach(elem => {
//         if (baseObject[elem]) {
//             obj[elem] = baseObject[elem];
//         }
//     });
//     return obj;

//     // или тут console.log(obj); вместо return
//     // и тогда запускаешь функцию mapObject(baseObject, baseFields)
//     // без console.log
// }
// console.log(mapObject(baseObject, baseFields));