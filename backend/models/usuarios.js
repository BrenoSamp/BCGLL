const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema({
    nome: {
        type: String
    },
    email: {
        type: String
    },
    senha: {
        type: String
    }
}, {
    timestamps: false,
    collection: 'usuarios'
});


module.exports = mongoose.model('Usuario', UsuarioSchema);