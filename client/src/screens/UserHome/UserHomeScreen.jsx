import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "./UserHomeScreen.css";

export default function UserHome(props) {
  const { currentUser, memes, texts, images } = props;
  console.log(currentUser, memes, texts, images);

  if (currentUser && texts[0]) {
    const { id } = currentUser;

    const userMemes = memes.filter((meme) => {
      return meme.user_id === id;
    });

    // console.log(id);
    // console.log(userMemes[0].user_id);
    // console.log(userMemes[0].image_id);
    // console.log(userMemes[0].text_id);
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
            <div className="user-meme-card">
              {console.log("test")}
              {userMemes.map((meme) => {
                return (
                  <p key={meme.id}>
                    {texts.find((text) => text.id === meme.tex_id)}
                  </p>
                );
              })}
              {/* <img src={images[6].img_url} alt={images[6].name} />
              <p>{texts[0].content}</p> */}
              <button>edit</button>
              <button>delete</button>
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
