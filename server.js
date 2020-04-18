// import express from 'express'; => esta es otra forma de importar el modulo de express ECMS6

const express = require('express');
const app = express(); // Se inicializa express

const socket = require('./socket'); // el file

const db = require('./db'); // se importa db
const server = require('http').Server(app); //Cambio // este es el server http
const cors = require('cors');

// const router = require('./components/message/network');
const router = require('./network/routes');

db('mongodb+srv://db_user_nodeBasic:xw0RgPigFg9qG8eq@cluster0-hjjvn.mongodb.net/test');

app.use(cors());
app.use(express.json()); // Metodo util para parsear JSON
app.use(express.urlencoded({extended: false})); // Permite este metodo de comunicacion
// app.use(router);


socket.connect(server); // se inicia y le pasamos nuestro server http
router(app);


app.use('/app', express.static('public'));
//Estamos creando la carpeta de arxhivos staticos

server.listen(3000, function (){ // Se cambia a server.listen
    console.log('La aplicación se esta renderizando en http://localhost:3000');
});

