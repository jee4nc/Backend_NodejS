const express = require('express');
const message = require('../components/message/network');
const user = require('../components/users/network');
const chat = require('../components/chats/network'); // Se tiene que importar el network
                                                    // desde el controller
//Arriba esta llamando a las respuestas de message
const routes = function(server) {
    server.use('/messages', message);
    server.use('/user', user);
    server.use('/chat', chat); // Se crea la ruta 
    // Cuando el servidor entre a la url mensajes, devolera el message que corresponda
    //Recordar que message es el componente de arriba
}

module.exports = routes;