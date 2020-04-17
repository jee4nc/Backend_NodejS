//ACA VA TODA LA LOGICA DEL NEGOCIO DE LAS RESPONSE

const store = require('./store'); // se importa el archivo de guardado bdd


function addMessage(chat, user, message) {

    return new Promise((resolve, reject) => {
        if(!user || !message || !chat) {
            console.error('[MessageController]: No hay user o message');
            reject('Los datos son incorrectos');
            return false;
        }

        const fullMessage = {
            chat: chat,
            user : user,
            message: message,
            date: new Date()    //Se le agrega un valor fecha
        };
        console.log(fullMessage);
        store.add(fullMessage);
        resolve(fullMessage);
    });
    
    
}

function getMessages(filterUser) { // le paso como parametro filteUser
    return new Promise((resolve, reject) =>{
        resolve(store.list(filterUser)); // Y resuelve la promesa con filter como parametro
    });
}

function updateMessage(id, message) {
    // El metodo updateMessage recibe el id y el message
    return new Promise(async (resolve, reject) => {
        // Retornara una promesa asyncrona
        if (!id || !message) {
            //Si no recibe un id o un message
            reject('Invalid data');
            //Retorna esto
            return false;
        }
        const ressult = await store.updateText(id, message);
        //Si no entra en el if, hará el await aca, del metodo updateText de store y le 
        //pasa los parametros
        resolve(ressult);
        //Devuelve este await, revisar el store.js
            
    })
}

function deleteMessage(id) {
    return new Promise((resolve, reject) => { // promesa
        if(!id) { // si no recibe id
            reject('Parametros o id Invalido'); // retorna esto y false
            return false;
        }
        store.remove(id)    // si no entra aca donde metodo remove recibe id como param
            .then(() =>{
                resolve();  // si todo sale bien se resuelve
            })
            .catch(e => {
                reject(e);  // si pasa algo se captura el error y reject
            })
        
    })
}
module.exports = {
    addMessage,
    getMessages,
    updateMessage, // Se exporta
    deleteMessage
}