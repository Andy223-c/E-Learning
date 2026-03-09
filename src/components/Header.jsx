import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-600">
         Andy | E-Learning
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 font-medium text-gray-700">
          <Link to="/"className="hover:text-indigo-600 transition duration-300">Home</Link>
         <Link to="/courses"className="hover:text-indigo-600 transition duration-300">Courses</Link>
         <Link to="/about"className="hover:text-indigo-600 transition duration-300">About</Link>
         <Link to="/contact"className="hover:text-indigo-600 transition duration-300">Contact</Link>
        </nav>

        {/* Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="login-btn">
            Login
          </button>
          <button className="primary-btn">
            Sign Up
          </button>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 pb-4 space-y-4 font-medium text-gray-700">
          <a href="#" className="block hover:text-indigo-600">
            Home
          </a>
          <a href="#" className="block hover:text-indigo-600">
            Courses
          </a>
          <a href="#" className="block hover:text-indigo-600">
            About
          </a>
          <a href="#" className="block hover:text-indigo-600">
            Contact
          </a>
          <div className="flex flex-col space-y-2 pt-2">
            <button className="login-btn">
              Login
            </button>
            <button className="primary-btn">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header
