const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UsuarioSchema = mongoose.Schema({
    nome: {
        type: String
    },
    email: {
        type: ObjectId
    },
    senha: {
        type: String
    }
}, {
    timestamps: false,
    collection: 'usuarios'
});


module.exports = mongoose.model('Usuario', UsuarioSchema);