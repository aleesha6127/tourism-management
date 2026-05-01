// src/pages/Home/Home.js
import React from "react";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import FeaturedPackages from "./components/FeaturedPackages";   // ✅ Correct import
import CallToAction from "../../components/CallToAction/CallToAction";  // ✅ Global component

const Home = () => {
  return (
    <div>
      <Hero />
      <WhyChooseUs />
      <FeaturedPackages />   {/* Featured packages with "Book Now" buttons */}
      <CallToAction />       {/* Call-to-action banner */}
    </div>
  );
};

export default Home;
