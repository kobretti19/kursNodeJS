const express = require("express");
const app = express();

app.get("/sendvici/:vidoviSendvici", (req, res) => {
  switch (req.params.vidoviSendvici) {
    case "burger":
      res.send("Kakov burger sakate da poracate?🍔");
      break;
    case "tost":
      res.send("Kakov tost sakate da poracate 🥪");
      break;
    case "prilog":
      res.send("Kakov prilog sakate da poracate 🍟");
      break;
    default:
      return res.send("Ako neznaete sto pricekajte go kelnerot 😎");
  }
});

app.listen(5000, (err) => {
  if (err) console.log("Server cannot be started");
  console.log("Server started success on port number:3000");
});
