const db = require('mongoose'); // se tiene que instalar npm i mongoose
db.Promise = global.Promise; // Se importa la libreria

//mongodb+srv://db_user_nodeBasic:xw0RgPigFg9qG8eq@cluster0-hjjvn.mongodb.net/test
// Esta url se pide de mongoatlas, y se pone la contraseña

//url como parametro se le dara desde server.js

async function connect(url) {  //Funcion asyncrona que hara la conexion
    await db.connect(url, {
    useNewUrlParser: true, // necesario 
    useUnifiedTopology: true,  //necesario
    }); // Se hace la connection
    console.log('[db] Conectada con exito'); 
    //si todo sale con exito, se imprimirá esto
}

module.exports = connect;