const { Router } = require('express');
const router = Router();
const fetch = require('node-fetch');
const { rest } = require('underscore');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Superhero = require('../Models/Superhero');
const _ = require("lodash");

// superheroControler.js handles the data and responses of supeheros

const { makeSuperHeroList } = require('./superheroService');

const URL_CHARACTERS = 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=8dda902132ab9a80cb03cad612e58688&hash=5c5f974ea47a7cce34290282b492be61';

router.get('/', async (req, res) => {
    try {
    const response = await fetch(URL_CHARACTERS);
    const data = await response.json();
    const finalData = makeSuperHeroList(data);
    res.send(finalData);
    } catch (error) {
        console.log("An error has ocurred while trying to get the superheroList");
        console.log("An error has ocurred:", error );
        const err = {
            code:!_.isEmpty(error.code)?error.code:500,
            severity:!_.isEmpty(error.severity)?error.severity:"HIGHT",
            message:!_.isEmpty(error.message)?error.message:"Server Internal Error"
        }
        res.status(500).send(err);
    }
});

router.get('/:limit/:offset', async (req, res) => {
    try {
        const response = await fetch(`${URL_CHARACTERS}&limit=${req.params.limit}&offset=${req.params.offset}`);
        const data = await response.json();
        const finalData = makeSuperHeroList(data);
        res.send(finalData);
    } catch (error) {
        console.log("An error has ocurred while trying to get the superheroList");
        console.log("An error has ocurred:", error );
        const err = {
            code:!_.isEmpty(error.code)?error.code:500,
            severity:!_.isEmpty(error.severity)?error.severity:"HIGHT",
            message:!_.isEmpty(error.message)?error.message:"Server Internal Error"
        }
        res.status(500).send(err);
    }
});

router.get('/:name', async (req, res) => {
    try {
        const response = await fetch(`${URL_CHARACTERS}&name=${req.params.name}`);
        const data = await response.json();
        const finalData = makeSuperHeroList(data);
    res.send(finalData);
    } catch (error) {
        console.log("An error has ocurred while trying to get your superhero");
        console.log("An error has ocurred:", error );
        const err = {
            code:!_.isEmpty(error.code)?error.code:500,
            severity:!_.isEmpty(error.severity)?error.severity:"HIGHT",
            message:!_.isEmpty(error.message)?error.message:"Server Internal Error"
        }
        res.status(500).send(err);
    }
});

module.exports = router;