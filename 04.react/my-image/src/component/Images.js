import React from 'react';
import react, { useRef, useState } from 'react';

function Images() {
  // input 제어를 위한 useRef
  const imgRef = useRef(null);
  const [imgList, setImgList] = useState([]);

  console.log(imgList);
  // console.log(imgList[0]);

  return (
    <div className="container">
      <div className="main">
        <div
          className="add-button"
          onClick={() => {
            imgRef.current.click();
          }}
        >
          +
        </div>
        <input
          className="file-upload-input"
          type="file"
          ref={imgRef}
          onChange={(event) => {
            console.log(event.currentTarget.value);
            // setImgList([...imgList, event.currentTarget.value]);
            // const value = event.currentTarget.value;
            // setImgList((prev) => {
            //   return [...prev, value];
            // });

            console.log(event.currentTarget.files[0]);
            const fileReader = new FileReader();

            const file = event.currentTarget.files[0];
            console.log(typeof file);

            fileReader.readAsDataURL(file);
            fileReader.onloadend = (e) => {
              // console.log(e);
              // console.log(e.target.result);
              setImgList((prev) => {
                return [...prev, e.target.result];
              });
            };
            event.currentTarget.value = null;
          }}
        />
        <div className="main-text">Choose Image</div>
        <div className="gallery">
          {imgList.map((img, idx) => (
            <div className="img-item" key={img + idx}>
              <img src={img} alt=""></img>
            </div>
            // <div className="img-item" key={img + idx}>
            //   <Image src={img}></Image>
            // </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Images;
