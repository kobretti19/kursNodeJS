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

const bmiCalculator = async (req, res) => {
  const weight = req.params.weight;
  const height = req.params.height;
  const bmi = weight / (height * height);
  const response = await parseTemplate("calculator.html", {
    data: bmi,
    ime: "BMI CALCULATOR",
  });
  res.send(response);
};
// const calculateForce = async();
const getCalculator = async (req, res) => {
  try {
    const output = await parseTemplate("calculator_form.html");
    res.send(output);
  } catch (err) {
    res.status(500).send("Internal error");
  }
};
const postCalculator = async (req, res) => {};

module.exports = {
  bmiCalculator,
  getCalculator,
};
