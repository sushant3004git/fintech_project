import { Link } from "react-router-dom";
import "../NavBar.css";
import React from "react";

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">NeoPay</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/wallet">Wallet</Link></li>
        <li><Link to="/transactions">Transactions</Link></li>
        <li><Link to="/payments">Payments</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/login" className="login-btn">Login</Link></li>
        <li><Link to="/signup" className="signup-btn">Sign Up</Link></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
