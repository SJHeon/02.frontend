// import request from "./requests";
// import URL from "../asset/URL";

// const BASE_URL = "https://pixabay.com/api/";
// const API_KEY = "27684561-9c06371393d2dc27a525c167f";

// const getImages = async (inputValue) => {
//   const q = inputValue;
//   const data = await request(`${BASE_URL}?key=${API_KEY}&q=${q}`);
//   return data;
// };

// export default getImages;

import request from "./requests";
import URL from "../asset/URL";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "27684561-9c06371393d2dc27a525c167f";

const defaultParam = {
  key: API_KEY,
};

const test = {
  q: "spring",
};

const getImages = async (paramObj) => {
  const params = new URLSearchParams({
    ...defaultParam,
    ...paramObj,
  }).toString();
  // const data = await request(`${BASE_URL}?${params}&q=${q}`);
  const data = await request(`${BASE_URL}?${params}`);
  return data;
};

export default getImages;
