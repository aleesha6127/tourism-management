import React from "react";
import "./CustomPackageBanner.css";

const CustomPackageBanner = () => {
  return (
    <section className="custom-banner">
      <div className="custom-inner">
        <h3>Can't Find the Perfect Package?</h3>
        <p>Tell us your preferences and we'll craft a custom travel package for you.</p>
        <button
          className="custom-btn"
          onClick={() =>
            window.open(
              "https://wa.me/9846691678?text=I%20want%20a%20custom%20travel%20package",
              "_blank"
            )
          }
        >
          Get Custom Package
        </button>
      </div>
    </section>
  );
};

export default CustomPackageBanner;
