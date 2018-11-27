
//requiring our dependency 
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//This creates a new task schema to map mongo documents to an object in our node application

const kudosSchema = new Schema({
    title: {
        type: String,
        trim: true,
      
    },
    message: {
        type: String,
        trim: true,
        // minLength: [25, "Minimum of 25 characters"]
    }
});

const kudos = mongoose.model("kudos", kudosSchema);

module.exports = kudos;

// 2. You should have two models, one for all Users and one for all Kudos. The Kudos model should take in the `ObjectId` for Users so that we know from whom the Kudos are coming from and to whom the Kudos are meant for.

// 3. Be sure to create your own starter data (Users and Kudos) so that you can test as you build out the application.