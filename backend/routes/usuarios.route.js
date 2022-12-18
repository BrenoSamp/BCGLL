const express = require('express');
const app = express();
const usuarioRoute = express.Router();

let Usuario = require('../models/usuarios');

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
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
});

module.exports = usuarioRoute;