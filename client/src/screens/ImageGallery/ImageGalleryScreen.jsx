import React, { useState } from "react";
import { Link } from "react-router-dom";

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
      <div className="gallery-complete-container">
        <div className="background-green"></div>
        <h3>IMAGE GALLERY</h3>
        <p className="instructions">
          Click "use" to launch the meme generator.
        </p>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              className="new-url-input"
              type="text"
              placeholder="new image URL"
              value={img_url}
              name="new-image-url"
              onChange={handleChange}
            />
          </label>
          <button>ADD IMAGE</button>
        </form>
        <div className="all-images-container">
          {images.map((item) => {
            return (
              <div className="image-card" key={item.id}>
                <div className="images-img-frame">
                  <img src={item.img_url} alt={item.name} />
                </div>

                <div className="images-btn-box">
                  <Link to={`/main/generator/${item.id}`}>
                    <button className="image-use-btn">USE</button>
                  </Link>
                  <button
                    className="image-delete-btn"
                    onClick={() => deleteImage(item.id)}
                  >
                    DELETE
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
}
