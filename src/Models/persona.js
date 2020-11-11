const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PersonaSchema = Schema({
    dni: Number,
    favorites: [Number]
});

const Persona = mongoose.model("Persona", PersonaSchema);

module.exports = Persona ;