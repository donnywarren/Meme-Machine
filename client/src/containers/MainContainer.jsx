import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import ImageGallery from "../screens/ImageGallery/ImageGalleryScreen";
import MemeGenerator from "../screens/MemeGenerator/MemeGeneratorScreen";
import UserHome from "../screens/UserHome/UserHomeScreen";
import api from "../services/api-config";
import {
  getAllImages,
  getAllTexts,
  getAllMemes,
  postImage,
} from "../services/main";

export default function MainContainer(props) {
  const [images, setImages] = useState([]);
  const [texts, setTexts] = useState([]);
  const [memes, setMemes] = useState([]);

  const { currentUser } = props;

  useEffect(() => {
    const fetchImages = async () => {
      const imagesArray = await getAllImages();
      setImages(imagesArray);
    };
    fetchImages();

    const fetchMemes = async () => {
      const memesArray = await getAllMemes();
      setMemes(memesArray);
    };
    fetchMemes();

    const fetchTexts = async () => {
      const textsArray = await getAllTexts();
      setTexts(textsArray);
    };
    fetchTexts();
  }, [images]);

  const postImage = async (formData) => {
    const newImage = await api.post("./images", { image: formData });
    setImages((prevState) => [...prevState, newImage]);
  };

  const deleteImage = async (id) => {
    await api.delete(`/images/${id}`);
    setImages((prevState) => prevState.filter((image) => image.id !== id));
  };

  return (
    <Switch>
      <Route path="/main/generator/:id">
        <MemeGenerator texts={texts} images={images} />
      </Route>
      <Route path="/main/images">
        <ImageGallery
          images={images}
          postImage={postImage}
          deleteImage={deleteImage}
        />
      </Route>
      <Route path="/main/userhome">
        <UserHome
          memes={memes}
          currentUser={currentUser}
          images={images}
          texts={texts}
        />
      </Route>
    </Switch>
  );
}
