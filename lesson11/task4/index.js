const countOccurrences = (mainstr, str) => {
    if (str.length === 0) {
        return null;
    }

    return mainstr.split(str).length - 1;
}

let mainstr = 'nadyalkjdflkjfdlnadyahadflnad';
let str = "nadya";

console.log(countOccurrences(mainstr, str))