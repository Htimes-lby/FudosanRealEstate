const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new mongoose.Schema({
  realEstateCategory: {
    type: Boolean,
  },
  posterInfo:{
    type: Schema.Types.ObjectId,
    ref:"User"
  },
  address:[{
    province:{
        type:String
    },
    city:{
        type:String
    },
    streetBunch:{
        type:String
    },
    postNumber:{
      type:Number
    },
    buildingName:{
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
    imageURL:{
        type:String
    },

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
