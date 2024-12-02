import React, { useState, useEffect } from "react";
import axios from "axios";

const Profile = ({ user }) => {
  const [profileData, setProfileData] = useState({
    name: user?.name || "",
    email: user?.email || "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(`/api/users/profile`, profileData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSuccessMessage("Profile updated successfully!");
    } catch (error) {
      console.error("Failed to update profile:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow p-6 rounded">
      <h2 className="text-2xl font-bold mb-4">Your Profile</h2>
      <div className="mb-4">
        <label className="block font-medium">Name</label>
        <input
          type="text"
          name="name"
          value={profileData.name}
          onChange={handleInputChange}
          className="w-full border px-3 py-2 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={profileData.email}
          onChange={handleInputChange}
          className="w-full border px-3 py-2 rounded"
          disabled
        />
      </div>
      {successMessage && <p className="text-green-500">{successMessage}</p>}
      <button
        onClick={handleSave}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Save Changes
      </button>
    </div>
  );
};

export default Profile;
