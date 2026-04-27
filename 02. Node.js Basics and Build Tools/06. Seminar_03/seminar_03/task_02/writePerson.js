const fs = require('fs');
const path = require('path');

const person = {
    name: 'Ivan',
    surname: 'Ivanov',
    age: 65,
    city: 'Moscow'
};

fs.writeFileSync(path.join(__dirname, 'person.join'),JSON.stringify(person, null, 2));