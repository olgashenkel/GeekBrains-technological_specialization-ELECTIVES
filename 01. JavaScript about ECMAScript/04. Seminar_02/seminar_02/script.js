// /* **************** Задание № 1 **************** */
// console.log(`****** Задание № 1 ******`);

// const Person = {
//   name: "John",
//   age: 25,
//   gender: "male",

//   introduce() {
//     console.log(`My name is ${this.name}. I'm ${this.age} years old and I identify as ${this.gender}\n`);
//   },

//   changeName(newName) {
//     this.name = newName;
//   }
// }

// Person.introduce(); // My name is John. I'm 25 years old and I identify as male
// Person.changeName("Mike");
// Person.introduce(); // My name is Mike. I'm 25 years old and I identify as male




// /* **************** Задание № 2 **************** */
// console.log(`\n****** Задание № 2 ******`);

// const Animal = {
//   name: "Animal",

//   eat() {
//     console.log(`${this.name} is eating.`);
//   }
// }

// const Dog = {
//   name: "Doggie",

//   bark() {
//     console.log(`${this.name} barks`);
//   }
// }

// Dog.eat = Animal.eat; // Добавляем метод eat в объект Dog

// Animal.eat(); // Animal is eating.
// Dog.bark(); // Doggie barks
// Dog.eat(); // Doggie is eating.



// /* **************** Задание № 3 **************** */
// console.log(`****** Задание № 3 ******`);

// const calculator = {
//   add(a, b) {
//     return a + b;
//   },

//   subtract(a, b) {
//     return a - b;
//   },

//   multiply(a, b) {
//     return a * b;
//   }
// }

// console.log(calculator.add.call(null, 5, 3)); // 8
// console.log(calculator.subtract.apply(null, [5, 3])); // 2
// console.log(calculator.multiply(5, 3)); // 15




// /* **************** Задание № 4 **************** */
// console.log(`****** Задание № 4 ******`);

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
//     console.log(`My name is ${this.name} and I'm ${this.age} years old.\n`);
//   }
// }

// const person1 = new Person("John", 25);
// person1.introduce(); // My name is John and I'm 25 years old.

// person1.name = ""; // Ошибка: Введите корректное имя. Значение не может быть пустой строкой
// person1.age = -5; // Ошибка: Введите корректный возраст. Значение должно быть числом от 0 до 110
// person1.introduce(); // My name is Unknown and I'm 0 years old.




/* **************** Задание № 5 **************** */
console.log(`****** Задание № 5 ******`);

class BankAccount {
  static bankName = "Global Bank";

  constructor(accountNumber, balance = 0) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount <= 0) {
      console.error('Введите корректную сумму для депозита. Сумма должна быть положительным числом.');
      this.balance = this.balance; // Сохраняем текущий баланс без изменений
      return;
    }
    this.balance += amount;
    console.log(` Deposited ${amount} into account ${this.accountNumber}. New balance: ${this.balance}`);
  }

  withdraw(amount) {
    if (amount <= 0) {
      console.error('Введите корректную сумму для снятия. Сумма должна быть положительным числом.');
      this.balance = this.balance; // Сохраняем текущий баланс без изменений
      return;
    }
    if (amount > this.balance) {
      console.error(`Insufficient funds in account ${this.accountNumber}`);
      return;
    }
    this.balance -= amount;
    console.log(` Withdrew ${amount} from account ${this.accountNumber}. New balance: ${this.balance}`);
  }
}

const account1 = new BankAccount("1234567890", 1000);
account1.deposit(500); // Deposited 500 into account 1234567890. New balance: 1500
account1.withdraw(200); // Withdrew 200 from account 1234567890. New balance: 1300
account1.withdraw(1500); // Ошибка: Insufficient funds in account 1234567890




// /* **************** Задание № 6 **************** */
// console.log(`****** Задание № 6 ******`);

// function sumDigits(params) {
  
//   if (typeof params !== 'number' || isNaN(params) || params < 0) {
//     console.error('Введите положительное целое число в качестве аргумента.');
//     return 0;
//   }  else if (params < 10 && params >= 0) {
//     return params;
//   } else {
//     return params % 10 + sumDigits(Math.floor(params / 10));
//   }
// }

// console.log(sumDigits(123)); // 6
// console.log(sumDigits(-5)); // Ошибка: Введите положительное целое число в качестве аргумента => 0
// console.log(sumDigits("abc")); // Ошибка: Введите положительное целое число в качестве аргумента => 0
// console.log(sumDigits()); // Ошибка: Введите положительное целое число в качестве аргумента => 0
// console.log(sumDigits(9)); // 9