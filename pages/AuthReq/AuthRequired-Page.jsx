import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { getLoggedInLocal } from "../../localStorage/handles";
// import { isLoggedIn } from "../../consts/toConsts";

export default function AuthRequired() {
  const isLoggedIn = getLoggedInLocal();

  const location = useLocation();

  if (!isLoggedIn) {
    return (
      <Navigate
        to="/login"
        state={{ message: "You must log in first", from: location }}
        replace
      />
    );
  }

  return <Outlet />;
}
