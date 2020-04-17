//Aca iria toda la logica de guardado
const Model = require('./model'); // Se tiene que importar el modelo

function addMessage(message) {
    // list.push(message);
    const myMessage = new Model(message); // se crea una nueva instancia del modelo y se envia mensaje
    myMessage.save(); // se guarda en la bdd
}

async function getMessage(filterUser) { // funcion asyncrona
    // return list;
    return new Promise((resolve, reject ) => {
        let filter = {}; // Se crea un objeto vacio
        if(filterUser !== null) { // su filter user no es null entonces
        filter = { user: filterUser}; // filter tomara user y le dara valor filterUser
     }
        Model.find(filter) // espera que retorne todos los modelos(
        .populate('user')
            .exec((error, populated) => {
                if(error) {
                    reject(error);
                    return false;
                }
                resolve(populated);
            })
    });

}

async function updateText(id, message) {
    //Update text recibe el id y message que se da en controller
    const foundMessage = await Model.findOne({
        // la constante recibe el await de la busqueda de que_id sea igual al params que se recibe
        _id: id
    });
    foundMessage.message = message;
    //EL valor de ese archivo que tiene el mismo id, en el atributo message 
    //Sera igual que el message que se recibe por params

    const newMessage= await foundMessage.save();
    //Un await de que se salve el guardado
    return newMessage;
    //Retorna este await

}

function removeMessage(id) {
    return Model.deleteOne({ //Retorna el modelo con la funcion deleteone
        _id: id //elimina el que el atributo _id sea id
    });
}
module.exports = {
    add: addMessage,
    list: getMessage,
    updateText: updateText, // Se exporta
    remove: removeMessage
    //GET
    //UPDATE
    //DELETE
}