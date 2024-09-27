import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/images/logo-no-background-128x80.webp";
import search from "./assets/images/icons8-search-50.png";
import "./Nav and footer style/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav>
        <div className={`navbar ${isSticky ? "sticky" : ""}`}>
          <Link to="/" className="logo">
            <img src={logo} alt="Logo" />
          </Link>

          <button className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <i className="fas fa-times"></i>
            ) : (
              <i className="fas fa-bars"></i>
            )}
          </button>

          <ul
            className={menuOpen ? "nav-links-menu" : "nav-links"}
            onClick={() => setMenuOpen(false)}
          >
            <Link to="/" className="home">
              Home
            </Link>

            <Link to="/about-us" className="aboutus">
              About Us
            </Link>

            <Link to="/members" className="members">
              About Art Club
            </Link>

            <Link to="/events" className="events">
              Attend Event
            </Link>

            <Link to="/login" className="login-btn">
              Login
            </Link>
          </ul>

          <div className="search-box">
            <input type="text" placeholder="search" />
            <img src={search} alt="searchicon" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
