import React, { useState, useEffect } from "react";
import API from "../utils/api";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ user }) => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch user's enrolled courses
  useEffect(() => {
    const fetchEnrolledCourses = async () => {
      try {
        const { data } = await API.get("/users/enrolled-courses");
        setEnrolledCourses(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching enrolled courses:", err);
        setLoading(false);
      }
    };
    if (user) {
      fetchEnrolledCourses();
    } else {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white p-6 rounded shadow-md mb-6">
        <h1 className="text-3xl font-bold mb-4">
          Welcome, {user ? user.name : "User"}!
        </h1>
        <p className="text-lg mb-4">
          Email: {user ? user.email : "Not Available"}
        </p>
        <p className="text-lg mb-4">Role: {user ? user.role : "User"}</p>
      </div>

      <h2 className="text-2xl font-bold mb-4">Your Enrolled Courses</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {enrolledCourses.length > 0 ? (
            enrolledCourses.map((course) => (
              <div key={course._id} className="bg-white p-4 rounded shadow">
                <h3 className="text-xl font-semibold">{course.title}</h3>
                <p className="text-gray-600">{course.description}</p>
              </div>
            ))
          ) : (
            <p>
              No courses enrolled yet. Browse the catalog to enroll in courses.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
