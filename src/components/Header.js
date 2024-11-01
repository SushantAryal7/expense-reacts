// Header.js
import React from "react";
import "./Header.css"; // Import CSS for styling

const Header = () => {
  return (
    <header className="header">
      <div className="logo">My WebLink</div>
      <nav className="nav">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/private/about">About</a>
          </li>
          <li>
            <a href="/private/contactdetail">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
