import React from "react";

export default function DashBoard() {
  return (
    <div>
      <div
        style={{
          padding: "30px",
          border: "6px solid teal",
          width: "78vw",
          borderRadius: "30px",
          display:'flex'
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
              width: "45%",
              padding: "40px 0px",
            }}
          >
            This is a Student Management system which is designed for a place
            where this can be used as a LMS for a Education purpose Institute
            with all functionalities.
          </p>
        </div>
        <img src="https://static.wixstatic.com/media/af11f4_ec919305214645099b8697ca6b3a31a1~mv2.png/v1/fill/w_560,h_326,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/af11f4_ec919305214645099b8697ca6b3a31a1~mv2.png" height="280px"/>
      </div>
    </div>
  );
}
