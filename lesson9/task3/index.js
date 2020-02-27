const user = {
    id1: {
        name: 'alex',
        age: 35,

    },
    id2: {
        name: 'severin',
        age: 21,
    },
    id3: {
        name: 'nadya',
        age: 32,
    },
    id4: {
        name: 'Tom',
        age: 13,
    }
};
const getCustomersList = obj => {
    const list = Object.entries(obj);
    console.log(list);
    let objId = {};
    for (let key in obj) {
        objId = {...obj[key] };
        objId.id = key;
        console.log(objId)
    };
};

console.log(getCustomersList(user))

//function sortArr(list) {
//   list.sort((a, b) = a.age > b.age ? 1 : -1)
//}
//console.log(sortArr(list));
//list.sort((a, b) => user[a] - user[b])
//const { id = list[0] } = obj;



// const mine = arr => {
//     let obj1 = {};
//     obj1.id = arr[0]
//     return obj1
// }