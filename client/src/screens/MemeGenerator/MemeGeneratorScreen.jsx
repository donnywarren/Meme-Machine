import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import "./MemeGeneratorScreen.css";

export default function MemeGenerator(props) {
  const [formData, setFormData] = useState({
    content: "",
  });

  const { content } = formData;
  const texts = props.texts;
  const images = props.images;
  const params = useParams();
  const image_id = parseInt(params.id);
  const image = images.find((item) => item.id === image_id);

  const handleChange = (e) => {
    const { value } = e.target;
    setFormData({ content: value });
  };

  const handleClick = (e) => {
    const text = e.target.innerHTML;
    setFormData({ content: text });
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
          <button>save meme</button>
        </div>
        <div className="text-complete-container">
          <div className="text-scroll-box">
            {props.texts.map((item) => {
              return (
                <p key={item.id} onClick={handleClick} className="text-content">
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
