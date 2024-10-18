const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    requerd: [true, "Must have title"],
    trim: true,
    minLength: 1,
    maxLength: [225, "title is to long"],
    unique: [true, "Every movie must have unique title"],
  },
  year: {
    type: Number,
    min: 1900,
  },
  genre: {
    type: String,
    enum: ["Action", "Comedy", "Dramma", "Science", "Fantasy"],
  },
  imdbRating: {
    type: Number,
    min: 0,
    max: 10,
  },
  image: {
    type: String,
    default: "default.jpg",
  },
  images: {
    type: [String],
  },
});

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
