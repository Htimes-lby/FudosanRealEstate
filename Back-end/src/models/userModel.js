const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Must be provided email"],
    maxlength: [30, "email must be less than 30 characters"],
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Must be provided password"],
  },
  name:
      [{
        firstNameGanji: {
          type: String 
        },
        lastNameGanji: {
            type: String 
        },
        firstNameGana: {
            type: String 
        },
        lastNameGana: {
            type: String 
        },       
      }],
    age:{
      type:Date
    },
    phoneNumber:{
      type:String
    }
});

module.exports = mongoose.model("User", userSchema);
