import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import ImageGallery from "../screens/ImageGallery/ImageGalleryScreen";
import MemeGenerator from "../screens/MemeGenerator/MemeGeneratorScreen";
import UserHome from "../screens/UserHome/UserHomeScreen";
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
  const history = useHistory();

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
  }, []);

  const createSubmitImage = async (formData) => {
    const newImage = await postImage(formData);
    setImages((prevState) => [...prevState, newImage]);
    history.push("/main/image");
  };

  return (
    <Switch>
      <Route path="/main/generator/:id">
        <MemeGenerator texts={texts} images={images} />
      </Route>
      <Route path="/main/images">
        <ImageGallery images={images} />
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
