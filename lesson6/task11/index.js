const myArray = [3, 54, 1, 77, 32, 1, 1, 54]

function uniqueCount(array) {
    let unique = [];
    let k = 0;
    for (let i = 0; i < array.length; i++) {
        let j = 0;
        while (j < k && unique[j] !== array[i]) j++;
        if (j == k) unique[k++] = array[i];
    }
    return unique.length;
}
console.log(uniqueCount(myArray))