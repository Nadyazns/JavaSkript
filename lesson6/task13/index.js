//const clients = ['John', 'Nadya', 'Bob'];
//let balances = [23000, 24500, 12000];


function withdraw(clients, balances, client, amount) {
    let balance = balances;
    for (let i = 0; i < clients.length; i++) {
        while (clients[i] == client) {
            balance[i] = balances[i] - amount;

            if (amount > balance[i]) return -1;
            return balance[i];
        }

    }

}

/*let index = 0;
for (let i = 0; i < clients.length; i++) {
        if (clients[i] == client) {
            index=[i];
            break;
        }
    }
    if(balances[index]>=amount){
        balances[index]-=amount;
        return balances[index];
    }
    return -1*/





//console.log(withdraw(clients, balances, 'Nadya', 500))