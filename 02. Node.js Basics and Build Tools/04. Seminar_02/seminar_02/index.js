// Задание № 0
// const uuid = require('uuid');

// const id = uuid.v4();
// console.log(id);



//---------- Задание № 1
const np = require('number-precision');

function calculateResultSum(purchases, discount) {
    let total = purchases.reduce((acc, purchase) => acc += purchase, 0);

    total = total * discount;
    return total;
}

const total = calculateResultSum([12.1, 32.2, 43.1], 0.9);

console.log("Общая стоимость покупок: " + total + " рублей");
