//defer (func,ms) => Function

export function defer(func, ms) {
    return function() {
        setTimeout(() => func.apply(this, arguments), ms)
    }
}

// const user = {
//     name: 'Tom',
//     sayHi() {
//         console.log(`Hi! I am ${this.name}!`)
//     }
// }

// const defferHi = defer(user.sayHi, 1000);
// defferHi.call({ name: "Nadya" });