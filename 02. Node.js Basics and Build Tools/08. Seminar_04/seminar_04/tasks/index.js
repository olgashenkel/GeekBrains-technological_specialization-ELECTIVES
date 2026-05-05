const express = require('express');
const Joi = require('joi');


const app = express();

const users = [];
let uniqueID = 0;

const userSchema = Joi.object({
    firstName: Joi.string().min(2).required(),
    secondName: Joi.string().min(1).required(),
    age: Joi.number().min(0).max(150).required(),
    city: Joi.string().min(1)
});

app.use(express.json());
/* метод POST позволяет
принимать тело запроса в отличие от GET. Для того, чтобы начать принимать тело
запроса, необходимо подключить промежуточный обработчик express.json() */


/**
 * Получение всех пользователей
 */
app.get('/users', (req, res) => {
    res.send({
        users
    });
});

/**
 * Получение пользователя по ID
 */
app.get('/users/:id', (req, res) => {
    const userID = Number(req.params.id);
    const user = users.find(user => user.id === userID);

    if (user) {
        res.send({
            user
        });
    } else {
        res.status(404);
        res.send({
            article: null
        });
    }
});


/**
 * Создание пользователя
 */
app.post('/users', (req, res) => {
    console.log(req.body);

    uniqueID += 1;
    users.push({
        id: uniqueID,
        ...req.body
    });

    res.send({
        id: uniqueID
    });
});



// /**
//  * Обновление сведений о пользователе
//  */

// app.put('/users/:id', (req, res) => {

//     const userID = Number(req.params.id);
//     const user = users.find(user => user.id === userID);

//     if (user) {
//         user.firstName = req.body.firstName;
//         user.secondName = req.body.secondName;
//         user.age = req.body.age;
//         user.city = req.body.city;

//         res.send({
//             user
//         });
//     } else {
//         res.status(404);
//         res.send({
//             article: null
//         });
//     }
// });

/**
 * Обновление сведений о пользователе с валидацией данных
 */

app.put('/users/:id', (req, res) => {

    const result = userSchema.validate(req.body);
    if (result.error) {
        return res.status(404).send({error: result.error.details});
    } 
    
    const userID = Number(req.params.id);
    const user = users.find(user => user.id === userID);

    if (user) {
        user.firstName = req.body.firstName;
        user.secondName = req.body.secondName;
        user.age = req.body.age;
        user.city = req.body.city;

        res.send({
            user
        });
    } else {
        res.status(404);
        res.send({
            article: null
        });
    }
});



/**
 * Удаление пользователя по ID
 */

app.delete('/users/:id', (req, res) => {

    const userID = Number(req.params.id);
    const user = users.find(user => user.id === userID);

    if (user) {
        const userIndex = users.indexOf(user);
        users.splice(userIndex, 1);
        res.send({
            user
        });
    } else {
        res.status(404);
        res.send({
            article: null
        });
    }
});


app.listen(3000);