// src/pages/Packages/Packages.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomPackageBanner from "../../components/CustomPackageBanner/CustomPackageBanner";
import Footer from "../../components/Footer/Footer";
import "./Packages.css";

const packagesData = [
  {
    id: 1,
    title: "Maldives Paradise Package",
    category: "Honeymoon",
    location: "Maldives",
    duration: "7 days, 6 nights",
    people: "2 people",
    rating: 4.9,
    reviews: 156,
    description:
      "Experience private overwater villas, turquoise lagoons and romantic dinners.",
    includes: [
      "Round-trip flights",
      "Overwater bungalow stay",
      "All meals included",
      "Sunset cruise",
    ],
    price: 1299,
    oldPrice: 1599,
    image: process.env.PUBLIC_URL + "/assets/package9.jpeg",
  },
  {
    id: 2,
    title: "Alpine Adventure Expedition",
    category: "International Trips",
    location: "Swiss Alps",
    duration: "5 days, 4 nights",
    people: "4-10 people",
    rating: 4.8,
    reviews: 203,
    description:
      "Skiing, scenic trains and alpine villages — perfect mountain escape.",
    includes: ["Mountain lodge stay", "Guided hikes", "Ski lift pass"],
    price: 1899,
    oldPrice: 2199,
    image: process.env.PUBLIC_URL + "/assets/alps.jpeg",
  },
  {
    id: 3,
    title: "Romantic Paris Getaway",
    category: "Honeymoon",
    location: "Paris, France",
    duration: "4 days, 3 nights",
    people: "2 people",
    rating: 4.7,
    reviews: 310,
    description:
      "Candlelit dinners, Seine cruises and iconic city-sightseeing for lovers.",
    includes: ["Luxury hotel", "Seine cruise", "Eiffel Tower entrance"],
    price: 1399,
    oldPrice: 1699,
    image: process.env.PUBLIC_URL + "/assets/paris.jpeg",
  },
  {
    id: 4,
    title: "Dubai Desert Safari",
    category: "Adventure",
    location: "Dubai, UAE",
    duration: "3 days, 2 nights",
    people: "2-10 people",
    rating: 4.6,
    reviews: 221,
    description:
      "Dune bashing, camel rides, cultural shows and luxury desert camp experiences.",
    includes: ["Desert camp", "Camel ride", "Dune bashing", "BBQ dinner"],
    price: 799,
    oldPrice: 999,
    image: process.env.PUBLIC_URL + "/assets/dubai.jpeg",
  },
  {
    id: 5,
    title: "Bali Holiday Retreat",
    category: "Holiday Trips",
    location: "Bali, Indonesia",
    duration: "6 days, 5 nights",
    people: "2-12 people",
    rating: 4.9,
    reviews: 540,
    description:
      "Beach clubs, wellness spas, temples and tropical rice terraces for relaxation.",
    includes: ["Resort stay", "Daily breakfast", "Temple tours", "Spa session"],
    price: 1199,
    oldPrice: 1499,
    image: process.env.PUBLIC_URL + "/assets/bali.jpeg",
  },
  {
    id: 6,
    title: "Safari & Wildlife Adventure",
    category: "International Trips",
    location: "Kenya",
    duration: "8 days, 7 nights",
    people: "4-16 people",
    rating: 4.8,
    reviews: 184,
    description:
      "Up-close wildlife viewing with expert guides, luxury tented camps and safaris.",
    includes: ["Safari drives", "Tented camp", "All meals", "Expert guide"],
    price: 2099,
    oldPrice: 2399,
    image: process.env.PUBLIC_URL + "/assets/kenya.jpeg",
  },
];

function Packages() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  const categories = [
    "All",
    "Honeymoon",
    "Holiday Trips",
    "International Trips",
    "Adventure",
    "Cultural",
  ];

  const filtered =
    selectedCategory === "All"
      ? packagesData
      : packagesData.filter((p) => p.category === selectedCategory);

  // ✅ Updated booking logic
  const handleBook = (pkg) => {
    const user = localStorage.getItem("user");

    // Save full package details for Booking Page
    localStorage.setItem("selectedPackageDetails", JSON.stringify(pkg));

    if (!user) {
      navigate("/login");
    } else {
      navigate("/book");
    }
  };

  return (
    <>
      <div className="packages-page">
        <div className="packages-container">
          <h2 className="section-title">Tour Packages</h2>
          <p className="section-subtitle">
            Carefully crafted travel packages designed to give you the best
            experiences at unbeatable prices.
          </p>

          {/* Category buttons */}
          <div className="category-buttons">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`category-btn ${
                  selectedCategory === cat ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat === "All" ? "All Packages" : cat}
              </button>
            ))}
          </div>

          {/* Packages grid */}
          <div className="packages-grid">
            {filtered.map((pkg) => (
              <article className="package-card" key={pkg.id}>
                <div className="package-left">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="package-img"
                  />
                </div>

                <div className="package-details">
                  <h3>{pkg.title}</h3>
                  <p className="location">📍 {pkg.location}</p>
                  <p className="duration">
                    ⏳ {pkg.duration} &nbsp; | &nbsp; 👥 {pkg.people}
                  </p>
                  <p className="rating">
                    ⭐ {pkg.rating} ({pkg.reviews} reviews)
                  </p>
                  <p className="desc">{pkg.description}</p>

                  <h4 className="includes-title">Package Includes:</h4>
                  <ul className="includes">
                    {pkg.includes.map((inc, i) => (
                      <li key={i}>✔ {inc}</li>
                    ))}
                  </ul>

                  {/* Price + Buttons */}
                  <div className="bottom-row">
                    <div className="price-row">
                      <span className="price">${pkg.price}</span>
                      <span className="old-price">${pkg.oldPrice}</span>
                    </div>
                    <div className="btn-row">
                      <button
                        className="book-btn"
                        onClick={() => handleBook(pkg)} // ✅ Pass full pkg
                      >
                        Book Now
                      </button>
                      <button
                        className="details-btn"
                        onClick={() =>
                          alert(
                            `Details for ${pkg.title}\n\nThis is a demo details action — replace with your details page.`
                          )
                        }
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <CustomPackageBanner />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Packages;
