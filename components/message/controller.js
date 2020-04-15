//ACA VA TODA LA LOGICA DEL NEGOCIO DE LAS RESPONSE

const store = require('./store'); // se importa el archivo de guardado bdd


function addMessage(user, message) {

    return new Promise((resolve, reject) => {
        if(!user || !message) {
            console.error('[MessageController]: No hay user o message');
            reject('Los datos son incorrectos');
            return false;
        }

        const fullMessage = {
            user : user,
            message: message,
            date: new Date()    //Se le agrega un valor fecha
        };
        console.log(fullMessage);
        store.add(fullMessage);
        resolve(fullMessage);
    });
    
    
}

function getMessages() {
    return new Promise((resolve, reject) =>{
        resolve(store.list());
    });
}
module.exports = {
    addMessage,
    getMessages
}