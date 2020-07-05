'use strict';

// const obj = {
//     name: 'Tom',
//     sayHi() {
//         console.log(this);
//     }
// };
// // obj.sayHi();
// const func = obj.sayHi;
// func();

export const event = {
    guests: [
        { name: 'Nadya', email: 'n@gmail.com', age: 33 },
        { name: 'Alex', email: 'a@gmail.com', age: 17 },
    ],
    message: 'Welcome to the party!',
    getInvitations() {
        return this.guests.filter(({ age }) => age >= 18).map(({ name, email }) => ({
            email,
            text: `Dear ${name}! ${this.message}`
        }));
    }
}

console.log(event.getInvitations());