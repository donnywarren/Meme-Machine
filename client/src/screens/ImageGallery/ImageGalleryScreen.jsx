import React, { useState } from "react";
import { Link } from "react-router-dom";
import { postImage, deleteImage } from "../../services/main";

import "./ImageGalleryScreen.css";

export default function ImageGallery(props) {
  const [formData, setFormData] = useState({
    img_url: "",
  });
  const { img_url } = formData;

  const { images, deleteImage, postImage } = props;

  const handleChange = (e) => {
    const { value } = e.target;
    setFormData({ img_url: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postImage(formData);
    setFormData({ img_url: "" });
  };

  if (images[0]) {
    return (
      <div>
        <h3>Images Gallery</h3>
        <p>Click "use" to launch the meme generator.</p>
        <form onSubmit={handleSubmit}>
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
              <Link to={`/main/generator/${item.id}`}>
                <button>use</button>
              </Link>
              <button onClick={() => deleteImage(item.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
}
