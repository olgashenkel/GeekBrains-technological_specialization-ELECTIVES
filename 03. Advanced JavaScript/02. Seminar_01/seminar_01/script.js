// /* **************** Задание № 1 **************** */
// console.log(`****** Задание № 1 ******`);

// const REVIEWS = Symbol('rivers');
// const RATING = Symbol('rating');
// const TAGS = Symbol('tags');


// function addMetadata(book, key, value) {

//         if (!book[key]) {
//                 book[key] = [];
//         }
//         // Если это рейтинг, просто перезаписываем, если отзывы или теги — добавляем в массив
//         if (key === RATING) {
//                 book[key] = value;
//         } else {
//                 book[key].push(value);
//         }
// }

// function getMetadata(book, key) {
//         const data = book[key];

//         // Проверяем: если данных нет (undefined) или это пустой массив
//         if (data === undefined || (Array.isArray(data) && data.length === 0)) {
//                 return "данные отсутствуют";
//         }

//         return data;
// }

// const books = {
//         book1: {
//                 title: "Hitchhiker's Guide to the Galaxy",
//                 author: "Douglas Adams",
//                 year: 1979
//         },
//         book2: {
//                 title: "The Hobbit",
//                 author: "J.R.R. Tolkien",
//                 year: 1937
//         },
//         book3: {
//                 title: "1984",
//                 author: "George Orwell",
//                 year: 1949
//         }
// };


// addMetadata(books.book2, REVIEWS, 'Интересная книга');
// addMetadata(books.book2, REVIEWS, 'Рекомендую к прочтению');
// addMetadata(books.book2, RATING, 5);
// addMetadata(books.book2, TAGS, "фэнтези");

// // Выводим результат
// console.log("Название:", books.book2.title);
// console.log("Название:", books.book2.author);
// console.log("Рейтинг:", getMetadata(books.book2, RATING));
// console.log("Теги:", getMetadata(books.book2, TAGS));
// console.log("Отзывы:", getMetadata(books.book2, REVIEWS));

// // Демонстрация скрытности: символы не видны при обычном перечислении
// console.log("Ключи объекта:", Object.keys(books.book1)); 

// console.log('');

// // Выводим результат
// console.log("Название:", books.book3.title);
// console.log("Название:", books.book3.author);
// console.log("Рейтинг:", getMetadata(books.book3, RATING));
// console.log("Теги:", getMetadata(books.book3, TAGS));
// console.log("Отзывы:", getMetadata(books.book3, REVIEWS));

// // Демонстрация скрытности: символы не видны при обычном перечислении
// console.log("Ключи объекта:", Object.keys(books.book2)); // ['title', 'author']



// /* **************** Задание № 2 **************** */
// console.log(`\n****** Задание № 2 ******\n`);

// const library = {
//   books: [
//     { title: "1984", author: "George Orwell" },
//     { title: "Brave New World", author: "Aldous Huxley" },
//     { title: "Fahrenheit 451", author: "Ray Bradbury" }
//   ],

//   // 1. Свойство-символ Symbol.iterator
//   [Symbol.iterator]() {
//     let index = 0;
//     const books = this.books;

//     // 2. Реализация кастомного итератора
//     return {
//       next() {
//         if (index < books.length) {
//           return { value: books[index++], done: false };
//         } else {
//           return { done: true };
//         }
//       }
//     };
//   }
// };

// // 3. Перебор книг через цикл for...of
// for (const book of library) {
//   console.log(`Название книги: ${book.title}`);
//   console.log(`Автор: ${book.author}`);
//   console.log('');
// }





// /* **************** Задание № 3 **************** */
// console.log(`\n****** Задание № 3 ******`);

// function getActiveElements() {
//   // Собираем все div и превращаем NodeList в массив
//   const divs = Array.from(document.querySelectorAll('div'));

//   // Фильтруем элементы, у которых есть атрибут data-active
//   const activeDivs = divs.filter(el => el.hasAttribute('data-active'));

//   console.log(activeDivs);
// }

// getActiveElements();

/*
document.querySelectorAll('div') находит все нужные элементы.
Array.from() делает из "подобного массиву" объекта настоящий массив, чтобы стали доступны методы вроде .filter().
hasAttribute('data-active') проверяет наличие атрибута, независимо от его значения.
*/


/* **************** Задание № 4 **************** */
console.log(`\n****** Задание № 4 ******\n`);

// 1. Map: урок => преподаватель
let lessons = new Map();
lessons.set("Математика", "Смирнов");
lessons.set("История", "Иванова");

// 2. Map: студент => Set уникальных уроков
let studentVisits = new Map();

// Функция для добавления посещения
function addVisit(student, lesson) {
    if (!studentVisits.has(student)) {
        studentVisits.set(student, new Set());
    }
    studentVisits.get(student).add(lesson);
}

// Добавляем данные для Ивана
addVisit("Иван", "Математика");
addVisit("Иван", "История");
addVisit("Иван", "Математика"); // Дубликат не добавится благодаря Set

// Проверка:
console.log(`Преподаватель по Математике: ${lessons.get("Математика")}`); 

// Вывод уроков Ивана через запятую
let ivansLessons = Array.from(studentVisits.get("Иван")).join(", ");
console.log(`Уроки Ивана: ${ivansLessons}`); 

/*
Map для учителей: Позволяет мгновенно найти преподавателя по названию предмета.
Set для студента: Гарантирует, что если вы случайно запишете посещение одного и того же урока дважды, в списке он останется в единственном экземпляре.
Map для студентов: Удобно группирует наборы уроков по именам учеников.
*/