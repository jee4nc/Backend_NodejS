const express = require('express');
const message = require('../components/message/network');
const user = require('../components/users/network');
//Arriba esta llamando a las respuestas de message
const routes = function(server) {
    server.use('/mensajes', message)
    server.use('/users', user)
    // Cuando el servidor entre a la url mensajes, devolera el message que corresponda
    //Recordar que message es el componente de arriba
}

module.exports = routes;