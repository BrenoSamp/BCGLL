const express = require('express');
const app = express();
const jogosRoute = express.Router();

let Jogos = require('../models/jogos');

jogosRoute.route('/').get((req, res) => {
    Jogos.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

jogosRoute.route('/create').post((req, res, next) => {
    Jogos.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
});

jogosRoute.route('/read/:id').get((req, res) => {
    Jogos.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

module.exports = jogosRoute;