import api from "./api-config";

export const getAllImages = async () => {
  const resp = await api.get("/images");
  return resp.data;
};

export const getAllTexts = async () => {
  const resp = await api.get("/texts");
  return resp.data;
};

export const getAllMemes = async () => {
  const resp = await api.get("/memes");
  return resp.data;
};
export const postImage = async (formData) => {
  const resp = await api.post("/images", { image: formData });
  return resp.data;
};

export const deleteImage = async (id) => {
  const resp = await api.delete(`/images/${id}`);
  return resp.data;
};

export const postText = async (formData) => {
  const resp = await api.post("/texts", { text: formData });
  return resp.data;
};

export const postMeme = async (formData) => {
  const resp = await api.post("/memes", { meme: formData });
  return resp.data;
};
