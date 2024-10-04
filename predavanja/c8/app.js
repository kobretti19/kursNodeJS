const express = require("express");
const calculator = require("./controller/calculator");
const app = express();

app.get("/bmi/:weight/:height", calculator.bmiCalculator);
app.get("newton/:mass/:acc");
app.get("/calculator", calculator.getCalculator);
app.post("/calculator",calculator.getCalculator);
app.listen(10000, (err) => {
  if (err) console.log("Server error");
  console.log("Server started at port 10000");
});
