import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import loginIcon from "../../assets/pictures/login-icon.png";
import siteLogo from "../../assets/pictures/logo.png";
import { activeStyles } from "../../consts/toConsts";

export default function Navbar() {
  function fakeLogOut() {
    localStorage.removeItem("loggedin");
  }

  return (
    <div className="navbar">
      <NavLink to="/">
        <img src={siteLogo} />
      </NavLink>
      <div className="navbar-links-div">
        <NavLink
          to="/host"
          className="navbar-link"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="/about"
          className="navbar-link"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          About
        </NavLink>
        <NavLink
          to="/vans"
          className="navbar-link"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Vans
        </NavLink>
        <NavLink
          to="login"
          className="navbar-link"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          <img className="login-Icon" src={loginIcon} />
        </NavLink>
        <button onClick={fakeLogOut}>X</button>
      </div>
    </div>
  );
}
