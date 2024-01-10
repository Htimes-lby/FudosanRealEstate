const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  imageURL: {
    type: String
  },
  address:{
    type:String
  },
    sort:{
    type:Boolean
  }
});

module.exports = mongoose.model("Feedback", feedbackSchema);
