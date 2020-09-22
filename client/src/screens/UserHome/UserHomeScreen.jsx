import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./UserHomeScreen.css";

export default function UserHome(props) {
  const { currentUser, memes, texts, images, deleteMeme } = props;
  const [memeData, setMemeData] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (currentUser && texts[0]) {
    const { id } = currentUser;

    const userMemes = memes.filter((meme) => {
      return meme.user_id === id;
    });
    console.log(userMemes);
    const reverseUserMemes = userMemes.reverse();

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
              {reverseUserMemes.map((meme) => {
                return (
                  <div key={meme.id} className="user-meme-card">
                    <div className="user-meme-container">
                      <img src={meme.image.img_url} alt={meme.image.name} />
                      <p className="user-meme-text">{meme.text.content}</p>
                    </div>
                    <Link
                      to={`/main/editor/${meme.image.id}/${meme.text.id}/${meme.id}`}
                    >
                      <button>edit</button>
                    </Link>
                    <button onClick={() => deleteMeme(meme.id)}>delete</button>
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
