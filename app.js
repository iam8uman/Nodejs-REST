// console.log("Hello world ");
const express = require("express");
const courseRouter = require("./router/courses");
const app = express();
const bodyparse=require('body-parser');

require("dotenv").config();

const mongoose = require("mongoose");

// middleware use gareko yeha
app.use("/ccc", courseRouter);
app.use(bodyparse.json())

mongoose.set("strictQuery", false);

mongoose.connect(process.env.DB_CONNECTION_URL, () => {
  console.log("DB Connected successfully !!!");
});

app.listen(process.env.PORT, () => {
  console.log("Server is Running at the PORT=2000 :)");
});
