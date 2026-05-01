import React from "react";
import "./Footer.css";
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* About Section */}
        <div className="footer-section">
          <h3>WanderLust</h3>
          <p>
            Explore the world with us. Adventure, culture, and unforgettable
            experiences await you!
          </p>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>
            <FaEnvelope className="footer-icon" />
            <a href="mailto:aleeshaanas3@gmail.com">
              aleeshaanas3@gmail.com
            </a>
          </p>
          <p>
            <FaWhatsapp className="footer-icon" />
            <a
              href="https://wa.me/9846691678"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp: 9846691678
            </a>
          </p>
          <p>
            <FaMapMarkerAlt className="footer-icon" /> Kochi, Kerala, India
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/explore">Explore</Link></li>
            <li><Link to="/packages">Packages</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li><Link to="/book">Book Now</Link></li>
            <li><Link to="/bookings">My Bookings</Link></li>
            <li><Link to="/support">Customer Support</Link></li>
            <li><Link to="/videos">Travel Videos</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} WanderLust. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
