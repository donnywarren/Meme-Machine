import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./UserHomeScreen.css";

export default function UserHome(props) {
  const { currentUser, memes, texts, images } = props;
  const [memeData, setMemeData] = useState();

  if (currentUser && texts[0]) {
    const { id } = currentUser;

    const userMemes = memes.filter((meme) => {
      return meme.user_id === id;
    });

    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   postImage(formData);
    //   setFormData({ img_url: "" });
    // };

    return (
      <div>
        <div>
          <h3>{currentUser.username}'s Meme Gallery</h3>
          <Link to="/main/images">
            <button>create new meme </button>
          </Link>
        </div>
        <div>
          {!userMemes[0] ? (
            <h1>Time to make some memes!</h1>
          ) : (
            <div className="user-meme-complete-container">
              {memes.map((meme) => {
                return (
                  <div key={meme.id} className="user-meme-card">
                    <div className="user-meme-container">
                      <img src={meme.image.img_url} alt={meme.image.name} />
                      <p className="user-meme-text">{meme.text.content}</p>
                    </div>
                    <Link
                      to={`/main/generator/${meme.image.id}/${meme.text.id}`}
                    >
                      <button>edit</button>
                    </Link>
                    <button>delete</button>
                  </div>
                );
              })}
            </div>
          )}
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
