import api from "./api-config";

export const getAllImages = async () => {
  const resp = await api.get("./images");
  return resp.data;
};

export const getAllTexts = async () => {
  const resp = await api.get("./texts");
  return resp.data;
};

export const getAllMemes = async () => {
  const resp = await api.get("./memes");
  return resp.data;
};
export const postImage = async (formData) => {
  const resp = await api.post("./images", { image: formData });
  return resp.data;
};

// export const postFood = async (formData) => {
//   const resp = await api.post("/foods", { food: formData });
//   return resp.data;
// };

// export const getOneFood = async (id) => {
//   const resp = await api.get(`/foods/${id}`);
//   return resp.data;
// };

// export const putFood = async (id, formData) => {
//   const resp = await api.put(`/foods/${id}`, { food: formData });
//   return resp.data;
// };

// export const deleteFood = async (id) => {
//   const resp = await api.delete(`/foods/${id}`);
//   return resp.data;
// };
