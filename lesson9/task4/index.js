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

// input: obj;
// output: array of strings;

// algo:
// 1. rooms object transform to Array of its values. array of arrays of objects.
// 2. make it flat
// 3. map the name into the new array

const getPeople = rooms =>
    peoplesNames = Object.values(rooms).flat().map((obj) => obj.name);


// let peoplesNames = [];
// let namesListOfArrOfObj = Object.values(rooms); // 1. [[{name:"room1 name1"},{name:"room2 name2"}, {name:"room3 name3"}], [{name:"room1 name1"}, {name: " room2 name2"}], ...]
// let a = namesListOfArrOfObj.flat();
// peoplesNames = a.map((obj) => obj.name)




// let peps = [];
// for (let i = 0; i < namesListOfArrOfObj.length; i++) {
//     for (let a = 0; a < namesListOfArrOfObj[i].length; a++) {
//         peps.push(namesListOfArrOfObj[i][a]);
//     }
// }
// for (let i = 0; i < peps.length; i++) {
//     peoplesNames.push(peps[i].name);
// }
//     return peoplesNames;
// }

console.log(getPeople(rooms));