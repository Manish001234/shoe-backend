const express = require("express");
const connect = require("./config/db");
const bodyParser = require('body-parser');
const cors = require("cors");
const dotenv = require('dotenv');
dotenv.config();


const app = express();
// require("dotenv").config()
const port = 2345;

app.use(express.json());
app.use(express.static("public"));
app.use(cors());
app.use(bodyParser.json());


const ShoeController = require("./controllers/shoe.controller");
const CartMobileController = require("./controllers/cart.controller")
const authController = require('./controllers/user.controller');
const paymentController = require('./controllers/paymentController');

app.post('/register', authController.register);
app.post('/login', authController.login);
app.use('/api/payment', paymentController);


app.use("/Shoes", ShoeController);
app.use("/mobilecart",CartMobileController)

app.listen(port, async (req, res) => {
  try {
    await connect();
    console.log("listening on port 2345");
  } catch (e) {
    res.send(e);
  }
});
