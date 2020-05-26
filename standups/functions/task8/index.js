//input:object,string;
//output:object;
let obj1 = {
    name: 'Andrey',
    phone: '0202374982',
    price: 76,
};

let obj2 = {
    name: 'Denis',
    city: 'Lviv',
    age: 20
}


function mergeObjectsV1(obj1, obj2) {
    return Object.assign(obj1, obj2);
}
console.log(mergeObjectsV1(obj1, obj2));




//input:object,string;
//output:object;

function mergeObjectsV2(obj1, obj2) {
    return Object.assign(obj2, obj1);

}
console.log(mergeObjectsV2(obj1, obj2));


function mergeObjectsV3(obj1, obj2) {
    return Object.assign({...obj1 }, {...obj2 });
}

console.log(mergeObjectsV3(obj1, obj2));




function mergeObjectsV4(obj1, obj2) {
    return Object.assign({...obj2 }, {...obj1 });
}

console.log(mergeObjectsV4(obj1, obj2));