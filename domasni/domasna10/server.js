const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
const init = async () => {
  try {
    await mongoose.connect(DB);
    console.log("Successfully conected to database");
  } catch (err) {
    console.log(err);
  }
};
init();

const port = process.env.PORT;
app.listen(port || 10000, (err) => {
  if (err) console.log(err);
  console.log(`Successfully conected to port: ${port}`);
});
