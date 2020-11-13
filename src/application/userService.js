// Here it`s gonna be all the logic of user´s favorites superhero

const { Router } = require('express');
const router = Router();
const { makeSuperHeroList } = require('./superheroService');

// This function will take care of geting the data of every ID on the favorites List
function getFavoritesCompleteData(superheroListIds) {
    const list = [];
    for(let i = 0; i < superheroListIds.length; i++) {
    router.get('/', async (req, res) => {
    try {
    const response = await fetch(`${URL_CHARACTERS}&id=${superheroListIds[i]}`);
    const data = await response.json();
    const finalData = makeSuperHeroList(data);
    list.push(finalData);
    res.send(finalData);
    } catch (error) {
        console.log("An error has ocurred while trying to get the superheroList");
        console.log("An error has ocurred:", error );
        const err = {
            code:101,
            severity:"HIGH",
            message:"Server Internal Error"
        }
        res.status(500).send(err);
    }
});
    }};

module.exports = { getFavoritesCompleteData };