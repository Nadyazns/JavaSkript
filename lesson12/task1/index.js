// '1 + 2' => '1+2=3'


const calc = expression => {
    const a = expression.split(' ');
    // const [a,operator,b] = expression.split(' ');
    // console.log(a);
    let result;

    switch (a[1]) { //switch(operator)
        case '+':
            result = +a[0] + Number(a[2]); //Number(a)+b
            break;
        case '-':
            result = a[0] - a[2]; //a-b;
            break;
        case '*':
            result = a[0] * a[2]; //a*b;
            break;
        case '/':
            result = a[0] / a[2]; //a/b;
            break;
    }
    return expression + ' = ' + result;
    // return `${expression} = ${result};
}

// console.log(calc('9 - 15'));