// /* **************** Задание № 1 **************** */

// console.log(`****** Задание № 1 ******`);


// /**
//  * Определение размера окна
// */ 

// function logWindowSize() {
//   console.log(`Ширина: ${window.innerWidth}, Высота: ${window.innerHeight}`);
// }

// // Слушаем событие изменения размера
// window.addEventListener('resize', logWindowSize);

// // Вызываем один раз при загрузке, чтобы увидеть текущий размер
// logWindowSize();


// /**
//  * Подтверждение закрытия страницы
// */ 
// window.addEventListener('beforeunload', (event) => {
//   event.preventDefault();
//   event.returnValue = ''; // Необходимо для активации диалога в Chrome/Edge
// });

// document.getElementById('backBtn').onclick = () => history.back();
// document.getElementById('forwardBtn').onclick = () => history.forward();



// /* **************** Задание № 2 **************** */

// console.log(`****** Задание № 2 ******`);

// const container = document.getElementById('container');
// let counter = 0;

// // 1. Добавление элемента
// document.getElementById('add').addEventListener('click', () => {
//   counter++;
//   const newBox = document.createElement('div');
//   newBox.className = 'box';
//   newBox.textContent = counter;
//   container.appendChild(newBox);
// });

// // 2. Удаление последнего элемента
// document.getElementById('remove').addEventListener('click', () => {
//   const boxes = container.querySelectorAll('.box');
//   if (boxes.length > 0) {
//     boxes[boxes.length - 1].remove();
//   }
// });

// // 3. Клонирование последнего элемента
// document.getElementById('clone').addEventListener('click', () => {
//   const boxes = container.querySelectorAll('.box');
//   if (boxes.length > 0) {
//     const lastBox = boxes[boxes.length - 1];
//     const clone = lastBox.cloneNode(true);
//     container.appendChild(clone);
//   }
// });




/* **************** Задание № 3 **************** */

console.log(`****** Задание № 3 ******`);

// 3. Начальные данные
const defaultArticles = [{
    id: 1,
    title: "Первая статья",
    text: "Это текст первой статьи для примера."
  },
  {
    id: 2,
    title: "Вторая статья",
    text: "Bootstrap делает стилизацию очень быстрой."
  }
];

let articles = JSON.parse(localStorage.getItem('articles')) || defaultArticles;

const container = document.getElementById('articles-container');
const addBtn = document.getElementById('add-btn');

// Рендеринг списка
function render() {
  container.innerHTML = '';
  articles.forEach(art => {
    const card = document.createElement('div');
    card.className = 'col-12 mb-3';
    card.innerHTML = `
                <div class="card shadow-sm">
                    <div class="card-body">
                        <h2 class="card-title h4 text-primary">${art.title}</h2>
                        <p class="card-text text-muted">${art.text}</p>
                        <button onclick="editArticle(${art.id})" class="btn btn-outline-secondary btn-sm me-2">Редактировать</button>
                        <button onclick="deleteArticle(${art.id})" class="btn btn-outline-danger btn-sm">Удалить</button>
                    </div>
                </div>
            `;
    container.appendChild(card);
  });
  // 7. Сохранение
  localStorage.setItem('articles', JSON.stringify(articles));
}

// 4. Добавление
addBtn.addEventListener('click', () => {
  const newArt = {
    id: Date.now(),
    title: "Новая статья",
    text: "Введите содержание статьи..."
  };
  articles.push(newArt);
  render();
});

// 5. Удаление
function deleteArticle(id) {
  articles = articles.filter(art => art.id !== id);
  render();
}

// 6. Редактирование
function editArticle(id) {
  const art = articles.find(a => a.id === id);
  const newTitle = prompt("Измените заголовок:", art.title);
  const newText = prompt("Измените текст:", art.text);

  if (newTitle !== null) art.title = newTitle;
  if (newText !== null) art.text = newText;

  render();
}

render();