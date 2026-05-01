// src/pages/Admin/PlacesAdmin.js
import React, { useState, useEffect } from "react";
import "./Admin.css";

const PlacesAdmin = () => {
  const [places, setPlaces] = useState([]);
  const [newPlace, setNewPlace] = useState({
    name: "",
    country: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("allPlaces")) || [];
    setPlaces(saved);
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setNewPlace({ ...newPlace, image: reader.result });
    };
    if (file) reader.readAsDataURL(file);
  };

  const handleAddPlace = (e) => {
    e.preventDefault();
    const updated = [...places, newPlace];
    setPlaces(updated);
    localStorage.setItem("allPlaces", JSON.stringify(updated));
    setNewPlace({ name: "", country: "", description: "", image: "" });
  };

  return (
    <div className="admin-page">
      <h2>Manage Places</h2>

      <form onSubmit={handleAddPlace} className="admin-form">
        <input
          type="text"
          placeholder="Place Name"
          value={newPlace.name}
          onChange={(e) =>
            setNewPlace({ ...newPlace, name: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="Country"
          value={newPlace.country}
          onChange={(e) =>
            setNewPlace({ ...newPlace, country: e.target.value })
          }
          required
        />
        <textarea
          placeholder="Description"
          value={newPlace.description}
          onChange={(e) =>
            setNewPlace({ ...newPlace, description: e.target.value })
          }
          required
        />
        <input type="file" accept="image/*" onChange={handleImageUpload} required />
        <button type="submit">Add Place</button>
      </form>

      <h3>Existing Places</h3>
      <table border="1" className="admin-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Country</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {places.map((place, i) => (
            <tr key={i}>
              <td>
                <img src={place.image} alt={place.name} width="60" />
              </td>
              <td>{place.name}</td>
              <td>{place.country}</td>
              <td>{place.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlacesAdmin;
