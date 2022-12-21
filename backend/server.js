const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

var corsOptions = {
    origin: 'https://bcgll.vercel.app/',
    optionsSuccessStatus: 200,
    credentials: true,
    preflightContinue: true
};

const gamesRoute = require('./app/routes/games.route');
const usuariosRoute = require('./app/routes/usuarios.route');
const avaliacoesRoute = require('./app/routes/avaliacoes.route');
const consolesRoute = require('./app/routes/consoles.route');

app.use(cors(corsOptions, { credentials: true }));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use('/games', gamesRoute);
app.use('/usuarios', usuariosRoute);
app.use('/avaliacoes', avaliacoesRoute);
app.use('/consoles', consolesRoute);

const db = require('./app/models/models');
mongoose.connect('mongodb://127.0.0.1:27017/bcgll', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conectado com o banco de dados!');
}).catch(err => {
    console.log('Não pôde conectar ao banco de dados!', err);
    process.exit();
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}.`);
});