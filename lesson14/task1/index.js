// send message

let message = "Just learn it";

export const sendMessage = name => {
    const sender = 'Gromcode';
    console.log(`${name}, ${message}! Your ${sender}`)
};

export function setMessage(text) {
    message = text;
}
// sendMessage('Ann');
// setMessage('Good job');
// sendMessage('Ann');

// another.js
// import {sendMessage} from '.index.js';
// let message = 'bye!';
//sendMessage('Ann')