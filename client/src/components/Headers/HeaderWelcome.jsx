import React from "react";
import { Link } from "react-router-dom";
import "./HeaderWelcome.css";

export default function HeaderWelcome() {
  return (
    <header className="header-welcome">
      <div className="hero-container">
        <h1>MEME MACHINE</h1>
        <h3 className="mobile-welcome-h3">Welcome to the Meme Machine</h3>
        <h4 className="mobile-welcome-h4">
          A playground for creating and saving meme collections
        </h4>
      </div>
      <div className="btn-container">
        <Link to="/login">
          <button className="login-btn">LOGIN</button>
        </Link>
        <Link to="/register">
          <button className="registr-btn">REGISTER</button>
        </Link>
      </div>
    </header>
  );
}
