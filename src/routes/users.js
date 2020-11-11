const { Router } = require('express');
const router = Router();
const mongoose = require('mongoose');
const fetch = require('node-fetch');
const URI_DB = 'mongodb+srv://arganarazalvaro:cocacola88@cluster0.yd2hm.mongodb.net/';
const Superhero = require('../Models/superhero');
const Persona = require('../Models/persona');

router.get('/favorites/:dni', async (req, res) => {
    const response = await fetch(`${URI_DB}&dni=${req.params.dni}`); //look for favorites in DB. All ID´s
    //Here its going to be the function getsupeheroIds: look for superhero data of every ID on the favorites list (1x1)
    const data = await response.json();
    res.send(data);
});

router.post('/favorites', async (req, res) => {
    const dni = req.body.dni;
    let favorite = new Persona();
    favorite.dni = dni;
    favorite.favorites = req.body.superheroListIds;

try {
    favorite.save((err, favoriteStored) => {
    if (err) res.status(500).send({message: `There was an error trying to save in the Data Base: ${err}`});
    res.status(200).send({favorite: favoriteStored})
});
} catch (err) {
    res.status(500).send(`There was an error trying to save in the Data Base: ${err}`);
}
});

// Here its gonna be a router.put to update favorites
// Here its gonna be a router.delete to delete favorites

module.exports = router;