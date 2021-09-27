const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let studentSchema = new Schema(
  {
    name: {
      type: String,
    },
    Descripcion: {
      type: String,
    },
    Precio: {
      type: Number,
    },
     foto: {
      type: String,
     },

  },
  {
    collection: "Producto",
  }
);

module.exports = mongoose.model("Producto", studentSchema);
