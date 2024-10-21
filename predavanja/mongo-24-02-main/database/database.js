const mongoose = require("mongoose");

exports.connectToDatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://martinpetroski:mb5bsXfWJat6w2rZ@cluster0.42th8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/"
    );
    console.log("Successfully connected to databaswe");
  } catch (err) {
    console.log(err);
  }
};

// mongodb+srv://martinpetroski:<db_password>@cluster0.42th8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
