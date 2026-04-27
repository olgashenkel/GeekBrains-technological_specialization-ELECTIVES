const fs = require('fs');
const path = require('path');
const pathToFle = path.join(__dirname, 'person.join');

const personData = JSON.parse(fs.readFileSync(pathToFle, 'utf-8'));

personData.age = personData.age - 10;
personData.city = 'Ekaterinburg';

fs.writeFileSync(path.join(__dirname, 'person.join'),JSON.stringify(personData, null, 2));