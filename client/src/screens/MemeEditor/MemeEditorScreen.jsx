import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import "./MemeEditorScreen.css";

export default function MemeEditor(props) {
  const { texts, memeUpdate, images, deleteText, textSave } = props;
  const params = useParams();
  const image_id = parseInt(params.id);
  const meme_id = parseInt(params.memeId);
  const image = images.find((item) => item.id === image_id);
  const [text_id, setTextId] = useState(null);
  const [isEdited, setIsEdited] = useState(false);
  const test = localStorage.getItem("content");

  const [formData, setFormData] = useState({ content: test });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params]);

  const { content } = formData;
  const handleChange = (e) => {
    const { value } = e.target;
    setFormData({ content: value });
    setIsEdited(true);
  };

  const handleClick = (item) => {
    setTextId(item.id);
    setFormData({ content: item.content });
    setIsEdited(false);
  };
  if (texts[0] && images[0]) {
    return (
      <div className="complete-edit-screen">
        <div className="background-green"></div>
        <h3 className="editor-h3">MEME EDITOR</h3>
        <h4 className="editor-h4">SCROLL DOWN TO EDIT TEXT</h4>

        <div className="edit-and-generator-containers">
          <div className="meme-under-construction">
            <img
              className="image-under-construction"
              src={image.img_url}
              alt={image.name}
            />
            <div className="text-under-construction">
              <p>{content}</p>
            </div>

            <Link to="/main/images">
              <button
                className="update-meme-btn"
                onClick={() =>
                  memeUpdate(meme_id, image_id, text_id, formData, isEdited)
                }
              >
                UPDATE MEME
              </button>
            </Link>
          </div>
          <div className="text-complete-container">
            <div className="text-scroll-box">
              <div className="text-title-box">
                <p className="text-title">TEXT OPTIONS</p>
              </div>
              {texts.map((item) => {
                return (
                  <div className="text-row" key={item.id}>
                    <p
                      className="text-content"
                      onClick={() => handleClick(item)}
                    >
                      {item.content}
                    </p>
                    <button
                      className="text-delete"
                      onClick={() => deleteText(item.id)}
                    >
                      &#10005;
                    </button>
                  </div>
                );
              })}
            </div>

            <form className="text-form">
              <textarea
                rows={3}
                maxLength="60"
                value={content}
                onChange={handleChange}
                placeholder="create new text here"
              ></textarea>
              <button className="text-save" onClick={() => textSave(formData)}>
                SAVE NEW TEXT
              </button>
              <Link to="/main/images">
                <button className="new-image-btn">CHOOSE NEW IMAGE</button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
}
