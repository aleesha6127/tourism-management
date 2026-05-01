import React from "react";
import "./CTA.css";

const CTA = () => {
  return (
    <section className="cta">
      <h2>Ready for Your Next Adventure?</h2>
      <p>Join thousands of travelers who have already discovered their perfect getaway with us.</p>
      <div className="cta-buttons">
        <button className="btn-secondary">Start Planning</button>
        <button className="btn-outline">Contact Us</button>
      </div>
    </section>
  );
};

export default CTA;
