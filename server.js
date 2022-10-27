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
const adminSchema = {
  username: String,
  password: String,
};
const studentsSchema = {
  fname: String,
  lname: String,
  age: String,
  email: String,
  gender: String,
  grade: String,
};
const techersSchema = {
  fname: String,
  lname: String,
  courses: String,
  experience: String,
};
const coursesSchema = {
  courseName: String,
  duration: String,
  field: String,
};

//data models
const Admin = mongoose.model("Admin", adminSchema);
const Students = mongoose.model("Students", studentsSchema);
const Teachers = mongoose.model("Teachers", techersSchema);
const Courses = mongoose.model("Courses", coursesSchema);





//server
app.listen(port, function () {
  console.log("Express is running");
});
