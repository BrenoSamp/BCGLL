const express = require('express');
const app = express();
const avaliacoesRoute = express.Router();
const session = require('express-session');

app.use(session({
    secret: 'nosso segredinho',
    resave: false,
    saveUninitialized: true,
<<<<<<< Updated upstream
    cookie: { secure: false },
=======
    name: 'catapimbas'
>>>>>>> Stashed changes
}));

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
                    Games.updateOne({ nome: req.body.game_id }, { avaliacao: notaTotal }, { new: true }, (error) => {
                        if (error) {
                            return next(error)
                        } else {
                            console.log('Avaliacao atualizada com sucesso');
                        }
                    });
                }
            });
            res.json(data)
        }
    })
});

module.exports = avaliacoesRoute;