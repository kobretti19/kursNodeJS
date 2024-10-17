const Movie = require("../model/moviesModel");

exports.createMovie = async (req, res) => {
  try {
    const newMovie = await Movie.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        newMovie,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getAllMovies = async (req, res) => {
  try {
    const allMovies = await Movie.find();
    res.status(404).json({
      status: "success",
      results: allMovies.length,
      data: {
        allMovies,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      err: err.message,
    });
  }
};
exports.findMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        movie,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
exports.deleteMovie = async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
exports.updateMovie = async (req, res) => {
  try {
    const updatedMovie = Movie.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: updatedMovie,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
exports.addHome = async (req, res) => {
  try {
    const movies = await Movie.find();

    res.render("homepage", { movies: movies });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      err: err.message,
    });
  }
};

exports.searchMovie = async (req, res) => {
  try {
    const movies = await Movie.findById(req.params.id);

    res.render("movies", { movies: movies });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      err: err.message,
    });
  }
};
