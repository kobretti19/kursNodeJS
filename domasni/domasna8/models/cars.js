const fs = require("fs");
const path = require("path");
const routeJson = path.join(__dirname, "../data/cars.json");
const newDataJson = path.join(__dirname, "../data/");
const takeData = async () => {
  return new Promise((success, fail) => {
    fs.readFile(routeJson, "utf-8", (err, data) => {
      if (err) return fail(err);
      return success(data);
    });
  });
};

const writeData = async (data) => {
  return new Promise((success, fail) => {
    fs.writeFile(newDataJson, data, "utf-8", (err) => {
      if (err) return fail(err);
      return success();
    });
  });
};

const listCars = async () => {
  const file = await takeData();
  const fileData = JSON.parse(file);
  return fileData;
};

const addCar = async (data) => {
  const file = await takeData();
  const fileData = JSON.parse(file);
  fileData.push(data);
  await writeData(JSON.stringify(fileData));
};

const removeCar = async (i) => {
  const file = await takeData();
  const fileData = JSON.parse(file);
  let newFileData = fileData.filter((_, index) => index !== i);
  await writeData(JSON.stringify(newFileData));
};

module.exports = {
  listCars,
  addCar,
  removeCar,
};
