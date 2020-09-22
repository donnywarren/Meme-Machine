import React from "react";
import { Link } from "react-router-dom";
import "./HeaderWelcome.css";

export default function HeaderWelcome() {
  return (
    <header className="header-welcome">
      <div>
        <h1>MEME MACHINE</h1>
        <h3>Welcome to the Meme Machine</h3>
        <p>A playground for creating and saving meme collections</p>
      </div>
      <div>
        <Link to="/login">
          <button>LOGIN</button>
        </Link>
        <Link to="/register">
          <button>REGISTER</button>
        </Link>
      </div>
    </header>
  );
}
