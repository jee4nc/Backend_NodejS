const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', function (req, res) {
    // console.log(req.headers);
    // res.header({ // Esto me permite poder enviar un header especifico
    //              // Esto se ve en el apartado Header
    //     "custom-header": "Nuestro header",
    // });
    // // res.send('Aqui iria una lista de mensajes');
    // response.success(req, res, 'Aqui iria una lista de mensajes');


    controller.getMessages() //Se llama a la funcion de controller get message
                            // esta funcion trae la lista de mensajes

    .then((messageList) =>{ //si se resuelve, recibe el mensaje del controller get message
        response.success(req, res, messageList, 200); //Responde todo bien y el messageList

    })
    .catch( e => {
        response.error(req, res, 'Unexpected Error', 500, e);
        //Si no, entra al catch y se devuelve esto
    })
});


router.post('/', function (req, res) {
    controller.addMessage(req.body.user, req.body.message) // Recibe como parametro el body de
    .then((fullMessage) => {    //Si se resuelve la promesa recibe el mensaje
        response.success(req, res, fullMessage, 201); // y lo resuelve con la respuesta
    })
    .catch(e => {
        response.error(req, res, 'Informacion invalida', 400, 'Error en el controlador');
        //Si no entra aqui
    })
});

module.exports = router;
