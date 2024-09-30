const express = require("express");
const app = express();
const { f2c, c2f } = require("./funkcii");

app.get("/f2c/:temperatura", (req, res) => {
  const stepeni = Number(req.params.temperatura);
  res.send(
    stepeni <= 50
      ? `<h1>${stepeni}°F = ${f2c(stepeni)}°C 🥶</h1> `
      : `<h1>${stepeni}°F = ${f2c(stepeni)}°C 😎</h1> `
  );
});
app.get("/c2f/:temperatura", (req, res) => {
  const stepeni = Number(req.params.temperatura);
  res.send(
    stepeni <= 10
      ? `<h1>${stepeni}°C = ${c2f(stepeni)}°F 🥶</h1> `
      : `<h1>${stepeni}°C = ${c2f(stepeni)}°F 😎</h1> `
  );
});
app.get("/temp/:konverzija/:temperatura", (req, res) => {
  const stepeni = Number(req.params.temperatura);
  const konverzija = req.params.konverzija;
  res.send(
    switch konverzija{
      
    }
    stepeni <= 10
      ? `<h1>${stepeni}°C = ${c2f(stepeni)}°F 🥶</h1> `
      : `<h1>${stepeni}°C = ${c2f(stepeni)}°F 😎</h1> `
  );
});

app.listen(3000, (err) => {
  if (err) console.log("Page not found");
  console.log("Server started successfully at port number:3000");
});

//"/f2c/:temperatura",
//"/f2c/:temperatura",
//"/f2c/:temperatura",
//"/temp/:konverzija/:temperatura",
