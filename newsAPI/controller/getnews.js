//f9b20b20058c42309a06643722984159
//https://newsapi.org/v2/everything?q=keyword&apiKey=f9b20b20058c42309a06643722984159
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

let cache = {};

exports.getNews = async (req, res) => {
  const key = "f9b20b20058c42309a06643722984159";
  const anything = req.params.anything;
  const url = `https://newsapi.org/v2/everything?q=${anything}&apiKey=${key}`;
  const data = await fetch(url);
  const anynews = await data.json();
  res.send(anynews);
};
