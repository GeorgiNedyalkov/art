const mongoose = require("mongoose");

const artSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  year: Number,
  method: String,
  movement: String,
  size: String,
  description: String,
  comments: [
    {
      username: String,
      text: String,
    },
  ],
  ownerId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

const Art = mongoose.model("Art", artSchema);

module.exports = Art;
