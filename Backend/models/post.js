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

    data:[{
      ty:{ // Esto es que tipo de archivo es (Imagen, Parrafo, )
        type: String,
      },
      data:{
        type: String,
      }
    }],

    comentario:[{
      text:{
        type: String,
      },
      date:{
        type: String,
      },
      user_id:{
        type: String,
      },
      user_name:{
        type: String,
      }

    }]

  },

  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.models.Users || mongoose.model("Post", StorageScheme);