import React from "react";
import { useNavigate } from "react-router-dom";
import "./FeaturedPackages.css";

const featuredPackages = [
  {
    id: 1,
    title: "Romantic Maldives Getaway",
    location: "Maldives",
    duration: "7 days, 6 nights",
    price: 1299,
    image: process.env.PUBLIC_URL + "/assets/package9.jpeg",
  },
  {
    id: 2,
    title: "Adventure in the Alps",
    location: "Swiss Alps",
    duration: "5 days, 4 nights",
    price: 1899,
    image: process.env.PUBLIC_URL + "/assets/alps.jpeg",
  },
  {
    id: 3,
    title: "Paris Romantic Escape",
    location: "Paris, France",
    duration: "4 days, 3 nights",
    price: 1399,
    image: process.env.PUBLIC_URL + "/assets/paris.jpeg",
  },
];

function FeaturedPackages() {
  const navigate = useNavigate();

  // ✅ Save full package details instead of just ID
  const handleBook = (pkg) => {
    const user = localStorage.getItem("user");

    // Save selected package details in localStorage
    localStorage.setItem("selectedPackageDetails", JSON.stringify(pkg));

    if (!user) {
      navigate("/login");
    } else {
      navigate("/book");
    }
  };

  return (
    <section className="featured-packages">
      <h2 className="featured-title">🌟 Featured Packages</h2>
      <div className="featured-grid">
        {featuredPackages.map((pkg) => (
          <div className="featured-card" key={pkg.id}>
            <img src={pkg.image} alt={pkg.title} />
            <h3>{pkg.title}</h3>
            <p>📍 {pkg.location}</p>
            <p>⏳ {pkg.duration}</p>
            <p className="featured-price">From ${pkg.price}</p>
            <button
              className="featured-btn"
              onClick={() => handleBook(pkg)}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedPackages;
