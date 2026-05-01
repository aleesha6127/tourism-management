import React from "react";
import { FaPlane, FaCamera, FaUserTie, FaMountain } from "react-icons/fa";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  const features = [
    { id: 1, icon: <FaPlane />, title: "Easy Booking", desc: "Book your dream vacation in just a few clicks" },
    { id: 2, icon: <FaCamera />, title: "Memorable Experiences", desc: "Create unforgettable memories that last a lifetime" },
    { id: 3, icon: <FaUserTie />, title: "Expert Guides", desc: "Professional guides to enhance your travel experience" },
    { id: 4, icon: <FaMountain />, title: "Adventure Tours", desc: "Thrilling adventures for the bold and adventurous" },
  ];

  return (
    <section className="whychooseus">
      <h2>Why Choose WanderLust?</h2>
      <p>We're committed to providing exceptional travel experiences that exceed your expectations.</p>
      <div className="features">
        {features.map((f) => (
          <div key={f.id} className="feature-card">
            <div className="icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
