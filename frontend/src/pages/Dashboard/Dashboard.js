import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if (!loggedUser) {
      navigate("/login");
    } else {
      setUser(loggedUser);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      {user && (
        <>
          <header className="dashboard-header">
            <h1>My Dashboard</h1>
            <p>Welcome back, {user.username || "traveler"}!</p>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </header>

          <div className="dashboard-tabs">
            <button className="active">Overview</button>
            <button>My Bookings</button>
            <button>Profile</button>
          </div>

          <section className="overview-cards">
            <div className="card">
              <h3>Total Bookings</h3>
              <p className="big-text">3</p>
              <small>+1 from last month</small>
            </div>
            <div className="card">
              <h3>Total Spent</h3>
              <p className="big-text">$3,796</p>
              <small>On amazing adventures</small>
            </div>
            <div className="card">
              <h3>Member Since</h3>
              <p className="big-text">January 2024</p>
              <small>Valued customer</small>
            </div>
          </section>

          <section className="recent-bookings">
            <h2>Recent Bookings</h2>
            <p>Your latest travel bookings and their status</p>

            <div className="booking-item">
              <img src="https://source.unsplash.com/100x80/?beach,maldives" alt="Maldives" />
              <div>
                <h4>Maldives Paradise Package</h4>
                <p>📍 Maldives | 📅 2024-02-15</p>
              </div>
              <span className="status confirmed">confirmed</span>
              <span className="price">$2598</span>
            </div>

            <div className="booking-item">
              <img src="https://source.unsplash.com/100x80/?mountains,switzerland" alt="Alps" />
              <div>
                <h4>Alpine Adventure Expedition</h4>
                <p>📍 Swiss Alps | 📅 2024-03-10</p>
              </div>
              <span className="status pending">pending</span>
              <span className="price">$899</span>
            </div>

            <div className="booking-item">
              <img src="https://source.unsplash.com/100x80/?rome,italy" alt="Rome" />
              <div>
                <h4>Roman Heritage Tour</h4>
                <p>📍 Rome, Italy | 📅 2024-01-25</p>
              </div>
              <span className="status completed">completed</span>
              <span className="price">$299</span>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default Dashboard;
