const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  name: {
    type: String,
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
