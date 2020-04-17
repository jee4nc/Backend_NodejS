const express = require('express');

const multer = require('multer');
// Multer permite poder gestionar archivos en nodeJS

const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

const upload = multer({ // Instancia de multer donde se guardan los archivos
    dest: 'uploads/',
})


router.get('/', function (req, res) {
    const filterMessages = req.query.user || null; // Se crea constante que permite pedir el usuario

    controller.getMessages(filterMessages) // Se lo paso como parametro
    //Se llama a la funcion de controller get message
                            // esta funcion trae la lista de mensajes

    .then((messageList) =>{ //si se resuelve, recibe el mensaje del controller get message
        response.success(req, res, messageList, 200); //Responde todo bien y el messageList

    })
    .catch( e => {
        response.error(req, res, 'Unexpected Error', 500, e);
        //Si no, entra al catch y se devuelve esto
    })
});

//single y ('file') que es el nombre del atributo en el modelo
router.post('/',upload.single('file'), function (req, res) {   //UPLOAD ES UN MIDLEWARE, ANTES DE FUNC
    controller.addMessage(req.body.chat ,req.body.user, req.body.message) // Recibe como parametro el body de
    .then((fullMessage) => {    //Si se resuelve la promesa recibe el mensaje
        response.success(req, res, fullMessage, 201); // y lo resuelve con la respuesta
    })
    .catch(e => {
        response.error(req, res, 'Informacion invalida', 400, 'Error en el controlador');
        //Si no entra aqui
    })
});

router.patch('/:id', function(req, res) {
    //El metodo patch recibe como parametro la variable id
    console.log(req.params.id);
    //Aca imprimimos el id para verificar que si lo esta recibiendo

    controller.updateMessage(req.params.id, req.body.message)
    //Llama al metodo updateMessage y le da como parametro el id de params y el body message
        .then((data) =>{
            // Si se resuelve la promesa devolvera el metodo success con los siguientes parametros
            response.success(req, res, data , 200);
        })
        .catch( e => {
            // Si da error devolvera el metodo error
            response.error(req, res , 'Error interno', 500, e);
        });
})

router.delete('/:id', function(req, res){
    controller.deleteMessage(req.params.id) // recibe params.id como parametro a controller
    .then(() => {
        response.success(req, res, `Usuario ${req.params.id} eliminado`, 200);
        // si se resuelve bien es esto
    })
    .catch((e) => {
        // si no esto
        response.error(req, res, 'Error interno', 500, e);  
    })
})
module.exports = router;

    // console.log(req.headers);
    // res.header({ // Esto me permite poder enviar un header especifico
    //              // Esto se ve en el apartado Header
    //     "custom-header": "Nuestro header",
    // });
    // // res.send('Aqui iria una lista de mensajes');
    // response.success(req, res, 'Aqui iria una lista de mensajes');

