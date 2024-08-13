// import React from "react";
import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Amazon</div>
      <div className="menu">
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>Deals</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="search">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
      <div className="account">
        <button>Account</button>
      </div>
    </nav>
  );
};

export default NavigationBar;
