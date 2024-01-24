const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Entry = require("./Models/entry");

dotenv.config({ path: "./config.env" }); // Update the path to your Entry model file

const data = require("./data");

const DB = process.env.DATABASE;

mongoose.connect(DB).then(() => {
  console.log("DB connection successful!");

  // Insert data into the database
  Entry.insertMany(data)
    .then(() => {
      console.log("Data dumped successfully!");
      mongoose.connection.close();
    })
    .catch((error) => {
      console.error("Error dumping data:", error);
      mongoose.connection.close();
    });
});
