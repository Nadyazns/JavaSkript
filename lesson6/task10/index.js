const clients = ['John', 'Nadya', 'Bob'];
let balances = [23000, 24500, 12000];


function withdraw(clients, balances, client, amount) {
    let balance = balances;
    for (let i = 0; i < clients.length; i++) {
        for (let j = i; j < balances.length; j++) {
            if (amount <= balances[j] && client === clients[i]) {
                balances[j] = balances[j] - amount;
                balance[j] = balances[j]
                return balance;
            } else if (amount > balances[j] && client === clients[i]) {
                return -1;
            }
        }
    }

}


console.log(withdraw(clients, balances, 'Nadya', 500))