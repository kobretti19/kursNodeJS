const express = require("express");
const app = express();
const { addHome, carsForSale } = require("./controllers/formular");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/homepage", addHome);
app.get("/carsforsale", carsForSale);
app.get("/sellyourcar");
app.get("/newcars");
app.get("/delete");
app.listen(10000, (err) => {
  if (err) return console.log(err);
  console.log("Server successfully started on port 10000");
});
// TODO:
// Da se kreira web stranica sprema vashe hobi, interes ili nesto sto ni e interenso
