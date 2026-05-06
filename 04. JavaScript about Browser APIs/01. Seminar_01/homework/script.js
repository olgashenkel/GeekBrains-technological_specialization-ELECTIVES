/* **************** Задание № 1 **************** */
console.log(`****** Задание № 1 ******`);

// 1. Исходные JSON-данные
const initialData = [{
                id: 1,
                name: "Йога",
                time: "09:00 - 10:30",
                maxParticipants: 10,
                currentParticipants: 8
        },
        {
                id: 2,
                name: "Кроссфит",
                time: "12:00 - 13:30",
                maxParticipants: 15,
                currentParticipants: 15
        },
        {
                id: 3,
                name: "Плавание",
                time: "15:00 - 16:00",
                maxParticipants: 8,
                currentParticipants: 4
        },
        {
                id: 4,
                name: "Танцы",
                time: "18:30 - 20:00",
                maxParticipants: 12,
                currentParticipants: 11
        }
];

// Загрузка данных из localStorage или использование начальных данных
let lessons = JSON.parse(localStorage.getItem('lessons')) || initialData;

const container = document.getElementById('schedule-container');

function renderSchedule() {
        container.innerHTML = '';

        lessons.forEach(lesson => {
                const isFull = lesson.currentParticipants >= lesson.maxParticipants;

                const cardHtml = `
            <div class="col-md-6 col-lg-4">
                <div class="card h-100">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${lesson.name}</h5>
                        <p class="card-text text-muted mb-2">🕒 ${lesson.time}</p>
                        <p class="card-text mb-1">Участники: <strong id="count-${lesson.id}">${lesson.currentParticipants}</strong> / ${lesson.maxParticipants}</p>
                        
                        <div class="progress mb-3" style="height: 10px;">
                            <div class="progress-bar ${isFull ? 'bg-danger' : 'bg-success'}" 
                                 role="progressbar" 
                                 style="width: ${(lesson.currentParticipants / lesson.maxParticipants) * 100}%">
                            </div>
                        </div>

                        <div class="mt-auto d-flex gap-2">
                            <button class="btn btn-primary flex-grow-1" 
                                    onclick="signUp(${lesson.id})" 
                                    ${isFull ? 'disabled' : ''}>
                                Записаться
                            </button>
                            <button class="btn btn-outline-danger" 
                                    onclick="cancelRegistration(${lesson.id})">
                                Отменить
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
                container.insertAdjacentHTML('beforeend', cardHtml);
        });
}

// Функция записи
window.signUp = (id) => {
        const lesson = lessons.find(l => l.id === id);
        if (lesson && lesson.currentParticipants < lesson.maxParticipants) {
                lesson.currentParticipants++;
                saveAndRefresh();
        }
};

// Функция отмены записи
window.cancelRegistration = (id) => {
        const lesson = lessons.find(l => l.id === id);
        if (lesson && lesson.currentParticipants > 0) {
                lesson.currentParticipants--;
                saveAndRefresh();
        }
};

// Сохранение и обновление интерфейса
function saveAndRefresh() {
        localStorage.setItem('lessons', JSON.stringify(lessons));
        renderSchedule();
}

// Инициализация
renderSchedule();