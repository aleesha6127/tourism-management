import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const navigate = useNavigate();
  const storedUser = JSON.parse(localStorage.getItem("user")) || {};
  const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];

  const [profile, setProfile] = useState({
    name: storedUser.name || "",
    email: storedUser.email || "",
    phone: storedUser.phone || "",
    address: storedUser.address || "",
  });

  const handleUpdate = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(profile));
    alert("✅ Profile updated successfully!");
  };

  return (
    <div className="profile-page">
      {/* Back Button */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        ⬅ Back
      </button>

      <h2>🧑 Your Profile</h2>

      {/* Profile Update Form */}
      <form className="profile-form" onSubmit={handleUpdate}>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Email (cannot change)</label>
          <input type="email" value={profile.email} disabled />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            value={profile.phone}
            onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <textarea
            value={profile.address}
            onChange={(e) => setProfile({ ...profile, address: e.target.value })}
          />
        </div>
        <button type="submit" className="save-btn">Save Changes</button>
      </form>

      {/* Package Bookings */}
      <section className="profile-section">
        <h3>📦 Your Packages</h3>
        {storedBookings.length > 0 ? (
          <div className="package-list">
            {storedBookings.map((b, idx) => (
              <div className="package-card" key={idx}>
                {b.image ? (
                  <img src={b.image} alt={b.destination || "Package"} className="package-img" />
                ) : (
                  <div className="package-img placeholder">📦</div>
                )}
                <div className="package-info">
                  <h4>{b.destination || "Unknown Destination"}</h4>
                  <p>Date: {b.date || "Not set"}</p>
                  <p>People: {b.people || "-"}</p>
                  <p>Price: {b.price ? `$${b.price}` : "N/A"}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="empty">No packages booked yet.</p>
        )}
      </section>

      {/* Contact Section */}
      <section className="profile-section">
        <h3>📞 Contact Details</h3>
        <div className="contact-card">
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Phone:</strong> {profile.phone || "Not provided"}</p>
          <p><strong>Address:</strong> {profile.address || "Not provided"}</p>
        </div>
      </section>
    </div>
  );
};

export default Profile;
