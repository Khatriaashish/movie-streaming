import axios from "axios";

export const get = async (url) => {
  const response = await axios.get(url);
  return response.data;
};
