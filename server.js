//for backend

//importing packages
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
  "mongodb+srv://Darshana:Darshana@nodetest.qakfzgu.mongodb.net/student?retryWrites=true&w=majority"
);


app.listen(port, function () {
  console.log("Express is running");
});

