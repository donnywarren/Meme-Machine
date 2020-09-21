import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import api from "../../services/api-config";
import { postMeme, postText } from "../../services/main";

import "./MemeGeneratorScreen.css";

export default function MemeGenerator(props) {
  const history = useHistory();
  const { texts, memeSave, images } = props;
  const params = useParams();
  const image_id = parseInt(params.id);
  const image = images.find((item) => item.id === image_id);
  const [text_id, setTextId] = useState(null);
  const [isEdited, setIsEdited] = useState(false);

  const [formData, setFormData] = useState({ content: "" });

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
      <div>
        <h3>Meme Generator</h3>

        <Link to="/main/images">
          <button>choose new image</button>
        </Link>
        <div className="meme-under-construction">
          <img
            className="image-under-construction"
            src={image.img_url}
            alt={image.name}
          />
          <div className="text-under-construction">
            <p>{content}</p>
          </div>
          {/* <button>top</button>
          <button>bottom</button> */}
          <Link to="/main/images">
            <button
              onClick={() => memeSave(formData, image_id, text_id, isEdited)}
            >
              save meme
            </button>
          </Link>
        </div>
        <div className="text-complete-container">
          <div className="text-scroll-box">
            {props.texts.map((item) => {
              return (
                <p
                  key={item.id}
                  onClick={() => handleClick(item)}
                  className="text-content"
                >
                  {item.content}
                </p>
              );
            })}
          </div>

          <form>
            <textarea
              rows={3}
              maxLength="50"
              value={content}
              onChange={handleChange}
            ></textarea>
            <button>save</button>
            <button>edit</button>
            <button>delete</button>
          </form>
        </div>
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
}
