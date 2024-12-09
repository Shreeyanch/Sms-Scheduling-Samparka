"use client";
import { useState } from "react";


const Navbar = () => {
  // State to manage mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-green-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-semibold">Samparka logo</div>

        {/* Mobile Menu Button (Hamburger Icon) */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu (Hidden on small screens) */}
        <div className="hidden lg:flex space-x-6">
          <a href="/" className="text-white hover:text-gray-200">Home</a>
          <a href="/" className="text-white hover:text-gray-200">About</a>
          <a href="/" className="text-white hover:text-gray-200">Services</a>
          <a href="/" className="text-white hover:text-gray-200">Contact</a>
        </div>
      </div>

      {/* Mobile Menu (Visible on small screens) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-4 space-y-4">
          <a href="/" className="block text-white hover:text-gray-200">Home</a>
          <a href="/about" className="block text-white hover:text-gray-200">About</a>
          <a href="/services" className="block text-white hover:text-gray-200">Services</a>
          <a href="/contact" className="block text-white hover:text-gray-200">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
