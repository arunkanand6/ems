import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { userSignup } from "../redux/action/actionCreator";

export default function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
    role: "admin",
  });

  const handleChange = (event) => {
    console.log(user);
    console.log(event.target.id);
    setUser({ ...user, [event.target.id]: event.target.value });
  };

  const signup = (event) => {
    event.preventDefault();
    console.log(user);
    dispatch(userSignup(user, navigate));
  };

  return (
    <div>
      <form onSubmit={signup}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          title="username"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          title="password"
          onChange={handleChange}
        />
        <label htmlFor="role">Role</label>
        <select>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
