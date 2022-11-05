import React from "react";
import axios from "axios";
import List from "./List";

export default function Design() {
  const [fname, setFname] = React.useState("");
  const [lname, setLname] = React.useState("");

  return (
    <div>
      <input
        value={fname}
        onChange={(e) => {
          setFname(e.target.value);
        }}
      />
      <input
        value={lname}
        onChange={(e) => {
          setLname(e.target.value);
        }}
      />
      <button
        onClick={() => {
          const newStudent = {
            fname: fname,
            fname: fname,
          };
          axios.post("/newst", newStudent);
          setFname("");
          setLname("");
          // console.log(newItem);
          // alert("item added");
        }}
      >
        Add
      </button>
      <List />
    </div>
  );
}
