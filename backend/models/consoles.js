const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ConsolesSchema = mongoose.Schema({
    nome: {
        type: ObjectId
    },
}, {
    timestamps: false,
    collection: 'consoles'
});

module.exports = mongoose.model('Consoles', ConsolesSchema);