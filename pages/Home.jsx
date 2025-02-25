import React from "react"
import { useNavigate } from "react-router-dom"

export default function Home() {
    const navigate = useNavigate()

    const handleRedirect = () => {
        navigate("/vans")
    } 

    return  (
        <>
            <div className="hero-div">
                <h1 className="hero-header">You got the travel plans, we got the travel vans</h1>
                <div className="hero-p">
                    <p>Add adventure to your life by joining the #vanlife movement.</p>
                    <p>Rent the perfect van to make your perfect roadtrip.</p>
                </div>
                <button onClick={handleRedirect}>Find your van</button>
            </div>
        </>
    )
}