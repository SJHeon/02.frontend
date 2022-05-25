import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";

// const [postDatas, setPostDatas] = useState([]);

function reducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case "get_data":
      console.log("받아온 데이터", action.data);
      //   console.log(action.data[0].userId);
      return {
        data: action.data,
        error: null,
      };
    case "ERROR":
      return {
        data: [],
        error: action.error,
      };
    default:
      throw new Error("이 에러를 보면 큰일 난겁니다");
  }
}

function Posts() {
  const [state, dispatch] = useReducer(reducer, {
    data: [],
    error: null,
  });
  const [num, setNum] = useState(0);

  const getData = async () => {
    try {
      let url = `https://jsonplaceholder.typicode.com/posts?userId=${num}`;
      //   const url = 'https://jsonplaceholder.typicode.com/posts';
      const response = await axios.get(url);
      console.log(response);
      dispatch({ type: "get_data", data: response.data });
    } catch (error) {
      dispatch({ type: "ERROR", error: error });
      console.log("!error");
    }
  };

  const { data, error } = state;
  useEffect(() => {
    getData();
  }, [num]);

  return (
    <div>
      <br />
      <input
        type="number"
        onChange={(e) => {
          //   console.log(e.target.value);
          setNum(e.target.value);
        }}
      ></input>
      <br />
      {/* <button onClick={getData}> 데이터 가져와 보자!</button> */}
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            {user.id}
            {user.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
