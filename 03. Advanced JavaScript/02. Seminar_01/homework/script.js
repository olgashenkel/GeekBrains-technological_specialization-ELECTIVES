/* **************** Задание № 1 **************** */
console.log(`****** Задание № 1 ******`);

const musicCollection = {
    albums: [{
            title: "Ночь",
            artist: "Кино",
            year: 1986
        },
        {
            title: "Это не любовь...",
            artist: "Кино",
            year: 1985
        },
        {
            title: "Королевство кривых",
            artist: "Пикник",
            year: 2005
        },
        {
            title: "Иероглиф",
            artist: "Пикник",
            year: 1986
        },
    ],

    // 1. Свойство-символ Symbol.iterator
    [Symbol.iterator]() {
        let index = 0;
        const albums = this.albums;

        // 2. Реализация кастомного итератора
        return {
            next() {
                if (index < albums.length) {
                    return {
                        value: albums[index++],
                        done: false
                    };
                } else {
                    return {
                        done: true
                    };
                }
            }
        };
    }
};

// 3. Перебор альбомов через цикл for...of
for (const album of musicCollection) {
    console.log(`Название альбома: "${album.title}"`);
    console.log(`Исполнитель: ${album.artist} (${album.year})`);
    console.log('');
}


/* **************** Задание № 2 **************** */
console.log(`\n****** Задание № 2 ******\n`);

// 1. Хранилище: Блюдо -> Повар
const dishToChef = new Map([
  ["Пицца 'Маргарита'", "Виктор"],
  ["Пицца 'Пепперони'", "Виктор"],
  ["Суши 'Филадельфия'", "Ольга"],
  ["Суши 'Калифорния'", "Ольга"],
  ["Тирамису", "Дмитрий"],
  ["Чизкейк", "Дмитрий"]
]);

// 2. Объекты клиентов
const alexey = { name: "Алексей" };
const maria = { name: "Мария" };
const irina = { name: "Ирина" };

// 3. Хранилище: Клиент -> Список блюд
const orders = new Map();

orders.set(alexey, ["Пицца 'Пепперони'", "Тирамису"]);
orders.set(maria, ["Суши 'Калифорния'", "Пицца 'Маргарита'"]);
orders.set(irina, ["Чизкейк"]);

// Функция для вывода заказов в консоль
function printOrders(ordersMap, dishesMap) {
  for (let [client, dishes] of ordersMap) {
    console.log(`Клиент ${client.name} заказал:`);
    dishes.forEach(dish => {
      const chef = dishesMap.get(dish);
      console.log(`  - ${dish} (повар: ${chef})`);
    });
  }
}

printOrders(orders, dishToChef);
