// src/pages/Admin/Dashboard.js
import React, { useEffect, useState } from "react";
import DashboardCard from "../../components/DashboardCard/DashboardCard";
import "./Dashboard.css"; // style as you like

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchUsers();
    fetchBookings();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth");
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchBookings = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/bookings");
      const data = await res.json();
      setBookings(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <div className="dashboard-row">
        <DashboardCard title="Viewers" value="85%" />
        <DashboardCard title="Avg Speed" value="72%" />
        <DashboardCard title="Avg Count" value="64%" />
        <DashboardCard title="Revenue" value="90%" />
      </div>

      <section>
        <h3>Registered Users</h3>
        <table className="simple-table">
          <thead>
            <tr><th>Email</th><th>Name</th><th>Joined</th></tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u._id}>
                <td>{u.email}</td>
                <td>{u.name || "-"}</td>
                <td>{new Date(u.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section>
        <h3>Bookings</h3>
        <table className="simple-table">
          <thead>
            <tr><th>User Email</th><th>Package</th><th>Date</th><th>People</th><th>Price</th></tr>
          </thead>
          <tbody>
            {bookings.map((b) => (
              <tr key={b._id}>
                <td>{b.user ? b.user.email : b.userEmail}</td>
                <td>{b.destination || b.packageId}</td>
                <td>{b.date ? new Date(b.date).toLocaleDateString() : "-"}</td>
                <td>{b.people}</td>
                <td>{b.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default AdminDashboard;
