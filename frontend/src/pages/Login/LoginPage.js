import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Validation Functions
  const validateUsername = (username) => /^[A-Za-z]+$/.test(username);
  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const validatePassword = (password) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      if (!validateUsername(form.username)) {
        alert("❌ Username should contain only alphabets (A–Z, a–z).");
        return;
      }

      if (!validateEmail(form.email)) {
        alert("❌ Invalid email. Must include @ and a valid domain.");
        return;
      }

      if (!validatePassword(form.password)) {
        alert(
          "❌ Password must be at least 8 characters, include uppercase, lowercase, number, and special character."
        );
        return;
      }

      const users = JSON.parse(localStorage.getItem("users")) || [];
      users.push({
        username: form.username,
        email: form.email,
        password: form.password,
      });

      localStorage.setItem("users", JSON.stringify(users));

      alert("✅ Account created successfully! Please Sign In.");
      setIsSignUp(false);
      return;
    }

    if (form.email === "admin@gmail.com" && form.password === "1234") {
      localStorage.setItem(
        "user",
        JSON.stringify({ role: "admin", email: form.email })
      );
      alert("✅ Admin logged in successfully!");
      navigate("/admin");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find(
      (u) => u.email === form.email && u.password === form.password
    );

    if (existingUser) {
      localStorage.setItem(
        "user",
        JSON.stringify({ role: "user", email: form.email })
      );
      alert("✅ User logged in successfully!");
      navigate("/");
    } else {
      alert("❌ Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Welcome to WanderLust</h1>
        <p className="subtitle">Your next adventure awaits</p>

        <div className="toggle-buttons">
          <button
            type="button"
            className={!isSignUp ? "active" : ""}
            onClick={() => setIsSignUp(false)}
          >
            Sign In
          </button>

          <button
            type="button"
            className={isSignUp ? "active" : ""}
            onClick={() => setIsSignUp(true)}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          {isSignUp && (
            <div className="input-group">
              <span className="icon">👤</span>
              <input
                type="text"
                name="username"
                placeholder="Enter your username"
                value={form.username}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <div className="input-group">
            <span className="icon">📧</span>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <span className="icon">🔒</span>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>

        <div className="footer-links">
          {!isSignUp && (
            <button type="button" className="forgot-link">
              Forgot your password?
            </button>
          )}
          <br />
          <a href="/" className="back-home">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;