const user = {
    tom: 13,
    ceverin: 21,
    nadya: 32,
    alex: 35,
};

// const getAdults = usersObj => {
//     //{tom:13,  ceverin:21,   nadya:32,   alex:35} =>  [[tom:13], [ceverin:21], [nadya:32], .. ]
//     const usersArr = Object.entries(usersObj);

//     // [[tom:13], [ceverin:21], [nadya:32], ..] => [[ceverin:21], [nadya:32], ..]
//     const filterUsersArr = usersArr
//         .filter(user => user[1] >= 18);

//     //[[ceverin:21], [nadya:32], ..] => ['ceverin', 'nadya']
//     const usersNames = filterUsersArr
//         .map(user => user[0]);

//     return usersNames
// }

const getAdults = userObj => Object.entries(userObj)
    .filter(user => user[1] >= 18)
    .map(user => user[0]);

console.log(getAdults(user))