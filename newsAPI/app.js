const express = require("express");
const news = require("./controller/getnews");

const app = express();

app.get("/api/v/:anything", news.getNews);

app.listen(10000, (err) => {
  if (err) {
    console.log("Could not start a service");
    return;
  }
  console.log("server started at port 10000");
});
