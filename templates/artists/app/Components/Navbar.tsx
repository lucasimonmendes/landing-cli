import React from "react";
import { useState } from "react";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className="fixed w-full bg-white bg-opacity-90 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-semibold">ArtistryElite</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={() => scrollToSection("home")}
                className="px-3 py-2 rounded-md text-sm font-medium hover:text-gray-600 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("artists")}
                className="px-3 py-2 rounded-md text-sm font-medium hover:text-gray-600 transition-colors"
              >
                Artists
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="px-3 py-2 rounded-md text-sm font-medium hover:text-gray-600 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="px-3 py-2 rounded-md text-sm font-medium hover:text-gray-600 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-3 py-2 rounded-md text-sm font-medium hover:text-gray-600 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <motion.div
        className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <button
            onClick={() => scrollToSection("home")}
            className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-600 transition-colors w-full text-left"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("artists")}
            className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-600 transition-colors w-full text-left"
          >
            Artists
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-600 transition-colors w-full text-left"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-600 transition-colors w-full text-left"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-600 transition-colors w-full text-left"
          >
            Contact
          </button>
        </div>
      </motion.div>
    </nav>
  );
}

export default Navbar;
