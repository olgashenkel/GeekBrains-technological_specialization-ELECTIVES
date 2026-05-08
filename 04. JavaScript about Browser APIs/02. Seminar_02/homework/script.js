/* **************** Домашняя работа **************** */
console.log(`****** Домашняя работа ******`);


const navbar = document.getElementById('navbar');
const slider = document.getElementById('slider');
const dotsContainer = document.getElementById('dotsContainer');

let currentIndex = 1; // Стартуем с 1 из-за клона
let slidesCount = 0;
let isTransitioning = false;

// 1. Скролл навигации
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// 2. Загрузка данных
async function loadNews() {
    try {
        const response = await fetch('new_facts.json');
        const newsData = await response.json();
        slidesCount = newsData.length;

        renderSlider(newsData);
        updateSlider(false); // Мгновенная позиция на 1-й слайд
    } catch (error) {
        console.error("Ошибка:", error);
        slider.innerHTML = "<p style='padding:20px'>Ошибка загрузки JSON</p>";
    }
}

function createSlideElement(item) {
    const slide = document.createElement('div');
    slide.classList.add('slide');
    slide.innerHTML = `
                <img src="${item.image}" alt="">
                <div class="slide-content">
                    <h3>${item.title}</h3>
                    <p>${item.desc}</p>
                </div>`;
    return slide;
}

function renderSlider(data) {
    slider.innerHTML = '';
    dotsContainer.innerHTML = '';

    // Клон последнего в начало
    slider.appendChild(createSlideElement(data[data.length - 1]));

    // Основные слайды
    data.forEach((item, index) => {
        slider.appendChild(createSlideElement(item));
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.onclick = () => goToSlide(index + 1);
        dotsContainer.appendChild(dot);
    });

    // Клон первого в конец
    slider.appendChild(createSlideElement(data[0]));
}

function moveSlide(step) {
    if (isTransitioning) return;
    isTransitioning = true;

    currentIndex += step;
    slider.style.transition = "transform 0.5s ease-in-out";
    updateSlider(true);

    slider.addEventListener('transitionend', () => {
        isTransitioning = false;
        if (currentIndex > slidesCount) {
            slider.style.transition = "none";
            currentIndex = 1;
            updateSlider(false);
        }
        if (currentIndex < 1) {
            slider.style.transition = "none";
            currentIndex = slidesCount;
            updateSlider(false);
        }
    }, {
        once: true
    });
}

function updateSlider(animate) {
    const offset = -currentIndex * 100;
    slider.style.transform = `translateX(${offset}%)`;

    // Логика точек
    let dotIndex = currentIndex - 1;
    if (currentIndex > slidesCount) dotIndex = 0;
    if (currentIndex < 1) dotIndex = slidesCount - 1;

    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === dotIndex);
    });
}

function goToSlide(index) {
    if (isTransitioning) return;
    currentIndex = index;
    slider.style.transition = "transform 0.5s ease-in-out";
    updateSlider(true);
}

// Свайпы
let touchStartX = 0;
slider.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
}, {
    passive: true
});
slider.addEventListener('touchend', e => {
    const touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) moveSlide(diff > 0 ? 1 : -1);
}, {
    passive: true
});

loadNews();