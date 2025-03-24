import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <section className="intro">
        <h1>Welcome to NeoPay</h1>
        <p>Your secure and fast digital payment wallet.</p>
        <a href="/signup" className="get-started-btn">Get Started</a>
      </section>

      <section className="features">
        <div className="feature-box">
          <h3>Fast Transactions</h3>
          <p>Send and receive money instantly.</p>
        </div>
        <div className="feature-box">
          <h3>Secure Payments</h3>
          <p>End-to-end encrypted for your safety.</p>
        </div>
        <div className="feature-box">
          <h3>Multi-Payment Options</h3>
          <p>Use UPI, Cards, and Wallets with ease.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
