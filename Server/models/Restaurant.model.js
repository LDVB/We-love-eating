const { Schema, model } = require("mongoose");
const restaurantSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: [true, 'El nombre es obligatorio.'],
      trim: true,

    },

    location: {
      type: String,
    },

    image: {
      type: String,
    },

    website: {
      type: String,
    },

    description: {
      type: String,
      maxlength: 500,
      trim: true,
    },

  },
  {

    timestamps: true,
  }
);

const Restaurant = model("Restaurant", restaurantSchema);

module.exports = Restaurant;