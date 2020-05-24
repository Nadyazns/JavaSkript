const createMessenger = () => {

    let message = "Just learn it";
    let sender = 'Gromcode';

    function sendMessage(name) {

        console.log(`${name}, ${message}! Your ${sender}`);
    };

    function setMessage(text) {
        message = text;
    };

    function setSender(text) {
        sender = text;
    }
    return {
        sendMessage,
        setMessage,
        setSender,
    };
};

const messenger = createMessenger();
messenger.sendMessage('Bob');
const messenger2 = createMessenger();
messenger2.setMessage('Good job!');
messenger2.sendMessage('Bob');