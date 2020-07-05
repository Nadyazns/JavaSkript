export function sumOfSquares() {
    // return [].reduce.apply(arguments, [(acc, elem) => {
    //     return acc + elem * elem;
    // }, 0])
    // or
    // return [].reduce.apply(arguments, (acc, elem) => {
    //     return acc + elem * elem;
    // }, 0)
    // or
    return [...arguments].reduce((acc, elem) => {
        return acc + elem * elem;
    })
}
// console.log(sumOfSquares(1, 2, 3));