const { calculateResultSum } = require('./calculateResultSum');

require('colors');

const total = calculateResultSum([1.1, 3.2, 4.1], 0.9);

console.log("Общая стоимость покупок: " + (total > 50? `${total}`.red : `${total}`.green) + " рублей");

