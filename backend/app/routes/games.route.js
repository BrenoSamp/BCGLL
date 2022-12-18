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

module.exports = gamesRoute;