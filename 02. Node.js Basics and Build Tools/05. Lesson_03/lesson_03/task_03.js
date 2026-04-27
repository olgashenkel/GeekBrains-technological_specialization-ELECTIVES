/*
************* Обзор встроенных модулей *************
* Модуль fs *
Модуль fs позволяет работать с файловой системой: читать и записывать файлы
*/

const fs = require('fs');

// Для чтения файла у модуля fs определена функция readFile
fs.readFile('task_01.js', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
     console.log(data);   
    }
})