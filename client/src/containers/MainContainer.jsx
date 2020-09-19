import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import MemeGenerator from "../screens/MemeGenerator/MemeGeneratorScreen";
import { getAllImages, getAllTexts } from "../services/main";

export default function MainContainer() {
  // get texts and images
  const [images, setImages] = useState([]);
  const [texts, setTexts] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const imagesArray = await getAllImages();
      setImages(imagesArray);
    };
    fetchImages();
  }, []);

  useEffect(() => {
    const fetchTexts = async () => {
      const textsArray = await getAllTexts();
      setTexts(textsArray);
    };
    fetchTexts();
  }, []);
  console.log(texts);

  return (
    <Switch>
      <Route path="/main/generator">
        <h3>Meme Generator</h3>
        <MemeGenerator texts={texts} images={images} />
      </Route>
      <Route path="/main/images">
        <h3>Image Gallery</h3>
      </Route>
    </Switch>
  );
}
