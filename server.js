// import express from 'express'; => esta es otra forma de importar el modulo de express ECMS6
const express = require('express');
const router = express.Router(); // permite poder separar get post u otras

const response = require('./network/response');

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
    // res.send('Aqui iria una lista de mensajes');
    response.success(req, res, 'Aqui iria una lista de mensajes');
});

// router.post('/mensajes', function (req, res) {
//     res.send('Mensaje Añadido');
// });

router.post('/mensajes', function (req, res) {
    console.log(req.query); // Esto permite que la url sea aceptado como body
    console.log(req.body);  // Imprime el valor de body
    // res.status(201).send([{error: '', body: 'Creado correctamente'}]);
    // Arriba estoy devolviendo un status 201 en ves del 200
    // y ademas se recibe como respuesta un array de objetos, puede ser respuesta plana o un objeto 
    if (req.query.error == "ok") {
        // Pequeño if para poder ver si salio todo bien o no 
        response.error(req, res, 'Error Simulado', 400);
    }else {
        response.success(req, res, 'Creado correctamente', 201);
    // Aca arriba estoy llamando el modulo externo y darle un boddy y un status
    }
});

app.use('/app', express.static('public'));
//Estamos creando la carpeta de arxhivos staticos

app.listen(3000);
console.log('La aplicación se esta renderizando en http://localhost:3000');
