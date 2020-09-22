import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./UserHomeScreen.css";

export default function UserHome(props) {
  const { currentUser, memes, texts, images, deleteMeme } = props;
  const [memeData, setMemeData] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [memes]);
  console.log(memes.length);
  if (currentUser && texts[0] && memes.length) {
    const { id } = currentUser;

    const userMemes = memes.filter((meme) => {
      return meme.user_id === id;
    });
    console.log(userMemes);
    const reverseUserMemes = userMemes.reverse();

    return (
      <>
        <div className="background-green"></div>
        <div className="userhome-container-complete">
          <div>
            <h3>{currentUser.username}'s MEME GALLERY</h3>
          </div>
          <div>
            {!userMemes[0] ? (
              <div>
                <h1 className="get-started-msg">Time to make some memes!</h1>
                <Link to="/main/images">
                  <button className="get-started-btn">
                    CLICK HERE TO GET STARTED
                  </button>
                </Link>
              </div>
            ) : (
              <div className="user-meme-complete-container">
                {reverseUserMemes.map((meme) => {
                  console.log(meme);
                  return (
                    <div key={meme.id} className="user-meme-card">
                      <div className="user-meme-img-container">
                        <img src={meme.image.img_url} alt={meme.image.ame} />
                        <p className="user-meme-text">{meme.text.content}</p>
                      </div>
                      <div className="user-meme-btn-box">
                        <Link to="/main/images">
                          <button className="user-meme-create-new">NEW</button>
                        </Link>
                        <Link
                          to={`/main/editor/${meme.image.id}/${meme.text.id}/${meme.id}`}
                        >
                          <button className="user-meme-edit">EDIT</button>
                        </Link>
                        <button
                          className="user-meme-delete"
                          onClick={() => deleteMeme(meme.id)}
                        >
                          DELETE
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="background-green">
        <h1>Loading your sweet dank memes...</h1>
      </div>
    );
  }
}
