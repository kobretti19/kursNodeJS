const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
connectDataBase = async (req, res) => {
  try {
    await mongoose.connect(DB);
    console.log("Successfully connected to database");
  } catch (err) {
    console.log(message.err);
  }
};
connectDataBase();

app.listen(process.env.PORT || 10000, () => {
  console.log(`App running on port ${process.env.PORT}`);
});
