import React from "react";
import "./Header.css"; 
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <a href="/">LoveBite</a>
        </div>
        <nav>
          <ul className="nav-links">
            <li>
              <a href="#Me">Me</a>
            </li>
            <li>
              <a href="#You">You</a>
            </li>
            <li>
            <Link to="/Question">Question</Link> 
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
