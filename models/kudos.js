
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
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    to: {
        type: Schema.Types.ObjectId,
        ref:"users"
    },
    message: {
        type: String,
        trim: true,
    },

});

const kudos = mongoose.model("kudos", kudosSchema);

module.exports = kudos;



