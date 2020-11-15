//Here it´s the logic for superheros, te functions will be used in the superheroControler.js

const { Router } = require('express');
const router = Router();

// This function reduces the information of the original API, leaving only the data that frontend needs
function makeSuperHeroList(data) {
        let finalList = [];
        let frontResponse = {};
    for(let i = 0; i < data.data.results.length; i++) {
        let superHero = {};
        const fullHero = data.data.results[i];
        superHero.id = fullHero.id;
        superHero.number = data.data.offset + i + 1;
        superHero.name = fullHero.name;
        superHero.description = fullHero.description;
        superHero.image = fullHero.thumbnail.path + '.' + fullHero.thumbnail.extension;
        superHero.detail = fullHero.urls[0].url;
        finalList.push(superHero);
    }
        frontResponse = {
            pageInfo: {
                offset: data.data.offset,
                limit: data.data.limit,
                total: data.data.total,
                count: data.data.count,
            },
            superHeroList: finalList
        }
    return frontResponse;
}

module.exports = {makeSuperHeroList};