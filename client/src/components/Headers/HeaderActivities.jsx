import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./HeaderActivities.css";

export default function HeaderActivities(props) {
  const [topBar, updateTopBar] = useState("")
  const [middleBar, updateMiddleBar] = useState("")
  const [bottomBar, updateBottomBar] = useState("")
  const [content, updateContent] = useState("")
  

  const handleClick = (e) => {
    if (topBar !== "top-clicked") {
      updateTopBar("top-clicked")
      updateMiddleBar("middle-clicked")
      updateBottomBar("bottom-clicked")
      updateContent("hamburger-content-clicked")
    } else {
      updateTopBar("")
      updateMiddleBar("")
      updateBottomBar("")
      updateContent("")
    }
  }

  return (
    <header className="header-activities">
      <h1 className="header-h1">MEME MACHINE</h1>
      <div className="header-activities-btn-box">
        <button className="btn logout-button" onClick={props.handleLogout}>
          LOGOUT
        </button>
        <Link to="/main/userhome">
          <button className="btn home-button">HOME</button>
        </Link>
      </div>
      <div className="header-activities-hamburger-position">
        <div className="header-activities-hamburger-container" onClick={handleClick}>
          <div className="header-activities-hamburger">
            <div className={`hamburger-bar ${topBar}`}></div>
            <div className={`hamburger-bar ${middleBar}`}></div>
            <div className={`hamburger-bar ${bottomBar}`}></div>
          </div>
          <div className={`header-activities-hamburger-content ${content}`}>
            <Link to="/main/userhome">
              <button className="btn hamburger-home-button">HOME</button>
            </Link>
            <button
              className="btn hamburger-logout-button"
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
