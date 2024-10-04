const express = require("express");
const formular = require("./controller/formular");

const app = express();

//! EJS (Embedded Javascript Templating)
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

const testData = {
  data1: "Welcome from EJS",
  data2: "This is JES tamplating engine",
};
const data = {
  ime: "Pero",
  prezime: "Perovski",
  niza: ["Skopje", "Veles", "Kavadarci", "Veleshta", "Livadista", "Pelister"],
  studenti: [
    {
      ime: "Pero",
      prezime: "Perovski",
      prosek: 9.5,
    },
    {
      ime: "Janko",
      prezime: "Jankovski",
      prosek: 8.5,
    },
    {
      ime: "Stanko",
      prezime: "Stankovski",
      prosek: 7.5,
    },
    {
      ime: "Ivan",
      prezime: "Stankovski",
      prosek: 10,
    },
    {
      ime: "Klementina",
      prezime: "Stankovski",
      prosek: 9.5,
    },
  ],
};
app.get("/test", (req, res) => {
  res.render("test", testData);
});

app.get("/", (req, res) => {
  res.render("index", data);
});
app.get("/", formular.getView);
app.post("/", formular.postForm);
const port = 10000;

app.listen(port, (err) => {
  if (err) {
    return console.log("Greska vo startuvanje na samata aplikacija");
  }
  return console.log(`Aplikacijata e uspesno startuvana na port:${port}`);
});
