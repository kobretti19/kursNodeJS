const mongoose = require("mongoose");

exports.init = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://martinpetroski:mb5bsXfWJat6w2rZ@cluster0.42th8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/"
    );
    console.log("successfully conected to db");
  } catch (err) {
    console.log(err.message);
  }
};
