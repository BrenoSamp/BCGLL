const express = require('express');
const cors = require('cors');

const app = express();

var corsOptions = {
    origin: '*'
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use('/games', require('./app/routes/games.route'));
app.use('/consoles', require('./app/routes/consoles.route'));
app.use('/avaliacoes', require('./app/routes/avaliacoes.route'));
app.use('/usuarios', require('./app/routes/usuarios.route'));


const db = require('./app/models/models');
const { application } = require('express');
db.mongoose.connect('mongodb://localhost:27017/bcgll', {
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