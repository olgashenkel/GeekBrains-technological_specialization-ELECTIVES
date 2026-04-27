/*
Модуль path

Этот модуль помогает работать с путями в файловой системе
*/

const path = require('path');

// Выведет в консоль путь \Users\user\Desktop\GeekBrains-technological_specialization-ELECTIVES\02. Node.js Basics and Build Tools\05. Lesson_03\lesson_03\task_07.js
console.log(path.join('/Users/user/Desktop/GeekBrains-technological_specialization-ELECTIVES', '02. Node.js Basics and Build Tools/05. Lesson_03/lesson_03/task_07.js'));

/*
Выведет в консоль объект пути:
{
  root: '/',
  dir: '/Users/user/Desktop/GeekBrains-technological_specialization-ELECTIVES/02. Node.js Basics and Build Tools/05. Lesson_03/lesson_03',
  base: 'task_07.js',
  ext: '.js',
  name: 'task_07'
}
*/
console.log(path.parse('/Users/user/Desktop/GeekBrains-technological_specialization-ELECTIVES/02. Node.js Basics and Build Tools/05. Lesson_03/lesson_03/task_07.js'));

// Выведет в консоль путь директории, убрав название файла 
// /Users/user/Desktop/GeekBrains-technological_specialization-ELECTIVES/02. Node.js Basics and Build Tools/05. Lesson_03/lesson_03
console.log(path.dirname('/Users/user/Desktop/GeekBrains-technological_specialization-ELECTIVES/02. Node.js Basics and Build Tools/05. Lesson_03/lesson_03/task_07.js'));

// Выведет в консоль расширение файла 
// .js
console.log(path.extname('/Users/user/Desktop/GeekBrains-technological_specialization-ELECTIVES/02. Node.js Basics and Build Tools/05. Lesson_03/lesson_03/task_07.js'));
