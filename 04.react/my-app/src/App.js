import "./App.css";
import React, { useState } from "react";
import StyledComponent from "./StyledComponent";
import Pass from "./jun_Storage";
import Storage from "./Storage";
//#region 으악 더러워
import logo from "./logo.svg";
import Hello from "./Hello";
import UseState1 from "./UseState1";
import UseState2 from "./UseState2";
import View from "./View";
import Parent from "./Parent";
import Child from "./Child";
import UseEffect1 from "./UseEffect1";
import UseEffect2 from "./UseEffect2";
import UseRef1 from "./UseRef1";
import UseRef2 from "./UseRef2";
import UseRef3 from "./UseRef3";
import News from "./News";
import { UseContext1 } from "./UseContext1";
import UseReducer1 from "./UseReducer1";
import UseReducer2 from "./UseReducer2";
import Inputs from "./Inputs";
import CSSModule from "./CSSModule";
import Async from "./Async";
//#region view
// function App() {
//   const title = "React"
//   const basicStyle = {color: "green", fontSize : '40px'}
//   // const basic = {color: "red", fontSize : '30px'}
//   // const {color} = basic;

//   return (
//     // <View>
//     //   <Hello name="react" color="red"></Hello>
//     //   {/* <Hello name="react" color="blue"></Hello> */}
//     //   <Hello color="yellowgreen" important={true}></Hello>
//     //   {/* <div className="item"></div>
//     //   <div style={basicStyle}>{title}</div> */}
//     // </View>

//     // <UseState1/>
//     <UseState2/>
//   );
// }
//#endregion

function App() {
  //#region 정리 해야해
  // ver1
  // const [work, setWork] = useState(false);

  // ver2
  // const [previousState, setState] = useState(false)
  // const changeImportant = () => {
  //   setState(true);
  // }

  // const [company, setCompany] = useState("더존");
  const [company, setCompany] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  // const [bgcolor, setBgcolor] = useState("white");
  // const [ftcolor, setFtcolor] = useState("black");
  //#endregion
  return (
    <div className="App">
      {/* <View>
        <Hello name="react" color="red"></Hello>
        <Hello color="yellowgreen" important={true}></Hello>
      </View> */}

      {/* 부모 - 자식간의 데이터 전달 */}
      {/* <Parent>
        <child></child>
      </Parent> */}
      {/* <Parent/> */}

      {/* <UseState1 /> */}
      {/* <UseState2 /> */}

      {/* useEffect1 */}
      {/* <UseEffect1/> */}
      {/* 조건부 랜더링 {true} */}
      {/* ver1 -------------------------------------------*/}
      {/* {work? <UseEffect2/> : ""} */}

      {/* work 버튼을 클릭 했을 때 작업이 실행 되도록 */}
      {/* 1) "작업중 - 콘솔보기"가 출력 되면서
      2) work 누르면 실행 */}
      {/* <button onClick={() => {setWork(!work)}}>work</button> */}

      {/* ver2 */}
      {/* <UseEffect2 state={previousState} />

      <button onClick={changeImportant}>work</button> */}

      {/* useRef */}
      {/* <UseRef1></UseRef1> */}
      {/* <UseRef2/> */}
      {/* <UseRef3/> */}

      {/* useContext */}
      {/* <News company={company} setCompany={setCompany} ></News> */}

      {/* <UseContext1.Provider value={{company, setCompany, darkMode, setDarkMode}}> */}
      {/* <UseContext1.Provider value={{company, bgcolor, ftcolor, setCompany, setBgcolor, setFtcolor}}> */}
      {/* <News></News>
      </UseContext1.Provider> */}

      {/* <UseMemo1/> */}
      {/* <UseMemo2/> */}

      {/* <UseCallback1/> */}
      {/* <UseCallback2/> */}

      {/* <UseReducer1/> */}
      {/* <UseReducer2/> */}

      {/* <Storage/> */}
      {/* <Pass/> */}

      {/* <Inputs /> */}

      {/* <CSSModule /> */}
      {/* <StyledComponent /> */}

      <Async></Async>
    </div>
  );
}

export default App;
