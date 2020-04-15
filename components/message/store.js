//Aca iria toda la logica de guardado

const list = [];

function addMessage(message) {
    list.push(message);
}

function getMessage() {
    return list;
}

module.exports = {
    add: addMessage,
    list: getMessage
    //GET
    //UPDATE
    //DELETE
}