// AuthRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { isAuth } from "./isAuth";

const AuthRoute = ({ children }) => {
  return isAuth() ? children : <Navigate to="/Login" replace />;
};

export default AuthRoute;
