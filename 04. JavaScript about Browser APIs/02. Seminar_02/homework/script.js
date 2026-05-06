/* **************** Задание № 1 **************** */
console.log(`****** Задание № 1 ******`);

class Book {
        constructor(title, author, pages) {
                this.title = title;
                this.author = author;
                this.pages = pages;
        }

        set title(newTitle) {
                if (typeof newTitle === 'string' && newTitle.trim() !== '') {
                        this._title = newTitle;
                } else {
                        console.error('Ошибка: Введите корректное название книги.');
                }
        }

        get title() {
                return this._title;
        }

        set author(newAuthor) {
                if (typeof newAuthor === 'string' && newAuthor.trim() !== '') {
                        this._author = newAuthor;
                } else {
                        console.error('Ошибка: Введите корректное имя автора.');
                }
        }

        get author() {
                return this._author;
        }

        set pages(newPages) {
                if (Number.isInteger(newPages) && newPages > 0) {
                        this._pages = newPages;
                } else {
                        console.error('Ошибка: Введите корректное количество страниц (целое число больше 0).');
                }
        }

        get pages() {
                return this._pages;
        }

        displayInfo() {
                console.log(`Название: "${this.title}"`);
                console.log(`Автор: ${this.author}`);
                console.log(`Количество страниц: ${this.pages}`);
        }
}

const book1 = new Book("История государства Российского", "Н. Карамзин", 827);
const book2 = new Book("WEB на практике", "А.В. Кириченко", 431);

book1.displayInfo();
console.log(''); // Пустая строка для разделения информации о книгах
book2.displayInfo();




/* **************** Задание № 2 **************** */
console.log(`\n****** Задание № 2 ******`);

class Student {
        constructor(name, age, grade) {
                this.name = name;
                this.age = age;
                this.grade = grade;
        }

        set name(newName) {
                if (typeof newName === 'string' && newName.trim() !== '') {
                        this._name = newName;
                } else {
                        console.error('Ошибка: Введите корректное имя студента.');
                }
        }

        get name() {
                return this._name;
        }

        set age(newAge) {
                if (Number.isInteger(newAge) && newAge > 15 && newAge < 70) {
                        this._age = newAge;
                } else {
                        console.error('Ошибка: Введите корректный возраст (целое число от 15 до 69).');
                }
        }
         
        get age() {
                return this._age;
        }

        set grade(newGrade) {
                if (typeof newGrade === 'string' && newGrade.trim() !== '') {
                        this._grade = newGrade;
                } else {
                        console.error('Ошибка: Введите корректные сведения о группе обучения студента.');
                }
        }

        get grade() {
                return this._grade;
        }

        displayInfo() {
                console.log(`Имя: ${this.name}`);
                console.log(`Возраст: ${this.age}`);
                console.log(`Группа обучения: ${this.grade}`);
        }
}

const student1 = new Student("John Smith", 16, "10th grade");
const student2 = new Student("Jane Doe", 17, "11th grade");

student1.displayInfo();
console.log('');
student2.displayInfo();