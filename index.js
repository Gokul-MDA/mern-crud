const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");

//middleware
app.use(cors());
app.use(bodyParser.json());
require("dotenv").config();
app.use(morgan("dev"));
app.use(express.json({}));

//Router Config
const router = require("./router.js");
app.use("/crud", router);

//server connection
app.listen(8000, () => {
  console.log("Server connected on port 5000");
});

//dbConnection
mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://gokul:dharmar786@cluster0.hwdnd.mongodb.net/mern-crud?retryWrites=true&w=majority",
  (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Db Connected Successfully");
  }
);
