import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const AdminDashboard = () => {
  const navigate = useNavigate(); // Initialize navigate for routing

  // Handle navigation for each section
  const handleManageCourses = () => {
    navigate("/admin/courses");
  };

  const handleManageUsers = () => {
    navigate("/admin/users");
  };

  const handleManageInstructors = () => {
    navigate("/admin/instructors");
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-4xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Manage Courses Section */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-2">Manage Courses</h2>
          <p className="text-gray-600 mb-4">Add, update, or delete courses.</p>
          <button
            onClick={handleManageCourses}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Go
          </button>
        </div>

        {/* Manage Users Section */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-2">Manage Users</h2>
          <p className="text-gray-600 mb-4">View and manage all users.</p>
          <button
            onClick={handleManageUsers}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Go
          </button>
        </div>

        {/* Manage Instructors Section */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-2">Manage Instructors</h2>
          <p className="text-gray-600 mb-4">Approve or remove instructors.</p>
          <button
            onClick={handleManageInstructors}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Go
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
