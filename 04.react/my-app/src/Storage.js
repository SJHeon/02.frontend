import React, { useState } from "react";

function Storage() {
    const [name, setName] = useState("");
    const [check, setCheck] = useState(false);

    const onChange = (e) => {
        console.log(e.target.value);
        setName(e.target.value);
    };

    const saveName = () => {
        const user = { name: name };
        window.localStorage.setItem("key1", name);
        window.localStorage.setItem("key2", user);
        window.localStorage.setItem("key3", JSON.stringify(user));
        console.log(user);
    };



    const loadName = () => {
    };
    let obj;
    for (let i = 0; i < window.localStorage.length; i++) {

        console.log(window.localStorage.key(i));
        if(window.localStorage.key(i) === "key3")
        {
            setCheck(true);
            obj = window.localStorage.key(i);
        }
    };
        // const obj = JSON.parse(window.localStorage.getItem("key3"));
        // const obj = JSON.parse(window.localStorage.getItem("key3"));
        // console.log(window.localStorage.length);
        // console.log(window.localStorage.key(check));
        // console.log(window.localStorage.key());


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
                {check ? <p>{obj.name}</p> : <></>}
            </div>
        );
    };

    export default Storage;