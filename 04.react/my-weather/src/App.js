import "./App.css";
import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";

function reducer(state, action) {
  // console.log(state, action);
  switch (action.type) {
    case "get_weather":
      // console.log("받음?", action.data);
      return {
        data: action.data,
        error: null,
      };
    case "ERROR":
      return {
        data: {},
        error: action.error,
      };
    default:
      throw new Error("!이 경고를 본 당신은 큰일 났습니다!");
  }
}

function App() {
  // const [check, setCheck] = useState(false);
  const [state, dispatch] = useReducer(reducer, {
    data: {},
    // data: [],
    error: null,
  });

  const getWeather = async () => {
    try {
      let url =
        "https://api.openweathermap.org/data/2.5/weather?q=Daegu&appid=f17a473e3226e7f6475509428fd26a0c";

      const respeonse = await axios.get(url);
      // console.log(respeonse);
      // console.log(respeonse.data.name);
      dispatch({ type: "get_weather", data: respeonse.data });
      // setCheck(!check);
    } catch (error) {
      console.log("!ERROR");
      dispatch({ type: "ERROR", error: error });
    }
  };

  const { data, error } = state;
  // console.log(state);
  // console.log(data);
  // console.log(data.weather[0].main);
  // console.log(data.weather);
  // console.log(data.wind.speed);

  // console.log(typeof data.sys.sunset);
  // let timestamp = data.sys.sunset;
  //  date = new Date(timestamp * 1000);
  // console.log(date);

  useEffect(() => {
    getWeather();
  }, []);

  // console.log(typeof data);
  // console.log(typeof JSON.stringify(data));

  // return (
  //   <div>
  //     <h1>{data.name}</h1>
  //     <br />
  //     <div>날씨 : {data.weather[0].main}</div>
  //     <div>날씨 설명 : {data.weather[0].description} </div>
  //     <div>풍속 : {data.wind.speed} m/s</div>
  //     <div> </div>
  //   </div>
  // );

  return (
    <div>
      {/* {check === true ? ( */}
      {/* {Object.keys(data).length === 0 ? ( */}
      {JSON.stringify(data) !== "{}" ? (
        <>
          <h1>{data.name}</h1>
          <br />
          <div>날씨 : {data.weather[0].main}</div>
          <div>날씨 설명 : {data.weather[0].description} </div>
          <div>풍속 : {data.wind.speed} m/s</div>
          <div>일몰 시간 : {Date(data.sys.sunset)}</div>
          {/* 일몰 시간을 알아먹게 바꾸는법 */}
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
