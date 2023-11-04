const { string, number } = require("joi");
const mongoose = require("mongoose");
const StorageScheme = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    user_id: {
      type: String,
      required: true,
      trim: true
    },

    imgurl:{
      type:String
    },

    stage:{
      type:String
    },

    date:{
      type:String
    },

    users:[{
      type:String
    }],

    position:[{
      user:{
        type:String
      },
      points:{
        type:Number
      }
    }]

  },

  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.models.Users || mongoose.model("Post", StorageScheme);