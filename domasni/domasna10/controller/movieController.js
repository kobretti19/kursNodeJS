const Movie = require("../pkg/movieSchema");

exports.getAll = async (req, res) => {
  try {
    const movies = await Movie.find();

    res.render("homepage", { movies: movies });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getOne = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.render("info", { movie });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.create = async (req, res) => {
  try {
    const movie = await Movie.create(req.body);
    res.status(201).json({
      status: "success",
      data: movie,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.update = async (req, res) => {
  try {
    const updated = await Movie.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: updated,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deleteOne = async (req, res) => {
  try {
    const deleted = await Movie.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: deleted,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.addNew = async (req, res) => {
  try {
    const data = await Movie.create({
      title: req.body.title,
      year: req.body.year,
      rating: req.body.rating,
      image: req.body.image,
      story: req.body.story,
      triller: req.body.triller,
    });
    res.redirect("/homepage");
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
exports.viewAddMovie = async (req, res) => {
  try {
    res.render("addmovie");
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
exports.findTriller = async (req, res) => {
  try {
    const all = await Movie.find();
    console.log(req.query);
    const triller = "Triller";
    const movies = all.filter((el, i) => el.triller == triller);
    console.log(movies);

    res.render("homepage", { movies: all });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
exports.findComedy = async (req, res) => {
  try {
    const all = await Movie.find();
    const movies = all.filter((el) => el.triller.includes("Comedy"));

    res.render("homepage", { movies: movies });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
exports.findAction = async (req, res) => {
  try {
    const all = await Movie.find();
    const movies = all.filter((el) => el.triller.includes("Action"));

    res.render("homepage", { movies: movies });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
exports.findNewMovies = async (req, res) => {
  try {
    const all = await Movie.find();
    const movies = all.filter((el) => el.year >= new Date().getFullYear());

    res.render("homepage", { movies: movies });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
