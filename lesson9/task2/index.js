const user = {
    tom: 13,
    ceverin: 21,
    nadya: 32,
    alex: 35,
};

//const copyObj = obj => Object.assign({}, obj);
const copyObj = obj => {
    return {...obj }
}

console.log(copyObj(user));