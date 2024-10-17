const express = require("express");
const db = require("./package/db/index.js");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
db.init();

const port = 10000;
app.listen(port, (err) => {
  if (err) console.log("Server cannot start");
  console.log("Server successfully started at port 10000");
});
