import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../utils/api"; // Import the API utility

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Ensure the correct endpoint is used (/api/auth/login)
      const { data } = await API.post("/auth/login", { email, password });

      // Save user data and token to localStorage
      localStorage.setItem("user", JSON.stringify(data)); // Save user info and token
      setUser(data); // Set the user in state

      navigate("/dashboard"); // Redirect to dashboard
    } catch (err) {
      // Handle errors
      if (err.response && err.response.data && err.response.data.message) {
        setMessage(err.response.data.message);
      } else {
        setMessage("An error occurred. Please try again later.");
      }
      console.error("Error logging in:", err);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <form
        onSubmit={handleLogin}
        className="max-w-md mx-auto bg-white p-6 rounded shadow-md"
      >
        <h1 className="text-2xl font-bold mb-4">Login</h1>
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
          Login
        </button>
      </form>
      {message && (
        <p className="text-center text-red-500 font-bold">{message}</p>
      )}
    </div>
  );
};

export default Login;
