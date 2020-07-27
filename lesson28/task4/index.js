// cosnt add3 = value => value + 3;
// cosnt mult2 = value => value * 2;
// cosnt div4 = value => value / 4;



export const compose = (...funcs) => value => {
    return funcs.reduce((acc, func) => func(acc), value)
};

// const doEverything = compose(
//     add3,
//     mult2,
//     div4,
// );

// console.log(doEverything(3));