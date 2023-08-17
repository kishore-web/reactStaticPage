import React from "react";
// import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header-bar">
      <div>
        <img src="../src/assets/brand_logo.png" alt="Brand Logo" />
      </div>
      <ul className="menu-list">
       <li>MENU</li>
        <li>LOCATION</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
      <div>
        <button className="login-btn">LOGIN</button>
      </div>
    </nav>
  );
};

export default Header;
