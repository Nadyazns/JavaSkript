rooms = {
    room1: [
        { name: 'room1 name1' },
        { name: 'room2 name2' },
        { name: 'room3 name3' },
    ],
    room2: [
        { name: 'room1 name1' },
        { name: 'room2 name2' },
        { name: 'room3 name3' },

    ],
    room3: [
        { name: 'room1 name1' },
        { name: 'room2 name2' },
        { name: 'room3 name3' },
    ]
}

const getPeople = rooms => {
    const listOfRooms = Object.entries(rooms);
    const toArr = listOfRooms.forEach(obj => {
        for (let key in obj) {
            Object.values(obj[key])
        }
    });
    console.log(listOfRooms)

}

console.log(getPeople(rooms))

// const arr = ['as', 1]
// const transformToObj = arr => {
//     let obj = {};
//     arr.forEach(element => {
//         obj[element] = 23   ;

//     });
//     return obj;
// }
// console.log(transformToObj(arr))