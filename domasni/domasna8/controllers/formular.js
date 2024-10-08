const { listCars, addCar, removeCar } = require("../models/cars.js");

const addHome = async (req, res) => {
  res.render("homepage");
};
const carsForSale = async (req, res) => {
  const data = await listCars();

  res.render("carsforsale", { data });
};
module.exports = { addHome, carsForSale };
