import "./App.css";
//#region 문제1
// function App() {
//   return <div className=""></div>;
// }

// import { useState } from "react";

// function App() {
//   const [number, setNumber] = useState(1);

//   const handleNumberUpdate = () => {
//     setNumber((number) => number + 1);
//     console.log(number);
//     setNumber((number) => number + 1);
//     console.log(number);
//   };
//   return (
//     <div className="App">
//       <p>현재 숫자 : {number}</p>
//       <button onClick={handleNumberUpdate}>+</button>
//     </div>
//   );
// }
//#endregion

//#region 문제2
// import { useState, useEffect } from "react";

// function App() {
//   const [bookTitle, setBookTitle] = useState("");

//   useEffect(() => {
//     if (bookTitle !== "") {
//       setBookTitle(bookTitle);
//     }
//   });

//   const [bookPrice, setBookPrice] = useState(0);

//   useEffect(() => {
//     if (bookPrice !== "") {
//       setBookPrice(bookPrice);
//     }
//   });
//   return <></>;
// }
//#endregion

//#region 문제3
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

// 작성
const LectureList = styled.ul`
  padding-left: 0px;
`;

// 작성 ★step02 styled css 적용
const Lecture = styled.li`
  width: 100px;
  background: palevioletred;
  color: white;
  font-size: 1.125rem;
  list-style-type: none;
  text-align: center;
  border-radius: 5px;
  padding: 0.25rem;
  margin: 5px;
`;

// ★step01 입력 요소 확인
const App = () => {
  const [lectures, setLectures] = useState(["HTML", "CSS", "JavaScript"]);
  const [newLecture, setNewLecture] = useState("");
  const inputRef = useRef();

  // 작성
  const handleInputLecture = (event) => {
    setNewLecture(event.target.value);
  };

  // 작성
  // const handleUpdateLecture = () => {
  //   setLectures((pre) => {
  //     console.log(pre);
  //     return pre.concat(newLecture); // 정상 추가 되지만 같은 값 들어가면 동일 키 경고 출력된다
  //   });
  // };

  const handleUpdateLecture = () => {
    if (newLecture !== "") {
      setLectures((lectures) => [...lectures, newLecture]); // 마찬가지로 동일 키 중복 경고 출력 ★step03 문제
      setNewLecture(""); // 새 값 못받게 초기화
      inputRef.current.value = ""; //★ step05 추가 버튼 클릭 후 input 내용 초기화
    } else if (newLecture === "") {
      // 조건 표시하기(명확하게 보이게) 위해 else if 로 조건 적음
      // ★step 06 공백값 방지
      setLectures(lectures);
    }
  };

  // ★step4 초기 포커스
  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <div className="lecture-container">
      {/* ★step02 : App. css 적용 */}
      <div>
        <input
          type="text"
          placeholder="배운 과목을 입력해주세요"
          onChange={handleInputLecture}
          ref={inputRef}
        ></input>
        <button onClick={handleUpdateLecture}>추가</button>
      </div>
      <LectureList>
        {lectures.map((lecture, idx) => (
          <Lecture key={`${idx}`}>{lecture}</Lecture>
          // ★step03 키값 중복 현상으로 인한 id Warning -> 유일한 값인 인덱스 값으로 해결
        ))}
      </LectureList>
    </div>
  );
};

export default App;
