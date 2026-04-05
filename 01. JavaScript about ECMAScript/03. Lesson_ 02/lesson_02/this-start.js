/////////// Листинг 3.


// Работа с this
const checkThis = function () {
    console.log(this);
}
checkThis(); // Window {0: global, window: Window, self: Window, document: document, name: "", location: Location, …}




/////////// Листинг 4.

const checkThisInObject = {
    testProperty: true,
    checkThis: function () {
        console.log(this);
    },
};

checkThisInObject.checkThis(); // {testProperty: true, checkThis: ƒ}