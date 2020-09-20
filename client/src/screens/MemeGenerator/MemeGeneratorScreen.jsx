import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import "./MemeGeneratorScreen.css";

export default function MemeGenerator(props) {
  const texts = props.texts;
  const images = props.images;
  const params = useParams();
  const image_id = parseInt(params.id);
  const image = images.find((item) => item.id === image_id);

  if (texts[0] && images[0]) {
    return (
      <div>
        <h3>Meme Generator</h3>

        <Link to="/main/images">choose new image</Link>

        <img src={image.img_url} alt={image.name} />
        <div className="text-complete-container">
          <div className="text-scroll-box">
            {props.texts.map((item) => {
              return <p key={item.id}>{item.content}</p>;
            })}
          </div>

          <form>
            <textarea rows={3} maxLength="50"></textarea>
            <button>save</button>
            <button>delete</button>
          </form>
        </div>
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
}
