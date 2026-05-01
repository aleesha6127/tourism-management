import { FaHome, FaMapMarkedAlt, FaSuitcase, FaGlobe, FaInfoCircle, FaPhone, FaSignInAlt, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <a href="/"><FaMapMarkerAlt className="logo-icon" /> WanderLust</a>
      </div>

      {/* Links */}
      <ul className="nav-links">
        <li><a href="/" className="active"><FaHome /> Home</a></li>
        <li><a href="/explore"><FaMapMarkedAlt /> Explore</a></li>
        <li><a href="/packages"><FaSuitcase /> Packages</a></li>
        <li><a href="/places"><FaGlobe /> Places</a></li>
        <li><a href="/about"><FaInfoCircle /> About Us</a></li>
        <li><a href="/contact"><FaPhone /> Contact</a></li>
      </ul>

      {/* Actions */}
      <div className="nav-actions">
        <a href="/login" className="btn login"><FaSignInAlt /> Login</a>
        <a href="/book" className="btn book"><FaCalendarAlt /> Book Now</a>
      </div>
    </nav>
  );
}

export default Navbar;
