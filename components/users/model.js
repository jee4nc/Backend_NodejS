const mongoose = require('mongoose'); // se importa mongooose

const Schema = mongoose.Schema; // se crea esquema

const mySchema = new Schema({ // modelo de SCHEMA
    name: String
});

const model = mongoose.model('User', mySchema);
module.exports = model;