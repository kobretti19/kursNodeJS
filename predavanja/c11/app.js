const express = require("express");
const controllerCars = require("./controllers/controllerCars");

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public",`${__dirname}/../public/global.css`));

app.get("/studenti", controllerCars.getStudenti);
app.get("/form", controllerCars.getForm);
app.post("/form", controllerCars.postForm);
app.get("/brishi/:i", controllerCars.getBrishi);

app.listen(10000, (err) => {
  if (err) return console.log(err);
  console.log("Server successfully started on port 10000");
});

// TODO:
// Da se kreira web stranica sprema vashe hobi, interes ili nesto sto ni e interenso
