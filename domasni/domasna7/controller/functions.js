const fs = require('fs');
const path = require('path');
const data = path.join(__dirname, '../data/movies.json');
fs.readFile(data, 'utf-8', (err, data) => {
  if (err) {
    return console.log('Have some problem');
  } else {
    return (movies = JSON.parse(data));
  }
});
const fileWrite = (filename, data) => {
  fs.writeFile(filename, data, (err) => {
    if (err) return fail(err);
    console.log('file is successfully writed');
  });
};

const getMovies = (req, res) => {
  res.render('filmovi', movies);
};
const getActors = (req, res) => {
  res.render('akteri', movies);
};
const addMovie = (req, res) => {
  const newMovie = {
    id: movies.length * 1 + 1,
    poster: req.body.poster,
    title: req.body.title,
    year: req.body.year,
    genre: req.body.genre,
    actors: req.body.actors,
    boxOffice: req.body.boxOffice,
  };

  movies.push(newMovie);
  fileWrite(data, JSON.stringify(movies));
  res.render('filmovi', movies);
};
const addActor = (req, res) => {
  console.log(req.body.actimg);
  const actor = {
    id: movies.length * 1 + 1,
    actimg: req.body.actimg,
    actors: req.body.actors,
    genre: req.body.genre,
    rating: req.body.rating,
  };
  console.log(actor);

  movies.push(actor);
  fileWrite(data, JSON.stringify(movies));
  res.render('akteri', movies);
};

module.exports = {
  getMovies,
  addMovie,
  getActors,
  addActor,
};
