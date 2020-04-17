const mongoose = require('mongoose'); // se importa mongooose

const Schema = mongoose.Schema; // se crea esquema

const mySchema = new Schema({ // modelo de SCHEMA
    chat: {
        type: Schema.ObjectId,
        ref: 'Chat',
    },
    user: { // poniendo user como modelo relacional
        type: Schema.ObjectId,
        ref: 'User',
    },
    message: {
        type: String,
        required: true,
    },
    date: Date,
    file: String, // Esto es el multer
});

const model = mongoose.model('Message', mySchema);
module.exports = model;