// начальный массив
const numbersList = [1, 2, 3, 4, 5];

/* ==================================== */
/* ===> мутирующие методы массивов <=== */
/* ===> изменяют исходный массив <===== */
/* ==================================== */


/* pop - удалит из массива последний элемент и вернет его */

// c помощью метода pop достаньте последний элемент массива и поместите его в переменную lastNumber
// выведите эту переменную в консоль
console.log('before' + numbersList);
let res1 = numbersList.pop();
console.log(res1);
console.log('after' + numbersList)


/* push - добавит элемент в конец массива */

// c помощью метода push добавьте число 6 в конец массива
// выведите numbersList в консоль

console.log('before' + numbersList);
let res2 = numbersList.push(6);
console.log(res2);
console.log('after' + numbersList);


/* shift - удалит из массива первый элемент и вернет его */

// c помощью метода shift достаньте первый элемент массива и поместите его в переменную firstNumber
// выведите эту переменную в консоль

console.log('before' + numbersList);
let res3 = numbersList.shift(6);
console.log(res3);
console.log('after' + numbersList);


/* unshift - добавит элемент в начало массива */

// c помощью метода unshift добавьте число 0 в начало массива
// выведите numbersList в консоль

// console.log('before' + numbersList);


numbersList.unshift(0);

console.log(numbersList);



/* ======================================= */
/* ===> НЕ мутирующие методы массивов <=== */
/* ===> НЕ изменяют исходный массив <===== */
/* ======================================= */


/* метод map */
/* const newArr = arr.map(callback) - создает и возвращает новый массив. Длина нового и исходного массивов равны */
/* ф-ция callback запустится по очереди для каждого элемента начального массива arr */
/* элементы массива newArr - это результат вызова callback для каждого элемента arr */
/* newArr[i] = callback(arr[i]) */

// c помощью метода map создайте новый массив squaredNumbers, в котором будут квадраты чисел из numbersList
// выведите squaredNumbers в консоль


console.log('before' + numbersList);

const squaredNumbers = numbersList.map((el) => el * el);
// let callback = function(element) {
//     element += 100;
//     return element;
// };
// const squaredNumbers = numbersList.map(callback);

console.log('after' + numbersList);
console.log(squaredNumbers);


/* метод filter */
/* const newArr = arr.filter(callback) - создает и возвращает новый отфильтрованный массив. */
/* ф-ция callback запустится по очереди для каждого элемента начального массива arr */
/* в newArr попадут только те элементы arr, для которых callback(arr[i]) вернет true */
/* callback(arr[i]) === true -> элемент будет добавлен в финальный массив  */
/* callback(arr[i]) === false -> элемент НЕ будет добавлен в финальный массив  */

// c помощью метода filter создайте новый массив evenNumbers, в котором только четные числа из numbersList
// выведите evenNumbers в консоль


console.log('before' + numbersList);

// let callback1 = function(el) {
//     if (el >5)
//         return true;
//     else
//         return false;
// }

const filtered = squaredNumbers.filter((el, index, array) => {
    console.log(index);
    console.log(array);
    return el % 2 === 0;
});

console.log(filtered)

console.log('after filtered' + filtered);


/* метод find */
/* const arrElement = arr.filter(callback) - вернет первый элемент массива arr, который удовлетворяет условию в callback. */
/* ф-ция callback запустится по очереди для каждого элемента начального массива arr */
/* если callback(arr[i]) вернет true, то filter прекратит поиск и вернет этот элемент */

// c помощью метода find найдите первое нечетное число в numbersList и выведите его в консоль

const numbers = [1, 2, 3, 4, 5, 100, 40, 44, 55, 1234];

const res = numbers.find(el => el > 300);
console.log(res)


// FOREACH


let sum = 0;
console.log(numbers.forEach(el => sum += el));
console.log(sum);

// REDUCE 
console.log("before reduce");
let ress = numbers.reduce((acc, el, index) => {
    console.log('STEP ' + index + ' acc is ' + acc)
    return acc += el;
}, 0);

console.log(ress);
console.log('after reduce 2');


console.log("before reduce");
let ress1 = numbers.reduce((acc, el) => {
    if (el % 2 === 0)
        acc.push(el);
    return acc;
}, []);

console.log(ress1);
console.log('after reduce 2')