
//requiring our dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//This creates a new task schema to map mongo documents to an object in our node application

const kudosSchema = new Schema({
    title: {
        type: String,
        trim: true,

    },
    from: {
        type: String
    },
    to: {
        type: String  
    },
    message: {
        type: String,
    },

});

const kudos = mongoose.model("kudos", kudosSchema);

module.exports = kudos;



