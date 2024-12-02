import React from "react";
import { Link } from "react-router-dom";

const Header = ({ user, logout }) => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/">E-Learning Platform</Link>
        </h1>
        <nav className="flex space-x-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          {!user && (
            <Link to="/login" className="hover:underline">
              Login
            </Link>
          )}
          {!user && (
            <Link to="/register" className="hover:underline">
              Register
            </Link>
          )}
          {user && (
            <>
              <Link to="/dashboard" className="hover:underline">
                {user.role} Dashboard
              </Link>
              <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
              >
                Logout
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
