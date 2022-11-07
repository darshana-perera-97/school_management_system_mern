import React from "react";
import { Link } from "react-router-dom";

export default function DashBoard() {
  return (
    <div>
      <div
        style={{
          padding: "30px",
          border: "6px solid teal",
          width: "78vw",
          borderRadius: "30px",
          display: "flex",
        }}
      >
        <div>
          <p style={{ fontSize: "50px", color: "teal", paddingTop: "30px" }}>
            Welcome to
          </p>
          <p style={{ fontSize: "42px", fontWeight: "600" }}>
            Student Management System
          </p>
          <p
            style={{
              fontSize: "18px",
              color: "teal",
              opacity: "0.5",
              width: "60 %",
              padding: "40px 0px",
            }}
          >
            This is a Student Management system which is designed for a place
            where this can be used as a LMS for a Education purpose Institute
            with all functionalities.
          </p>
        </div>
        <img
          src="https://static.wixstatic.com/media/af11f4_ec919305214645099b8697ca6b3a31a1~mv2.png/v1/fill/w_560,h_326,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/af11f4_ec919305214645099b8697ca6b3a31a1~mv2.png"
          height="280px"
        />
      </div>
      <hr
        style={{
          marginTop: "40px",
          height: "2px",
          background: "teal",
          opacity: "0.6",
        }}
      />
      <p style={{ fontSize: "30px", color: "teal",margin:"30px 10px" }}>Shortcuts</p>
      <div>
        <button
          style={{
            background: "teal",
            padding: "10px 20px",
            width: "20%",
            margin: "0% 2.5%",
          }}
        >
          <Link
            to="/teachers"
            style={{
              textDecoration: "none",
              fontSize: "18px",
              color: "white",
              fontWeight: "600",
            }}
          >
            View Teachers
          </Link>
        </button>
        <button
          style={{
            background: "teal",
            padding: "10px 20px",
            width: "20%",
            margin: "0% 2.5%",
          }}
        >
          <Link
            to="/subjects"
            style={{
              textDecoration: "none",
              fontSize: "18px",
              color: "white",
              fontWeight: "600",
            }}
          >
            View Subjects
          </Link>
        </button>
        <button
          style={{
            background: "teal",
            padding: "10px 20px",
            width: "20%",
            margin: "0% 2.5%",
          }}
        >
          <Link
            to="/students"
            style={{
              textDecoration: "none",
              fontSize: "18px",
              color: "white",
              fontWeight: "600",
            }}
          >
            View Students
          </Link>
        </button>
        <button
          style={{
            background: "teal",
            padding: "10px 20px",
            width: "20%",
            margin: "0% 2.5%",
          }}
        >
          <Link
            to="/login"
            style={{
              textDecoration: "none",
              fontSize: "18px",
              color: "white",
              fontWeight: "600",
            }}
          >
            System Login
          </Link>
        </button>
      </div>
    </div>
  );
}
