// src/pages/Admin/AdminLayout.js
import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Admin.css";

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li><Link to="/admin/dashboard">Dashboard</Link></li>
          <li><Link to="/admin/packages">Packages</Link></li>
          <li><Link to="/admin/places">Places</Link></li>
          <li><Link to="/admin/enquiry">Enquiries</Link></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
