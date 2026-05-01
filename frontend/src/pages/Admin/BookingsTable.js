// src/pages/Admin/BookingsTable.js
import React from "react";

const BookingsTable = () => {
  const bookings = [
    { id: 1, user: "John Doe", package: "Maldives Paradise", date: "2025-09-20" },
    { id: 2, user: "Jane Smith", package: "Alpine Adventure", date: "2025-09-22" },
  ];

  return (
    <table className="admin-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>User</th>
          <th>Package</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {bookings.map((b) => (
          <tr key={b.id}>
            <td>{b.id}</td>
            <td>{b.user}</td>
            <td>{b.package}</td>
            <td>{b.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BookingsTable;
