/*
Задание №5 (тайминг 10 минут)

Необходимо написать HTTP сервер и запустить сервер на порту 3000, который в браузере
по URL “/” возвращает такую страницу:
Подсказки:
- Обязательно импортируйте модуль http для реализации сервера: 
    const http = require('http');
- Используйте метод модуля 
    http .createServer(): http.createServer((req, res) => {});
- Для запуска сервера не забудьте вызвать метод 
    .listen(): server.listen(3000);
- Обязательно установите заголовки ответа с помощью метода 
    res.writeHead(): 'Content-Type': 'text/html; charset=UTF-8'
- Отправьте HTML код с помощью метода res.end()
*/

import { createServer } from 'http';

createServer(function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=UTF-8;");
    response.write("<h2>Мой сервер работает!</h2>");
    response.end();    
}).listen(3000, function(){
    console.log('Сервер запущен по адресу http://127.0.0.1:3000/');
});
