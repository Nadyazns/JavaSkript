// input:function;
// output:function;

// algorythm:

// saveCalls function takes func as arg and returns function withMemory;
//  push all the elements arguments to the function in empty array
// withMEmory.calls = []




export function saveCalls(func) {

    function withMemory(...args) {
        withMemory.calls.push(args);
        // console.log(withMemory.calls.push(args));
        return func.call(this, arguments);
    }
    withMemory.calls = [];
    return withMemory;
};


function test(a, b) {
    return Math.sqrt(a * a + b * b);
};
const testWithMemory = saveCalls(test);
testWithMemory(4);
testWithMemory(22, 'justdoit');
console.log(testWithMemory.calls);