import React, { useEffect } from "react";
import OpenRouter from "./OpenRouter";
import AppRouter from "./AppRouter";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { userGet } from "../redux/action/actionCreator";

function RootRouter() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    let username = localStorage.getItem("username");
    if (user.username === "" && username) {
      dispatch(userGet(username));
    }
  });

  let jwt = localStorage.getItem("jwt");
  return (
    <div>
      <Router>{jwt === "" ? <OpenRouter /> : <AppRouter />}</Router>
    </div>
  );
}

export default RootRouter;
