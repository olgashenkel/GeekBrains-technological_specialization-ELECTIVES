/* **************** Задание № 1 **************** */
console.log(`****** Задание № 1 ******`);

const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));



/* **************** Задание № 2 **************** */
console.log(`\n****** Задание № 2 ******`);

function createCounter() {
        let count = 0;
        return {
                increment() {
                        count++;
                        return count;
                },
                decrement() {
                        count--;
                        return count;
                },
                getValue() {
                        return count;
                }
        };
}

console.log(createCounter().increment());
console.log(createCounter().decrement());
console.log(createCounter().getValue());
console.log(createCounter().count);


/* **************** Задание № 3 **************** */
console.log(`\n****** Задание № 3 ******`);

function findElementByClass(root, className) {

        if (!root) return null;

        // Проверяем, есть ли класс у текущего элемента
        if (root.classList && root.classList.contains(className)) {
                return root;
        }

        // Рекурсивно обходим всех детей
        for (let child of root.children) {
                const result = findElementByClass(child, className);
                if (result) return result; // Если нашли в глубине, прокидываем наверх
        }

        return null;
}


const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);