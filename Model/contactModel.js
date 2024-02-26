const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  name: {
    type: String,
    required: [true, "Please add contact name"], //required:true,
  },
  email: {
    type: String,
    required: [true, "Please add contact email address"], //required:true,
  },
  phone: {
    type: String,
    required: [true, "Please add contact phone number"], //required:true,
  },
  
},
{
  timestamps: true
} 
);

module.exports = mongoose.model("Contact", contactSchema);