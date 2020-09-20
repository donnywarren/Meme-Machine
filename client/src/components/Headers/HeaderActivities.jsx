import React from "react";
import { Link } from "react-router-dom";
import "./HeaderActivities.css";

export default function HeaderActivities(props) {
  const { currentUser } = props;

  return (
    <header>
      <h1>MEME MACHINE</h1>
      <button onClick={props.handleLogout}>logout</button>
      <Link to="/main/userhome">
        <button>home</button>
      </Link>
    </header>
  );
}
