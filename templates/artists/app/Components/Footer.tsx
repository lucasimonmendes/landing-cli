import React from "react";

import { useState } from "react";
function Footer() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };
  return (
    <footer className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-semibold">ArtistryElite</span>
          </div>
          <div className="flex space-x-6">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} ArtistryElite. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
