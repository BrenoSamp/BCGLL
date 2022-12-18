const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const JogosSchema = mongoose.Schema({
    nome: {
        type: ObjectId
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