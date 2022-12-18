const express = require('express');
const app = express();
const avaliacoesRoute = express.Router();

const models = require('../models/models');
const Reviews = models.Reviews;
const Games = models.Games;

avaliacoesRoute.route('/').get((req, res) => {
    Reviews.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

avaliacoesRoute.route('/:game_id').get((req, res) => {
    Reviews.find({ game_id: req.params.game_id }, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

avaliacoesRoute.route('/create').post((req, res, next) => {
    Reviews.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            Reviews.find({ game_id: req.body.game_id }, (error, data) => {
                if (error) {
                    return next(error)
                } else {
                    notaTotal = 0;
                    for (i = 0; i < data.length; i++) {
                        notaTotal += data[i].nota;
                    }
                    notaTotal = notaTotal / data.length;
                    Games.updateOne({ nome: req.body.game_id }, { avaliacao: notaTotal });
                }
            });
            res.json(data)
        }
    })
});

module.exports = avaliacoesRoute;