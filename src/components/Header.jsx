import React from "react";
import "./Header.css"; 
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <a href="/"><img className="favicon"src="./favicon.ico"/></a>
          <a href="/"> LoveBite</a>
        </div>
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/">Me</Link>
            </li>
            <li>
              <Link to="/">You</Link>
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
