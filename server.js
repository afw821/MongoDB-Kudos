
//Requiring our dependencies
const express = require('express');
const mongoose = require('mongoose');
// const kudos = require('./models/kudos.js');
// const users = require('./models/users.js');

//setting up our local host port on 3000 and starting server and assigning it a constant (app)

const PORT = process.env.PORT || 3016;
const app = express();

//Our express.js middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public')); // serves our public files

//
mongoose.connect('mongodb://localhost/kudositeDB', { useNewUrlParser: true}); //name of database kudositeDB

//require api-routes 
require('./routes/api-routes')(app);

//set up server to listen for port 3000 and console log the port it's listening to
app.listen(PORT, function(){
    console.log(`application running on port ${PORT}`);
});

