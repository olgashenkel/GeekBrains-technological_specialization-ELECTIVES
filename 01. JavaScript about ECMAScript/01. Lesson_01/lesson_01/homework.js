/*
************* Домашнее задание *************

************* Задание 1 *************
Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки

************* Задание 2 *************
Напишите функцию createCounter, которая создает счётчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

************* Задание 3 *************
Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
_________________________________________________________________________
| Пример:                                                               |
| const rootElement = document.getElementById('root');                  | 
| const targetElement = findElementByClass(rootElement, 'my-class');    | 
| console.log(targetElement);                                           | 
|_______________________________________________________________________|
*/


/* ******************** Задание № 1 ******************** */
console.log('****** Задание № 1 ******');
const arr = [1, 5, 7, 9];

console.log(Math.min(...arr));


/* ******************** Задание № 2 ******************** */
console.log('\n****** Задание № 2 ******');

function createCounter(value = 0) {
    let count = value;
    return {
        increment: () => ++count,
        decrement: () => --count,
        getValue: () => count // Опционально, чтобы видеть результат
    };
}

const counter = createCounter(5);
console.log(`Initial value: ${counter.getValue()}`);
console.log(`Counter increment: ${counter.increment()}`); 
console.log(`Counter decrement: ${counter.decrement()}`); 


/* ******************** Задание № 3 ******************** */
console.log('\n****** Задание № 3 ******');

function findElementByClass(rootElement, className) {
    if (rootElement.classList && rootElement.classList.contains(className)) {
        return rootElement;
    }

    for (let i = 0; i < rootElement.children.length; i++) {
        const child = rootElement.children[i];
        const foundElement = findElementByClass(child, className);
        if (foundElement) {
            return foundElement;
        }
    }

    return null;
}