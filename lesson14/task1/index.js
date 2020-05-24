// send message
'use strict'
let message = "Just learn it";

export function setMessage(text) {
    message = text;
}

function sendMessage(name) {
    const sender = 'Gromcode';
    console.log(`${name},${message}! Your ${sender}`)
};


setMessage('Good job');
sendMessage('Ann');

// another.js
// import {sendMessage} from '.index.js';
// let message = 'bye!';
//sendMessage('Ann')