const express = require("express");
const app = express();
app.use("/", (req, res, next) => {
  console.log("THis alwais run");
  next();
});
app.use("/add-product", (req, res, next) => {
  console.log("In another middleware");
  res.send("<h1>Add a product page</h1>");
});
app.use("/", (req, res, next) => {
  console.log("In another middleware");
  res.send("<h1>Hello from Express</h1>");
});
app.listen(3000);
