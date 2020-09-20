import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import ImageGallery from "../screens/ImageGallery/ImageGalleryScreen";
import MemeGenerator from "../screens/MemeGenerator/MemeGeneratorScreen";
import { getAllImages, getAllTexts } from "../services/main";

export default function MainContainer() {
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

  return (
    <Switch>
      <Route path="/main/generator/:id">
        <MemeGenerator texts={texts} images={images} />
      </Route>
      <Route path="/main/images">
        <ImageGallery images={images} />
      </Route>
    </Switch>
  );
}
