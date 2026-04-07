//*********** Листинг 8

// Объект -> JSON.
const student = {
    name: 'Slava',
    surname: 'Belkin',
    age: 20,
    practice: {
        place: 'IKTG',
        hours: 47,
    }
};
console.log(JSON.stringify(student, null, 4));

// Вывод в консоль. Обратите внимание, что все ключи стали обернуты в кавычки.
`{
"name": "Slava",
"surname": "Belkin",
"age": 20,
"practice": {
"place": "IKTG",
"hours": 47
}
}`