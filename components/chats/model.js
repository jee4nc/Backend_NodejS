const mongoose = require('mongoose'); // se importa mongooose

const Schema = mongoose.Schema; // se crea esquema

const mySchema = new Schema({ // modelo de SCHEMA
    users: [{
        type: Schema.ObjectId,
        ref: 'User'
    }]
});

const model = mongoose.model('Chat', mySchema);
module.exports = model;