const fs = require("fs");
const express = require("express");
const app = express();
// SERVER
const replaceTemp = (temp, student) => {
  let output = temp.replace(/{{KLASSA}}/g, student.id);
  output = output.replace(/{{ID}}/g, student.id);
  output = output.replace(/{{IME}}/g, student.ime);
  output = output.replace(/{{GRAD}}/g, student.grad);
  output = output.replace(/{{PROSEK}}/g, student.prosek);
  return output;
};
const tempTD = fs.readFileSync(`${__dirname}/views/studenti.html`, "utf-8");
const tempStudent = fs.readFileSync(
  `${__dirname}/views/template-student.html`,
  "utf-8"
);
const data = fs.readFileSync(`${__dirname}/data/studenti.json`, "utf-8");
const dataObj = JSON.parse(data);

app.get("/studenti/", (req, res) => {
  const cardTD = dataObj.map((el) => replaceTemp(tempStudent, el)).join("");
  const output = tempTD.replace(`{{STUDENT-TD}}`, cardTD);

  res.send(output);
});

app.listen(10000, (err) => {
  if (err) {
    console.log("Invalid URL");
  }
  console.log("Server started successfully at port number:10000");
});
