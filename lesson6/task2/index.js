// const arrName = [1,'Tom'] - литеральное создание массива
// const arrNa = new Array (1,2,3) - функция конструктор
// new Array () - пустой массив
// new Array (5) - массив из 5 элементов
const arrayName = [12, 2, 3, 9]


function getSum(arrayName) {
    let sum = 0;
    if (!Array.isArray(arrayName)) {
        return null;
    }
    for (let i = 0; i < arrayName.length; i++) {

        sum += arrayName[i];
    }
    return sum;
}