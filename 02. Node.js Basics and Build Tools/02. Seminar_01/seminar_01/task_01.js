/** 
Задание №1 (тайминг 5 минут)
Необходимо описать состояние стека вызовов по мере выполнения скрипта

// Пример выполнения задания:
function foo() {
    console.log('Hello!');
}

foo();

    // Call stack
    // 1.
    // 2. foo()
    // 3. foo(), console.log()
    // 4. foo()
    // 5.

*/

function calculateDiscriminant(a, b, c) {
    return Math.pow(b, 2) - 4 * a *c
};

const a = 1;
const b = -3;
const c = 2;

const discriminant = calculateDiscriminant(a, b, c);
console.log('Дискриминант: ', discriminant);


/*
Состояние стека вызовов по мере выполнения скрипта:

Call stack
1. 
2. const discriminant = calculateDiscriminant(a, b, c);
3. function calculateDiscriminant(a, b, c),     Math.pow(b, 2) - 4 * a *c
4. function calculateDiscriminant(a, b, c)
5. 
6. console.log('Дискриминант: ', discriminant);
7.
*/