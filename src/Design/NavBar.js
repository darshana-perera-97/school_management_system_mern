import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div
      style={{ background: "#B1B1B1", padding: "35px 40px", minHeight:"83vh" }}
    >
      <img src="https://nivt.in/sms/assets/img/sms-logo.png" width="120px" />
      <br />
      <br />
      <br />
      <Link to="/" id="menuBarLink">
        Dashboard
      </Link>
      <br />
      <br />
      <Link to="/subjects" id="menuBarLink">
        Subjects
      </Link>
      <br />
      <br />
      <Link to="/teachers" id="menuBarLink">
        Teachers
      </Link>
      <br />
      <br />
      <Link to="/students" id="menuBarLink">
        Studesnts
      </Link>
      <br />
      <br />
      <Link to="/login" id="menuBarLink">
        Login
      </Link>
      <br />
      <br />
    </div>
  );
}
