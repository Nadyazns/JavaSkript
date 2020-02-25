// const obj = {
//     nadya: 32,
//     tom: 15,
//     john: 22,
//     ceverin: 21,
// }

const getAdults = obj => {
    let myObj = {};
    for (let key in obj) {
        if (obj[key] >= 18) {
            myObj[key] = obj[key];
        }
    }
    return myObj;
}

//console.log(getAdults(obj))