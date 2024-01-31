const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const feedbackSchema = new mongoose.Schema({

  poster: {
    type: Schema.Types.ObjectId,
    ref: 'User',
},
  name: {
    firstNameGanji: {
        type: String,
    },
    lastNameGanji: {
        type: String,
    },
    firstNameGana: {
        type: String,
    },
    lastNameGana: {
        type: String,
    }
  },
  address: {
    province: {
      type: String,
    },
    city: {
      type: String,
    },
    street: {
      type: String,
    },
    zipCode: {
      type: String,
    },
  },
  images: [String],
  briefContent: {
    type: String,
  },
  fullContent: {
    type: String,
  },
});

module.exports = mongoose.model("Feedback", feedbackSchema);
