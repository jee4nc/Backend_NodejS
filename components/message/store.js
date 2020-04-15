//Aca iria toda la logica de guardado
const db = require('mongoose'); // se tiene que instalar npm i mongoose
const Model = require('./model'); // Se tiene que importar el modelo

//mongodb+srv://db_user_nodeBasic:xw0RgPigFg9qG8eq@cluster0-hjjvn.mongodb.net/test
// Esta url se pide de mongoatlas, y se pone la contraseña

db.Promise = global.Promise; // Se importa la libreria
db.connect('mongodb+srv://db_user_nodeBasic:xw0RgPigFg9qG8eq@cluster0-hjjvn.mongodb.net/test', {
    useNewUrlParser: true, // necesario 
    useUnifiedTopology: true,  //necesario
}); // Se hace la connection
console.log('[db] Conectada con exito'); 
//si todo sale con exito, se imprimirá esto

function addMessage(message) {
    // list.push(message);
    const myMessage = new Model(message); // se crea una nueva instancia del modelo y se envia mensaje
    myMessage.save(); // se guarda en la bdd
}

async function getMessage() { // funcion asyncrona
    // return list;
    const messages = await Model.find(); // espera que retorne todos los modelos
    return messages; // se muestra
}

module.exports = {
    add: addMessage,
    list: getMessage
    //GET
    //UPDATE
    //DELETE
}