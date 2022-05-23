import React, { useState } from 'react';

function Inputs() {
  //ver1
  // const [name, setName] = useState("");
  // const [nickName, setNickName] = useState("");

  // const changeName = (e) => {
  //     setName(e.target.value);
  //     console.log(e.target.value);
  // };

  // const changeNickName = (e) => {
  //     setNickName(e.target.value);
  //     console.log(e.target.value);
  // };

  // const resetInputs = () => {
  //     setName("");
  //     setNickName("");
  // };

  //ver2
  const [inputs, setInputs] = useState({
    name: '',
    nickName: '',
  });

  const { name, nickName } = inputs;

  const changeInputs = (e) => {
    // console.log(e.target);
    // console.log(e.target.name);
    // setName(e.target.name === "name"? e.target.value : "");
    // setNickName(e.target.name === "nickName"? e.target.value : "");

    //ver3
    const { name, value } = e.target;
    setInputs({
      ...inputs, // 원래의 값을 가진상태로!
      [name]: value, // [속성명] : 실제 입력한 value 값. 변한것 만 업데이트
      // ! 스프레드 여기있으면 초기 값만들어감 순서 매우중요
    });
  };

  const resetInputs = () => {
    setInputs({
      name: '',
      nickName: '',
    });
  };

  return (
    <div>
      {/* ver1 */}
      {/* <h1>이름: {name}</h1>
			<h1>닉네임: {nickName}</h1>

			<input type="text" value={name} placeholder="이름" onChange={changeName}/>
			<input type="text" value={nickName} placeholder="닉네임" onChange={changeNickName}/>
			<button onClick={resetInputs}>Reset</button> */}

      <h1>이름: {name}</h1>
      <h1>닉네임: {nickName}</h1>

      <input
        type="text"
        name="name"
        value={name}
        placeholder="이름"
        onChange={changeInputs}
      />
      <input
        type="text"
        name="nickName"
        value={nickName}
        placeholder="닉네임"
        onChange={changeInputs}
      />
      <button onClick={resetInputs}>Reset</button>
    </div>
  );
}

export default Inputs;
