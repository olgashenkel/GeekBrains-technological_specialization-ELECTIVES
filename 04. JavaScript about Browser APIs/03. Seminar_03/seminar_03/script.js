// /* **************** Задание № 1 **************** */
// console.log(`****** Задание № 1 ******`);

// function getPrototypeChain(obj) {
//   const chain = [];
//   let current = obj;

//   while (current !== null) {
//     chain.push(current);
//     current = Object.getPrototypeOf(current);
//   }

//   return chain;
// }

// const myObject = {};
// const prototypeChain = getPrototypeChain(myObject);
// console.log(prototypeChain);


// /* **************** Задание № 2 **************** */
// console.log(`\n****** Задание № 2 ******`);

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   set name(newName) {
//     if (typeof newName !== 'string' || newName.trim() === '') {
//       console.error('Введите корректное имя. Значение не может быть пустой строкой');
//       this._name = "Unknown";
//       return;
//     } 
//     this._name = newName;
//   }

//   get name() {
//     return this._name;
//   }

//   set age(newAge) {
//     if (typeof newAge !== 'number' || newAge < 0 || newAge > 110) {
//       console.error('Введите корректный возраст. Значение должно быть числом от 0 до 110');
//       this._age = 0;
//       return;
//     }
//     this._age = newAge;
//   }

//   get age() {
//     return this._age;
//   }

//   introduce() {
//     console.log(`Меня зовут ${this.name} и мне ${this.age} лет.\n`);
//   }
// }

// const person1 = new Person("John", 25);
// person1.introduce(); // Меня зовут John и мне 25 лет.



// /* **************** Задание № 3 **************** */
// console.log(`****** Задание № 3 ******`);


// class BankAccount {
//   constructor(accountNumber, balance) {
//     this.accountNumber = accountNumber;
//     this.balance = balance;
//   }

//   deposit(amount) {
//     if (typeof amount !== 'number' || amount <= 0) {
//       console.error('Введите корректную сумму для депозита. Значение должно быть положительным числом');
//       return;
//     } 
//     this.balance += amount;
//     console.log(`Вы внесли ${amount}. Текущий баланс: ${this.balance}\n`);
//   }

//   withdraw(amount) {
//     if (typeof amount !== 'number' || amount <= 0) {
//       console.error('Введите корректную сумму для снятия. Значение должно быть положительным числом');
//       return;
//     } else if (amount > this.balance) {
//       console.error('Недостаточно средств на счете для снятия указанной суммы');
//       return;
//     }

//     this.balance -= amount;
//     console.log(`Вы сняли ${amount}. Текущий баланс: ${this.balance}\n`);
//   }

//   getBalance() {
//     console.log(`Текущий баланс: ${this.balance}\n`);
//     return this.balance;
//   }
// }

// const myAccount = new BankAccount("123456789", 1000);
// myAccount.getBalance(); // Текущий баланс: 1000
// myAccount.deposit(500); // Вы внесли 500. Текущий баланс: 1500
// myAccount.withdraw(200); // Вы сняли 200. Текущий баланс: 1300
// myAccount.withdraw(1500); // Ошибка: Недостаточно средств на счете для снятия указанной суммы
// myAccount.deposit(-100); // Ошибка: Введите корректную сумму для депозита. Значение должно быть положительным числом
// myAccount.withdraw(-50); // Ошибка: Введите корректную сумму для снятия. Значение должно быть положительным числом



/* **************** Задание № 4 **************** */
console.log(`****** Задание № 4 ******`);

class Animal {
  constructor(name) {
    this.name = name;
  }

  set name(newName) {
    if (typeof newName !== 'string' || newName.trim() === '') {
      console.error('Введите корректное имя животного. Значение не может быть пустой строкой');
      this._name = "Unknown";
      return;
    }
    this._name = newName;
  }

  get name() {
    return this._name;
  }

  speak() {
    console.log(`${this.name} издает звук.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  set breed(newBreed) {
    if (typeof newBreed !== 'string' || newBreed.trim() === '') {
      console.log('Ошибка ввода породы собаки');
      this._breed = "Порода собаки неизвестна";
      return;
    }
    this._breed = newBreed;
  }

  get breed() {
    return this._breed;
  }

  fetch() {
    console.log(`Собака ${this.name} принесла мяч.`);
  }
}

const animal1 = new Animal("Животное");
animal1.speak(); // Вывод: Животное издает звук.

const dog1 = new Dog("Бобик", "Дворняжка");
dog1.speak(); // Вывод: Животное Бобик издает звук.

console.log(dog1.breed); // Вывод: Дворняжка
dog1.fetch(); // Вывод: Собака Бобик принесла мяч.