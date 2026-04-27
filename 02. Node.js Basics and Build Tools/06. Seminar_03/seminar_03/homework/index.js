const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const dataPath = path.join(__dirname, 'counters.json');

function getCounters() {
    if (!fs.existsSync(dataPath)) return { "/": 0, "/about": 0 };
    return JSON.parse(fs.readFileSync(dataPath, 'utf8'));
}

function saveCounters(counters) {
    fs.writeFileSync(dataPath, JSON.stringify(counters, null, 2));
}

// Универсальная функция для отправки страницы с заменой счетчика
function sendPage(res, filePath, route) {
    const counters = getCounters();
    counters[route]++;
    saveCounters(counters);

    let html = fs.readFileSync(path.join(__dirname, filePath), 'utf8');
    // Заменяем заглушку "0" в HTML на реальное число
    html = html.replace('<span id="count">0</span>', `<span id="count">${counters[route]}</span>`);
    
    res.send(html);
}

app.get('/index.html', (req, res) => {
    sendPage(res, 'index.html', '/');
});

app.get('/about.html', (req, res) => {
    sendPage(res, 'about.html', '/about');
});

app.listen(3000, () => console.log('Сервер запущен на порту 3000'));
