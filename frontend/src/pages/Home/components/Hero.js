import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div
      className="hero"
      style={{ backgroundImage: "url(/assets/hero-beach.jpg)" }}
    >
      <div className="hero-text">
        <h1>
          DISCOVER YOUR <span>NEXT</span> ADVENTURE
        </h1>
        <p>Explore breathtaking destinations, create unforgettable memories, and embark on the journey of a lifetime.</p>
        
      </div>
    </div>
  );
};

export default Hero;
