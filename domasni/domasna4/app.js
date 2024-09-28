const http = require("http");
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Vnesete ime</title></head>");
    res.write(
      `<body><form action="/ime" method="POST"><input type"text" name="ime"><button type="submit">check</button></form></body>`
    );
    res.write("<h2>Vnesete Ime</h2>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/ime" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const vnesenoIme = parsedBody.split("=")[1].toString();
      res.statusCode = 302;
      let soglaski = [];
      let samoglaski = [];
      vnesenoIme
        .split("")
        .map((chr) =>
          chr === "a" ||
          chr === "o" ||
          chr === "i" ||
          chr === "e" ||
          chr === "u"
            ? samoglaski.push(chr)
            : soglaski.push(chr)
        );
      const karakteriZborce = soglaski.length + samoglaski.length;
      const soglaskiLength = soglaski.length;
      const samoglaskiLength = samoglaski.length;
      const parniNeparni = karakteriZborce % 2 == 0 ? "e parno" : "ne e parno";

      return res.end(
        `Imeto ${vnesenoIme} ${parniNeparni}, ima karakteri:${karakteriZborce},sodrzi soglaski:${soglaskiLength} i samoglaski:${samoglaskiLength}`
      );

      // string parno:da, karakteri:5, soglaski:2,samoglaski :3
    });
  }
});

server.listen(3000, "127.0.0.1");
