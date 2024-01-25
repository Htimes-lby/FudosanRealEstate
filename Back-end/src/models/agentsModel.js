const mongoose = require("mongoose");

const agentsSchema = new mongoose.Schema({
  posterId: {
    type: Schema.Types.objectId,
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
      type: String,
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
    type: String,
  },
  companyName: {
    type: String,
  },
  content: {
    type: String,
  },
  qualificationCopy: {
    type: String,
  },
  approved: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Agent", agentsSchema);
