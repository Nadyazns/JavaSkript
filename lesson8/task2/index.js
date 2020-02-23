const obj = {
    name: 'Nadya',
    age: 32,
    hobby: 'yoga',
}

const concatProps = obj => {
    let arr = []
    for (let key in obj) {
        //(obj[key]);
        //arr.push(obj[key]);
        arr = arr.concat(obj[key]);
    }
    return arr;
}
console.log(concatProps(obj))