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
  postText,
  postMeme,
} from "../services/main";

export default function MainContainer(props) {
  const [images, setImages] = useState([]);
  const [texts, setTexts] = useState([]);
  const [memes, setMemes] = useState([]);
  const history = useHistory();

  const { currentUser } = props;

  useEffect(() => {
    const fetchImages = async () => {
      const imagesArray = await getAllImages();
      const reverseImagesArray = imagesArray.reverse();
      setImages(reverseImagesArray);
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

  const postImage = async (formData) => {
    const newImage = await api.post("./images", { image: formData });
    setImages((prevState) => [...prevState, newImage]);
    window.location.reload();
  };

  const deleteImage = async (id) => {
    await api.delete(`/images/${id}`);
    setImages((prevState) => prevState.filter((image) => image.id !== id));
  };

  const memeSave = async (formData, image_id, text_id, isEdited) => {
    if (isEdited) {
      const newText = await postText(formData);
      const newMeme = await postMeme({
        image_id,
        text_id: newText.id,
      });
      setMemes((prevState) => [...prevState, newMeme]);
    } else {
      const newMeme = await postMeme({
        image_id,
        text_id,
      });
      setMemes((prevState) => [...prevState, newMeme]);
    }
    history.push("/main/userhome");
  };

  // const postMeme = async (formData) => {
  //   const newMeme = await api.post("./memes", { meme: formData });
  //   setImages((prevState) => [...prevState, newMeme]);
  //   window.location.reload();
  // };

  return (
    <Switch>
      <Route path="/main/generator/:id/:txt?">
        <MemeGenerator texts={texts} images={images} memeSave={memeSave} />
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
