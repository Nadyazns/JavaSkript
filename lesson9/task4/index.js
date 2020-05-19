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
// 2. from each arrays element (another array) take anothers array element(object) and do its objects.values()
// 3. push it to the new array

const getPeople = rooms => {

    let peoplesNames = [];
    let peps = [];
    let namesListOfArrOfObj = Object.values(rooms); // 1. [[{name:"room1 name1"},{name:"room2 name2"}, {name:"room3 name3"}], [{name:"room1 name1"}, {name: " room2 name2"}], ...]

    let arrOfObj = [];
    for (let i = 0; i < namesListOfArrOfObj.length; i++) {
        for (let a = 0; a < namesListOfArrOfObj[i].length; a++) {
            peps.push(namesListOfArrOfObj[i][a]);
        }
    }
    for (let i = 0; i < peps.length; i++) {
        peoplesNames.push(peps[i].name);
    }
    return peoplesNames;
}

console.log(getPeople(rooms));