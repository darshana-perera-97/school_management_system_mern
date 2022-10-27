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

//read route
app.get("/students", (req, res) => {
  Students.find()
    .then((admin) => res.json(admin))
    .catch((err) => res.status(400).json("Error: " + err));
});
app.get("/teachers", (req, res) => {
  Teachers.find()
    .then((admin) => res.json(admin))
    .catch((err) => res.status(400).json("Error: " + err));
});
app.get("/courses", (req, res) => {
  Courses.find()
    .then((admin) => res.json(admin))
    .catch((err) => res.status(400).json("Error: " + err));
});

//filter - login
app.get("/admin/:usr", (req, res) => {
  const usr = req.params.usr;
  Admin.find({ username: usr })
    .then((admin) => res.json(admin))
    .catch((err) => res.status(400).json("Error: " + err));
});


// create route
app.post("/newuser", (req, res) => {
  const newAdmin = new Admin({
    username: req.body.username,
    password: req.body.password,
  });

  newAdmin
    .save()
    .then((item) => console.log(item))
    .catch((err) => res.status(400).json("Error " + err));
});
app.post("/newst", (req, res) => {
  const newStudent = new Students({
    fname: req.body.fname,
    lname: req.body.lname,
  });

  newStudent
    .save()
    .then((item) => console.log(item))
    .catch((err) => res.status(400).json("Error " + err));
});




//server
app.listen(port, function () {
  console.log("Express is running");
});
