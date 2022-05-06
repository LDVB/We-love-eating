const { Schema, model } = require("mongoose");
const eaterSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: [true, 'El nombre es obligatorio.'],
      trim: true,
      minlength: [3, 'El nombre debe tener min. 3 caracteres.']

    },
    
    email: {
      type: String,
      unique: true, 
      required: [true,'El email es obligatorio.'],
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'por favor, introduce una dirección de email válida.'],
    },
    
    image: {
      type: String,
    },

  },
  {
    
    timestamps: true,
  }
);

const Eater = model("Eater", eaterSchema);

module.exports = Eater;
