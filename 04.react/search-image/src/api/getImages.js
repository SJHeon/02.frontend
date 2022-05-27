import request from './requests';
import URL from '../asset/URL';
const getImages = async () => {
  const data = await request(
    'https://pixabay.com/api/?key=27684561-9c06371393d2dc27a525c167f&q=summer'
  );
  return data;
};

export default getImages;
