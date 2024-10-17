const express = require("express");
const app = express();
const moviesController = require("./controllers/moviesController");

app.use(express.json());
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/api/v1/movies", moviesController.getAllMovies);
app.post("/api/v1/movies", moviesController.createMovie);
app.get("/api/v1/movies/:id", moviesController.findMovie);
app.delete("/api/v1/movies/:id", moviesController.deleteMovie);
app.patch("/api/v1/movies/:id", moviesController.updateMovie);
app.get("/homepage", moviesController.addHome);
app.get("/searchmovie/:id", moviesController.searchMovie);
app.get("/homepage/:id", moviesController.searchMovie);

module.exports = app;
