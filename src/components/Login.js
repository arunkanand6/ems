import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { userLogin } from "../redux/action/actionCreator";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    console.log(user);
    console.log(event.target.id);
    setUser({ ...user, [event.target.id]: event.target.value });
  };

  const login = (event) => {
    event.preventDefault();
    console.log(user);
    dispatch(userLogin(user, navigate));
  };

  return (
    <div>
      <form onSubmit={login}>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
