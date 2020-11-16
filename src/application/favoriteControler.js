// Here all the data and responses of users' favorite superheros are managed.

const { Router } = require('express');
const router = Router();
const mongoose = require('mongoose');
const mongo = require("mongodb");
const fetch = require('node-fetch');
const Persona = require('../Models/Persona');
const URL_CHARACTERS = 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=8dda902132ab9a80cb03cad612e58688&hash=5c5f974ea47a7cce34290282b492be61';
const { makeSuperHeroList, makeHero } = require('./superheroService');
const _ = require("lodash");

//GET Full-List: Gets the complete data that the front end needs for each superhero
router.get('/full-list/:dni', async (req, res) => {
    const dni = req.params.dni;
    try {
        let personData = await Persona.find({"dni": dni});
        const superherosIds = personData[0].favorites;
        let listFavorites = []
        for(let i = 0; i < personData[0].favorites.length; i++) {
            let fetchSuperhero = fetch(`${URL_CHARACTERS}&id=${personData[0].favorites[i]}`);
            listFavorites.push(fetchSuperhero);
        } 
        Promise.all(listFavorites).then(values => {
            return Promise.all(values.map(r => r.json()));
        }).then((fetchList) => {
            const list = [];
            for(i=0; i<fetchList.length; i++) {
                if(_.isEmpty(fetchList[i]) && _.isEmpty(fetchList[i].data) && _.isEmpty(fetchList[i].data.results[0])) {
                    list.push({"Error Message": "Superhero NOT FOUND"}); //Needs to define with front how to send this error
                } else {
                    const finalFavorite = makeHero(fetchList[i].data.results[0]);
                    list.push(finalFavorite);
                }
            }
            personData.favorites = list;
            const finalResponse = {
                personData,
                list
            }
            res.status(200).send(finalResponse);
        });
    } catch (err) {
        res.status(500).send(`There was an error trying to get the Data: ${err}`);
    }
});

//GET FAVORITES: get the favorite Superheros Ids
router.get('/:dni', async (req, res) => {
    const dni = req.params.dni;
    const nombre = req.params.nombre;
    console.log(nombre);
    try {
        const data = await Persona.find({"dni": dni});
        res.status(200).send({data}); 
    } catch (err) {
        res.status(500).send(`There was an error trying to get the Data: ${err}`);
    }
});
//

//POST FAVORITES
router.post('/:dni', async (req, res) => {
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
    res.status(200).send({favorites: data.favorites});
    
} catch (err) {
    res.status(500).send(`There was an error trying to update the data: ${err}`);
}
});

module.exports = router;
