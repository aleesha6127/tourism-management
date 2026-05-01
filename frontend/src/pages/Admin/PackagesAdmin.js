// src/pages/Admin/PackagesAdmin.js
import React, { useState, useEffect } from "react";
import "./Admin.css";

const PackagesAdmin = () => {
  const [packages, setPackages] = useState([]);
  const [newPackage, setNewPackage] = useState({
    title: "",
    location: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("allPackages")) || [];
    setPackages(saved);
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setNewPackage({ ...newPackage, image: reader.result });
    };
    if (file) reader.readAsDataURL(file);
  };

  const handleAddPackage = (e) => {
    e.preventDefault();
    const updated = [...packages, newPackage];
    setPackages(updated);
    localStorage.setItem("allPackages", JSON.stringify(updated));
    setNewPackage({ title: "", location: "", price: "", image: "" });
  };

  return (
    <div className="admin-page">
      <h2>Manage Packages</h2>

      <form onSubmit={handleAddPackage} className="admin-form">
        <input
          type="text"
          placeholder="Package Title"
          value={newPackage.title}
          onChange={(e) =>
            setNewPackage({ ...newPackage, title: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="Location"
          value={newPackage.location}
          onChange={(e) =>
            setNewPackage({ ...newPackage, location: e.target.value })
          }
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={newPackage.price}
          onChange={(e) =>
            setNewPackage({ ...newPackage, price: e.target.value })
          }
          required
        />
        <input type="file" accept="image/*" onChange={handleImageUpload} required />
        <button type="submit">Add Package</button>
      </form>

      <h3>Existing Packages</h3>
      <table border="1" className="admin-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Location</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {packages.map((pkg, i) => (
            <tr key={i}>
              <td>
                <img src={pkg.image} alt={pkg.title} width="60" />
              </td>
              <td>{pkg.title}</td>
              <td>{pkg.location}</td>
              <td>${pkg.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PackagesAdmin;
