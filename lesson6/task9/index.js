const myArray = [3, 54, 1, 77, 32, 1, 1, 54]

function removeDuplicates(array) {
    let sorted = [];
    let k = 0;
    for (let i = 0; i < array.length; i++) {
        let j = 0;
        while (j < k && sorted[j] !== array[i]) j++;
        if (j == k) sorted[k++] = array[i];
    }
    return sorted;
}
console.log(removeDuplicates(myArray))