// input:{};
// output:undefined



let obj = {
    name: 'Nadya',
    age: 33,
    country: 'Ukraine',
}
const getKeys = obj => {
        Object.keys(obj).forEach(element => console.log(element));
    }
    // console.log(getKeys(obj));