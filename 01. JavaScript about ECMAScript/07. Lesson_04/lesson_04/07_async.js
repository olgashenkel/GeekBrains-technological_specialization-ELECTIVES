//*********** Листинг 10

const getUser = async (url) => {
    // Делаем запрос, и ждем его результат (указание await), который будет сохранен в константу response.
    const response = await fetch(url);
    // Выполняем еще один асинхронный метод, преобразования в текст, также ждем результат, который сохраняется в константу пользователь.
    const user = await response.text();
    console.log(user);
}

getUser('https://api.github.com/users/octocat');

// Вывод в консоль.
// {
// "login": "octocat",
// "id": 583231,
// ...
// }