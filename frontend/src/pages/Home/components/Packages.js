import React from "react";
import "./Packages.css";

const Packages = () => {
  const packages = [
    {
      id: 1,
      title: "Tropical Paradise",
      location: "Maldives",
      price: "$1299",
      duration: "7 days",
      image: "/assets/package1.jpeg",
      description: "Crystal clear waters, sandy beaches, and overwater villas."
    },
    {
      id: 2,
      title: "Mountain Adventure",
      location: "Swiss Alps",
      price: "$899",
      duration: "5 days",
      image: "/assets/package2.jpeg",
      description: "Alpine scenery, hiking trails, and cozy mountain lodges."
    },
    {
      id: 3,
      title: "Cultural Heritage",
      location: "Rome, Italy",
      price: "$699",
      duration: "4 days",
      image: "/assets/package3.jpeg",
      description: "Ancient history, world-class art, and authentic Italian food."
    }
  ];

  return (
    <section className="packages">
      <h2>Featured Packages</h2>
      <p>Discover our handpicked travel packages for your next adventure.</p>

      <div className="packages-list">
        {packages.map((pkg) => (
          <div className="package-card" key={pkg.id}>
            <img src={pkg.image} alt={pkg.title} />
            <div className="package-info">
              <h3>{pkg.title}</h3>
              <p className="location">{pkg.location}</p>
              <p className="description">{pkg.description}</p>
              <div className="details">
                <span>{pkg.duration}</span>
                <span>{pkg.price}</span>
              </div>
              <button className="btn-primary">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Packages;
