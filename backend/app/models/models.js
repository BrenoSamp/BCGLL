const { Int32 } = require('mongodb');
const mongoose = require('mongoose');
const schema = mongoose.Schema;
const objectId = schema.ObjectId;

const UsuarioSchema = schema({
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

const ConsolesSchema = schema({
    nome: {
        type: String
    },
}, {
    timestamps: false,
    collection: 'consoles'
});

const GamesSchema = schema({
    image: {
        type: String
    },
    nome: {
        type: String
    },
    resumo: {
        type: String
    },
    desenvolvedor: {
        type: String
    },
    genero: {
        type: String
    },
    avaliacao: {
        type: Number
    },
    console_id: {
        type: String
    }

}, {
    timestamps: false,
    collection: 'games'
});

const ReviewsSchema = schema({
    nota: {
        type: Number
    },
    descricao: {
        type: String
    },
    game_id: {
        type: String
    },
}, {
    timestamps: false,
    collection: 'reviews'
});

module.exports = {
    Usuario: mongoose.model('Usuario', UsuarioSchema),
    Consoles: mongoose.model('Consoles', ConsolesSchema),
    Games: mongoose.model('Games', GamesSchema),
    Reviews: mongoose.model('Reviews', ReviewsSchema),
    mongoose
};