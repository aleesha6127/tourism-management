import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UserDashboard.css";

const UserDashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user")) || {};

  const [activeTab, setActiveTab] = useState("overview");
  const [profile, setProfile] = useState(user);
  const [bookings] = useState(
    JSON.parse(localStorage.getItem("bookings")) || [
      {
        destination: "Maldives Paradise Package",
        location: "Maldives",
        date: "2024-02-15",
        price: 2598,
        status: "confirmed",
        image: "/assets/package9.jpeg",
      },
      {
        destination: "Alpine Adventure Expedition",
        location: "Swiss Alps",
        date: "2024-03-10",
        price: 899,
        status: "pending",
        image: "/assets/alps.jpeg",
      },
      {
        destination: "Roman Heritage Tour",
        location: "Rome, Italy",
        date: "2024-01-25",
        price: 699,
        status: "completed",
        image: "/assets/package12.jpeg",
      },
    ]
  );

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(profile));
    alert("✅ Profile updated successfully!");
  };

  return (
    <div className="user-dashboard">
      {/* Header */}
      <div className="dashboard-header">
        <h2>My Dashboard</h2>
        <p>Welcome back, {profile.name || profile.email}!</p>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* Tabs */}
      <div className="tabs">
        <button
          className={activeTab === "overview" ? "active" : ""}
          onClick={() => setActiveTab("overview")}
        >
          Overview
        </button>
        <button
          className={activeTab === "bookings" ? "active" : ""}
          onClick={() => setActiveTab("bookings")}
        >
          My Bookings
        </button>
        <button
          className={activeTab === "profile" ? "active" : ""}
          onClick={() => setActiveTab("profile")}
        >
          Profile
        </button>
      </div>

      {/* Overview Tab */}
      {activeTab === "overview" && (
        <div className="overview-section">
          {/* Stats */}
          <div className="stats-grid">
            <div className="stat-card">
              <h3>Total Bookings</h3>
              <p>{bookings.length}</p>
              <small>+1 from last month</small>
            </div>
            <div className="stat-card">
              <h3>Total Spent</h3>
              <p>
                $
                {bookings
                  .reduce((acc, b) => acc + parseFloat(b.price), 0)
                  .toLocaleString()}
              </p>
              <small>On amazing adventures</small>
            </div>
            <div className="stat-card">
              <h3>Member Since</h3>
              <p>January 2024</p>
              <small>Valued customer</small>
            </div>
          </div>

          {/* Recent Bookings */}
          <h3 className="recent-title">Recent Bookings</h3>
          <div className="booking-list">
            {bookings.map((b, idx) => (
              <div key={idx} className="booking-card">
                <img src={b.image} alt={b.destination} />
                <div className="booking-info">
                  <h4>{b.destination}</h4>
                  <p>📍 {b.location}</p>
                  <p>📅 {b.date}</p>
                </div>
                <div className="booking-status">
                  <span className={`status ${b.status}`}>{b.status}</span>
                  <p className="price">${b.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Explore & Book New Section */}
          <div className="explore-section">
            <div className="explore-card">
              <h3>Explore More Destinations</h3>
              <p>Discover your next adventure</p>
              <button
                onClick={() => navigate("/explore")}
                className="explore-btn"
              >
                Browse Destinations
              </button>
            </div>
            <div className="explore-card">
              <h3>Book New Package</h3>
              <p>Start planning your next trip</p>
              <button
                onClick={() => navigate("/packages")}
                className="explore-btn book-btn"
              >
                View Packages
              </button>
            </div>
          </div>
        </div>
      )}

      {/* My Bookings Tab */}
      {activeTab === "bookings" && (
        <div className="bookings-section">
          <h3>📖 My Bookings</h3>
          {bookings.map((b, idx) => (
            <div key={idx} className="booking-card">
              <img src={b.image} alt={b.destination} />
              <div className="booking-info">
                <h4>{b.destination}</h4>
                <p>{b.location}</p>
                <p>{b.date}</p>
              </div>
              <div className="booking-status">
                <span className={`status ${b.status}`}>{b.status}</span>
                <p className="price">${b.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Profile Tab */}
      {activeTab === "profile" && (
        <div className="profile-section">
          <h3>🧑 Update Profile</h3>
          <form onSubmit={handleUpdateProfile} className="profile-form">
            <label>Full Name</label>
            <input
              type="text"
              value={profile.name || ""}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            />
            <label>Email</label>
            <input type="email" value={profile.email || ""} disabled />
            <label>Phone</label>
            <input
              type="tel"
              value={profile.phone || ""}
              onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
            />
            <button type="submit" className="save-btn">
              Save Changes
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
