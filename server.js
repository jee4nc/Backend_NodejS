// import express from 'express'; => esta es otra forma de importar el modulo de express ECMS6
const express = require('express');
const router = express.Router(); // permite poder separar get post u otras


// app.use('/', function(req, res){
//     res.send('Hola');
// });

var app = express(); // Se inicializa express
app.use(express.json()); // Metodo util para parsear JSON
app.use(express.urlencoded({extended: false})); // Permite este metodo de comunicacion
app.use(router);

router.get('/mensajes', function (req, res) {
    console.log(req.headers);
    res.header({ // Esto me permite poder enviar un header especifico
                 // Esto se ve en el apartado Header
        "custom-header": "Nuestro header",
    });
    res.send('Aqui iria una lista de mensajes');
});

router.post('/mensajes', function (req, res) {
    res.send('Mensaje Añadido');
});

router.delete('/mensajes', function (req, res) {
    console.log(req.query); // Esto permite que la url sea aceptado como body
    console.log(req.body);  // Imprime el valor de body
    res.send(`Mensaje ${req.body.text} Eliminado`);
});

app.listen(3000);
console.log('La aplicación se esta renderizando en http://localhost:3000');
