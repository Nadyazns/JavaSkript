const customers = {
    'customer -id-1': {
        name: 'alex',
        age: 35,

    },
    'customer -id-2': {
        name: 'severin',
        age: 21,
    },
    'customer -id-3': {
        name: 'nadya',
        age: 32,
    },
    'customer -id-4': {
        name: 'Tom',
        age: 13,
    }
};


//input: object;
//output:array of objects.

// algo:
// 1.
// 2.
// 3.

const getCustomersList = obj => {
    const list = Object.entries(obj);
    // console.log(list);
    let objId = {};
    let customersList = [];
    for (let key in obj) {
        objId = {...obj[key] };
        objId.id = key;
        // console.log(objId);
        customersList.push(objId);
    };
    return customersList.sort(function(a, b) {
        return a.age - b.age;
    });

};

console.log(getCustomersList(customers))