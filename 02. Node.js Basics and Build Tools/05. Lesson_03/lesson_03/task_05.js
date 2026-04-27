/*
************* Обзор встроенных модулей *************
* Модуль fs *
Модуль fs позволяет работать с файловой системой: читать и записывать файлы
*/


const fs = require('fs');

// Чтобы не перезаписывать, а добавлять данные в файл, существует функция appendFile

fs.appendFile('task_05_test.js', '\nconsole.log("Hello");', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('The file was saved!');
});

// Данный скрипт добавит вызов console.log в конец этого же скрипта