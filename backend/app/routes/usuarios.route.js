const express = require('express');
const app = express();
const usuarioRoute = express.Router();
const session = require('express-session');

app.use(session({
    secret: 'nosso segredinho',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
}));

const models = require('../models/models');
const Usuario = models.Usuario;

usuarioRoute.route('/').get((req, res) => {
    Usuario.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

usuarioRoute.route('/signup').post((req, res, next) => {
    Usuario.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
});

usuarioRoute.route('/login').post((req, res, next) => {
    Usuario.findOne({
        email: req.body.email,
        senha: req.body.senha
    }, (error, data) => {
        if (data === null) {
            return next(error)
        } else {
            req.session = 'Logado';
            console.log(data)
            res.json(data)
        }
    })
});

module.exports = usuarioRoute;
