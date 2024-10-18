const express = require("express");

const db = require("./package/db/index.js");

const movies = require("./controller/movie.js");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
db.init();

app.get("/movies", movies.getAll);
app.get("/movies/:id", movies.getOne);
app.post("/movies", movies.createMovie);
app.patch("/movies/:id", movies.updateMovie);
app.delete("/movies/:id", movies.delete);

const port = 10000;
app.listen(port, (err) => {
  if (err) console.log("Server cannot start");
  console.log("Server successfully started at port 10000");
});
