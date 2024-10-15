const express = require('express');
const app = express();
const path = require('path');
const controllerCars = require('./controller/controllerCars.js');
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/ruta/homepage', (req, res) => {
  res.render('homepage');
});

app.get('/ruta/akteri', controllerCars.getView);
app.get('/ruta/filmovi', controllerCars.getMovies);

const port = 10000;
app.listen(port, (err) => {
  if (err) {
    return console.log('Greska vo startuvanje na samata aplikacija');
  }
  return console.log(`Aplikacijata e uspesno startuvana na port:${port}`);
});
/// Da se napravi forma na koj ke moze da se dodavat filmovi i akteri
