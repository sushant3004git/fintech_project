import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        ExpressPay
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </nav>
  );
};

export default NavigationBar;
