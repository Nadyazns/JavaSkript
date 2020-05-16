// let arr = ['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya', 'Nadya'];
// let text = 'ya';


function filterNames(arr, text) {
    const result = arr.filter((arr) => {
        return arr.length > 5 && arr.includes(text);
    })
    return result;
}
// const a = filterNames(arr, text);
// console.log(a);