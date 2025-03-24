import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-title">Welcome to ExpressPay</h1>
        <p className="hero-description">
          Your all-in-one digital payment wallet for secure and seamless transactions.
        </p>
        <Link to="/signup">
          <button className="get-started-btn">Get Started</button>
        </Link>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <div className="feature-card">
          <span className="feature-icon">💳</span>
          <h3 className="feature-title">Easy Payments</h3>
          <p>Pay bills, recharge, and shop securely with one click.</p>
        </div>

        <div className="feature-card">
          <span className="feature-icon">🔒</span>
          <h3 className="feature-title">Secure Transactions</h3>
          <p>Advanced encryption keeps your money safe.</p>
        </div>

        <div className="feature-card">
          <span className="feature-icon">📊</span>
          <h3 className="feature-title">Smart Analytics</h3>
          <p>Track your expenses and manage finances effortlessly.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
