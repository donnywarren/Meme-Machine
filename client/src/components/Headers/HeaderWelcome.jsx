import React from "react";
import { Link } from "react-router-dom";
import "./HeaderWelcome.css";

export default function HeaderWelcome() {
  return (
    <header className="header-welcome">
      <div className="hero-container">
        <h1>MEME MACHINE</h1>
        <h3>Welcome to the Meme Machine</h3>
        <h4>A playground for creating and saving meme collections</h4>
      </div>
      <div className="btn-container">
        <Link className="login-btn" to="/login">
          <button>LOGIN</button>
        </Link>
        <Link className="registr-btn" to="/register">
          <button>REGISTER</button>
        </Link>
      </div>
    </header>
  );
}
