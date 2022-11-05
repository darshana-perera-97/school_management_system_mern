import React from "react";

export default function List() {
  const [students, setStudents] = React.useState([
    {
      fname: "as",
      lname: "asas",
      _id: "",
    },
  ]);
  React.useEffect(() => {
    fetch("/st")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setStudents(jsonRes))
      .catch((err) => console.log(err));
  }, [students]);
  console.log(students);
  return (
    <div>
      {students.map((students) => {
        return (
          <div
            key={students._id}
            style={{ background: "pink", width: "40%", margin: "auto auto" }}
          >
            <p>{students.lname}</p>

            <p>{students.fname}</p>
            {/* <DeleteItem val={students._id} /> */}
            {/* <button onClick={() => deleteItem(item._id)}>DELETE</button>
            <button onClick={() => openUpdate(item._id)}>UPDATE</button> */}
          </div>
        );
      })}
    </div>
  );
}
