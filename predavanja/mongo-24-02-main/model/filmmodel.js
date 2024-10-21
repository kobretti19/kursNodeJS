const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  naslov: {
    type: String,
    // required: [true, "Poleto mora da sorzi naslov"],
  },
  triller: {
    type: String,
    // required: [true, "Mora da ima tekst"],
  },
  rating: {
    type: Number,
  },
  authors: {
    type: String,
    default: "Annonimus",
  },
  time: {
    type: Date,
    default: Date.now,
  },
});

const Movie = mongoose.model("Movies", blogSchema);

module.exports = Movie;
