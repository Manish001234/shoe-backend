const express = require("express");
const connect = require("./config/db");
const cors = require("cors");

const app = express();
// require("dotenv").config()
const port = process.env.PORT || 2345;

app.use(express.json());
app.use(express.static("public"));
app.use(cors());

const ShoeController = require("./controllers/shoe.controller");

app.use("/Shoes", ShoeController);

app.listen(port, async (req, res) => {
  try {
    await connect();
    console.log("listening on port 2345");
  } catch (e) {
    res.send(e);
  }
});