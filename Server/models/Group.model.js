const { Schema, model } = require("mongoose");
const userSchema = new Schema(
  {
    Groupname: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },

    owner: {
        type: Schema.Types.ObjectId,
        ref: 'Eater',
    },

    assistants: [{
        type: Schema.Types.ObjectId,
        ref: 'Eater',
    }],

    date: {
        type: Date,
        default: Date.now
    },

    restaurant: [{
        type: Schema.Types.ObjectId,
        ref: 'Restaurant',
    }],





  },
  {
    
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;