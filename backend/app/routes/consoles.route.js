const express = require('express');
const app = express();
const consolesRoute = express.Router();

const models = require('../models/models');
const Consoles = models.Consoles;

consolesRoute.route('/').get((req, res) => {
    Consoles.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

consolesRoute.route('/create').post((req, res, next) => {
    Consoles.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
});

consolesRoute.route('/read/:id').get((req, res) => {
    Consoles.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

module.exports = consolesRoute;