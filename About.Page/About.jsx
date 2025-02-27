import React from "react";
import heroImg from "../pictures/hero-about-page.png";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/vans");
  };

  return (
    <>
      <section className="about-section">
        <img className="hero-img-about" src={heroImg} />
        <div className="content-div">
          <h2>Dont squeeze in a sedan, when you could relax in a van.</h2>
          <p>
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>
          <p>
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
          <div className="explore-vans-div">
            <h3>Your destination is waiting.</h3>
            <h3>Your van is ready.</h3>
            <button onClick={handleRedirect} className="about-page-btn">
              Explore our vans
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
