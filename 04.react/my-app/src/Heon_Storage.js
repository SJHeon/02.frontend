import React, { useState } from "react";

function Storage() {
    const [name, setName] = useState("");
    const [equal, setEqual] = useState("");
    const [check, setCheck] = useState(false);

    const onChange = (e) => {
        // console.log(e.target.value);
        setName(e.target.value);
        setEqual("");
        setCheck(false);
    };

    const saveName = () => {
        const user = { name: name };
        // window.localStorage.setItem("key1", name);
        // window.localStorage.setItem("key2", user);
        let keySize = window.localStorage.length;
        console.log(user);
        console.log(window.localStorage);
        // console.log(JSON.parse(window.localStorage.getItem("key1")).name);
        console.log(window.localStorage.key(0));
        console.log(typeof (JSON.parse(window.localStorage.getItem("key1"))))
        console.log(typeof name);

        // window.localStorage.setItem("key"+(keySize), JSON.stringify(user));
        for (var i = 0; i < keySize; i++) {
            if (name === JSON.parse(window.localStorage.getItem(`key${i}`)).name) {
                // window.localStorage.removeItem("key"+(keySize), JSON.stringify(user));
                console.log("같은 값 있음");
                break;
            }
        };

        if (keySize === i) {
            window.localStorage.setItem("key" + (keySize), JSON.stringify(user));
        };
    };



    const loadName = () => {
        for (var i = 0; i < window.localStorage.length; i++) {
            if (name === JSON.parse(window.localStorage.getItem(`key${i}`)).name) {
                console.log("정보 있음");
                setCheck(true);
                break;
            };
        };
        if (check == false)
            setEqual("일치하는 정보 없음");
    };


    return (
        <div>
            <input
                name="name"
                placeholder="이름을 입력 하시오"
                onChange={onChange} />
            <button
                onClick={saveName}>저장
            </button>
            <button
                onClick={loadName} >요청
            </button>
            {check ? <p>{name}</p> : <p>{equal}</p>}
        </div>
    );
};

export default Storage;