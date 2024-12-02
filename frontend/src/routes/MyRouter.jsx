import React from "react";
import AdminRegister from "../components/AdminRegister";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/Home";
import Login from "../pages/Login";
import CoursePage from "../pages/CoursePage";
import Profile from "../pages/Profile";
import CourseCatalog from "../pages/CourseCatalog";
import Register from "../pages/Register";
import AdminDashboard from "../pages/AdminDashboard";
import InstructorDashboard from "../pages/InstructorDashboard";
import StudentDashboard from "../pages/StudentDashboard";
import UsersList from "../components/UsersList";
import CoursesList from "../components/CoursesList";
import InstructorsList from "../components/InstructorsList";

const MyRouter = ({ user, setUser }) => {
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <Router>
      <Header user={user} logout={logout} />
      <main className="container mx-auto p-4">
        <Routes>
          {/* Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/courses/:id" element={<CoursePage />} />

          {/* Admin Routes */}
          <Route path="/admin/register" element={<AdminRegister />} />
          <Route path="/admin/users" element={<UsersList />} />
          <Route path="/admin/courses" element={<CoursesList />} />
          <Route path="/admin/instructors" element={<InstructorsList />} />
          
{/* Profile Routes */}
          <Route
            path="/profile"
            element={user ? <Profile user={user} /> : <Navigate to="/login" />}
          />
          <Route path="/courses" element={<CourseCatalog />} />

          <Route
            path="/dashboard"
            element={
              user ? (
                user.role === "Admin" ? (
                  <AdminDashboard />
                ) : user.role === "Instructor" ? (
                  <InstructorDashboard />
                ) : (
                  <StudentDashboard />
                )
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/courses/:courseId"
            element={user ? <CoursePage /> : <Navigate to="/login" />}
          />
          <Route path="*" element={<h1>404: Page Not Found</h1>} />
        </Routes>
      </main>
    </Router>
  );
};

export default MyRouter;
