// /* **************** Задание № 1 **************** */
// console.log(`****** Задание № 1 ******`);

// class BankAccount {
//   #balance = 0;

//   constructor(initialBalance) {
//     if (initialBalance < 0) {
//       throw new Error("Начальный баланс не может быть отрицательным");
//     }
//     this.#balance = initialBalance;
//   }

//   // Геттер для чтения баланса
//   get balance() {
//     return this.#balance;
//   }

//   // Метод для пополнения
//   deposit(amount) {
//     if (amount <= 0) {
//       throw new Error("Сумма пополнения должна быть больше нуля");
//     }
//     console.log(`Внесено средств: ${amount}`);
//     this.#balance += amount;
//   }

//   // Метод для снятия
//   withdraw(amount) {
//     if (amount <= 0) {
//       throw new Error("Сумма снятия должна быть больше нуля");
//     }
//     if (amount > this.#balance) {
//       throw new Error("Недостаточно средств на счете");
//     }
//     console.log(`Снято со счета: ${amount}`);
//     this.#balance -= amount;
//   }
// }

// // Пример использования:
// let account = new BankAccount(500);
// console.log(`Начальный баланс: ${account.balance}`); // 500
// console.log('    ----------');

// account.deposit(200);
// console.log(`Текущий баланс: ${account.balance}`); // 700
// console.log('    ----------');

// account.withdraw(100);
// console.log(`Текущий баланс: ${account.balance}`); // 600




// /* **************** Задание № 2 **************** */
// console.log(`\n****** Задание № 2 ******\n`);

// class User {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
// }

// class PremiumUser extends User {
//   constructor(firstName, lastName, expiryDate) {
//     super(firstName, lastName);
//     this.premiumAccount = {
//       expiryDate: expiryDate
//     };
//   }
// }

// class RegularUser extends User {
//   constructor(firstName, lastName) {
//     super(firstName, lastName);
//   }
// }

// function getAccountInfo(user) {
//   // Проверка типа через instanceof
//   if (!(user instanceof User)) {
//     return "Тип пользователя не определен";
//   }

//   // Опциональная цепочка (?.) и оператор нулевого слияния (??)
//   const expiry = user.premiumAccount?.expiryDate ?? "пользователь без премиум-аккаунта";

//   return `Пользователь: ${user.firstName} ${user.lastName}. Премиум-доступ: ${expiry}.`;
// }

// // Примеры использования:
// const client1 = new PremiumUser("Ivan", "Ivanov", "2026-12-31");
// const client2 = new RegularUser("Elena", "Sidorova");
// let client3;

// console.log(getAccountInfo(client1));  // Пользователь: Ivan Ivanov. Премиум-доступ: 2026-12-31.
// console.log(getAccountInfo(client2)); // Пользователь: Elena Sidorova. Премиум-доступ: отсутствует.
// console.log(getAccountInfo(client3)); // Тип пользователя не определен




// /* **************** Задание № 3 **************** */
// console.log(`\n****** Задание № 3 ******`);

// function checkNumber() {
//     const input = document.getElementById('userInput').value;
//     const messageDiv = document.getElementById('message');

//     // Очищаем предыдущие сообщения и стили
//     messageDiv.textContent = "";
//     messageDiv.className = "";

//     try {
//         // 1. Проверяем на пустоту
//         if (input.trim() === "") throw "Поле не должно быть пустым";

//         // 2. Проверяем, является ли значение числом
//         if (isNaN(input)) throw "Это не число!";

//         // Если проверки пройдены:
//         messageDiv.textContent = "Отлично! Вы ввели число: " + input;
//         messageDiv.classList.add("success");

//     } catch (err) {
//         // Обработка ошибок из блока try
//         messageDiv.textContent = "Ошибка: " + err;
//         messageDiv.classList.add("error");
//     }
// };



/* **************** Задание № 4 **************** */
console.log(`\n****** Задание № 4 ******\n`);

function addItem() {
    const input = document.getElementById('itemInput');
    const list = document.getElementById('itemList');
    const value = input.value.trim();

    try {
        // Проверка условия и генерация исключения
        if (value.length < 3 || value.length > 10) {
            throw new Error("Ошибка: значение должно быть от 3 до 10 символов!");
        }

        // Если всё ок, создаем элемент списка
        const li = document.createElement('li');
        li.textContent = value;
        list.appendChild(li);

        // Очищаем поле ввода
        input.value = '';

    } catch (error) {
        // Выводим сообщение об исключении
        alert(error.message);
    }
}


