//input:object,string;
//output:object;

function addProperty(userData, userId) {
    userData.id = userId;
    return userData;
}

let userData = {
    name: 'Andrey',
    city: 'Lviv',
    age: 20
};

let userId = '1111';
console.log(addProperty(userData, userId));

//input:object,string;
//output:object;

function addPropertyV2(userData, userId) {
    let obj = { id: userId };
    return Object.assign(userData, obj);
    // return Object.assign(userData, { userId });

}


console.log(addPropertyV3(userData, userId));

function addPropertyV3(userData, userId) {

    return Object.assign({}, userData, { id: userId });

}

console.log(addPropertyV3(userData, userId));


function addPropertyV4(userData, userId) {
    //copy obj;
    // let resObj = {...userData};
    // let resObj = Object.assign({},userData);
    return resObj = {...userData, id: userId };

}


console.log(addPropertyV4(userData, userId));

//SPREAD 

let arr = [1, 2, 3, ];
let res = [...arr, 5, 10, 12];
//[1,2,3,5,10,12]