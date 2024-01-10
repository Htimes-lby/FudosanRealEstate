const mongoose = require("mongoose");

const messagesSchema = new mongoose.Schema({
  sender: {
    type: String,
   },
  receiver: {
    type: String,
  },
  content:{
    type:String
  }
});

module.exports = mongoose.model("Message", messagesSchema);
