import React, { useEffect, useState } from "react";
import API from "../utils/api";

const CoursesList = () => {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({ title: "", description: "" });
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const { data } = await API.get("/api/courses");
        setCourses(data);
      } catch (err) {
        setMessage("Error fetching courses");
        console.error("Error fetching courses", err);
      }
    };
    fetchCourses();
  }, []);

  const handleCreateCourse = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post("/api/courses", newCourse);
      setCourses([...courses, data]);
      setNewCourse({ title: "", description: "" });
    } catch (err) {
      setMessage("Error creating course");
      console.error("Error creating course", err);
    }
  };

  const handleDeleteCourse = async (courseId) => {
    try {
      await API.delete(`/api/courses/${courseId}`);
      setCourses(courses.filter((course) => course._id !== courseId));
    } catch (err) {
      setMessage("Error deleting course");
      console.error("Error deleting course", err);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Manage Courses</h1>
      {message && <p className="text-red-500">{message}</p>}

      <form onSubmit={handleCreateCourse} className="mb-6">
        <input
          type="text"
          placeholder="Course Title"
          value={newCourse.title}
          onChange={(e) =>
            setNewCourse({ ...newCourse, title: e.target.value })
          }
          className="p-2 border rounded mb-2 w-full"
          required
        />
        <textarea
          placeholder="Course Description"
          value={newCourse.description}
          onChange={(e) =>
            setNewCourse({ ...newCourse, description: e.target.value })
          }
          className="p-2 border rounded mb-2 w-full"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded"
        >
          Create Course
        </button>
      </form>

      <table className="min-w-full bg-white rounded shadow-md">
        <thead>
          <tr>
            <th className="border-b p-2">Title</th>
            <th className="border-b p-2">Description</th>
            <th className="border-b p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course._id}>
              <td className="border-b p-2">{course.title}</td>
              <td className="border-b p-2">{course.description}</td>
              <td className="border-b p-2">
                <button
                  onClick={() => handleDeleteCourse(course._id)}
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

export default CoursesList;
