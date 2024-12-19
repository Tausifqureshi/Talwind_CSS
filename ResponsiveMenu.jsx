import React, { useState } from "react";
import "./ResponsiveMenu.css"; // Styling ke liye

const ResponsiveMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Menu toggle handler
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="menu-container">
      {/* Hamburger Icon */}
      <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? "✖" : "☰"}
      </button>

      {/* Menu */}
      <nav className={`menu ${isMenuOpen ? "open" : "closed"}`}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default ResponsiveMenu;
