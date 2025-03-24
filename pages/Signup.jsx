import React from "react";
import { Link } from "react-router-dom";
import "../styles/Auth.css";

const Signup = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">Create an ExpressPay Account</h2>
        <form className="auth-form">
          <input type="text" placeholder="Full Name" className="auth-input" required />
          <input type="email" placeholder="Email" className="auth-input" required />
          <input type="password" placeholder="Password" className="auth-input" required />
          <button type="submit" className="auth-button">Sign Up</button>
        </form>
        <p className="auth-footer">Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
};

export default Signup;
