export function createArrayOfFunctions(len) {
    if (typeof len != "number") {
        return null;

    }
    let arr = [];
    for (let i = 0; i < len; i++) {
        arr[i] = function() {
            return i;
        }

    }
    if (len == undefined) {
        return arr.length = 0;
    }
    return arr;
}

// console.log(createArrayOfFunctions('k')[5]());