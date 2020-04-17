// Archivo de configuracion de socket io

const socketIO = require('socket.io'); // se importa socket
const socket = {};  // se inicia como objeto, porque asi es referencia

function connect(server) {
    socket.io = socketIO(server);
}

module.exports = {
    connect,
    socket,
}