const express = require("express");
const app = express();
const {
  getTest,
  postTest1,
  postTest2,
  postTest3,
  postTest4,
} = require("./controller/rutiranje");

app.get("/vezba", getTest);
app.post("/vezba", getTest);
app.post("/vezba1", postTest1);
app.post("/vezba2", postTest2);
app.post("/vezba3", postTest3);
app.post("/vezba4", postTest4);

app.listen(3000, (err) => {
  if (err) {
    return console.log("Server Internal error");
  }
  return console.log("Server started on port:3000");
});
//ace.ki@hotmail.com
