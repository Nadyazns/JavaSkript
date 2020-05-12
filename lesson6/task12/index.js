//myArray.push(15,20) adds to the end;
//myArray.unshift(23,45) adds to the beginning;
//myArray.shift() deletes te first element;
//myArray.pop() deletes the last element;
//const myArray = [3, 54, 1, 77, 32]


function sortAsc(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min])
                min = j;
        }
        let a = array[min];
        array[min] = array[i];
        array[i] = a;
    }
    return array;
}


function sortDesc(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let max = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] > array[max])
                max = j;
        }
        let a = array[max];
        array[max] = array[i];
        array[i] = a;
    }
    return array;
}