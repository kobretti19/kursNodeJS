//!npm install mongoose
const express = require("express");
const database = require("./database/database");
const blogcontroller = require("./controller/blogController");
const filmcontroller = require("./controller/filmcontroller");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

database.connectToDatabase();

app.get("/api/v1/movies", filmcontroller.getAllMovies);
app.post("/api/v1/movies", filmcontroller.createMovie);
app.get("/api/v1/movies/:id", filmcontroller.getMovie);
app.patch("/api/v1/movies/:id", filmcontroller.updateMovie);
app.listen(10000, (err) => {
  if (err) return console.log("App running on port 10000");
  console.log("Server successfully started on port 10000");
});

// 200 OK; The request was successfull,and the server returned our requested data
// 201 Created; The request was successfull and created new resourse on the server
// 204 OK; The request was successfull,and the server ist returning  our requested data
// 400 Bad request. The request was malformed or invalid and could not be understood by the server
// 401 Unathorazed
// 403 Forbidden
// 404 not found,
// 500 Internal server error
