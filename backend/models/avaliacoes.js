const mongoose = require('mongoose');

const AvaliacoesSchema = mongoose.Schema({
    usuario: {
        type: String
    },
    jogo: {
        type: String
    },
    nota: {
        type: Number
    },
    comentario: {
        type: String
    }
}, {
    timestamps: false,
    collection: 'avaliacoes'
});

module.exports = mongoose.model('Avaliacoes', AvaliacoesSchema);