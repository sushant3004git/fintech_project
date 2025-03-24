import React from "react";
import "./Auth.css";

const Login = () => {
  return (
    <div className="auth-container">
      <h2>Login to NeoPay</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
    </div>
  );
};

export default Login;
