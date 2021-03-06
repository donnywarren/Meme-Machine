import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./ImageGalleryScreen.css";

export default function ImageGallery(props) {
  const [formData, setFormData] = useState({
    img_url: "",
  });
  const { img_url } = formData;

  const { images, deleteImage, imageSave } = props; // was postImage

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [images]);

  const handleChange = (e) => {
    const { value } = e.target;
    setFormData({ img_url: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (img_url === "") {
      alert("Please enter an image URL")
    } else {
      imageSave(formData);
      setFormData({ img_url: "" });
    }
    
  };

  if (images[0]) {
    return (
      <div className="gallery-complete-container">
        <div className="background-green"></div>
        <h3>IMAGE GALLERY</h3>
        <p className="instructions">
          Click "use" button below image to launch the meme generator.
          <br />
          You may delete only images that are not currently being used.
        </p>
        <form onSubmit={handleSubmit} className="image-url-form">
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
          <button className="btn add-image-btn">ADD IMAGE</button>
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
                    <button className="btn image-use-btn">USE</button>
                  </Link>
                  <button
                    className="btn image-delete-btn"
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
