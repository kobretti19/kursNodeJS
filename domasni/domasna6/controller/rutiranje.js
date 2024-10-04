const fs = require("fs");
const parseTemplate = async (template, object = null) => {
  return new Promise((success, fail) => {
    fs.readFile(`${__dirname}/../views/${template}`, "utf8", (err, content) => {
      if (err) return fail(err);
      if (object) {
        for (property in object) {
          content = content.replaceAll(`{{${property}}}`, object[property]);
        }
      }
      return success(content);
    });
  });
};

const getTest = async (req, res) => {
  try {
    const response = await parseTemplate("test.html");
    res.send(response);
  } catch (err) {
    res.send("Ima greska");
  }
};
const postTest1 = async (req, res) => {
  try {
    const response = await parseTemplate("test1.html");
    res.send(response);
  } catch (err) {
    res.send("Ima greska");
  }
};
const postTest2 = async (req, res) => {
  try {
    const response = await parseTemplate("test2.html");
    res.send(response);
  } catch (err) {
    res.send("Ima greska");
  }
};
const postTest3 = async (req, res) => {
  try {
    const response = await parseTemplate("test3.html");
    res.send(response);
  } catch (err) {
    res.send("Ima greska");
  }
};
const postTest4 = async (req, res) => {
  try {
    const response = await parseTemplate("test4.html");
    res.send(response);
  } catch (err) {
    res.send("Ima greska");
  }
};

module.exports = {
  getTest,

  postTest1,
  postTest2,
  postTest3,
  postTest4,
};

// Za domasno
// Da se kreiraat uste 2 routi vezba3 i vezba 4 , i vezba 2 da nosi vezba 3, vezba 3 na vezba 4 , a vezba 4 na se vrati na pocetok
