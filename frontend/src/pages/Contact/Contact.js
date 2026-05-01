import React, { useState } from "react";
import "./Contact.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Hide success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className="contact-page">
      {/* Header Section */}
      <section className="contact-header">
        <h1>Contact Us</h1>
        <p>
          Have questions about your next adventure? We're here to help you plan
          the perfect trip.
        </p>
      </section>

      {/* Contact Layout */}
      <div className="contact-layout">
        {/* Left Side - Contact Form */}
        <div className="contact-form">
          <h2>Send us a Message</h2>
          <p>
            Fill out the form below and we'll get back to you as soon as
            possible.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Full Name *</label>
                <input type="text" placeholder="Enter your full name" required />
              </div>

              <div className="form-group">
                <label>Email Address *</label>
                <input type="email" placeholder="Enter your email" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="Enter your phone number" />
              </div>

              <div className="form-group">
                <label>Subject</label>
                <select>
                  <option>Select a subject</option>
                  <option>General Inquiry</option>
                  <option>Booking Request</option>
                  <option>Customer Support</option>
                </select>
              </div>
            </div>

            <div className="form-group full-width">
              <label>Message *</label>
              <textarea
                rows="5"
                placeholder="Tell us about your travel plans, questions, or how we can help you..."
                required
              />
            </div>

            <button type="submit" className="btn-submit">
              ✈ Send Message
            </button>
          </form>

          {/* Success Notification */}
          {submitted && (
            <div className="success-message">
              ✅ Message sent successfully! We will respond within 24 hrs.
            </div>
          )}
        </div>

        {/* Right Side - Contact Info */}
        <div className="contact-info">
          <div className="info-card">
            <FaMapMarkerAlt className="icon" />
            <h3>Visit Us</h3>
            <p>123 Travel Street</p>
            <p>Adventure City, AC 12345</p>
            <p>United States</p>
          </div>

          <div className="info-card">
            <FaPhoneAlt className="icon" />
            <h3>Call Us</h3>
            <p>+1 (555) 123-4567</p>
            <p>+1 (555) 123-4568</p>
            <p>Available 24/7</p>
          </div>

          <div className="info-card">
            <FaEnvelope className="icon" />
            <h3>Email Us</h3>
            <p>info@wanderlust.com</p>
            <p>support@wanderlust.com</p>
            <p>bookings@wanderlust.com</p>
          </div>

          <div className="info-card">
            <FaClock className="icon" />
            <h3>Business Hours</h3>
            <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
            <p>Sat: 10:00 AM - 4:00 PM</p>
            <p>Sun: Closed</p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p>Quick answers to common questions about our services.</p>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>How far in advance should I book?</h3>
            <p>
              We recommend booking at least 2-3 months in advance for
              international trips and 4-6 weeks for domestic travel to get the
              best rates and availability.
            </p>
          </div>
          <div className="faq-item">
            <h3>What's included in your packages?</h3>
            <p>
              Our packages typically include accommodation, transportation,
              guided tours, and some meals. Specific inclusions vary by package
              - check the detailed itinerary for each trip.
            </p>
          </div>
          <div className="faq-item">
            <h3>Can I customize my travel package?</h3>
            <p>
              Absolutely! We offer customized packages tailored to your
              preferences, budget, and travel dates. Contact us to discuss your
              specific requirements.
            </p>
          </div>
          <div className="faq-item">
            <h3>What is your cancellation policy?</h3>
            <p>
              Cancellation policies vary by package and timing. Generally, we
              offer full refunds for cancellations made 60+ days before
              departure, with scaled refunds for later cancellations.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Start Your Adventure?</h2>
        <p>Don't wait - your perfect getaway is just one conversation away!</p>
        <div className="cta-buttons">
          <a href="tel:+15551234567" className="btn-call">
            📞 Call Now: (555) 123-4567
          </a>
          <a href="mailto:info@wanderlust.com" className="btn-email">
            📧 Email Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
