const mongoose = require("mongoose");

const agentsSchema = new mongoose.Schema({
  agentName: {
    type: String,
    required: [true, "Must be provided agentname"],
    maxlength: [20, "agentname must be less than 20 characters"],
    trim: true,
  },
  companyName: {
    type: String,
    required: [true, "Must be provided companyname"],
    trim: true,
  },
  agentEmail: {
    type: String,
    required: [true, "Must be provided agentemail"],
    trim: true,
  },
  zipCode: {
    type: Number,
    required: [true, "Must be provided zipcode"],
  },
  phoneNumber: {
    type: String,
  },
  qualificationCopy:{
    type:String
  },
  content:{
    type:String
  },
  agentSort:{
    type:String  
  }
  
});

module.exports = mongoose.model("Agent", agentsSchema);
