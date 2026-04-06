
# Урок 5. Лекция: Объектно-ориентированное программирование в Javascript

## План урока

- Прототип
- Методы для установки прототипа.
- Конструктор объекта
- new
- Object.create
- Создание объектов и наследование с использованием class и extends



## Практическая работа с лекции ([решение](https://github.com/olgashenkel/GeekBrains-technological_specialization-ELECTIVES/tree/main/01.%20JavaScript%20about%20ECMAScript/05.%20Lesson_%2002/lesson_03))


## Домашняя работа с лекции ([решение](https://github.com/olgashenkel/GeekBrains-technological_specialization-ELECTIVES/blob/main/01.%20JavaScript%20about%20ECMAScript/05.%20Lesson_%2002/lesson_03/homework.js))

**Задание № 1. "Управление персоналом компании":**

Реализуйте класс Employee (сотрудник), который имеет следующие свойства и
методы:
- Свойство `name` (имя) - строка, имя сотрудника.
- Метод `displayInfo()` - выводит информацию о сотруднике (имя).
Реализуйте класс `Manager` (менеджер), который наследует класс `Employee` и имеет дополнительное свойство и метод:
    - Свойство `department` (отдел) - строка, отдел, в котором работает менеджер.
    - Метод `displayInfo()` - переопределяет метод `displayInfo()` родительского класса и выводит информацию о менеджере (имя и отдел).


```
_________________________________________________________
|   // Пример использования классов                     |
|   const employee = new Employee("John Smith");        |
|   employee.displayInfo();                             |
|   // Вывод:                                           |
|   // Name: John Smith                                 |
|   const manager = new Manager("Jane Doe", "Sales");   |
|   manager.displayInfo();                              |
|   // Вывод:                                           |
|   // Name: Jane Doe                                   |
|   // Department: Sales                                |
|_______________________________________________________|
```

**Задание № 2. "Управление списком заказов":**

Реализуйте класс `Order` (заказ), который имеет следующие свойства и методы:
- Свойство `orderNumber` (номер заказа) - число, уникальный номер заказа.
- Свойство `products` (продукты) - массив, содержащий список продуктов в заказе.
- Метод `addProduct(product)` - принимает объект product и добавляет его в
список продуктов заказа.
- Метод `getTotalPrice()` - возвращает общую стоимость заказа, основанную на ценах продуктов.

```
____________________________________________________________________
|   // Пример использования класса                                  |
|   class Product {                                                 |
|       constructor(name, price) {                                  |
|       this.name = name;                                           |
|       this.price = price;                                         |
|       }                                                           |
|   }                                                               |
|   const order = new Order(12345);                                 |
|   const product1 = new Product("Phone", 500);                     |
|   order.addProduct(product1);                                     |
|   const product2 = new Product("Headphones", 100);                |
|   order.addProduct(product2);                                     |
|   console.log(order.getTotalPrice()); // Вывод: 600               |
|___________________________________________________________________|
```

Результат выполнения ДЗ:
```

/* ******************** Задание № 1 ******************** */
console.log('****** Задание № 1 ******');

class Employee {

    constructor(name) {
        this.name = name;
    }

    set name(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            console.error('Введите корректное имя. Значение не может быть пустой строкой');
            this._name = "Unknown";
            return;
        }
        this._name = value;
    }

    get name() {
        return this._name;
    }

    displayInfo() {
        console.log(`Name: ${this.name}\n`);
    }
};

class Manager extends Employee {
    constructor(name, department) {
        super(name);
        this.department = department;
    }

    set department(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            console.error('Введите корректное название отдела. Значение не может быть пустой строкой');
            this._department = "Unknown";
            return;
        }
        this._department = value;
    }

    get department() {
        return this._department;
    }

    displayInfo() {
        console.log(`Name: ${this.name} \nDepartment: ${this.department}\n`);
    }
};

const employee = new Employee("John Smith");
employee.displayInfo(); // Name: John Smith

const manager = new Manager("Jane Doe", "Sales");
manager.displayInfo(); // Name: Jane Doe, Department: Sales




/* ******************** Задание № 2 ******************** */
console.log('\n****** Задание № 2 ******');

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    set name(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            console.error('Введите корректное название продукта. Значение не может быть пустой строкой');
            this._name = "Unknown";
            return;
        }
        this._name = value;
    }

    get name() {
        return this._name;
    }

    set price(value) {
        if (typeof value !== 'number' || value <= 0) {
            console.error('Введите корректную цену продукта. Значение должно быть положительным числом');
            this._price = 0;
            return;
        }
        this._price = value;
    }

    get price() {
        return this._price;
    }
}


class Order {
    constructor(orderNumber) {
        this.orderNumber = orderNumber;
        this.products = [];
    }

    addProduct(product) {
        if (typeof product !== 'object' || !product.name || typeof product.price !== 'number') {
            console.error('Введите корректный продукт. Продукт должен быть объектом с полями name и price');
            return;
        }
        this.products.push(product);
    }

    getTotalPrice() {
        return this.products.reduce((total, product) => total + product.price, 0);
    }
};

const order = new Order(12345);

const product1 = new Product("Phone", 500);
order.addProduct(product1);

const product2 = new Product("Headphones", 100);
order.addProduct(product2);

console.log(order.getTotalPrice()); // Вывод: 600

console.log(order.products); // Вывод: [ Product { name: 'Phone', price: 500 }, Product { name: 'Headphones', price: 100 } ]
```


![Домашнее задание](lesson_03/images/1.jpg)
