/* **************** Задание № 1 **************** */
// console.log(`****** Задание № 1 ******`);

// const menuItems = document.querySelectorAll('.menu-item');

// menuItems.forEach(item => {
//   item.addEventListener('click', function() {
//     // Удаляем класс active у всех пунктов
//     menuItems.forEach(el => el.classList.remove('active'));

//     // Добавляем класс active тому пункту, по которому кликнули
//     this.classList.add('active');
//   });
// });




/* **************** Задание № 2 **************** */
// console.log(`\n****** Задание № 2 ******`);

// const modal = document.getElementById('myModal');
// const openBtn = document.getElementById('openBtn');
// const closeBtn = document.getElementById('closeBtn');

// // Открыть
// openBtn.addEventListener('click', () => {
//     modal.classList.add('is-open');
// });

// // Закрыть
// closeBtn.addEventListener('click', () => {
//     modal.classList.remove('is-open');
// });

// // Дополнительно: закрытие при клике на серый фон
// window.addEventListener('click', (event) => {
//     if (event.target === modal) {
//         modal.classList.remove('is-open');
//     }
// });




/* **************** Задание № 3 **************** */
// console.log(`****** Задание № 3 ******`);

// const buyButton = document.querySelector('.buy-button');

// buyButton.addEventListener('click', (event) => {
//   // Проверка на "доверенное" событие (настоящий клик пользователя)
//   if (event.isTrusted) {
//     const originalText = buyButton.textContent;
//     buyButton.textContent = 'Товар добавлен в корзину';

//     setTimeout(() => {
//       buyButton.textContent = originalText;
//     }, 2000);
//   }
// });




/* **************** Задание № 4 **************** */
console.log(`****** Задание № 4 ******`);

function finishQuiz() {
    const questions = document.querySelectorAll('.question');
    const resultsDiv = document.getElementById('results');
    const resultsContent = document.getElementById('results-content');
    const errorMsg = document.getElementById('error-msg');

    let allAnswered = true;
    let summary = '';

    questions.forEach((q, index) => {
        const selected = q.querySelector('input[type="radio"]:checked');
        if (!selected) {
            allAnswered = false;
        } else {
            const questionText = q.querySelector('p').innerText;
            summary += `<p><strong>${questionText}</strong> — ${selected.value}</p>`;
        }
    });

    if (allAnswered) {
        errorMsg.style.display = 'none';
        resultsContent.innerHTML = summary;
        resultsDiv.style.display = 'block';
        document.querySelector('button').style.display = 'none'; // Скрываем кнопку после завершения
    } else {
        errorMsg.style.display = 'block';
        resultsDiv.style.display = 'none';
    }
}