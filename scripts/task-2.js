// Задание 2! Простая функция-калькулятор.

// Напишем функцию, которая будет принимать массив чисел.
// На выходе эта функция должна возвращать сумму этих чисел.
// Добавим функционал, для того, чтобы игнорировать другие типы данных в этом массиве (если они есть).

function calcMass(array){
    sum = 0;
    for(var i = 0; i < array.length; i++){
        sum += array[i];
    }
    console.log(sum);
 }
 
calcMass([1,2,3,4,5,6,7,8,9,10]);