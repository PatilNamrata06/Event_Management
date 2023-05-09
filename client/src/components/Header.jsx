import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  var user = 1;

  return (
    <nav>
      <div className="navbar">
        <div className="nav-item">
          <button className="nav-btn">All Events</button>
          <button className="nav-btn">My Event</button>
        </div>
        <div>
          {user === null ? (
            <Link to="/Auth" className="nav-links">
              Log in
            </Link>
          ) : (
            <>
              <button className="nav-links">log out</button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
