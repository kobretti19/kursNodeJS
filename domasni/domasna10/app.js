const express = require("express");
const app = express();
const moviesController = require("./controller/movieController");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");

app.get("/homepage", moviesController.getAll);
// app.post("/addmovie", moviesController.create);
app.get("/addmovie", moviesController.viewAddMovie);
app.post("/addmovie", moviesController.addNew);
app.get("/homepage/:id", moviesController.getOne);

module.exports = app;
