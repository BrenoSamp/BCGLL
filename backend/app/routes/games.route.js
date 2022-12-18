const express = require('express');
const gamesRoute = express.Router();
let Models = require('../models/models');

// Games model
let Games = Models.Games;
// Lista 3 jogos mais votados
gamesRoute.route('/list-most-rated/:consoleId').get((req, res, next) => {
    consoleGames = Games
        .find({
            console_id: req.params.consoleId,
        })
        .limit(3)
        .sort({ avaliacao: -1 })
        .exec(function (err, games) {
            if (err) {
                return next(err)
            } else {
                res.json(games)
            }
        });
});

gamesRoute.route('/list-filtered/:consoleId').get((req, res, next) => {
    var query = {
        console_id: req.params.consoleId
    };
    bodyParams = req.body;

    if (bodyParams.nome) {
        query.nome = bodyParams.nome
    }

    if (bodyParams.desenvolvedor) {
        query.desenvolvedor = bodyParams.desenvolvedor
    }

    if (bodyParams.genero) {
        query.genero = bodyParams.genero
    }

    consoleGames = Games
        .find(query)
        .exec(function (err, games) {
            if (err) {
                return next(err)
            } else {
                res.json(games)
            }
        });
});

module.exports = gamesRoute;