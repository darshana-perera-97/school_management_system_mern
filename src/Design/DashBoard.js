import React from "react";
import Body from "./Body";
import NavBar from "./NavBar";

export default function DashBoard() {
  return (
    <div>
      <p
        style={{
          textAlign: "center",
          padding: "10px",
          background: "teal",
          color: "white",
          fontSize: "20px",
        }}
      >
        Student Management System
      </p>
      <div style={{ display: "flex", padding: "10px", width: "100%" }}>
        <NavBar style={{ width: "15%" }} />
        <Body style={{ width: "85%" }} />
      </div>
    </div>
  );
}
