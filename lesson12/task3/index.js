//input:arr;
//output:arr;

//algo
// filter arr to leave only numbers;
// to fixed for 2 numbers after.
// add $ return the array;


let transactions = [' 3.5', '14.50', 20, '2 dollars'];

const cleanTransactionsList = arr => {
    return arr.map(elem => Number(elem)).filter(Boolean).map(num => '$' + num.toFixed(2));


}

console.log(cleanTransactionsList(transactions));