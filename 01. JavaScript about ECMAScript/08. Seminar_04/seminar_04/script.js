/* **************** Задание № 1 **************** */
// console.log(`****** Задание № 1 ******\n`);

// // 1-ый вариант: вывод сообщений в соответствии с задержкой, но не по порядку
// function delayedMessage(message, delay) {
//   // Возвращаем промис, чтобы Promise.allSettled мог его "ждать"
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(message);
//       resolve();
//     }, delay);
//   });
// }

// async function runDelayedMessages() {
//   // Добавляем await, чтобы дождаться выполнения всех промисов
//   await Promise.allSettled([
//     delayedMessage('Привет, мир!', 2000),
//     delayedMessage('Как дела?', 1000),
//     delayedMessage('До свидания!', 3000),
//   ]);

//   console.log('----- Конец программы -----\n')
// }

// runDelayedMessages();


// // 2-ой вариант: вывод всех сообщений строго по порядку с помощью async/await
// // Функция-таймаут, которая возвращает Promise
// const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// async function funcMassages() {
//   const delayedMessage = async (message, delay) => {
//     await sleep(delay);
//     console.log(message);
//   };

//    await delayedMessage('Привет, мир!', 2000);
//    await delayedMessage('Как дела?', 1000);
//    await delayedMessage('До свидания!', 3000);

//   console.log('----- Конец программы -----\n');

// }

// funcMassages();



// /* **************** Задание № 2 **************** */
// console.log(`\n****** Задание № 2 ******`);

// const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// async function taskList(tasks, callback) {
//   for (const task of tasks) {
//     await sleep(task.time);
//     console.log(`Задача: ${task.name}, время выполнения: ${task.time}ms`);
//   }
//   callback();
// }


//   const task = [{
//       name: 'task 1',
//       time: 1000
//     },
//     {
//       name: 'task 2',
//       time: 3000
//     },
//     {
//       name: 'task 3',
//       time: 5000
//     },
//     {
//       name: 'task 4',
//       time: 2000
//     },
//     {
//       name: 'task 5',
//       time: 4000
//     },
//   ];

//   taskList(task, () => {
//     console.log('Все задачи выполнены!');
//   });


// /* **************** Задание № 3 **************** */
// console.log(`****** Задание № 3 ******`);


// function loadData(url) {
//   // 1. Создаем новый объект XMLHttpRequest
//   const xhr = new XMLHttpRequest();

//   // 2. Настраиваем запрос: тип GET, адрес url, асинхронно (true)
//   xhr.open('GET', url, true);

//   // 3. Регистрируем обработчик изменения состояния запроса
//   xhr.onreadystatechange = function () {
//     // Проверяем: запрос завершен (4) и сервер ответил "ОК" (200)
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       // Выводим полученные данные в консоль
//       console.log(xhr.responseText);
//     }
//   };

//   // 4. Отправляем запрос на сервер
//   xhr.send();
// }

// // Пример использования (с тестовым API):
// loadData('https://jsonplaceholder.typicode.com/posts/1');

/*
  Как это работает:
  readyState === 4: Означает, что операция полностью завершена.
  status === 200: Подтверждает, что сервер нашел ресурс и успешно его передал.
  xhr.responseText: Содержит текстовое тело ответа (чаще всего в формате JSON).
  Таким образом, когда запрос успешно завершится, мы увидим в консоли данные, полученные от сервера.
  */



// /* **************** Задание № 4 **************** */
// console.log(`****** Задание № 4 ******`);

// function loadData(url) {
//   // Выполняем запрос
//   fetch(url)
//     .then(response => {
//       // Проверяем, успешен ли ответ (статус 200-299)
//       if (response.ok) {
//         return response.text(); // Читаем тело ответа как текст
//       }
//       throw new Error('Ошибка сети: ' + response.status);
//     })
//     .then(data => {
//       // Выводим полученные данные в консоль
//       console.log(data);
//     })
//     .catch(error => {
//       // Обрабатываем возможные ошибки (например, отсутствие интернета)
//       console.error('Произошла ошибка:', error);
//     });
// }

// // Пример использования:
// loadData('users.json');

// /*
// Основные отличия:
//   - Лаконичность: Вместо проверки readyState и status, мы используем свойство response.ok.
//   - Цепочки вызовов: С помощью .then() логика обработки данных идет последовательно.
//   - Обработка ошибок: Метод .catch() перехватывает любые проблемы, которые могли возникнуть в процессе запроса.
// Таким образом, fetch обеспечивает более современный и удобный способ работы с асинхронными запросами по сравнению с XMLHttpRequest.
// */




// /* **************** Задание № 5 **************** */
console.log(`****** Задание № 5 ******`);


"use strict";

const url = "./users.json";
let usersData = []; // Переменная для хранения данных

async function getData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

// Функция отрисовки данных
function renderUsers(data) {
  const userListsClass = document.querySelector(".userLists__list");
  userListsClass.innerHTML = ""; // Очищаем список перед отрисовкой
  data.forEach((element) => {
    userListsClass.insertAdjacentHTML(
      "beforeend",
      `
      <li class="userLists__item">        
        <p class="userLists__name"><b>Name:</b> ${element.name}</p>
        <p class="userLists__email"><u>Email:</u> ${element.email}</p>
      </li>
    `);
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  usersData = await getData(url); // Сохраняем данные в переменную
  if (usersData) renderUsers(usersData);
});


function sortUsersByName() {
  // Сортируем сохраненный массив usersData
  const sortedUsers = [...usersData].sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  renderUsers(sortedUsers); // Отрисовываем отсортированный список
}


document.querySelector('.sortedButton').addEventListener('click', sortUsersByName);