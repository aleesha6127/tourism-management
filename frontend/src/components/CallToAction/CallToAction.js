import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ import navigate
import "./CallToAction.css";

const CallToAction = () => {
  const navigate = useNavigate();

  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2>Ready for Your Next Adventure?</h2>
        <p>
          Join thousands of travelers who have already discovered their perfect
          getaway with us.
        </p>
        <div className="cta-buttons">
          {/* Start Planning Button → Packages Page */}
          <button className="start-btn" onClick={() => navigate("/packages")}>
            Start Planning
          </button>

          {/* Contact Us Button → Contact Page */}
          <button className="contact-btn" onClick={() => navigate("/contact")}>
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
