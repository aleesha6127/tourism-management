// src/components/DashboardCard/DashboardCard.js
import React from "react";
import "./DashboardCard.css";

const DashboardCard = ({ title, value }) => {
  return (
    <div className="dashboard-card">
      <h4>{title}</h4>
      <p>{value}</p>
    </div>
  );
};

export default DashboardCard;
