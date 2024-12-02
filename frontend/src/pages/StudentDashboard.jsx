import React from "react";

const StudentDashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-4xl font-bold mb-6">Student Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-2">My Enrolled Courses</h2>
          <p className="text-gray-600 mb-4">
            Access the courses you are enrolled in.
          </p>
          <button className="px-4 py-2 bg-purple-500 text-white rounded">
            Go
          </button>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-2">Progress Tracker</h2>
          <p className="text-gray-600 mb-4">
            Monitor your course progress and completion.
          </p>
          <button className="px-4 py-2 bg-purple-500 text-white rounded">
            Go
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
