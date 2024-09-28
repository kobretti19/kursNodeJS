const express = require("express");
const app = express();
const { f2c, c2f } = require("./functions");

app.get("/f2c/:temperatura", (req, res) => {
  const stepeni = Number(req.params.temperatura);
  if (stepeni <= 50) {
    return res.send(`${stepeni}°F = ${f2c(stepeni)}°C  🥶
  `);
  } else
    return res.send(`${stepeni}°F = ${f2c(stepeni)}°C  😎
  `);
});
app.get("/c2f/:temperatura", (req, res) => {
  const stepeni = Number(req.params.temperatura);
  if (stepeni <= 10) {
    return res.send(`${stepeni}°C = ${c2f(stepeni)}°F 🥶
  `);
  }
  return res.send(`${stepeni}°C = ${c2f(stepeni)}°F 😎
  `);
});
app.get("/temp/:konverzija/:temperatura", (req, res) => {
  const stepeni = Number(req.params.temperatura);
  const konverzija = req.params.konverzija;
  if (konverzija === "c2f" && stepeni <= 10) {
    return res.send(`${stepeni}°C = ${c2f(stepeni)}°F 🥶
  `);
  } else if (konverzija === "c2f") {
    return res.send(`${stepeni}°C = ${c2f(stepeni)}°F 😎
  `);
  } else if (konverzija === "f2c" && stepeni <= 50) {
    return res.send(`${stepeni}°F = ${f2c(stepeni)}°C  🥶
  `);
  } else if (konverzija === "f2c") {
    return res.send(`${stepeni}°F = ${f2c(stepeni)}°C  😎
  `);
  } else return res.send("Zadadenata Formula ne e vo nasata databaza");
});
app.listen(3000, (err) => {
  if (err) console.log(err);
  console.log("Server startet at port:3000");
});
