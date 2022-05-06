const { Schema, model } = require("mongoose");
const restaurantSchema = new Schema(
  {
    restaurant: {
        type: String,
        unique: true,
        required: true,
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
  
    assistants: [{
        type: Schema.Types.ObjectId,
        ref: 'Eater',
    }],
 },
  {
    
    timestamps: true,
  }
);

const Restaurant = model("Restaurant", restaurantSchema);

module.exports = Restaurant;