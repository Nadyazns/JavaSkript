// export default (a, b) => a + b;

//input: arr
//output:number

// algo:
// 1. find the least number from array
// 2. return its square




export default (arr) => {
    if (!Array.isArray(arr) || arr.length === 0) {
        return null;
    }

    let moduleArr = arr.map(num => Math.abs(num));
    let min = Math.min(...moduleArr);
    return min * min;

}