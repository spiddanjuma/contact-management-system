const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: "string",
    required: [true , "Please add user name"],
  },
  email: {
    type: "string",
    required: [true , "Please add user email address"],
    unique:[true, "Email address already taken"],
  },
  password: {
    type: "string",
    required: [true, "Please add user password"]
  },

},
{
  timestamps: true,
}
);

module.exports = mongoose.model("User",userSchema);