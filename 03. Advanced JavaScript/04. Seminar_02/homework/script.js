/* **************** Задание № 1 **************** */
console.log(`****** Задание № 1 ******`);

class Library {
  #books = [];

  constructor(initialBooks = []) {
    // Проверка на дубликаты в начальном списке
    const uniqueBooks = new Set(initialBooks);
    if (uniqueBooks.size !== initialBooks.length) {
      throw new Error("Начальный список книг содержит дубликаты.");
    }
    this.#books = [...initialBooks];
  }

  // Геттер для получения списка всех книг
  get allBooks() {
    return this.#books;
  }

  // Добавление новой книги
  addBook(title) {
    if (this.hasBook(title)) {
      throw new Error(`Книга с названием "${title}" уже есть в библиотеке.`);
    }
    this.#books.push(title);
  }

  // Удаление книги
  removeBook(title) {
    const index = this.#books.indexOf(title);
    if (index === -1) {
      throw new Error(`Книги "${title}" нет в библиотеке, её невозможно удалить.`);
    }
    this.#books.splice(index, 1);
  }

  // Проверка наличия книги
  hasBook(title) {
    return this.#books.includes(title);
  }
}

// Пример использования:
try {
  const myLibrary = new Library(["Три сестры", "Братья Карамазовы"]);
  myLibrary.addBook("Анна Каренина");
  console.log(myLibrary.allBooks); // ['Три сестры', 'Братья Карамазовы', 'Анна Каренина']
  
  myLibrary.removeBook("1984");
  console.log(myLibrary.hasBook("1984")); // false
} catch (error) {
  console.error(error.message);
}




/* **************** Задание № 2 **************** */
console.log(`\n****** Задание № 2 ******\n`);

const initialData = [
    {
        product: "Apple iPhone 13",
        reviews: [
            { id: "1", text: "Отличный телефон! Батарея держится долго." },
            { id: "2", text: "Камера супер, фото выглядят просто потрясающе." },
        ],
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        reviews: [
            { id: "3", text: "Интересный дизайн, но дорогой." },
        ],
    },
    {
        product: "Sony PlayStation 5",
        reviews: [
            { id: "4", text: "Люблю играть на PS5, графика на высоте." },
        ],
    },
];

const productSelect = document.getElementById('product-select');
const reviewText = document.getElementById('review-text');
const submitBtn = document.getElementById('submit-btn');
const reviewsContainer = document.getElementById('reviews-container');
const errorMessage = document.getElementById('error-message');

// 1. Инициализация: загружаем товары и существующие отзывы
function init() {
    initialData.forEach(item => {
        // Добавляем товар в выпадающий список
        const option = document.createElement('option');
        option.value = item.product;
        option.textContent = item.product;
        productSelect.appendChild(option);

        // Отображаем начальные отзывы
        item.reviews.forEach(review => {
            displayReview(item.product, review.text);
        });
    });
}

// 2. Функция отображения отзыва в DOM
function displayReview(productName, text) {
    const reviewDiv = document.createElement('div');
    reviewDiv.style.borderBottom = "1px solid #ccc";
    reviewDiv.style.marginBottom = "10px";
    reviewDiv.innerHTML = `<strong>${productName}:</strong> <p>${text}</p>`;
    reviewsContainer.appendChild(reviewDiv);
}

// 3. Основная функция добавления отзыва с генерацией исключения
function addReview() {
    const text = reviewText.value.trim();
    const product = productSelect.value;

    try {
        if (text.length < 50 || text.length > 500) {
            throw new Error(`Недопустимая длина отзыва: сейчас ${text.length} симв. (нужно от 50 до 500)`);
        }

        displayReview(product, text);
        reviewText.value = ''; // Очистка поля
        errorMessage.textContent = ''; // Сброс ошибки
    } catch (e) {
        errorMessage.textContent = e.message;
    }
}

submitBtn.addEventListener('click', addReview);

// Запуск приложения
init();
