import React, { useState } from "react";
import "./BookingPage.css";

const BookingPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    travelDate: "",
    travelers: "2",
    package: "",
    requests: "",
  });

  const packages = [
    { id: 1, name: "Maldives Paradise Package" },
    { id: 2, name: "Alpine Adventure Expedition" },
    { id: 3, name: "Roman Heritage Tour" },
    { id: 4, name: "Bali Relaxation Escape" },
    { id: 5, name: "Dubai Luxury Experience" },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Submitted:", formData);
    alert("Your booking has been submitted successfully!");
  };

  return (
    <div className="booking-container">
      <h1 className="booking-title">Book Your Adventure</h1>
      <p className="booking-subtitle">
        Complete your booking details below and get ready for an unforgettable experience.
      </p>

      <div className="booking-wrapper">
        {/* Left Side Package Info */}
        <div className="package-card">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            alt="Package"
            className="package-image"
          />
          <h3 className="package-title">{formData.package || "Choose Your Package"}</h3>
          <ul className="package-details">
            <li>Round-trip flights</li>
            <li>Luxury accommodation</li>
            <li>All meals included</li>
            <li>Guided tours</li>
            <li>Special activities</li>
          </ul>
        </div>

        {/* Right Side Booking Form */}
        <form className="booking-form" onSubmit={handleSubmit}>
          <h2>Booking Details</h2>
          <p>Please provide your information to complete the booking.</p>

          <div className="form-group">
            <label>First Name *</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Last Name *</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Email Address *</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Phone Number *</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Choose Package *</label>
            <select name="package" value={formData.package} onChange={handleChange} required>
              <option value="">-- Select Package --</option>
              {packages.map((pkg) => (
                <option key={pkg.id} value={pkg.name}>
                  {pkg.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Preferred Travel Date *</label>
            <input type="date" name="travelDate" value={formData.travelDate} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Number of Travelers *</label>
            <select name="travelers" value={formData.travelers} onChange={handleChange}>
              <option value="1">1 Person</option>
              <option value="2">2 People</option>
              <option value="3">3 People</option>
              <option value="4">4 People</option>
              <option value="5">5 People</option>
            </select>
          </div>

          <div className="form-group">
            <label>Special Requests (Optional)</label>
            <textarea name="requests" value={formData.requests} onChange={handleChange}></textarea>
          </div>

          <button type="submit" className="submit-btn">Confirm Booking</button>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;
