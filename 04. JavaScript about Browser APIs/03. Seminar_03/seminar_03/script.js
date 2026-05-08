// /* **************** Задание № 1 **************** */
// console.log(`****** Задание № 1 ******`);

// // Объекты товаров (Имитация данных)
// const products = [{
//         name: "Смартфон Galaxy",
//         category: "Электроника"
//     },
//     {
//         name: "Ноутбук Pro",
//         category: "Электроника"
//     },
//     {
//         name: "Футболка хлопок",
//         category: "Одежда"
//     },
//     {
//         name: "Джинсы Denim",
//         category: "Одежда"
//     },
//     {
//         name: "Кофеварка",
//         category: "Дом"
//     },
//     {
//         name: "Лампа настольная",
//         category: "Дом"
//     },
//     {
//         name: "Наушники Wireless",
//         category: "Электроника"
//     }
// ];

// const selectElement = document.getElementById('categorySelect');
// const container = document.getElementById('productList');

// // Функция для отрисовки списка
// function renderProducts(filter) {
//     // Очищаем текущий список
//     container.innerHTML = '';

//     // Фильтруем массив
//     const filteredProducts = filter === 'all' ?
//         products :
//         products.filter(p => p.category === filter);

//     // Создаем HTML-элементы для каждого товара
//     filteredProducts.forEach(product => {
//         const card = document.createElement('div');
//         card.className = 'product-card';
//         card.innerHTML = `
//                     <h3>${product.name}</h3>
//                     <span class="category-tag">${product.category}</span>
//                 `;
//         container.appendChild(card);
//     });
// }

// // Обработка событий
// selectElement.addEventListener('change', (event) => {
//     renderProducts(event.target.value);
// });

// // Первичная отрисовка при загрузке страницы
// renderProducts('all');



/* **************** Задание № 2 **************** */
console.log(`****** Задание № 2 ******`);

const gallery = document.getElementById('gallery');
const loader = document.getElementById('loader');

// Настройки: сколько фото подгружать за раз
const PHOTO_BATCH_COUNT = 6;

/**
 * Создает и добавляет фотографии в DOM
 */
function appendPhotos() {
    for (let i = 0; i < PHOTO_BATCH_COUNT; i++) {
        const img = document.createElement('img');

        // Используем сервис Picsum для получения случайных фото
        const randomId = Math.floor(Math.random() * 1000);
        img.src = `https://picsum.photos{randomId}`;
        img.alt = "Случайное фото";
        img.className = 'gallery-image';
        img.loading = 'lazy'; // Ленивая загрузка для производительности

        gallery.appendChild(img);
    }
}

/**
 * Следит за появлением футера/лоадера внизу экрана
 */
const observer = new IntersectionObserver((entries) => {
    // Если лоадер попал в зону видимости, грузим еще фото
    if (entries[0].isIntersecting) {
        appendPhotos();
    }
}, {
    rootMargin: '200px' // Начинаем подгрузку заранее (за 200px до конца)
});

// Запускаем слежку за индикатором загрузки
observer.observe(loader);

// Первая подгрузка при открытии сайта
appendPhotos();


/* **************** Задание № 3 **************** */
// console.log(`****** Задание № 3 ******`);

// const userListElement = document.getElementById('user-list');
// const refreshBtn = document.getElementById('refresh-btn');

// // Функция запроса (Шаг а)
// async function fetchUserList() {
//     try {
//         const response = await fetch('./users.json');
//         if (!response.ok) throw new Error('Ошибка сети');
//         return await response.json();
//     } catch (error) {
//         console.error(error);
//         return [];
//     }
// }

// // Основная логика отрисовки (Шаги d, e)
// async function renderUsers() {
//     refreshBtn.disabled = true;
//     userListElement.innerHTML = '<li class="loading">Секунду, получаем данные...</li>';

//     const users = await fetchUserList();
//     userListElement.innerHTML = ''; // Очищаем список

//     if (users.length === 0) {
//         userListElement.innerHTML = '<li>Не удалось загрузить пользователей. Проверьте интернет.</li>';
//     } else {
//         users.forEach(user => {
//             const li = document.createElement('li');
//             li.className = 'user-card';
//             li.innerHTML = `
//                     <h3>${user.name}</h3>
//                     <p><strong>Email:</strong> ${user.email}</p>
//                     <p><strong>Компания:</strong> ${user.company.name}</p>
//                 `;
//             userListElement.appendChild(li);
//         });
//     }
//     refreshBtn.disabled = false;
// }

// // Обработчик загрузки (Шаги b, c)
// window.addEventListener('load', renderUsers);

// // Обработчик для кнопки обновления
// refreshBtn.addEventListener('click', renderUsers);