// src/pages/Admin/UsersTable.js
import React from "react";

const UsersTable = () => {
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", joined: "2025-09-12" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", joined: "2025-09-14" },
  ];

  return (
    <table className="admin-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Joined</th>
        </tr>
      </thead>
      <tbody>
        {users.map((u) => (
          <tr key={u.id}>
            <td>{u.id}</td>
            <td>{u.name}</td>
            <td>{u.email}</td>
            <td>{u.joined}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;
