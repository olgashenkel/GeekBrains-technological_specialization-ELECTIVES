const imgElement = document.getElementById('main-img');
const authorElement = document.getElementById('author-name');
const likeCountElement = document.getElementById('like-count');
const likeBtn = document.getElementById('like-btn');
const nextBtn = document.getElementById('next-btn');
const historyList = document.getElementById('history-list');

let currentPhotoData = null;

// Функция получения случайного фото через Picsum
async function fetchPhoto() {
    try {
        // Запрашиваем список фото (около 100 шт) и берем случайное из них
        // Это позволяет получить ID и имя автора сразу
        const response = await fetch(`https://picsum.photos{Math.floor(Math.random() * 10)}&limit=10`);
        const photos = await response.json();
        const randomPhoto = photos[Math.floor(Math.random() * photos.length)];
        
        currentPhotoData = randomPhoto;
        updateUI(randomPhoto);
        addToHistory(randomPhoto);
    } catch (error) {
        console.error("Ошибка загрузки:", error);
    }
}

function updateUI(photo) {
    imgElement.src = `https://picsum.photos{photo.id}/600/400`;
    authorElement.textContent = photo.author;
    
    // Загружаем лайки именно для этого фото из LocalStorage
    const savedLikes = localStorage.getItem(`likes_${photo.id}`) || 0;
    likeCountElement.textContent = savedLikes;
}

// Кнопка лайка
likeBtn.addEventListener('click', () => {
    if (!currentPhotoData) return;
    
    let count = parseInt(likeCountElement.textContent);
    count++;
    likeCountElement.textContent = count;
    
    localStorage.setItem(`likes_${currentPhotoData.id}`, count);
});

// Кнопка «Следующее»
nextBtn.addEventListener('click', fetchPhoto);

// История просмотров
function addToHistory(photo) {
    let history = JSON.parse(localStorage.getItem('my_history')) || [];
    
    // Добавляем в начало массива
    const entry = { author: photo.author, time: new Date().toLocaleTimeString() };
    history.unshift(entry);
    
    // Храним только последние 10 записей
    if (history.length > 10) history.pop();
    
    localStorage.setItem('my_history', JSON.stringify(history));
    renderHistory();
}

function renderHistory() {
    const history = JSON.parse(localStorage.getItem('my_history')) || [];
    historyList.innerHTML = history
        .map(item => `<li>[${item.time}] — ${item.author}</li>`)
        .join('');
}

// Инициализация
fetchPhoto();
renderHistory();
