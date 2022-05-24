import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import { getUsers } from './api/users';

function reducer(state, action) {
  switch (action.type) {
    case 'LOADING':
      return {
        loading: true,
        data: null,
        error: null,
      };
    case 'SUCCESS':
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case 'ERROR':
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      throw new Error('예상치 못한 에러 발생');
  }
}

function Async() {
  // photos : state
  // const [photos, setPhotos] = useState([]);

  // Reducer / state / dispatch - 데이터 요청 / 데이터 응답(정상 vs 비정상)

  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });
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

  // const getData = () => {
  //   let url = "https://jsonplaceholder.typicode.com/photos";
  //   axios
  //     .get(url)
  //     .then((response) => {
  //       console.log(response.data);
  //       console.log("정상 응답");
  //       setPhotos(response.data);
  //     })
  //     .catch((error) => {
  //       console.log("비정상 응답", error);
  //     });
  // };

  const getData2 = async () => {
    dispatch({ type: 'LOADING' });
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      dispatch({ type: 'SUCCESS', data: response.data });
      // loading 끝 -> false / data -> response.data / error: false
    } catch (error) {
      dispatch({ type: 'ERROR', error: error });
      // loading 끝 -> false / data -> null / error: true
    }
  };

  useEffect(() => {
    getData2();
  }, []);

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

  const { loading, data, error } = state;
  console.log(loading);
  console.log(data);
  console.log(error);
  if (loading) return <div>데이터 요청 중입니다.</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!data) return null;

  return (
    <div>
      <button onClick={getData2}>Data Loading</button>
      {/* {photos.map((photo) => {
        return photo.id <= 10 ? (
          <div key={photo.id}>
            <img src={photo.thumbnailUrl} alt="notFound"></img>
            <br />
            {photo.thumbnailUrl}
          </div>
        ) : (
          ''
        );
      })} */}

      {/* 리듀서 사용 */}
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Async;
