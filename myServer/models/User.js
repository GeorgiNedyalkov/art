const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    minLength: [5, "Passwords should have at least 5 characters"],
    required: [true, "Please enter a password to register"],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
