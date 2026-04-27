/*
************* Обзор встроенных модулей *************
* Модуль fs *
Модуль fs позволяет работать с файловой системой: читать и записывать файлы
*/



const fs = require('fs');

//При выполнении данного кода текущий файл (содержимое текущего файла) перезапишется:

// Для записи в файл у модуля fs определена функция writeFile
// fs.writeFile(__filename, 'console.log("Hello");', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('The file was saved!');
// });



//При выполнении данного кода будет автоматически создан файл task_04_test.js с содержимым 'console.log("Hello")':
fs.writeFile('task_04_test.js', 'console.log("Hello");', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('The file was saved!');
});
