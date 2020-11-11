const express = require('express');
const app = express();
const morgan = require('morgan');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Superhero = require('./Models/superhero');

//settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// routes
app.use('/api/users', require('./routes/users'));
app.use('/api/characters', require('./application/superheroControler'));

// starting the server and conecting with MongoDB

mongoose.connect('mongodb+srv://arganarazalvaro:cocacola88@cluster0.yd2hm.mongodb.net/', { 
    dbName: 'favorites',
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
}).then(() => {
    console.log('MongoDB is connected');
}).catch((err) => {
    console.log(`There was an error: ${err}`)
});

app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});


