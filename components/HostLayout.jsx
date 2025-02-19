import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export default function HostLayout() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <>
            <nav className='host-nav'>
                <NavLink 
                    to="." 
                    className='host-nav-link'
                    end
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Dashboard
                </NavLink>

                <NavLink 
                    to="income" 
                    className='host-nav-link'
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Income
                </NavLink>

                <NavLink 
                    to="vans" 
                    className='host-nav-link'
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Vans
                </NavLink>

                <NavLink 
                    to="reviews" 
                    className='host-nav-link'
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Reviews
                </NavLink>
            </nav>
            <Outlet />
        </>
    )
}