// Here it´s gonna be managed all the data and resposes for user´s favorite superheros

const { Router } = require('express');
const router = Router();
const mongoose = require('mongoose');
const mongo = require("mongodb");
const fetch = require('node-fetch');
const Persona = require('../Models/Persona');


//GET FAVORITES
router.get('/:dni', async (req, res) => {
    const dni = req.params.dni;
    try {
        const data = await Persona.find({"dni": dni});
        res.status(200).send({data}); 
    } catch (err) {
        res.status(500).send(`There was an error trying to get the Data: ${err}`);
    }
});
//This gets the favorite SuperheroIds. We could make a function that gets the full data of each superhero, but this depends on the needs of the front-end.

//POST FAVORITES
router.post('/', async (req, res) => {
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

//DELETE FAVORITES
router.delete('/:dni', async (req, res) => {
    const dni = req.params.dni;
try {
    const data = await Persona.findOneAndDelete({"dni": dni});
    if(!Persona) throw Error ('DNI was not found');
    res.status(200).json({success: true});
} catch (err) {
    res.status(500).send(`There was an error trying to delete the data: ${err}`);
}
});

//UPDATE FAVORITES
router.put('/:dni', async (req, res) => {
    const dni = req.params.dni;
    var newvalues = { $set: {dni: dni, favorites: req.body.superheroListIds}};
try {
    const data = await Persona.findOneAndUpdate({dni: dni}, newvalues);
    
    if(!Persona) throw Error ('Something went wrong while updating!');
    res.status(200).send(data);
} catch (err) {
    res.status(500).send(`There was an error trying to update the data: ${err}`);
}
});

module.exports = router;
