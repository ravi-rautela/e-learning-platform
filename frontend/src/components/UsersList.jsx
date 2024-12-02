import React, { useEffect, useState } from "react";
import API from "../utils/api";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await API.get("/admin/users");
        console.log(data);
        setUsers(data);
      } catch (err) {
        setMessage("Error fetching users");
        console.error("Error fetching users", err);
      }
    };
    fetchUsers();
  }, []);

  const handleRoleChange = async (userId, newRole) => {
    try {
      await API.patch("/users/role", { userId, newRole });
      setUsers(
        users.map((user) =>
          user._id === userId ? { ...user, role: newRole } : user
        )
      );
    } catch (err) {
      setMessage("Error updating user role");
      console.error("Error updating user role", err);
    }
  };

  const handleDelete = async (userId) => {
    try {
      await API.delete(`/users/${userId}`);
      setUsers(users.filter((user) => user._id !== userId));
    } catch (err) {
      setMessage("Error deleting user");
      console.error("Error deleting user", err);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Manage Users</h1>
      {message && <p className="text-red-500">{message}</p>}
      <table className="min-w-full bg-white rounded shadow-md">
        <thead>
          <tr>
            <th className="border-b p-2">Name</th>
            <th className="border-b p-2">Email</th>
            <th className="border-b p-2">Role</th>
            <th className="border-b p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          
          {users.map((user) => (
            <tr key={user._id}>
              <td className="border-b p-2">{user.name}</td>
              <td className="border-b p-2">{user.email}</td>
              <td className="border-b p-2">
                <select
                  value={user.role}
                  onChange={(e) => handleRoleChange(user._id, e.target.value)}
                  className="border rounded p-1"
                >
                  <option value="Student">Student</option>
                  <option value="Instructor">Instructor</option>
                  <option value="Admin">Admin</option>
                </select>
              </td>
              <td className="border-b p-2">
                <button
                  onClick={() => handleDelete(user._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
