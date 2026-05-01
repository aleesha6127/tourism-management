import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import "./Places.css";

const placesData = [
  {
    id: 1,
    title: "Tropical Paradise Beach",
    location: "Maldives",
    category: "Beach",
    rating: 4.9,
    reviews: 156,
    description: "Crystal clear waters, white sandy beaches, and luxury bungalows.",
    price: 1299,
    image: process.env.PUBLIC_URL + "/assets/package9.jpeg",
  },
  {
    id: 2,
    title: "Alpine Mountain Resort",
    location: "Swiss Alps",
    category: "Mountain",
    rating: 4.8,
    reviews: 203,
    description: "Breathtaking alpine scenery, hiking trails, and cozy mountain lodges.",
    price: 899,
    image: process.env.PUBLIC_URL + "/assets/alps.jpeg",
  },
  {
    id: 3,
    title: "Historic City Center",
    location: "Rome, Italy",
    category: "Cultural",
    rating: 4.7,
    reviews: 189,
    description: "Ancient history, world-class art, and authentic Italian cuisine.",
    price: 699,
    image: process.env.PUBLIC_URL + "/assets/paris.jpeg",
  },
  {
    id: 4,
    title: "Desert Safari Adventure",
    location: "Dubai, UAE",
    category: "Adventure",
    rating: 4.6,
    reviews: 142,
    description: "Dune bashing, camel rides, cultural shows, and luxury desert camps.",
    price: 799,
    image: process.env.PUBLIC_URL + "/assets/dubai.jpeg",
  },
  {
    id: 5,
    title: "Rainforest Expedition",
    location: "Costa Rica",
    category: "Adventure",
    rating: 4.8,
    reviews: 167,
    description: "Incredible biodiversity, zip-line through canopies, and exotic wildlife.",
    price: 999,
    image: process.env.PUBLIC_URL + "/assets/bali.jpeg",
  },
  {
    id: 6,
    title: "Island Hopping Tour",
    location: "Greek Islands",
    category: "Beach",
    rating: 4.9,
    reviews: 198,
    description: "Pristine beaches, charming villages, and ancient Greek ruins.",
    price: 1199,
    image: process.env.PUBLIC_URL + "/assets/kenya.jpeg",
  },
  {
    id: 7,
    title: "Northern Lights Escape",
    location: "Reykjavik, Iceland",
    category: "Nature",
    rating: 4.9,
    reviews: 276,
    description: "Chase the magical Aurora Borealis and relax in geothermal hot springs.",
    price: 1599,
    image: process.env.PUBLIC_URL + "/assets/package10.jpg",
  },
  {
    id: 8,
    title: "Amazon River Cruise",
    location: "Manaus, Brazil",
    category: "Wildlife",
    rating: 4.7,
    reviews: 221,
    description: "Cruise through the Amazon rainforest, spot exotic wildlife, and explore hidden villages.",
    price: 1799,
    image: process.env.PUBLIC_URL + "/assets/hero-beach.jpg",
  },
];

function Places() {
  const [search, setSearch] = useState("");
  const [locationFilter, setLocationFilter] = useState("All Locations");
  const [priceFilter, setPriceFilter] = useState("All Prices");
  const navigate = useNavigate();

  const filteredPlaces = placesData.filter((place) => {
    return (
      place.title.toLowerCase().includes(search.toLowerCase()) &&
      (locationFilter === "All Locations" || place.location === locationFilter) &&
      (priceFilter === "All Prices" ||
        (priceFilter === "<$1000" && place.price < 1000) ||
        (priceFilter === ">$1000" && place.price >= 1000))
    );
  });

  // ✅ Handle Book Now
  const handleBook = (place) => {
    const user = localStorage.getItem("user");

    // Save package details for pre-filling Booking Page
    localStorage.setItem("selectedPackageDetails", JSON.stringify(place));

    if (!user) {
      navigate("/login");
    } else {
      navigate("/book");
    }
  };

  return (
    <div className="places-page">
      <div className="places-container">
        <h1 className="section-title">Explore Destinations</h1>
        <p className="section-subtitle">
          Discover amazing places around the world and find your perfect travel destination.
        </p>

        {/* Filters */}
        <div className="filters">
          <input
            type="text"
            placeholder="Search destinations..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)}>
            <option>All Locations</option>
            <option>Maldives</option>
            <option>Swiss Alps</option>
            <option>Rome, Italy</option>
            <option>Dubai, UAE</option>
            <option>Costa Rica</option>
            <option>Greek Islands</option>
            <option>Reykjavik, Iceland</option>
            <option>Manaus, Brazil</option>
          </select>
          <select value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)}>
            <option>All Prices</option>
            <option>&lt;$1000</option>
            <option>&gt;$1000</option>
          </select>
        </div>

        {/* Cards */}
        <div className="places-grid">
          {filteredPlaces.map((place) => (
            <article className="place-card" key={place.id}>
              <img src={place.image} alt={place.title} className="place-img" />
              <div className="place-details">
                <h3>{place.title}</h3>
                <p className="location">📍 {place.location}</p>
                <p className="rating">⭐ {place.rating} ({place.reviews} reviews)</p>
                <p className="desc">{place.description}</p>
                <div className="price-book">
                  <span className="price">${place.price} <small>per person</small></span>
                  <div className="buttons">
                    <button
                      className="book-btn"
                      onClick={() => handleBook(place)} // ✅ Now works
                    >
                      Book Now
                    </button>
                    <button className="details-btn">Details</button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default Places;
