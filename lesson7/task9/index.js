// input: Array;
// output: number;

// algo:
// 1. find index of the client;
// 2. find  clints balance and compare with amount;
// 3. withraw money;
// 4. return newBalance;


// let clients = ['Alex', 'Nadya', 'Ann', 'Tolik'];
// let balances = [200, 500, 800, 450];

let withdraw = (clients, balances, client, amount) => {
    let neededIndex = clients.indexOf(client);

    let newBalances = [...balances];
    if ((newBalances[neededIndex] = newBalances[neededIndex] - amount) < 0) {

        return -1;
    } else {
        let newBalance = balances[neededIndex] = balances[neededIndex] - amount;

        return newBalance;
    }
}

// console.log(withdraw(clients, balances, 'Nadya', 5));