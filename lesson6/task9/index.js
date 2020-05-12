function reverseArray(arr) {
    let reflection = [];
    if (!Array.isArray(arr)) {
        return null;
    }
    for (let i = arr.length - 1; i >= 0; i--) {

        reflection.push(arr[i]);


    }

    return reflection
}

//const myArray = [20, 56, 3];
//const t = reverseArray(myArray);
//console.log(t);