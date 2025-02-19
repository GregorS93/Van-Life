import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import loginIcon from "/pictures/login-icon.png"
import siteLogo from "/pictures/logo.png"


export default function Navbar() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        textDecorationThickness: "2px"
    }

    function fakeLogOut() {
        localStorage.removeItem("loggedin")
    }

    return ( 
        <div className="navbar" >
            <NavLink to="/">
                <img src={siteLogo} />
            </NavLink>
            <div className="navbar-links-div" >
                <NavLink to="/host" className="navbar-link" style={({isActive}) => isActive ? activeStyles : null}>Host</NavLink >   
                <NavLink to="/about" className="navbar-link" style={({isActive}) => isActive ? activeStyles : null}>About</NavLink >   
                <NavLink to="/vans" className="navbar-link" style={({isActive}) => isActive ? activeStyles : null}>Vans</NavLink >
                <NavLink to="login" className="navbar-link" style={({isActive}) => isActive ? activeStyles : null}>
                    <img className="login-Icon" src={loginIcon} />
                </NavLink >
                <button onClick={fakeLogOut}>X</button>
            </div>
        </div>
    )
}