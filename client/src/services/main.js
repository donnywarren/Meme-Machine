import api from "./api-config";

export const getAllImages = async () => {
  const resp = await api.get("./images");
  return resp.data;
};

export const getAllTexts = async () => {
  const resp = await api.get("./texts");
  return resp.data;
};
