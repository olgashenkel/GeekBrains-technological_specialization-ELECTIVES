/*
Задание №0

-Инициализируйте проект NPM
-Установите пакет uuid
-Создайте файл index.js, импортируйте пакет uuid и
воспользуйтесь функцией uuid.v4()
*/

const uuid = require('uuid');

const id = uuid.v4();
console.log(id);
