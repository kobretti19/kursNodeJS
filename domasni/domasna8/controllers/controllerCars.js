const carsModel = require("../models/cars.js");

exports.addHome = async (req, res) => {
  res.render("homepage");
};
exports.carsForSale = async (req, res) => {
  const data = await carsModel.listCars();

  res.render("carsforsale", { data });
};
exports.newCars = async (req, res) => {
  const data = await carsModel.listNewCars();

  res.render("newadded", { data });
};
exports.sellyoucar = async (req, res) => {
  res.render("sellyourcar");
};
exports.addCar = async (req, res) => {
  const data = {
    Name: req.body.name,
    Miles_per_Gallon: req.body.miles,
    Horsepower: req.body.horsepower,
    Origin: req.body.origin,
    Acceleration: req.body.acceleration,
  };
  console.log(data);
  carsModel.addNew(data);
  res.redirect("/newadded");
};
exports.removeCar = async (req, res) => {
  await carsModel.remove(req.params.i * 1);
  res.redirect("/carsforsale");
};
exports.removeNew = async (req, res) => {
  console.log(req.params.i);
  await carsModel.removeNewCars(req.params.i * 1);
  res.redirect("/newadded");
};
exports.sellyoucarID = async (req, res) => {
  const data = await carsModel.listCars();

  const dataId = data.find((el, i) => req.params === data[i]);
  console.log(dataId);
};
