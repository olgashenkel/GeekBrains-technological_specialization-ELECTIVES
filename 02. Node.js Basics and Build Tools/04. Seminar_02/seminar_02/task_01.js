/** 
Задание №1 (тайминг 5 минут)

Необходимо найти, установить и применить библиотеку, которая позволит
избежать проблем со сложением и умножением чисел с плавающей запятой

const NP = require('number-precision');

function calculateResultSum(purchases, discount) {
    let total = purchases.reduce((acc, purchase) => acc += purchase, 0);

    total = total * discount;
    return total;
};

const total = calculateResultSum([12.1, 32.2, 43.1], 0.9);

console.log("Общая стоимость покупок: " + total + " рублей");
*/


const NP = require('number-precision');

function calculateResultSum(purchases, discount) {
    let total = purchases.reduce((acc, purchase) => NP.plus(acc += purchase), 0);

    total = NP.times(total, discount);
    return total;
};

const total = calculateResultSum([12.1, 32.2, 43.1], 0.9);

console.log("Общая стоимость покупок: " + total + " рублей");


