import React from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

function ChooseAuth() {
  const navigate = useNavigate();

  return (
    <div className="auth-wrapper">
      <h2>Continue to Book</h2>
      <p>Please login or sign up to proceed with your booking.</p>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <button className="auth-btn" onClick={() => navigate("/login")}>
          Login
        </button>
        <button className="auth-btn" onClick={() => navigate("/signup")}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default ChooseAuth;
