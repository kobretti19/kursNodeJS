const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: `${__dirname}/../../config.env` });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
console.log(process.env.DATABASE_PASSWORD);
exports.init = async () => {
  try {
    await mongoose.connect(DB);
    console.log("successfully conected to db");
  } catch (err) {
    console.log(err.message);
  }
};
//TODO:da se kreira
