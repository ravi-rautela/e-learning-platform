import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../utils/api"; // Import API utility

const CoursePage = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Fetch course details from API
  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const { data } = await API.get(`/courses/${courseId}`);
        setCourse(data);
      } catch (err) {
        setMessage("Error fetching course details");
        console.error("Error fetching course details:", err);
      }
    };

    fetchCourseDetails();
  }, [courseId]);

  const handleEnroll = async () => {
    try {
      await API.post(`/courses/${courseId}/enroll`);
      setMessage("Successfully enrolled in the course!");
      setTimeout(() => navigate("/dashboard"), 2000); // Redirect to dashboard after enrollment
    } catch (err) {
      setMessage("Failed to enroll. Please try again.");
      console.error("Error enrolling in course:", err);
    }
  };

  return (
    <div className="container mx-auto p-4">
      {message && (
        <p className="text-center text-green-500 font-bold">{message}</p>
      )}

      {course ? (
        <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow-md">
          <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
          <p className="text-lg mb-4">{course.description}</p>
          <div className="mb-4">
            <h3 className="font-semibold">
              Instructor: {course.instructor.name}
            </h3>
          </div>
          <div className="text-center">
            <button
              onClick={handleEnroll}
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
            >
              Enroll Now
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <p>Loading course details...</p>
        </div>
      )}
    </div>
  );
};

export default CoursePage;
