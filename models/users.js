const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  from: {
    type: String
  }
});

const users = mongoose.model("users", usersSchema);

module.exports = users;
