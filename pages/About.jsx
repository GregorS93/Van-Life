import React from "react"

export default function About() {
    return (
        <>  
            <section className="about-section">
                <img className="hero-img-about" src="../pictures/hero-about-page.png" />
                <div className="content-div">
                    <h2>Dont squeeze in a sedan, when you could relax in a van.</h2>   
                    <p>Our mission is to enliven your road trip with the perfect travel van rental. 
                    Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                    (Hitch costs extra 😉)</p>
                    <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
                    <div className="explore-vans-div">
                        <h3>Your destination is waiting.</h3>
                        <h3>Your van is ready.</h3>
                        <button>Explore our vans</button>
                    </div>
                </div> 
            </section>
        </>
    )
}