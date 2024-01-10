const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  category: {
    type: String,
  },
  postInfo:[{
    name:{
        type: Schema.Types.ObjectId,
        ref:"User"
    },
    age:{
        type:Date
    },
    email:{
        type: Schema.Types.ObjectId,
        ref:"User"
    },
    zipCode:{
        type:Number
    },

  }],
  address:[{
    prefectures:{
        type:String
    },
    municipalities:{
        type:String
    },
    streetBunch:{
        type:String
    },
    buildingName:{
        type:String
    },
  }],
  description:[{
    shortDescription:{
        type:String
    },
    fullDescription:{
        type:String
    }
  }],
  mainInfo:[{
    price:{
      type:String
    },
    floorPlan:{
      type:String
    },
    landArea:{
      type:String
    },
    buildingArea:{
      type:String
    },
    moveIn:{
      type:String
    },
    parking:{
      type:String
    }
    }],
    imageURL:{
        type:String
    },
});

module.exports = mongoose.model("Post", postSchema);
