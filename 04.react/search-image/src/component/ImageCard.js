import { useState } from "react";
import styled from "styled-components";

const Card = styled.div`
  margin-left: 8px;
  margin-bottom: 8px;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 300px;
  padding: 8px;
  cursor: pointer;
`;

const Img = styled.img`
  width: 100%;
  border-radius: 4px;
`;
const ViewImg = styled.img``;

const ImageCard = ({ imgData, onClick }) => {
  const [image, setImage] = useState(false);

  // console.log(imgData);
  const { webformatURL, id } = imgData;
  return (
    <Card onClick={onClick}>
      <Img
        key={id}
        src={webformatURL}
        onClick={() => {
          setImage(true);
        }}
      ></Img>
      {image ? (
        <ViewImg
          src={webformatURL}
          onClick={() => {
            setImage(false);
          }}
        ></ViewImg>
      ) : (
        <></>
      )}
    </Card>
  );
};

export default ImageCard;
