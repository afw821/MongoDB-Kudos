const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const usersSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: "Username is Required"
  },
  password: {
    type: String,
    trim: true,
    required: "Password is Required"
  },
  notes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Note"
    }
  ]
});

const users = mongoose.model("users", usersSchema);

module.exports = users;
