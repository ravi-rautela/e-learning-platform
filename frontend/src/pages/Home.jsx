import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const { data } = await axios.get("/api/courses");

        // Ensure data is an array
        if (Array.isArray(data)) {
          setCourses(data);
        } else {
          console.error("Expected an array of courses, but got:", data);
          setCourses([]); // Fallback to empty array in case of error
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
        setCourses([]); // Fallback to empty array on error
      }
    };

    fetchCourses();
  }, []);

  // Filter courses based on search input
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-100 ">
      {/* Hero Section with gradient background */}
      <section className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen flex items-center justify-center text-center text-white ">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold mb-4 animate__animated animate__fadeIn animate__delay-1s">
            Welcome to Our E-Learning Platform
          </h1>
          <p className="text-xl mb-6 animate__animated animate__fadeIn animate__delay-1s">
            Learn new skills and advance your career with our diverse range of
            online courses.
          </p>
          <input
            type="text"
            placeholder="Search for courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-1/2 p-3 rounded-lg border-2 border-white text-black placeholder:text-gray-500"
          />
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-6 animate__animated animate__fadeIn">
          Featured Courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <div
                key={course._id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl"
              >
                <div className="bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 h-48 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">
                    {course.title}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4">
                    {course.description}
                  </p>
                  <Link
                    to={`/courses/${course._id}`}
                    className="text-blue-600 hover:underline"
                  >
                    View Course Details
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No courses found.
            </p>
          )}
        </div>
      </section>

      {/* Call to Action Section with vibrant background */}
      <section className="bg-gradient-to-r from-yellow-400 to-red-500 text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4 animate__animated animate__fadeIn animate__delay-2s">
          Ready to Get Started?
        </h2>
        <p className="text-lg mb-6 animate__animated animate__fadeIn animate__delay-2s">
          Sign up today and start learning new skills at your own pace.
        </p>
        <Link
          to="/register"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Sign Up Now
        </Link>
      </section>
    </div>
  );
};

export default Home;
