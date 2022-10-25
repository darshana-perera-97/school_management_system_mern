const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const port = 3001;


//config
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//connect mongodb
mongoose.connect(
  "mongodb+srv://darshana:darshana@cluster0.uoooe.mongodb.net/school?retryWrites=true&w=majority"
);
