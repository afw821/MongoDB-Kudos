
//requiring our dependency 
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//This creates a new task schema to map mongo documents to an object in our node application

const kudosSchema = new Schema({
    body: String
});

const kudos = mongoose.model("kudos", kudosSchema);

module.exports = kudos;