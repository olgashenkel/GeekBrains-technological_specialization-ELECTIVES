const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Добро пожаловать на мой сайт!</h1><p>Перейти на страницу <a href="/about">About</a></p>');
});

app.get('/about', (req, res) => {
    res.send('<h1>Страница About</h1><p>Перейти на <a href="/">Главную</a> страницу</p>');
});


const port = 3000;

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});