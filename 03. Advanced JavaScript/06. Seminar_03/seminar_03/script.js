// /* **************** Задание № 1 **************** */
// console.log(`****** Задание № 1 ******`);

// // Имитация базы данных
// const mockDB = [
//     { title: "JavaScript захватил мир", content: "Сегодня стало известно, что даже кофеварки пишут на JS." },
//     { title: "Новый прорыв в AI", content: "Нейросети научились понимать, чего на самом деле хочет заказчик." },
//     { title: "Погода на завтра", content: "Ожидаются осадки в виде новых фреймворков." }
// ];

// const loadBtn = document.getElementById('load-btn');
// const newsContainer = document.getElementById('news-container');

// // Функция-промис с имитацией сети
// function fetchNews() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const isError = Math.random() < 0.1; // 10% вероятность ошибки
//             if (isError) {
//                 reject("Ошибка сервера: не удалось получить данные.");
//             } else {
//                 resolve(mockDB);
//             }
//         }, 2000);
//     });
// }

// loadBtn.addEventListener('click', () => {
//     // 1. Подготовка интерфейса
//     loadBtn.disabled = true;
//     loadBtn.textContent = "Загрузка...";
//     newsContainer.innerHTML = ""; 

//     // 2. Вызов функции
//     fetchNews()
//         .then((articles) => {
//             // Отрисовка новостей
//             articles.forEach(article => {
//                 const card = document.createElement('div');
//                 card.className = 'news-card';
//                 card.innerHTML = `<h3>${article.title}</h3><p>${article.content}</p>`;
//                 newsContainer.appendChild(card);
//             });
//         })
//         .catch((error) => {
//             // Обработка ошибки
//             newsContainer.innerHTML = `<p style="color: red;">${error}</p>`;
//         })
//         .finally(() => {
//             // 3. Возврат кнопки в исходное состояние в любом случае
//             loadBtn.disabled = false;
//             loadBtn.textContent = "Загрузить новости";
//         });
// });





// /* **************** Задание № 2 **************** */
// console.log(`\n****** Задание № 2 ******\n`);

// const tableSelect = document.getElementById('table');
// const chairSelect = document.getElementById('chair');
// const sofaSelect = document.getElementById('sofa');
// const saveBtn = document.getElementById('save');
// const clearBtn = document.getElementById('clear');
// const resultDiv = document.getElementById('result');

// // Функция для отображения комплекта на странице
// function displaySet(data) {
//     if (data) {
//         resultDiv.innerHTML = `
//                     <h3>Ваш выбранный комплект:</h3>
//                     <ul>
//                         <li><strong>Стол:</strong> ${data.table}</li>
//                         <li><strong>Стул:</strong> ${data.chair}</li>
//                         <li><strong>Диван:</strong> ${data.sofa}</li>
//                     </ul>
//                 `;
//     } else {
//         resultDiv.innerHTML = '<p class="empty-msg">Выбор не сделан и предыдущие настройки удалены.</p>';
//     }
// }

// // Загрузка данных при старте
// function loadSettings() {
//     const savedData = localStorage.getItem('furnitureSet');
//     if (savedData) {
//         const data = JSON.parse(savedData);
//         // Устанавливаем значения в селектах
//         tableSelect.value = data.table;
//         chairSelect.value = data.chair;
//         sofaSelect.value = data.sofa;
//         // Показываем результат
//         displaySet(data);
//     } else {
//         resultDiv.innerHTML = '<p class="empty-msg">Комплект еще не сохранен.</p>';
//     }
// }

// // Сохранение
// saveBtn.addEventListener('click', () => {
//     const furnitureSet = {
//         table: tableSelect.value,
//         chair: chairSelect.value,
//         sofa: sofaSelect.value
//     };
//     localStorage.setItem('furnitureSet', JSON.stringify(furnitureSet));
//     displaySet(furnitureSet);
// });

// // Очистка
// clearBtn.addEventListener('click', () => {
//     localStorage.removeItem('furnitureSet');
//     displaySet(null);
// });

// // Инициализация при загрузке страницы
// loadSettings();




// /* **************** Задание № 3 **************** */
// console.log(`\n****** Задание № 3 ******`);

// const table = document.getElementById('table');
// const chair = document.getElementById('chair');
// const sofa = document.getElementById('sofa');
// const result = document.getElementById('result');

// // Ключ, под которым мы храним данные в браузере
// const STORAGE_KEY = 'furniture_config';

// // 1. Функция отображения результата
// function updateUI(data) {
//     if (data) {
//         result.innerHTML = `<h3>Ваш комплект:</h3>
//                                    <p>Стол: ${data.table}, Стул: ${data.chair}, Диван: ${data.sofa}</p>`;
//     } else {
//         result.innerHTML = '<p>Выбор не сделан и предыдущие настройки удалены.</p>';
//     }
// }

// // 2. ЗАГРУЗКА: При загрузке страницы проверяем localStorage
// window.addEventListener('DOMContentLoaded', () => {
//     const saved = localStorage.getItem(STORAGE_KEY);
//     if (saved) {
//         const data = JSON.parse(saved); // Превращаем строку обратно в объект
//         table.value = data.table;
//         chair.value = data.chair;
//         sofa.value = data.sofa;
//         updateUI(data);
//     }
// });

// // 3. СОХРАНЕНИЕ: Записываем объект в localStorage
// document.getElementById('save').addEventListener('click', () => {
//     const config = {
//         table: table.value,
//         chair: chair.value,
//         sofa: sofa.value
//     };
//     // Сохраняем как строку (localStorage умеет хранить только строки)
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
//     updateUI(config);
//     alert('Комплект успешно сохранен!');
// });

// // 4. ОЧИСТКА: Удаляем ключ из localStorage
// document.getElementById('clear').addEventListener('click', () => {
//     localStorage.removeItem(STORAGE_KEY);
//     updateUI(null);
// });



/* **************** Задание № 4 **************** */
console.log(`\n****** Задание № 4 ******\n`);


// Функция переключения страниц
function showPage(pageId) {
    document.querySelectorAll('.card').forEach(card => card.classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');
    document.getElementById('loginError').innerText = '';
}

// Регистрация
function register() {
    const login = document.getElementById('regLogin').value;
    const pass = document.getElementById('regPass').value;

    if (login && pass) {
        localStorage.setItem('user_' + login, pass); // Сохраняем пару логин:пароль
        alert('Регистрация успешна! Теперь войдите.');
        showPage('loginPage');
    } else {
        alert('Заполните все поля');
    }
}

// Вход
function login() {
    const login = document.getElementById('loginUser').value;
    const pass = document.getElementById('loginPass').value;
    const storedPass = localStorage.getItem('user_' + login);

    if (storedPass && storedPass === pass) {
        document.getElementById('welcomeText').innerText = `Добро пожаловать, ${login}!`;
        showPage('welcomePage');
    } else {
        document.getElementById('loginError').innerText = 'Неверный логин или пароль';
    }
}

// Выход
function logout() {
    document.getElementById('loginUser').value = '';
    document.getElementById('loginPass').value = '';
    showPage('loginPage');
}