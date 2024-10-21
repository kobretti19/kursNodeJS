const express = require("express");
const mongoose = require("mongoose");
const app = express();
const controllerCars = require("./controllers/controllerCars");
mongoose
  .connect(
    "mongodb+srv://martinpetroski:37Mta-.Wa5954QF@cluster0.xne4m.mongodb.net/carsforsale?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then((con) => {
    console.log("DB connection successfull");
  });
// const carsSchema = new mongoose.Schema({
//   Name: {
//     type: String,
//     required: [true, "A car must have a name"],
//   },
//   Acceleration: {
//     type: Number,
//     default: 10.5,
//   },
//   HorsePower: {
//     type: Number,
//     required: [true, "Car must to have a horsepower"],
//   },
// });
// const Car = mongoose.model("NewCars", carsSchema);

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/homepage", controllerCars.addHome);
app.get("/carsforsale", controllerCars.carsForSale);
app.get("/newadded", controllerCars.newCars);
app
  .route("/sellyourcar")
  .get(controllerCars.sellyoucar)
  .post(controllerCars.addCar);
app.get("/carsforsale/:id", controllerCars.sellyoucarID);

app.get("/delete/:i", controllerCars.removeCar);
app.get("/deletenew/:i", controllerCars.removeNew);

app.listen(10000, (err) => {
  if (err) return console.log(err);
  console.log("Server successfully started on port 10000");
});

// TODO:
// Da se kreira web stranica sprema vashe hobi, interes ili nesto sto ni e interenso
