/*
Задание №6 (тайминг 10 минут)

Необходимо написать HTTP сервер и запустить сервер на порту 3000, который в браузере по URL “/” возвращает такую страницу:
    "Мой сервер работает!"
А по URL “/about” возвращает такую страницу:
    И даже отдает две страницы!

Подсказка:
    Объект req.url в обработчике запроса хранит url, который был передан из браузера
*/

import { createServer } from "http";

createServer(function(request, response){
    response.setHeader("Content-Type", "text/html; charset=UTF-8;");

    if (request.url === "/") {
        response.write("<h2>Мой сервер работает!</h2>");
    } else if (request.url === "/about") {
        response.write("<h2>И даже отдает две страницы!</h2>")
    } else {
        response.write("<h2>Страница не найдена!</h2>")
    }
    response.end();
}).listen(3000);