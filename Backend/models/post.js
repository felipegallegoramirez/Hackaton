const { string, number } = require("joi");
const mongoose = require("mongoose");
const StorageScheme = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    password: {
      type: String,
      require: true,
    },

    publication: [{
      type: String,
    }],

    follows: [{
      type: String,
    }],

    followers:[{
      type: String,
    }],

    permissions: [{
      type: Number,
    }],

    verified: {
      state: {
        type: Number,
        require: false
      },
      code: {
        type: Number,
        require: false
      },
    },

    ips:[{
        type: String,
        require: true
      }]
    },


  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.models.Users || mongoose.model("Post", StorageScheme);