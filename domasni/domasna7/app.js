const express = require('express');
const app = express();
const {
  getMovies,
  addMovie,
  getActors,
  addActor,
} = require('./controller/functions');
app.set('view engine', 'ejs');
const path = require('path');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/ruta/homepage', (req, res) => {
  res.render('homepage');
});
app.route('/ruta/akteri').get(getActors).post(addActor);
app.route('/ruta/filmovi').get(getMovies).post(addMovie);

const port = 3000;
app.listen(port, (err) => {
  if (err) return 'Invalid URL';
  return `Server started at port number:${port}`;
});
