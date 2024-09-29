const http = require("http");
const server = http.createServer((req, res) => {
  const [_, path, name] = req.url.split("/");

  if (!name) {
    res.end("Invalid URL");
  }
  const brojKarakteri = name.length;
  const eParen = brojKarakteri % 2 === 0 ? "da" : "ne";
  const samoglaski = ["a", "e", "i", "o", "u"];
  let soglaskiBroj = 0;
  let samoglaskiBroj = 0;
  name
    .split("")
    .filter((bukva) =>
      samoglaski.includes(bukva) ? samoglaskiBroj++ : soglaskiBroj++
    );
  res.end(
    `Imeto ${name} e parno:${eParen}, karakteri:${brojKarakteri},soglaski:${soglaskiBroj}, samoglaski:${samoglaskiBroj}`
  );
});
// string parno:da, karakteri:5, soglaski:2,samoglaski :3
server.listen(3000, (err) => {
  if (err) console.log("Invalid URl");
  console.log("Server started at port:3000");
});
