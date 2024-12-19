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



// 
// .menu-container {
//   position: relative;
// }

// .menu-toggle {
//   background: none;
//   border: none;
//   font-size: 24px;
//   cursor: pointer;
// }

// .menu {
//   position: absolute;
//   top: 50px;
//   right: 0;
//   background-color: #333;
//   color: white;
//   padding: 10px 20px;
//   border-radius: 5px;
//   display: none;
//   flex-direction: column;
// }

// .menu.open {
//   display: flex;
// }

// .menu.closed {
//   display: none;
// }

// .menu ul {
//   list-style: none;
//   padding: 0;
//   margin: 0;
// }

// .menu ul li {
//   margin: 10px 0;
// }

// .menu ul li a {
//   color: white;
//   text-decoration: none;
// }

// @media (min-width: 768px) {
//   .menu {
//     display: flex !important;
//     position: static;
//     flex-direction: row;
//     background: none;
//     color: black;
//   }
//   .menu ul li {
//     margin: 0 15px;
//   }
// }

// 