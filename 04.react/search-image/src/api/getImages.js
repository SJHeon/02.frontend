import request from "./requests";
import URL from "../asset/URL";
const getImages = async (inputValue) => {
  const url = "https://pixabay.com/api/";
  const key = "?key=27684561-9c06371393d2dc27a525c167f";
  const q = inputValue;
  const data = await request(`${url}${key}&q=${q}`);
  return data;
};

export default getImages;
