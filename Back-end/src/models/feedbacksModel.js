const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  imageURL: {
    type: Schema.Types.ObjectId,
    ref:"Estate"
  },
  address:{
    type:String
  },
  mainInfo:{
    type: Schema.Types.ObjectId,
    ref:"Estate"
  },
  sort:{
    type:Boolean
  }
});

module.exports = mongoose.model("Feedback", feedbackSchema);
