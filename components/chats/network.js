const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.post('/', function(req, res) { // Metodo post 
    controller.addChat(req.body.users)  // Instancia addChat de controller 
                                        // y le da como parametro y lo saca de body.users

        .then(data => {  // Si se resuelve la promesa, el data 
                         // regresa response si es asi
            response.success(req, res, data, 201);
        })
        .catch(err => {     // Si se resuelve la promesa con error, se captura
                            // Regresa response. error 
            response.error(req, res, 'Internal error', 500, err)
        });
});

router.get('/:userId', function(req, res) {
    controller.listChats(req.params.userId)
        .then(users => {
            response.success(req, res, users, 200);
        })
        .catch(err => {
            response.error(req, res, 'Internal Error', 500, err);
        });
});

module.exports = router;

