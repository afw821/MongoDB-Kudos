const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const usersSchema = new Schema({
  sender: {
    type: String,
    trim: true,
    enum: ["Alex", "Bob", "Harold", "Kumar"]
  },
  receiver: {
    type: String,
    trim: true,
    enum: {
      values: ["Alex", "Bob", "Harold", "Kumar"],
      message: "Sorry, wrong category"
    }
  },
  kudos: [
    {
      type: Schema.Types.ObjectId,
      ref: "kudos"
    }
  ]

});

const users = mongoose.model("users", usersSchema);

module.exports = users;
