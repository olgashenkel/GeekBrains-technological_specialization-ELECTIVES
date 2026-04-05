/////////// Листинг 11.


// Объект Roomba - робот-пылесос. Код самого объекта смотри в листинге 1.
// Обращение к свойствам объекта.
console.log(Roomba.model); // "Romba-1"
console.log(Roomba.isFull); // false

// Вызов методов объекта.
setTimeout(Roomba.startCleaning, 1000);

/*Установим свойства объекта isUVLampOn в true, чтобы
продемонстрировать результат работы метода switchUVLamp.*/
Roomba.isUVLampOn = true;

/*Результат вызова следующего метода зависит от значения,
хранящегося в свойстве объекта, а также от того как этот метод
был вызван (об этом поговорим чуть ниже).*/
setTimeout(Roomba.switchUVLamp, 2000);
setTimeout(Roomba.goCharge, 3000);
// I am cleaning... I have started: NaN times.
// UV lamp is working.
// I am going to charge...




/////////// Листинг 12.

// Объект Roomba - робот-пылесос. Код самого объекта смотри в листинге 1.
// Обращение к свойствам объекта.
console.log(Roomba.model); // "Romba-1"
console.log(Roomba.isFull); // false
// Вызов методов объекта.
setTimeout(function () {
    Roomba.startCleaning();
}, 1000);

/*Установим свойства объекта isUVLampOn в true, чтобы
продемонстрировать результат работы метода switchUVLamp.*/
Roomba.isUVLampOn = true;

/*Результат вызова следующего метода зависит от значения,
хранящегося в свойстве объекта, а также от того как этот метод
был вызван (об этом поговорим чуть ниже).*/
setTimeout(function () {
    Roomba.switchUVLamp();
}, 2000);
setTimeout(function () {
    Roomba.goCharge();
}, 3000);
// I am cleaning... I have started: 1 times.
// UV lamp is not working.
// I am going to charge...