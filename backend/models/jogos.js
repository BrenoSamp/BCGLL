const mongoose = require('mongoose');

const JogosSchema = mongoose.Schema({
    nome: {
        type: String
    },
    desenvolvedora: {
        type: String
    },
    genero: {
        type: String,
        enum: ['Ação', 'Aventura', 'Estratégia', 'RPG', 'Esporte', 'Simulação']
    },
    descricao: {
        type: String
    },
    capa: {
        type: String
    },
    nota: {
        type: Number
    },
    console: {
        type: String
    },
}, {
    timestamps: false,
    collection: 'jogos'
});

module.exports = mongoose.model('Jogos', JogosSchema);