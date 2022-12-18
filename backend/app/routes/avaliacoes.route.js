const express = require('express');
const app = express();
const avaliacoesRoute = express.Router();

const models = require('../models/models');
const Avaliacoes = models.Avaliacoes;

avaliacoesRoute.route('/').get((req, res) => {
    Avaliacoes.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

avaliacoesRoute.route('/create').post((req, res, next) => {
    Avaliacoes.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
});

module.exports = avaliacoesRoute;