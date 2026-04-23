const uuid = require('uuid');
const hello = require('./task_02.js');

const id = uuid.v4();
console.log(id);

hello.sayHello();