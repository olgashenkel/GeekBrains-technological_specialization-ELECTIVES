/* ************ Реализация API в Express ************ */
const express = require('express');

const app = express();

// app.get('/', (req, res) => {
//     res.send('<h1>Hello!</h1>');        
// });



/* ************ Метод POST ************ */

// app.post('/', (req, res) => {
//     res.send('<h1>This is a post request!</h1>');        
// });


// app.use(express.json());

// app.post('/', (req, res) => {
//     console.log(req.body);
//     res.send('<h1>This is a post request!</h1>');        
// });



/* ************ Метод PUT ************ */

// app.use(express.json());

// app.put('/', (req, res) => {
//     console.log(req.body);
//     res.send('<h1>This is a put request!</h1>');        
// });


/* ************ Метод DELETE ************ */

app.use(express.json());

app.delete('/', (req, res) => {
    console.log(req.body);
    res.send('<h1>This is a delete request!</h1>');        
});



app.listen(3000);