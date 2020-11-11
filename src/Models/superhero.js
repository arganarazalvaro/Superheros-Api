const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let SuperheroSchema = Schema({
    id: Number,
    number: Number,
    name: String,
    description: { type: String, default: "Description Missing"},
    image: String,
    detail: String
});

const Superhero = mongoose.model("Superhero", SuperheroSchema);

module.exports = Superhero;
