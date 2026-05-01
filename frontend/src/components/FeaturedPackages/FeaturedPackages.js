import React from "react";
import { useNavigate } from "react-router-dom";
import "./FeaturedPackages.css";

const packages = [
  {
    id: 1,
    title: "Tropical Paradise",
    location: "Maldives",
    price: 1299,
    duration: "7 days",
    rating: 4.9,
    description:
      "Crystal clear waters, white sandy beaches, and luxurious overwater bungalows.",
    image: process.env.PUBLIC_URL + "/assets/package9.jpeg",
  },
  {
    id: 2,
    title: "Mountain Adventure",
    location: "Swiss Alps",
    price: 899,
    duration: "5 days",
    rating: 4.8,
    description:
      "Breathtaking alpine scenery, hiking trails, and cozy mountain lodges.",
    image: process.env.PUBLIC_URL + "/assets/alps.jpeg",
  },
  {
    id: 3,
    title: "Cultural Heritage",
    location: "Rome, Italy",
    price: 699,
    duration: "4 days",
    rating: 4.7,
    description:
      "Ancient history, world-class art, and authentic Italian cuisine.",
    image: process.env.PUBLIC_URL + "/assets/paris.jpeg",
  },
];

const FeaturedPackages = () => {
  const navigate = useNavigate();

  return (
    <section className="featured-packages">
      <h2 className="section-title">Featured Packages</h2>
      <p className="section-subtitle">
        Discover our handpicked travel packages designed to give you the best
        experience.
      </p>

      <div className="package-grid">
        {packages.map((pkg) => (
          <div key={pkg.id} className="package-card">
            <img src={pkg.image} alt={pkg.title} className="package-img" />
            <div className="package-content">
              <h3>{pkg.title}</h3>
              <p className="location">📍 {pkg.location}</p>
              <p className="duration">⏳ {pkg.duration}</p>
              <p className="rating">⭐ {pkg.rating}</p>
              <p className="desc">{pkg.description}</p>
              <p className="price">${pkg.price}</p>
              <button className="book-btn">Book Now</button>
            </div>
          </div>
        ))}
      </div>

      {/* View All Packages Button */}
      <div className="view-all">
        <button className="view-btn" onClick={() => navigate("/packages")}>
          View All Packages
        </button>
      </div>
    </section>
  );
};

export default FeaturedPackages;
