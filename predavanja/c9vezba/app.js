const express = require('express');
const app = express();
const path = require('path');
const formular = require('./controller/formular.js');
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/ruta/homepage', (req, res) => {
  res.render('homepage');
});

app.get('/ruta/akteri', formular.getView);
app.get('/ruta/filmovi', formular.getMovies);

const port = 10000;
app.listen(port, (err) => {
  if (err) {
    return console.log('Greska vo startuvanje na samata aplikacija');
  }
  return console.log(`Aplikacijata e uspesno startuvana na port:${port}`);
});
/// Da se napravi forma na koj ke moze da se dodavat filmovi i akteri
