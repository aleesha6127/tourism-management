// src/pages/Booking/BookingForm.js
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./BookingForm.css";

// Minimal local packages list for prefill. If you have a packages API, you can fetch instead.
const PACKAGES = [
  { id: "1", title: "Maldives Paradise Package", price: 1299, image: "/assets/package9.jpeg" },
  { id: "2", title: "Alpine Adventure Expedition", price: 1899, image: "/assets/alps.jpeg" },
  { id: "3", title: "Romantic Paris Getaway", price: 1399, image: "/assets/paris.jpeg" },
  { id: "4", title: "Dubai Desert Safari", price: 799, image: "/assets/dubai.jpeg" },
  { id: "5", title: "Bali Holiday Retreat", price: 1199, image: "/assets/bali.jpeg" },
  { id: "6", title: "Safari & Wildlife Adventure", price: 2099, image: "/assets/kenya.jpeg" },
];

const BookingForm = () => {
  const { packageId } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    destination: "",
    date: "",
    people: 1,
    price: "",
    packageId: packageId || "",
  });

  useEffect(() => {
    // If route param exists, prefill from local PACKAGES
    if (packageId) {
      const pkg = PACKAGES.find((p) => p.id === String(packageId));
      if (pkg) {
        setForm((f) => ({ ...f, destination: pkg.title, price: pkg.price, packageId: pkg.id }));
      }
    } else {
      // If localStorage has selectedPackageDetails, use it
      const selected = JSON.parse(localStorage.getItem("selectedPackageDetails") || "null");
      if (selected) {
        setForm((f) => ({ ...f, destination: selected.title, price: selected.price, packageId: selected.id }));
      }
    }
  }, [packageId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      // If not logged in route to login and save chosen package id
      localStorage.setItem("selectedPackage", form.packageId || "");
      navigate("/login");
      return;
    }

    const payload = {
      userEmail: user.email,
      packageId: form.packageId,
      destination: form.destination,
      date: form.date,
      people: form.people,
      price: Number(form.price),
    };

    try {
      const res = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const saved = await res.json();
      // Optionally add to local storage bookings (client-side)
      const bookings = JSON.parse(localStorage.getItem("bookings") || "[]");
      bookings.unshift(saved);
      localStorage.setItem("bookings", JSON.stringify(bookings));

      alert("✅ Booking confirmed — we will contact you shortly");
      navigate("/user/profile");
    } catch (err) {
      console.error(err);
      alert("Booking failed");
    }
  };

  return (
    <div className="booking-container">
      <h2>Book Your Package</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <label>Package</label>
        <input value={form.destination} onChange={(e)=>setForm({...form, destination:e.target.value})} required />

        <label>Date</label>
        <input type="date" value={form.date} onChange={(e)=>setForm({...form, date:e.target.value})} required />

        <label>Number of People</label>
        <input type="number" min="1" value={form.people} onChange={(e)=>setForm({...form, people:e.target.value})} required />

        <label>Price (USD)</label>
        <input type="number" value={form.price} onChange={(e)=>setForm({...form, price:e.target.value})} />

        <button type="submit" className="btn-submit">Confirm Booking</button>
      </form>
    </div>
  );
};

export default BookingForm;
