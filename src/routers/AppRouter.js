import React from "react";
import { Routes, Route } from "react-router-dom";
import Add from "../components/Add";
import Home from "../components/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Employee from "../components/Employee";
import NavBar from "../components/NavBar";
import { useSelector } from "react-redux";

function AppRouter(props) {
  const role = useSelector((state) => state.user.user.role);
  return (
    <div>
      <ToastContainer autoClose={3000} hideProgressBar />
      {(function () {
        switch (role) {
          case "admin":
            return (
              <div>
                <NavBar />
                <Routes>
                  <Route path="/" exact element={<Home />} />
                  <Route path="/add" element={<Add />} />
                  <Route path="/update/:id" element={<Add />} />
                  <Route path="/view/:id" element={<Employee />} />
                </Routes>
              </div>
            );
          case "user":
            return (
              <div>
                <NavBar />
                <Routes>
                  <Route path="/" exact element={<Home />} />
                  <Route path="/view/:id" element={<Employee />} />
                </Routes>
              </div>
            );

          default:
            return <div>default</div>;
        }
      })()}
    </div>
  );
}

export default AppRouter;
