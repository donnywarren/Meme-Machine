import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import ImageGallery from "../screens/ImageGallery/ImageGalleryScreen";
import MemeEditor from "../screens/MemeEditor/MemeEditorScreen";
import MemeGenerator from "../screens/MemeGenerator/MemeGeneratorScreen";
import UserHome from "../screens/UserHome/UserHomeScreen";
import {
  getAllImages,
  getAllTexts,
  getAllMemes,
  postText,
  postMeme,
  postImage,
  destroyText,
  destroyImage,
  destroyMeme,
  updateMeme,
} from "../services/main";

export default function MainContainer(props) {
  const [images, setImages] = useState([]);
  const [texts, setTexts] = useState([]);
  const [memes, setMemes] = useState([]);
  const [changes, setChanges] = useState("no");
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
  }, [changes]);

  const deleteImage = async (id) => {
    await destroyImage(id);
    setImages((prevState) => prevState.filter((image) => image.id !== id));
  };

  const deleteMeme = async (id) => {
    await destroyMeme(id);
    setMemes((prevState) => prevState.filter((meme) => meme.id !== id));
  };

  const deleteText = async (id) => {
    await destroyText(id);
    setTexts((prevState) => prevState.filter((text) => text.id !== id));
  };

  const memeSave = async (formData, image_id, text_id, isEdited) => {
    if (isEdited) {
      const newText = await postText(formData);
      const newMeme = await postMeme({
        image_id,
        text_id: newText.id,
      });
      setMemes((prevState) => [...prevState, newMeme]);
      setTexts((prevState) => [...prevState, newText]);
    } else {
      const newMeme = await postMeme({
        image_id,
        text_id,
      });

      setMemes((prevState) => [...prevState, newMeme]);
    }
    history.push("/main/userhome");
  };

  const memeUpdate = async (meme_id, image_id, text_id, formData, isEdited) => {
    console.log("before if statement");
    if (isEdited) {
      const newText = await postText(formData);
      const editMeme = await updateMeme({
        meme_id,
        image_id,
        text_id: newText.id,
      });

      setMemes((prevState) =>
        prevState.map((meme) => (meme.id === Number(meme_id) ? editMeme : meme))
      );
      setTexts((prevState) => [...prevState, newText]);
    } else {
      const editMeme = await updateMeme({
        meme_id,
        image_id,
        text_id,
      });
      setMemes((prevState) =>
        prevState.map((meme) => (meme.id === Number(meme_id) ? editMeme : meme))
      );
    }
    history.push("/main/userhome");
  };

  const imageSave = async (formData) => {
    const newImage = await postImage(formData);
    setImages((prevState) => [...prevState, newImage]);
    setChanges(changes === "yes" ? "no" : "yes");
  };

  const textSave = async (formData) => {
    if (formData.content !== "") {
      const newText = await postText(formData);
      setTexts((prevState) => [...prevState, newText]);
    } else {
      alert("Please enter a new text content.");
    }
  };

  return (
    <Switch>
      <Route path="/main/generator/:id/:txt?">
        <MemeGenerator
          texts={texts}
          images={images}
          memeSave={memeSave}
          deleteText={deleteText}
          textSave={textSave}
        />
      </Route>
      <Route path="/main/editor/:id/:txt?/:memeId?">
        <MemeEditor
          texts={texts}
          images={images}
          memeSave={memeSave}
          deleteText={deleteText}
          textSave={textSave}
          memeUpdate={memeUpdate}
        />
      </Route>
      <Route path="/main/images">
        <ImageGallery
          images={images}
          deleteImage={deleteImage}
          imageSave={imageSave}
        />
      </Route>
      <Route path="/main/userhome">
        <UserHome
          memes={memes}
          currentUser={currentUser}
          images={images}
          texts={texts}
          deleteMeme={deleteMeme}
        />
      </Route>
    </Switch>
  );
}
