// const arrName = [1,'Tom'] - литеральное создание массива
// const arrNa = new Array (1,2,3) - функция конструктор
// new Array () - пустой массив
// new Array (5) - массив из 5 элементов
const arrayName = []


function getSum(arrayName) {
    if (!Array.toString) {
        return null;
    }
    let sum = 0;
    for (i = 0; i < arrayName.length; i++) {
        sum += arrayName[i];
    }
    return sum;
}