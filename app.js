// console.log("Hello world ");
const express = require("express");
const courseRouter = require("./router/courses");
const app = express();
const bodyparse = require("body-parser");

require("dotenv").config();

const mongoose = require("mongoose");

// middleware use gareko yeha
app.use("/", courseRouter);
app.use(bodyparse.json());

mongoose.set("strictQuery", false);

mongoose.connect(process.env.DB_CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});




app.listen(process.env.PORT, () => {
  console.log("Server is Running at the PORT=2000 :)");
});
