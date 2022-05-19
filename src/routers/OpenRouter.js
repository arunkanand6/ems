import React from "react";
import { Navigate } from "react-router";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import Signup from "../components/Signup";

function OpenRouter() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default OpenRouter;
