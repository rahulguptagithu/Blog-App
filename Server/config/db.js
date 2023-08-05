const mongoose = require("mongoose");
const colors = require("colors");

const dotenv = require("dotenv");

dotenv.config();

const Username = process.env.DB_USERNAME;
const Password = process.env.DB_PASSWORD;
const connectDB = async () => {
  const url=`mongodb+srv://${Username}:${Password}@user.ywse3dz.mongodb.net/blog`
  try {
    await mongoose.connect(url);
    console.log(
      `Connected to Mongodb Database ${mongoose.connection.host}`.bgMagenta
        .white
    );
  } catch (error) {
    console.log(`MONGO Connect Error ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
