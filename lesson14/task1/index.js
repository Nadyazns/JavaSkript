// send message
'use strict'
let message = "Just learn it";

function setMessage(text) {
    message = text;
}

function sendMessage(name) {
    const sender = 'Gromcode';
    console.log(`${name},${message}! Your ${sender}`)
};


setMessage('Good job');
sendMessage('Ann');