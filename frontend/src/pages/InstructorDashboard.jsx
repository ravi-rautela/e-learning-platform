import React from "react";

const InstructorDashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-4xl font-bold mb-6">Instructor Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-2">My Courses</h2>
          <p className="text-gray-600 mb-4">
            View and manage the courses you created.
          </p>
          <button className="px-4 py-2 bg-green-500 text-white rounded">
            Go
          </button>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-2">Student Progress</h2>
          <p className="text-gray-600 mb-4">
            Track progress of students in your courses.
          </p>
          <button className="px-4 py-2 bg-green-500 text-white rounded">
            Go
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstructorDashboard;
