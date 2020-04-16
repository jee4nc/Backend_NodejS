// import express from 'express'; => esta es otra forma de importar el modulo de express ECMS6
const express = require('express');

const db = require('./db'); // se importa db

// const router = require('./components/message/network');
const router = require('./network/routes');

db('mongodb+srv://db_user_nodeBasic:xw0RgPigFg9qG8eq@cluster0-hjjvn.mongodb.net/test');


var app = express(); // Se inicializa express
app.use(express.json()); // Metodo util para parsear JSON
app.use(express.urlencoded({extended: false})); // Permite este metodo de comunicacion
// app.use(router);

router(app);


app.use('/app', express.static('public'));
//Estamos creando la carpeta de arxhivos staticos

app.listen(3000);
console.log('La aplicación se esta renderizando en http://localhost:3000');
