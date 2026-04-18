const http = require('http');

const server = http.createServer(
    (req, res) => {
        console.log('Запрос получен');

        if (req.url === '/') {
            res.writeHead(200, {
                'Content-Type': 'text/html; charset=UTF-8',
            });

            res.end('<h1>Добро пожаловать на мой сайт!</h1>');
            /* в 'res.end' - можно передать любой валидный HTML-код и он будет интерпретирован браузером */

        } else if (req.url === '/about') {
            res.writeHead(200, {
                'Content-Type': 'text/html; charset=UTF-8',
            });
            res.end('<h1>About</h1>');

        }



    }
);

const port = 3000;

server.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});