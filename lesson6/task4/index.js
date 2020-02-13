const numbers = [11, 22, 33, 44, 55, 66, 77];
//const a = numbers[3];
//const b = numbers[0];

function swap(arr) {
    const [a, ...rest] = arr;
    return [...rest, a];
}