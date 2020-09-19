import React from "react";

import "./MemeGeneratorScreen.css";

export default function MemeGenerator(props) {
  const texts = props.texts;
  const images = props.images;

  if (texts[0] && images[0]) {
    console.log(images[7]);
    return (
      <div>
        <p>is this the generator sreen?</p>
        <p>{props.texts[2].content}</p>
        <img src={images[2].img_url} alt={images[2].name} />
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
}
