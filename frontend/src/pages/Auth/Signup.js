import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can connect to backend API here
    console.log("Signing up:", { name, email, password });
    alert("Signup successful (demo)");
  };

  return (
    <div className="auth-wrapper">
      <h1>Join Us</h1>
      <p className="auth-subtitle">Create an account to explore more</p>

      <div className="auth-box">
        <h3>Sign Up</h3>
        <p className="auth-subtext">Fill in your details</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="auth-btn">
            Sign Up
          </button>
        </form>

        <p className="auth-subtext">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
