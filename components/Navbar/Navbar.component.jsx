import { NavLink } from "react-router-dom";
import loginIcon from "../../assets/Login/login-icon.png";
import siteLogo from "../../assets/Home/logo.png";
import { activeStyles } from "../../consts/toConsts";
import { deleteLoggedInLocal } from "../../localStorage/handles.localStorage";
import { aboutRoute } from "../../pages/About/About.route";
import { vansRoute } from "../../pages/Vans/Vans.route";
import { loginRoute } from "../../pages/Login/Login.route";
import { hostRoute } from "../../pages/Host/Host.route";

export default function Navbar({ loginData }) {
  return (
    <div className="navbar">
      <NavLink to="/">
        <img src={siteLogo} />
      </NavLink>
      <div className="navbar-links-div">
        <NavLink
          to={hostRoute}
          className="navbar-link"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Host
        </NavLink>
        <NavLink
          to={aboutRoute}
          className="navbar-link"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          About
        </NavLink>
        <NavLink
          to={vansRoute}
          className="navbar-link"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Vans
        </NavLink>
        <NavLink
          to={loginRoute}
          className="navbar-link"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          <img className="login-Icon" src={loginIcon} />
        </NavLink>
        {
          <button
            title="Log out / empty localStorage"
            className="empty-local-storage"
            onClick={deleteLoggedInLocal}
          >
            X
          </button>
        }
      </div>
    </div>
  );
}
