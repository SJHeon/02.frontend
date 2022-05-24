import React, { useEffect, useState } from "react";
import axios from "axios";
import { getUsers } from "./api/users";

function Async() {
  // photos : state
  const [photos, setPhotos] = useState([]);

  //   const usersData = getUsers();
  //   usersData.then((response) => {
  //     console.log(response);
  //     console.log('-------');
  //   });
  //   const getData = () => {
  //     let url = 'https://jsonplaceholder.typicode.com/users';
  //     axios
  //       .get(url)
  //       .then((response) => {
  //         console.log(response.data);
  //         console.log('정상 응답');
  //       })
  //       .catch((error) => {
  //         console.log('비정상 응답', error);
  //       });
  //   };

  const getData = () => {
    let url = "https://jsonplaceholder.typicode.com/photos";
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        console.log("정상 응답");
        setPhotos(response.data);
      })
      .catch((error) => {
        console.log("비정상 응답", error);
      });
  };

  //   const getData2 = async () => {
  //     let url = 'https://jsonplaceholder.typicode.com/users';

  //     try {
  //       const response = await axios.get(url);
  //     } catch (error) {
  //       console.log('비정상 응답');
  //     }
  //   };

  //   useEffect(() => {
  //     const getData3 = async () => {
  //       let url = 'https://jsonplaceholder.typicode.com/users';

  //       try {
  //         const response = await axios.get(url);
  //       } catch (error) {
  //         console.log('비정상 응답');
  //       }
  //     };
  //   }, []);

  return (
    <div>
      <button onClick={getData}>Data Loding</button>
      {photos.map((photo) => {
        return photo.id <= 10 ? (
          <div key={photo.id}>
            <img src={photo.thumbnailUrl} alt="notFound"></img>
            <br />
            {photo.thumbnailUrl}
          </div>
        ) : (
          ""
        );
      })}
    </div>
  );
}

export default Async;
