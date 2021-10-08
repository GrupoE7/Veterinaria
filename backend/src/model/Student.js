const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let studentSchema = new Schema(
///////agregar imagen

  {

    title:{type:String},
    description:{type:String},
    filename:{type:String},
    originalname:{type:String},
    path:{type:String},
    mimetype:{type:String},
    size:{type:Number},
    created_at:{type:Date, default:Date.now()}
},

////////////////////////
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: Number,
    },
  },
  {
    collection: "students",
  }
);

module.exports = mongoose.model("Student", studentSchema);
