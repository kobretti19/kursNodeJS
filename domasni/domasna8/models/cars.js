const fs = require("fs");
const path = require("path");
const routeJson = path.join(__dirname, "../data/cars.json");
const newDataJson = path.join(__dirname, "../data/newadded.json");
const takeData = async () => {
  return new Promise((success, fail) => {
    fs.readFile(routeJson, "utf-8", (err, data) => {
      if (err) return fail(err);
      return success(data);
    });
  });
};
const takeNewData = async () => {
  return new Promise((success, fail) => {
    fs.readFile(newDataJson, "utf-8", (err, data) => {
      if (err) return fail(err);
      return success(data);
    });
  });
};

const writeData = async (data) => {
  return new Promise((success, fail) => {
    fs.writeFile(routeJson, data, "utf-8", (err) => {
      if (err) return fail(err);
      return success();
    });
  });
};
const writeNewData = async (data) => {
  return new Promise((success, fail) => {
    fs.writeFile(newDataJson, data, "utf-8", (err) => {
      if (err) return fail(err);
      return success();
    });
  });
};

exports.listCars = async () => {
  const file = await takeData();
  const fileData = JSON.parse(file);
  return fileData;
};
exports.listNewCars = async () => {
  const file = await takeNewData();
  const fileData = JSON.parse(file);
  return fileData;
};

exports.addNew = async (data) => {
  const file = await takeNewData();
  const fileData = JSON.parse(file);
  fileData.push(data);
  await writeNewData(JSON.stringify(fileData));
};

exports.remove = async (i) => {
  const file = await takeData();
  const fileData = JSON.parse(file);
  let newFileData = fileData.filter((_, index) => index !== i);
  await writeData(JSON.stringify(newFileData));
};
exports.removeNewCars = async (i) => {
  const file = await takeNewData();
  const fileData = JSON.parse(file);
  console.log(fileData);
  const newRemovedData = fileData.filter((_, index) => index !== i);
  await writeNewData(JSON.stringify(newRemovedData));
};
