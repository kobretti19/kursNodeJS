const express = require("express");
const app = express();
const { f2c, c2f } = require("./functions");

app.get("/f2c/:temperatura", (req, res) => {
  const stepeni = Number(req.params.temperatura);
  if (stepeni <= 50) {
    return res.send(`<h1>${stepeni}°F = ${f2c(stepeni)}°C  🥶</h1>
  `);
  } else
    return res.send(`<h1>${stepeni}°F = ${f2c(stepeni)}°C  😎</h1>
  `);
});
app.get("/c2f/:temperatura", (req, res) => {
  console.log(req.params);
  const stepeni = Number(req.params.temperatura);
  if (stepeni <= 10) {
    return res.send(`<h1>${stepeni}°C = ${c2f(stepeni)}°F 🥶</h1>
  `);
  }
  return res.send(`<h1>${stepeni}°C = ${c2f(stepeni)}°F 😎</h1>
  `);
});
app.get("/temp/:konverzija/:temperatura", (req, res) => {
  const stepeni = Number(req.params.temperatura);
  const konverzija = req.params.konverzija;
  if (konverzija === "c2f" && stepeni <= 10) {
    return res.send(`<h1>${stepeni}°C = ${c2f(stepeni)}°F 🥶</h1>
  `);
  } else if (konverzija === "c2f") {
    return res.send(`<h1>${stepeni}°C = ${c2f(stepeni)}°F 😎</h1>
  `);
  } else if (konverzija === "f2c" && stepeni <= 50) {
    return res.send(`<h1>${stepeni}°F = ${f2c(stepeni)}°C  🥶</h1>
  `);
  } else if (konverzija === "f2c") {
    return res.send(`<h1>${stepeni}°F = ${f2c(stepeni)}°C  😎</h1>
  `);
  } else return res.send("Zadadenata Formula ne e vo nasata databaza");
});
app.listen(3000, (err) => {
  if (err) console.log(err);
  console.log("Server startet at port:3000");
});
