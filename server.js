// import express from 'express'; => esta es otra forma de importar el modulo de express ECMS6
const express = require('express');

var app = express(); // Se inicializa express

app.use('/', function(req, res){
    res.send('Hola');
});

app.listen(3000);
console.log('La aplicación se esta renderizando en http://localhost:3000');
