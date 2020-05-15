// 1 learn requirements 
// 2 create algo
// 3 create prototype solution
// 4 refactoring and testing
// 5 final solution

// algorythm
// 1. iterate from 1 to n++;
// 2. write function that checks the number is Promise;
// 3. if number is prime - print it.Promise

// input: number;
// output: boolean;


// algo:
// 1. iterate from 1 to num:
// for 6
// 1 - true; 2 - true; 3 - true; 4 - false; 5 - false;
// 2.if num % i !== 0 - false;

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        // console.log(i + ' is a check');
        if (num % i === 0) {
            // console.log(i + "is prime");
            return false;
        }
    }
    // console.log('finished');
    return true;
}

// input: number;
// output: undefined;


function getPrimes(n) {
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}