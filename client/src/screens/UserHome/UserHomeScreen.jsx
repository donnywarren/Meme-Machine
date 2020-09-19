import React from "react";
import { Link } from "react-router-dom";

import "./UserHomeScreen.css";

export default function UserHome(props) {
  const { currentUser } = props;
  console.log(props);
  console.log(currentUser);

  if (currentUser) {
    return (
      <div>
        <div>
          <h3>{currentUser.username}'s Meme Gallery</h3>
          <button>create new meme </button>
        </div>
        <div>
          <div className="user-meme-card">
            <img
              src={
                "https://images.unsplash.com/photo-1516794840430-8d8c51e7c045?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
              }
              alt=""
            />
            <button>edit</button>
            <button>delete</button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Loading your sweet dank memes...</h1>
      </div>
    );
  }
}
