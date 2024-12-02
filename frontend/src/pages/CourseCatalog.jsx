import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CourseCatalog = () => {
  const [courses, setCourses] = useState([]); // Initially set as empty array
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const { data } = await axios.get("/api/courses");

        // Check if the data is an array and set courses accordingly
        if (Array.isArray(data)) {
          setCourses(data);
        } else {
          console.error("API response is not an array:", data);
          setCourses([]); // If not an array, set to empty array
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
        setCourses([]); // Handle error by setting courses to an empty array
      }
    };

    fetchCourses();
  }, []);

  // Filter the courses based on the search term
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Course Catalog</h1>
      <input
        type="text"
        placeholder="Search courses..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-4 border px-3 py-2 rounded"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCourses.map((course) => (
          <div key={course._id} className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-bold mb-2">{course.title}</h3>
            <p className="text-gray-600 mb-2">{course.description}</p>
            <Link
              to={`/courses/${course._id}`}
              className="text-blue-500 hover:underline"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCatalog;
