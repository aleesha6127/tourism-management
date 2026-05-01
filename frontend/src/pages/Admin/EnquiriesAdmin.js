// src/pages/Admin/EnquiriesAdmin.js
import React, { useState } from "react";

const AdminEnquiry = () => {
  const [enquiries] = useState([
    { name: "John Doe", email: "john@example.com", message: "I need a custom trip." },
    { name: "Jane Smith", email: "jane@example.com", message: "Do you offer group discounts?" },
  ]);

  return (
    <div className="admin-section">
      <h2>Enquiries</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {enquiries.map((e, i) => (
            <tr key={i}>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>{e.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminEnquiry;
