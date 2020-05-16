// input: Array;
// output: Array;

// algo:
// 1. iterate clients and index of client;
// 2. iterate balances and find clints balance;
// 3. withraw money;
// 4. return new Array;


let clients = ['Alex', 'Nadya', 'Ann', 'Tolik'];
let balances = [200, 500, 800, 450];

let withdraw = (clients, balances, client, amount) => {
    let indexOfElem = balances[clients.indexOf(client)] = balances[clients.indexOf(client)] - amount;

    if (indexOfElem < 0) {
        delete balances[indexOfElem];
        return -1;
    }
    return balances;
    //     console.log(clients.indexOf(client) = balances.indexOf(amount))
}

console.log(withdraw(clients, balances, 'Alex', 50));