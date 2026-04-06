/*
************* Домашнее задание *************


************* Задание № 1 *************
"Управление библиотекой книг":

Реализуйте класс `Book`, представляющий книгу, со следующими свойствами и
методами:
- Свойство `title` (название) - строка, название книги.
- Свойство `author` (автор) - строка, имя автора книги.
- Свойство `pages` (количество страниц) - число, количество страниц в книге.
- Метод `displayInfo()` - выводит информацию о книге (название, автор и количество страниц).


************* Задание № 2 *************
"Управление списком студентов":

Реализуйте класс `Student`, представляющий студента, со следующими свойствами и
методами:
- Свойство `name` (имя) - строка, имя студента.
- Свойство `age` (возраст) - число, возраст студента.
- Свойство `grade` (класс) - строка, класс, в котором учится студент.
- Метод `displayInfo()` - выводит информацию о студенте (имя, возраст и класс).
- `javascript`

____________________________________________________________________
| // Пример использования класса:                                  |
| const student1 = new Student("John Smith", 16, "10th grade");    |
| student1.displayInfo();                                          |
| // Вывод:                                                        |
| // Name: John Smith                                              |
| // Age: 16                                                       |
| // Grade: 10th grade                                             |
| const student2 = new Student("Jane Doe", 17, "11th grade");      |
| student2.displayInfo();                                          |
| // Вывод:                                                        |
| // Name: Jane Doe                                                |
| // Age: 17                                                       |
| // Grade: 11th grade                                             |
|__________________________________________________________________|
*/


/* ******************** Задание № 1 ******************** */
console.log('****** Задание № 1 ******');

class Book {

    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    set title(value) {
        if (typeof value !== 'string') {
            throw new Error('Название книги должно быть строкой');
        }
        this._title = value;
    }

    get title() {
        return this._title;
    }

    set author(value) {
        if (typeof value !== 'string') {
            throw new Error('Имя автора должно быть строкой');
        }
        this._author = value;
    }

    get author() {
        return this._author;
    }

    set pages(value) {
        if (typeof value !== 'number' || value <= 0) {
            throw new Error('Количество страниц должно быть числом и больше 0');
        }
        this._pages = value;
    }

    get pages() {
        return this._pages;
    }


    displayInfo() {
        console.log(`Название книги: ${this.title} \nавтор: ${this.author} \nколичество страниц: ${this.pages}\n`);
    }
};


const book1 = new Book("История государства Российского", "Н. Карамзин", 827);
const book2 = new Book("WEB на практике", "А.В. Кириченко", 431);

book1.displayInfo(); // Название книги: История государства Российского, автор: Н. Карамзин, количество страниц: 827
book2.displayInfo();


/* ******************** Задание № 2 ******************** */
console.log('\n****** Задание № 2 ******');

class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    set name(value) {
        if (typeof value !== 'string') {
            throw new Error('Имя должно быть строкой');
        }
        this._name = value;
    }

    get name() {
        return this._name;
    }

    set age(value) {
        if (typeof value !== 'number' || (value < 0 && value > 100)){
            throw new Error('Возраст должен быть числом и больше 0')
        }
         this._age = value;
    }

    get age(){
        return this._age;
    }

    set grade(value){
        if (typeof value !== "string") {
            throw new Error('Класс должен быть строкой');            
        }
        this._grade = value;
    }

    get grade(){
        return this._grade;
    }

    displayInfo() {
        console.log(`Name: ${this.name} \nAge: ${this.age} \nGrade: ${this.grade}\n`);
    }
};

const student1 = new Student("Иван Иванов", 16, "10А");
const student2 = new Student("Сеня Петров", 17, "11Б");
const student3 = new Student("Егор Сидоров", 15, "9В");

student1.displayInfo(); // Имя студента: Иван Иванов, возраст: 16, класс: 10А
student2.displayInfo(); // Имя студента: Сеня Петров, возраст: 17, класс: 11Б
student3.displayInfo(); // Имя студента: Егор Сидоров, возраст: 15, класс: 9В