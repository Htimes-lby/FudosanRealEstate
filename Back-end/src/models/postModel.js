const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new mongoose.Schema({
  realEstateCategory: {
    type: Boolean,
  },

  privacy: [{
    province:{
      type:String
    },
    city:{
        type:String
    },
    buildingName:{
        type:String
    },
    street:{
      type:String
    },
    phoneNumber:[{
      type:Number
    }],
    postalNumber:[{
      type:Number
    }],
    email: {
      type: String,
    },
    age:{
      type:Number
    },
    firstNameGana: {
        type: String 
    },
    lastNameGana: {
        type: String 
    },       
    firstNameGanji: {
      type: String 
    },
    lastNameGanji: {
        type: String 
    },
    password: {
      type: String,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    verificationCode:{
      type:String
    },
}],
  
  description:[{
    briefDescription:{
        type:String
    },
    fullDescription:{
        type:String
    }
  }],
  basicInfo:[{
    budget:{
      type:Number
    },
    layout:{
      type:String
    },
    landarea:{
      type:Number
    },
    buildingarea:{
      type:Number
    },
    deadline:{
      type:String
    },
    parking:{
      type:Number
    }
    }],

    imagePaths: [{ type: String }],
    
    basiclandInfo:[{
      budget:{
        type:Number
      },
      landarea:{
        type:String
      },
      dryCloseRate:{
        type:Number
      },
      floorAreaRatio:{
        type:Number
      },
      structure:{
        type:String
      }
    }]
});

module.exports = mongoose.model("Post", postSchema);
