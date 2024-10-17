const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: Number,
  rating: Number,
  triller: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  img: String,
});
const Movie = mongoose.model("Movies", moviesSchema);

module.exports = Movie;
