const express = require("express");
const router = express.Router();
const path = require("path");
router.use("/add-product", (req, res, next) => {
  console.log("In another middleware");
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});
router.post("/product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "404.html"));
});
module.exports = router;
