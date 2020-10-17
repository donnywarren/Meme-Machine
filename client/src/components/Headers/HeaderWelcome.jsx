import React from "react";
import { Link } from "react-router-dom";
import "./HeaderWelcome.css";

export default function HeaderWelcome() {
  return (
    <header className="header-welcome">
      <div className="hero-container">
        <h1 className="welcome-h1">MEME MACHINE</h1>
        <h3 className="welcome-h3">Welcome to the Meme Machine</h3>
        <h4 className="welcome-h4">
          A playground for creating and saving memes
        </h4>
      </div>
      <div className="btn-container">
        <Link to="/login">
          <button className="btn login-btn">LOGIN</button>
        </Link>
        <Link to="/register">
          <button className="btn register-btn">REGISTER</button>
        </Link>
      </div>
    </header>
  );
}
