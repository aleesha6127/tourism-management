// src/pages/Explore/Explore.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Explore.css";
import Footer from "../../components/Footer/Footer";

const Explore = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const navigate = useNavigate();

  const destinations = [
    {
      id: 1,
      image: process.env.PUBLIC_URL + "/assets/package4.jpeg",
      title: "Tropical Paradise Beach",
      location: "Maldives",
      price: 1299,
      rating: 4.9,
      reviews: 156,
      tag: "Beach",
    },
    {
      id: 2,
      image: process.env.PUBLIC_URL + "/assets/package5.jpeg",
      title: "Alpine Mountain Resort",
      location: "Swiss Alps",
      price: 899,
      rating: 4.8,
      reviews: 203,
      tag: "Mountain",
    },
    {
      id: 3,
      image: process.env.PUBLIC_URL + "/assets/package6.jpg", // ✅ fixed extension
      title: "Historic City Center",
      location: "Rome, Italy",
      price: 699,
      rating: 4.7,
      reviews: 189,
      tag: "Cultural",
    },
    {
      id: 4,
      image: process.env.PUBLIC_URL + "/assets/package7.jpeg",
      title: "Rainforest Expedition",
      location: "Costa Rica",
      price: 999,
      rating: 4.8,
      reviews: 167,
      tag: "Adventure",
    },
    {
      id: 5,
      image: process.env.PUBLIC_URL + "/assets/package8.jpeg",
      title: "Island Hopping Tour",
      location: "Greek Islands",
      price: 1199,
      rating: 4.9,
      reviews: 198,
      tag: "Beach",
    },
    {
      id: 6,
      image: process.env.PUBLIC_URL + "/assets/package9.jpeg",
      title: "Desert Safari Adventure",
      location: "Dubai, UAE",
      price: 799,
      rating: 4.6,
      reviews: 142,
      tag: "Adventure",
    },
  ];

  // Apply search + filter
  const filteredDestinations = destinations.filter((d) => {
    const matchesSearch = d.title.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All" || d.tag === filter;
    return matchesSearch && matchesFilter;
  });

  // ✅ Handle Book Now (save full package)
  const handleBook = (pkg) => {
    const user = localStorage.getItem("user");

    // Save full details
    localStorage.setItem("selectedPackageDetails", JSON.stringify(pkg));

    if (!user) {
      navigate("/login");
    } else {
      navigate("/book");
    }
  };

  return (
    <>
      <section className="explore">
        <h2>🌍 Explore Destinations</h2>

        {/* Search & Filter */}
        <div className="explore-controls">
          <input
            type="text"
            placeholder="🔍 Search destinations..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">All</option>
            <option value="Beach">Beach</option>
            <option value="Mountain">Mountain</option>
            <option value="Adventure">Adventure</option>
            <option value="Cultural">Cultural</option>
          </select>
        </div>

        {/* Cards */}
        <div className="explore-grid">
          {filteredDestinations.length > 0 ? (
            filteredDestinations.map((d) => (
              <div className="explore-card" key={d.id}>
                <img src={d.image} alt={d.title} />
                <div className="explore-info">
                  <h3>{d.title}</h3>
                  <p className="location">📍 {d.location}</p>
                  <p className="price">${d.price}</p>
                  <p className="rating">⭐ {d.rating} ({d.reviews} reviews)</p>
                  <span className="tag">{d.tag}</span>
                  <button className="btn-book" onClick={() => handleBook(d)}>
                    Book Now
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="no-results">No destinations found.</p>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Explore;
