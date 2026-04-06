/* ******** Методы для установки прототипа. ********

Устанавливать прототип объекта можно используя свойство __proto__, но также в языке есть два метода для чтения и установки прототипа объекта - это ***getPrototypeOf*** и ***setPrototypeOf***. Эти методы не доступны в браузере InternetExplorer версии ниже 10.


******** getPrototypeOf ******** 
Метод ***getPrototypeOf*** позволяет получить ссылку на объект прототип.
*/



/* **************** Листинг 9. **************** */

// Получим прототип для объекта Djaiv.
const DjaivProto = Object.getPrototypeOf(Djaiv);
console.log(DjaivProto.model); // dancing series

const DjaivProtoProto = Object.getPrototypeOf(DjaivProto);
console.log(DjaivProtoProto.model); //vacuum cleaner

const DjaivProtoProtoProto =
Object.getPrototypeOf(DjaivProtoProto);
console.log(DjaivProtoProtoProto); // [object Object]

