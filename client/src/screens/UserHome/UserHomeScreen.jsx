import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "./UserHomeScreen.css";

export default function UserHome(props) {
  const { currentUser, memes, texts, deleteMeme } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [memes]);

  if (currentUser && texts[0] && memes.length) {
    const { id } = currentUser;

    const userMemes = memes.filter((meme) => {
      return meme.user_id === id;
    });

    const reverseUserMemes = userMemes.reverse();

    const sendText = (content) => {
      localStorage.setItem("content", content);
    };

    return (
      <>
        <div className="background-green"></div>
        <div className="userhome-container-complete">
          <div className="userhome-title-box">
            <h3 className="userhome-title">
              {currentUser.username.toUpperCase()}'s MEME GALLERY
            </h3>
          </div>
          <div>
            {!userMemes[0] ? (
              <div>
                <h3 className="get-started-msg">Time to make some memes!</h3>
                <Link to="/main/images">
                  <button id="get-started-btn" className="btn get-started-btn">
                    CLICK HERE TO GET STARTED
                  </button>
                </Link>
              </div>
            ) : (
              <div className="user-meme-complete-container">
                {reverseUserMemes.map((meme) => {
                  return (
                    <div key={meme.id} className="user-meme-card">
                      <div className="user-meme-img-container">
                        <img src={meme.image.img_url} alt={meme.image.ame} />
                        <p className="user-meme-text">{meme.text.content}</p>
                      </div>
                      <div className="user-meme-btn-box">
                        <Link to="/main/images">
                          <button className="btn user-meme-create-new">NEW</button>
                        </Link>
                        <Link
                          onClick={() => sendText(meme.text.content)}
                          to={`/main/editor/${meme.image.id}/${meme.text.id}/${meme.id}`}
                        >
                          <button className="btn user-meme-edit">EDIT</button>
                        </Link>
                        <button
                          className="btn user-meme-delete"
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
        <h3>Loading your sweet dank memes...</h3>
      </div>
    );
  }
}
