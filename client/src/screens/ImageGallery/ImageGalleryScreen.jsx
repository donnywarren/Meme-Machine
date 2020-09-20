import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./ImageGalleryScreen.css";

export default function ImageGallery(props) {
  const [formData, setFormData] = useState({
    img_url: "",
  });
  const { img_url } = formData;

  const images = props.images;

  const handleChange = (e) => {
    const { value } = e.target;
    setFormData({ img_url: value });
  };

  if (images[0]) {
    return (
      <div>
        <h3>Images Gallery</h3>
        <p>Click "use" to launch the meme generator.</p>
        <form>
          <label>
            <input
              type="text"
              placeholder="new image URL"
              value={img_url}
              name="new-image-url"
              onChange={handleChange}
            />
          </label>
          <button>add image</button>
        </form>

        {images.map((item) => {
          return (
            <div key={item.id}>
              <img src={item.img_url} alt={item.name} />
              <Link to={`/main/generator/${item.id}`}>use</Link>
              <Link>delete</Link>
            </div>
          );
        })}
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
}
