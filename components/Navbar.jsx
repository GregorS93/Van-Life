import {useState, useEffect} from "react"
import {Link, useLocation} from "react-router-dom"
import clsx from "clsx"

export default function Navbar() {
    const location = useLocation()
    const [isFocused, setIsFocused] = useState(true)

    useEffect(() => {
        const handleFocus = () => setIsFocused(true)
        const handleBlur = () => setIsFocused(false)

        window.addEventListener('focus', handleFocus)
        window.addEventListener('blur', handleBlur)

        return () => {
            window.removeEventListener('focus', handleFocus)
            window.removeEventListener('blur', handleBlur)
        }
    }, [])

    const underLineClassOne = clsx("navbar-link", {"underline": isFocused && location.pathname === "/about"})
    const underLineClassTwo = clsx("navbar-link", {"underline": isFocused && location.pathname === "/vans"})

    return ( 
        <div className="navbar" >
            <Link to="/">
                <img src="../pictures/logo.png" />
            </Link>
            <div className="navbar-links-div" >
                <Link to="/about" className={underLineClassOne}>About</Link >   
                <Link to="/vans" className={`vans-link ${underLineClassTwo}`}>Vans</Link >
            </div>
        </div>
    )
}