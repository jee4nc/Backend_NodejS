// import express from 'express'; => esta es otra forma de importar el modulo de express ECMS6
const express = require('express');
const router = express.Router(); // permite poder separar get post u otras


var app = express(); // Se inicializa express

// app.use('/', function(req, res){
//     res.send('Hola');
// });

app.use(router);

router.get('/', function (req, res) {
    res.send('Hola desde GET');
});

router.post('/', function (req, res) {
    res.send('Hola desde POST');
});

app.listen(3000);
console.log('La aplicación se esta renderizando en http://localhost:3000');
