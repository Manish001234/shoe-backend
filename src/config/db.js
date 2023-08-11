const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://manish:Manish_000@cluster0.b6fke8z.mongodb.net/?retryWrites=true&w=majority"
  );
};
module.exports = connect;
