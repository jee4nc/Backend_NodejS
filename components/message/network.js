const express = require('express');
const response = require('../../network/response');
const router = express.Router();

router.get('/', function (req, res) {
    console.log(req.headers);
    res.header({ // Esto me permite poder enviar un header especifico
                 // Esto se ve en el apartado Header
        "custom-header": "Nuestro header",
    });
    // res.send('Aqui iria una lista de mensajes');
    response.success(req, res, 'Aqui iria una lista de mensajes');
});


router.post('/', function (req, res) {
    console.log(req.query); // Esto permite que la url sea aceptado como body
    console.log(req.body);  // Imprime el valor de body
    // res.status(201).send([{error: '', body: 'Creado correctamente'}]);
    // Arriba estoy devolviendo un status 201 en ves del 200
    // y ademas se recibe como respuesta un array de objetos, puede ser respuesta plana o un objeto 
    if (req.query.error == "ok") {
        // Pequeño if para poder ver si salio todo bien o no 
        response.error(req, res, 'Error inesperado', 400, 'Es solo una simulación del error');
    }else {
        response.success(req, res, 'Creado correctamente', 201);
    // Aca arriba estoy llamando el modulo externo y darle un boddy y un status
    }
});

module.exports = router;
