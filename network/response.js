exports.success = function (req, res, message, status) {
    // En este modulo, respondere las peticiones 
    res.status(status || 200).send({
        // Aca si el status no viene incluido será un 200 por default
        error: '',
        body: message
    });
}

exports.error = function (req, res, message, status) {
    //
    res.status(status || 500).send({
        error: message,
        body: ''
    });
}

// De esta manera en los modulos de arriba, funcionaran como respuesta
// dependiendo si es succes o error