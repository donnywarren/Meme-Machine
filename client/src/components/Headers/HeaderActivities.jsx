import React from "react";
import { Link } from "react-router-dom";
import "./HeaderActivities.css";

export default function HeaderActivities(props) {
  const { currentUser } = props;

  return (
    <header className="header-activities">
      <h1 className="header-h1">MEME MACHINE</h1>
      <div className="header-activities-btn-box">
        <button className="logout-button" onClick={props.handleLogout}>
          LOGOUT
        </button>
        <Link to="/main/userhome">
          <button className="home-button">HOME</button>
        </Link>
      </div>
    </header>
  );
}
