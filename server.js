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

//data schemas
const studentSchema = {
  fname: String,
  lname: String,
};
const subjectSchema = {
  subName: String,
  teacher: String,
};

//data models
const Student = mongoose.model("Student", studentSchema);
const Subject = mongoose.model("Subject", subjectSchema);

//read route
app.get("/st", (req, res) => {
  Student.find()
    .then((student) => res.json(student))
    .catch((err) => res.status(400).json("Error: " + err));
});
app.get("/sub", (req, res) => {
  Subject.find()
    .then((subject) => res.json(subject))
    .catch((err) => res.status(400).json("Error: " + err));
});

// create route
app.post("/newst", (req, res) => {
  const newStudent = new Student({
    fname: req.body.fname,
    lname: req.body.lname,
  });

  newStudent
    .save()
    .then((student) => console.log(student))
    .catch((err) => res.status(400).json("Error " + err));
});
app.post("/newsub", (req, res) => {
  const newSubject = new Subject({
    subName: req.body.subName,
    teacher: req.body.teacher,
  });

  newSubject
    .save()
    .then((subject) => console.log(subject))
    .catch((err) => res.status(400).json("Error " + err));
});



app.listen(port, function () {
  console.log("Express is running");
});
