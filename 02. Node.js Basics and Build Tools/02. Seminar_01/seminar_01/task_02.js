/**
 * Задание №2 (тайминг 10 минут)
 * Необходимо описать состояние стека вызовов по мере выполнения скрипта
 * Функция возвращает сумму ряда натуральных чисел
 */

function suOfNumbers(n) {
    if (n === 1) {
        return 1; // базовый случай: сумма для n = 1 равна 1
    } else {
        return n + suOfNumbers(n - 1); // рекурсивный вызов суммы для n-1
    }
}

const n = 4;
const sum = suOfNumbers(n);
console.log('Сумма ряда натуральных чисел до ', n, ': ', sum);


// Call stack
// 1. 
// 2. function suOfNumbers(n)   // 4
// 3. function suOfNumbers(n), function suOfNumbers(n)  // 3
// 4. function suOfNumbers(n), function suOfNumbers(n), function suOfNumbers(n) //2
// 5. function suOfNumbers(n), function suOfNumbers(n), function suOfNumbers(n), function suOfNumbers(n)    // 1
// 6. function suOfNumbers(n), function suOfNumbers(n), function suOfNumbers(n)
// 7. function suOfNumbers(n), function suOfNumbers(n)
// 8. function suOfNumbers(n)
// 9. 
// 10. console.log('Сумма ряда натуральных чисел до ', n, ': ', sum);
// 11. 
