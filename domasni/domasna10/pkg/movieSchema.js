const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    unique: true,
  },
  year: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
  },
  story: {
    type: String,
  },
  triller: {
    type: String,
  },
});

const Movie = mongoose.model("Movie", MovieSchema);
module.exports = Movie;
