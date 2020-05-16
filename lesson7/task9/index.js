// input: Array;
// output: Array;

// algo:
// 1. find clients and index of client;
// 2. find clients balance;
// 3. withraw money from clients balance;
// 4. return new Array;


// let clients = ['Alex', 'Nadya', 'Ann', 'Tolik'];
// let balances = [200, 500, 800, 450];

let withdraw = (clients, balances, client, amount) => {
    let indexOfElem = balances[clients.indexOf(client)] = balances[clients.indexOf(client)] - amount;

    if (amount > balances[clients.indexOf(client)]) {
        delete balances[indexOfElem];
        return -1;
    }
    return balances;

}

// console.log(withdraw(clients, balances, 'Alex', 500));