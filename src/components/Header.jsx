import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthModal from "./AuthModal";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState("login"); // login or signup

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-indigo-600">
            Andy | E-Learning
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 font-medium text-gray-900">
            <Link to="/" className="hover-cls">
              Home
            </Link>
            <Link to="/courses" className="hover-cls">
              Courses
            </Link>
            <Link to="/about" className="hover-cls">
              About
            </Link>
            <Link to="/contact" className="hover-cls">
              Contact
            </Link>
          </nav>

          {/* Buttons */}
          <div className="hidden md:flex space-x-4">
            {/* Login */}
            <button
              onClick={() => {
                setAuthMode("login");
                setShowAuth(true);
              }}
              className="login-btn"
            >
              Login
            </button>

            {/* Signup */}
            <button
              onClick={() => {
                setAuthMode("signup");
                setShowAuth(true);
              }}
              className="primary-btn"
            >
              Sign Up
            </button>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </div>
      </header>

      {/* Modal */}
      {showAuth && (
        <AuthModal mode={authMode} close={() => setShowAuth(false)} />
      )}
    </>
  );
}

export default Header;
