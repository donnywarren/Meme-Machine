import React from "react";
import { Link } from "react-router-dom";
import "./HeaderActivities.css";

const handleReload = () => {
  window.loctiaon.reload(false);
};

export default function HeaderActivities(props) {
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
      <div className="header-activities-hamburger-position">
        <div className="header-activities-hamburger-container">
          <div className="header-activities-hamburger">
            <div className="header-activities-hamburger-bar"></div>
            <div className="header-activities-hamburger-bar"></div>
            <div className="header-activities-hamburger-bar"></div>
          </div>
          <div className="header-activities-hamburger-content">
            <Link to="/main/userhome">
              <button onClick={handleReload} className="hamburger-home-button">
                HOME
              </button>
            </Link>
            <button
              className="hamburger-logout-button"
              onClick={props.handleLogout}
            >
              LOGOUT
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
