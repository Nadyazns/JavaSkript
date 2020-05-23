//input:arr;
//output:arr;

//algo
// filter arr to leave only numbers;
// to fixed for 2 numbers after.
// add $ return the array;


let transactions = [' 3.5', '14.50', 20, '2 dollars'];

const cleanTransactionsList = arr => {
    let cleanList = [...arr];

    cleanList = arr.map(elem => parseFloat(elem).toFixed(2));

    return cleanList.map(num => '$' + num);
}

console.log(cleanTransactionsList(transactions));