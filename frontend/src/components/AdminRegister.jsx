import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../utils/api";

const AdminRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const { data } = await API.post("/auth/register", {
        name,
        email,
        password,
        role: "Admin", // Set the role as "Admin"
      });

      setMessage("Admin registered successfully!");
      navigate("/login"); // Redirect to login page
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setMessage(err.response.data.message);
      } else {
        setMessage("An error occurred. Please try again.");
      }
      console.error("Error registering Admin:", err);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <form
        onSubmit={handleRegister}
        className="max-w-md mx-auto bg-white p-6 rounded shadow-md"
      >
        <h1 className="text-2xl font-bold mb-4">Admin Registration</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Register as Admin
        </button>
      </form>
      {message && (
        <p className="text-center text-red-500 font-bold">{message}</p>
      )}
    </div>
  );
};

export default AdminRegister;
