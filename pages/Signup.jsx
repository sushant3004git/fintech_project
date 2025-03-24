import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="signup-container">
      <h2>Sign Up for NeoPay</h2>
      <form>
        <input type="text" placeholder="Enter your name" required />
        <input type="email" placeholder="Enter your email" required />
        <input type="password" placeholder="Create a password" required />
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <a href="/login">Login</a></p>
    </div>
  );
};

export default Signup;
