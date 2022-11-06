import React from "react";
import { Routes, Route } from "react-router-dom";
import DashBoard from "./Pages/DashBoard";
import Login from "./Pages/Login";
import Students from "./Pages/Students";
import Subjects from "./Pages/Subjects";
import Teachers from "./Pages/Teachers";

export default function Body() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/students" element={<Students />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
