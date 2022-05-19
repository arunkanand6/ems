import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { _userLogout } from "../redux/action/actions";

function NavBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = () => {
    localStorage.setItem("jwt", "");
    localStorage.setItem("username", "");
    dispatch(_userLogout());
    navigate("/login");
  };

  return (
    <div>
      <Link className="text" to="/">
        Home
      </Link>
      <button className="btn btn-primary" onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default NavBar;
