const mongoose = require("mongoose");

const artistSchema = new mongoose.Schema({
  name: String,
  imageUrl: String,
  bio: String,
  movement: String,
  birthplace: String,
  birthday: Date,
  signature: String,
  artworks: [
    {
      name: String,
      imageUrl: String,
    },
  ],
});

const Artist = mongoose.model("Artist", artistSchema);

module.exports = Artist;
