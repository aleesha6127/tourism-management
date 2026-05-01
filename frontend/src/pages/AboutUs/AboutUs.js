import React from "react";
import { Link } from "react-router-dom";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="aboutus-container">

      {/* HERO SECTION */}
      <section className="aboutus-hero">
        <h1>About WanderLust</h1>
        <p>
          Your trusted travel partner, creating extraordinary adventures and unforgettable memories since 2020.
        </p>
        <button className="trusted-btn">Trusted by 10,000+ Travelers</button>
      </section>

      {/* STATS SECTION */}
      <section className="aboutus-stats">
        <div className="stat-card">
          <div className="icon">🌍</div>
          <div className="stat-number">50+</div>
          <p>Destinations</p>
        </div>
        <div className="stat-card">
          <div className="icon">👥</div>
          <div className="stat-number">10,000+</div>
          <p>Happy Travelers</p>
        </div>
        <div className="stat-card">
          <div className="icon">🏆</div>
          <div className="stat-number">25+</div>
          <p>Awards Won</p>
        </div>
        <div className="stat-card">
          <div className="icon">⭐</div>
          <div className="stat-number">4.9</div>
          <p>Average Rating</p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="our-story">
        <div className="story-content">
          <h2>Our Story</h2>
          <p>
            Founded in 2020 by a group of passionate travelers, WanderLust was born from a simple
            belief: that travel has the power to transform lives, broaden perspectives, and create
            connections that last a lifetime.
          </p>
          <p>
            What started as a small team of adventure enthusiasts has grown into a trusted travel
            company serving thousands of happy customers worldwide.
          </p>
          <Link to="/contact" className="btn-primary">Get in Touch</Link>
        </div>
        <div className="story-image">
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80"
            alt="Our Story"
          />
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="our-values">
        <h2>Our Values</h2>
        <p className="subtitle">
          The principles that guide everything we do and every experience we create.
        </p>
        <div className="values-grid">
          <div className="value-card">
            <span className="icon">💙</span>
            <h3>Passion for Travel</h3>
            <p>We believe travel transforms lives and creates lasting memories.</p>
          </div>
          <div className="value-card">
            <span className="icon">🛡️</span>
            <h3>Safety First</h3>
            <p>Your safety and security are our top priorities in every destination we offer.</p>
          </div>
          <div className="value-card">
            <span className="icon">✔️</span>
            <h3>Quality Service</h3>
            <p>We’re committed to providing exceptional service that exceeds expectations.</p>
          </div>
          <div className="value-card">
            <span className="icon">🌍</span>
            <h3>Sustainable Tourism</h3>
            <p>We promote responsible travel that benefits communities and preserves nature.</p>
          </div>
        </div>
      </section>

      {/* MEET OUR TEAM */}
      <section className="our-team">
        <h2>Meet Our Team</h2>
        <p className="subtitle">
          The passionate people behind WanderLust who make your travel dreams come true.
        </p>
        <div className="team-grid">
          <div className="team-card">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sarah Johnson" />
            <h3>Sarah Johnson</h3>
            <span className="role">Founder & CEO</span>
            <p>20+ years in travel industry, passionate about unforgettable experiences.</p>
          </div>
          <div className="team-card">
            <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Michael Chen" />
            <h3>Michael Chen</h3>
            <span className="role">Head of Operations</span>
            <p>Expert in logistics and global destination management.</p>
          </div>
          <div className="team-card">
            <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Emma Rodriguez" />
            <h3>Emma Rodriguez</h3>
            <span className="role">Customer Experience Director</span>
            <p>Ensures every traveler has the perfect journey from start to finish.</p>
          </div>
          <div className="team-card">
            <img src="https://randomuser.me/api/portraits/men/67.jpg" alt="David Kumar" />
            <h3>David Kumar</h3>
            <span className="role">Adventure Specialist</span>
            <p>Guide & expert in extreme sports and outdoor activities.</p>
          </div>
        </div>
      </section>

      {/* OUR MISSION (restored) */}
      <section className="our-mission">
        <h2>Our Mission</h2>
        <p className="mission-text">
          "To inspire and enable extraordinary travel experiences that create lasting memories,
          foster cultural understanding, and contribute to a more connected world."
        </p>
        <div className="mission-buttons">
          <Link to="/packages" className="btn-primary">Explore Packages</Link>
          <Link to="/contact" className="btn-outline">Contact Us</Link>
        </div>
      </section>


      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <h3>🌍 WanderLust</h3>
            <p>
              Discover amazing destinations around the world. Your adventure starts here with our
              curated travel experiences.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">📘</a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">🐦</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">📸</a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer">▶️</a>
            </div>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/explore">Explore Destinations</Link></li>
              <li><Link to="/packages">Tour Packages</Link></li>
              <li><Link to="/places">Popular Places</Link></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li><Link to="/book">Book Now</Link></li>
              <li><Link to="/bookings">My Bookings</Link></li>
              <li><Link to="/support">Customer Support</Link></li>
              <li><Link to="/videos">Travel Videos</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact Info</h4>
            <p><a href="mailto:aleeshaanas3@gmail.com">📧 aleeshaanas3@gmail.com</a></p>
            <p><a href="tel:+919846691678">📞 +91 98466 91678</a></p>
            <p><a href="https://wa.me/919846691678" target="_blank" rel="noreferrer">💬 WhatsApp Chat</a></p>
            <p>📍 123 Travel Street, Adventure City, AC 12345</p>
          </div>
        </div>
        <p className="footer-bottom">© 2025 WanderLust Tourism. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
