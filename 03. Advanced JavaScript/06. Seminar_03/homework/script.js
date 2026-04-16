/* **************** Задание № 1 **************** */
console.log(`****** Задание № 1 ******`);

const STORAGE_KEY = 'product_reviews';

// Переключение между "страницами"
function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.getElementById('reviews-detail').innerHTML = '';
}

// Сохранение в LocalStorage
function saveReview() {
  const product = document.getElementById('product-name').value.trim();
  const text = document.getElementById('review-text').value.trim();

  if (!product || !text) return alert("Заполните все поля!");

  const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');

  if (!data[product]) data[product] = [];
  data[product].push({
    id: Date.now(),
    text: text
  });

  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

  // Очистка полей
  document.getElementById('product-name').value = '';
  document.getElementById('review-text').value = '';
  alert("Отзыв сохранен!");
}

// Рендер списка продуктов
function renderProductList() {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  const listDiv = document.getElementById('product-list');
  listDiv.innerHTML = '';

  const products = Object.keys(data);
  if (products.length === 0) {
    listDiv.innerHTML = 'Отзывов пока нет.';
    return;
  }

  products.forEach(p => {
    const item = document.createElement('div');
    item.className = 'product-item';
    item.textContent = `${p} (${data[p].length})`;
    item.onclick = () => showReviewsFor(p);
    listDiv.appendChild(item);
  });
}

// Показ отзывов конкретного продукта
function showReviewsFor(productName) {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  const reviews = data[productName] || [];
  const detailDiv = document.getElementById('reviews-detail');

  detailDiv.innerHTML = `<h3>Отзывы о "${productName}":</h3>`;

  reviews.forEach(rev => {
    const card = document.createElement('div');
    card.className = 'review-card';
    card.innerHTML = `
                    <div>${rev.text}</div>
                    <button class="del-btn" onclick="deleteReview('${productName}', ${rev.id})">Удалить</button>
                `;
    detailDiv.appendChild(card);
  });
}

// Удаление отзыва
function deleteReview(productName, reviewId) {
  let data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');

  data[productName] = data[productName].filter(r => r.id !== reviewId);

  // Если у продукта больше нет отзывов — удаляем сам ключ продукта
  if (data[productName].length === 0) delete data[productName];

  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

  // Обновляем интерфейс
  renderProductList();
  if (data[productName]) {
    showReviewsFor(productName);
  } else {
    document.getElementById('reviews-detail').innerHTML = '';
  }
}