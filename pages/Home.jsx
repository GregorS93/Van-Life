import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Home() {
    return  (
        <>
            <Navbar />
            <div className="hero-div">
                <h1 className="hero-header">You got the travel plans, we got the travel vans</h1>
                <div className="hero-p">
                    <p>Add adventure to your life by joining the #vanlife movement.</p>
                    <p>Rent the perfect van to make your perfect roadtrip.</p>
                </div>
                <button>Find your van</button>
            </div>

            <Footer />
        </>
    )
}