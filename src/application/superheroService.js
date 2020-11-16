//Here it´s the logic for superheros, the functions will be used in Controler.js

const { Router } = require('express');
const router = Router();
const _ = require("lodash");

// This function creates a list of superheros, with only the info that front end needs.
function makeSuperHeroList(data) {
        let finalList = [];
        let frontResponse = {};
    console.log("superheroListData", data)
    if(_.isEmpty(data) || (data.code && data.code == 404)) {
        throw new Error(data);
    }
    for(let i = 0; i < data.data.results.length; i++) {
        let superHero = makeHero(data.data.results[i]);
        superHero.number = data.data.offset + i + 1;
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

// This function reduces the information of the original API, leaving only the data that frontend needs to create one superhero
function makeHero(data) {
    console.log("MakeHero Initial Data", data);
    let superHero = {};
    superHero.id = data.id;
    superHero.name = data.name;
    superHero.description = data.description;
    superHero.image =  !_.isEmpty(data.thumbnail) && data.thumbnail.path ? data.thumbnail.path + '.' + data.thumbnail.extension : "";
    superHero.detail = !_.isEmpty(data.urls) && data.urls[0] ? data.urls[0].url : "";
    return superHero;
}


module.exports = {makeSuperHeroList, makeHero};