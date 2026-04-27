/*
Свойства __dirname и __filename

__dirname хранит в себе путь к директории, в которой хранится текущий скрипт.
__filename хранит в себе путь к текущему скрипту
*/

console.log(__filename);
/*
Выведет в консоль путь к файлу:
C:\Users\user\Desktop\GeekBrains-technological_specialization-ELECTIVES\02. Node.js Basics and Build Tools\05. Lesson_03\lesson_03\task_02.js
*/

console.log(__dirname);
/*
Выведет в консоль путь к директории хранения файла:
C:\Users\user\Desktop\GeekBrains-technological_specialization-ELECTIVES\02. Node.js Basics and Build Tools\05. Lesson_03\lesson_03
*/

console.log(process.cwd());     // Директория откуда запущен скрипт
