const { Router } = require('express');
const router = Router();
const mongoose = require('mongoose');
const fetch = require('node-fetch');
const URI_DB = 'mongodb+srv://arganarazalvaro:cocacola88@cluster0.yd2hm.mongodb.net/';
const Persona = require('../Models/persona');
const mongo = require("mongodb");

const { getFavoritesCompleteData } = require('../application/userService');

const URL_CHARACTERS = 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=8dda902132ab9a80cb03cad612e58688&hash=5c5f974ea47a7cce34290282b492be61';

/*
router.get('/favorites/:dni', async (req, res) => {
    const response = await fetch(`${URI_DB}&dni=${req.params.dni}`); //look for favorites in DB. All ID´s
    //Here its going to be the function getFavoritesCompleteData: look for superhero data of every ID on the favorites list (1x1)
    const data = await response.json();
    res.send(data);
});
*/

router.get('/favorites', async (req, res) => {
    const dni = req.body.dni;
    try {
        const data = await Persona.find({"dni": dni});
        const favoriteIdList = data[0].favorites;
        console.log(favoriteIdList);
        getFavoritesCompleteData(favoriteIdList);
        res.status(200).send(favoriteIdList);  
    } catch (err) {
        res.status(500).send(`There was an error trying to get the Data: ${err}`);
    }
});

router.post('/favorites', async (req, res) => {
    const dni = req.body.dni;
    let favorite = new Persona();
    favorite.dni = dni;
    favorite.favorites = req.body.superheroListIds;

try {
    favorite.save((err, favoriteStored) => {
    if (err) res.status(500).send({message: `There was an error trying to save the Data: ${err}`});
    res.status(200).send({favorite: favoriteStored})
});
} catch (err) {
    res.status(500).send(`There was an error trying to save the Data: ${err}`);
}
});

// Here its gonna be a router.put to update favorites
// Here its gonna be a router.delete to delete favorites

module.exports = router;

//All this code it´s goning to be moved into userControler.js and userService.js, as appropriate
