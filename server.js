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

//data schemas
const admin = {
  username: String,
  password: String,
};
const students = {
  fname: String,
  lname: String,
  age: String,
  email: String,
  gender: String,
  grade: String,
};
const techers = {
  fname: String,
  lname: String,
  courses: String,
  experience: String,
};
const courses = {
  courseName: String,
  duration: String,
  field: String,
};

//server
app.listen(port, function () {
  console.log("Express is running");
});
