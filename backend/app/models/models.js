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

const ConsolesSchema = mongoose.Schema({
    nome: {
        type: String
    }
}, {
    timestamps: false,
    collection: 'consoles'
});

module.exports = mongoose.model({
    Usuario: mongoose.model('Usuario', UsuarioSchema),
    Consoles: mongoose.model('Consoles', ConsolesSchema),
    
});