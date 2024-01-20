const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new mongoose.Schema({
  realEstateCategory: {
    type: Boolean,
  },

  privacy: [

    {email: {
      type: String,
      required: [true, "Must be provided email"],
      maxlength: [30, "email must be less than 30 characters"],
      trim: true,
    }},
    {password: {
      type: String,
      required: [true, "Must be provided password"],
    }},
    {firstNameGanji: {
      type: String 
    }},
    {lastNameGanji: {
        type: String 
    }},
    {firstNameGana: {
        type: String 
    }},
    {lastNameGana: {
        type: String 
    }},       
    {age:{
      type:Number
    }},
    {phoneNumber:
      [{type:Number}]
    },
    {province:{
      type:String
    }},
    {city:{
        type:String
    }},
    {streetBunch:{
        type:String
    }},
    {postNumber:
      [{type:String}]
    },
    {buildingName:{
        type:String
    }},
  ],
  
   
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
