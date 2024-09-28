const express = require("express");
const app = express();
app.use("/users", (req, res, next) => {
  console.log("Hello from another world");
  return res.send("Something happend");
});
app.use("/", (req, res, next) => {
  console.log("Hello from second middleware");
  res.send("Add user");
});

app.listen(3000, (err) => {
  if (err) console.log("invalid page");
  console.log("Server started on port:3000");
});
