import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 👉 Special case: admin login
    if (email === "admin@gmail.com" && password === "1234") {
      // Save admin in localStorage
      const adminUser = { email, role: "admin" };
      localStorage.setItem("user", JSON.stringify(adminUser));
      navigate("/admin/dashboard");
      return;
    }

    // 👉 Normal user login
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        alert("❌ Invalid credentials. Please try again.");
        return;
      }

      const user = await res.json();
      localStorage.setItem("user", JSON.stringify(user));

      // If user clicked "Book Now" before login, redirect to booking
      const selected = localStorage.getItem("selectedPackage");
      if (selected) {
        localStorage.removeItem("selectedPackage");
        navigate(`/book/${selected}`);
      } else {
        navigate("/user/profile");
      }
    } catch (err) {
      console.error(err);
      alert("⚠️ Login failed. Try again.");
    }
  };

  return (
    <div className="auth-wrapper">
      <h1>Welcome Back</h1>
      <p className="auth-subtitle">Login to continue your journey</p>
      <div className="auth-box">
        <h3>Login</h3>
        <form onSubmit={handleSubmit}>
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
            Sign In
          </button>
        </form>
        <p className="auth-subtext">
          Don’t have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
