const mongoose = require('mongoose');

const ConsolesSchema = mongoose.Schema({
    nome: {
        type: String
    },
}, {
    timestamps: false,
    collection: 'consoles'
});

module.exports = mongoose.model('Consoles', ConsolesSchema);