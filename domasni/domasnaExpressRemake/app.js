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
  if (konverzija === "c2f") {
    return res.send(
      stepeni <= 10
        ? `<h1>${stepeni}°C = ${c2f(stepeni)}°F 🥶</h1> `
        : `<h1>${stepeni}°C = ${c2f(stepeni)}°F 😎</h1> `
    );
  } else if (konverzija === "f2c") {
    return res.send(
      stepeni <= 50
        ? `<h1>${stepeni}°F = ${f2c(stepeni)}°C 🥶</h1> `
        : `<h1>${stepeni}°F = ${f2c(stepeni)}°C 😎</h1> `
    );
  }
});
app.use((req, res) => {
  res.send(
    `<img src="https://media.istockphoto.com/id/1411798446/vector/modern-coming-soon-under-construction-sticker-banner.jpg?s=612x612&w=0&k=20&c=KgQ9eYEfuzTdmc5ypmMYoz8JHPTbe_TjEXxyxNixKQ4=" alt="">`
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
