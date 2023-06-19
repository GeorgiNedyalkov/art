const Artist = require("../models/Artist");

exports.getAll = () => Artist.find({});

exports.getOne = (artistId) => Artist.findById(artistId);

exports.create = (artistData) => Artist.create(artistData);

exports.delete = (artistId) => Artist.findByIdAndDelete(artistId);

exports.update = (artistId, artistData) =>
  Artist.findByIdAndUpdate(artistId, artistData);
