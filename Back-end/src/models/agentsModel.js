const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const agentsSchema = new mongoose.Schema({
  posterId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  agentName: {
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
    },
  },
  agentEmail: {
    type: String,
  },
  address: {
    zipCode: {
      type: Number,
    },
    province: {
      type: String,
    },
    city: {
      type: String,
    },
    street: {
      type: String,
    },
  },
  category: {
    type: String,
  },
  phoneNumber: {
    type: Number,
  },
  companyName: {
    type: String,
  },
  content: {
    type: String,
  },
  qualificationCopy: [String],
  approved: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Agent", agentsSchema);
