const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

try{
    mongoose.connect('mongodb://localhost:27017/bcgll')
    console.log('Conectado com o banco de dados!');
}
catch(err){
    console.log('Não pôde conectar ao banco de dados!', err);
    process.exit(1);
}

const app = express();

var corsOptions = {
    origin: 'http://localhost:8081'
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}.`);
});