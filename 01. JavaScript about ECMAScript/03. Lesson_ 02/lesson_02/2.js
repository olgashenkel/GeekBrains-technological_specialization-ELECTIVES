/////////// Листинг 2.


// Обращение к свойствам объекта.
console.log(Roomba.model); // "Romba-1"
console.log(Roomba.isFull); // false

// Вызов методов объекта.
Roomba.startCleaning(); // 'I am cleaning... I have been started: 1 times.'


/* Установим свойства объекта isUVLampOn в true, чтобы 
продемонстрировать результат работы метода switchUVLamp. */
Roomba.isUVLampOn = true;

/*Результат вызова следующего метода зависит от значения,
хранящегося в свойстве объекта, а также от того как этот метод
был вызван(об этом поговорим чуть ниже). */
Roomba.switchUVLamp(); // 'UV lamp is not working.'
Roomba.goCharge(); // 'I am going to charge...'