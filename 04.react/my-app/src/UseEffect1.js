import React, { useState, useEffect } from "react";

function UseEffect1() {
    const [number, setNumber] = useState(0);
    const updateNumber = () => {
        setNumber(number + 1);
    };
    
    const inputValueChange = (event) => {
        setText(event.target.value);
        console.log(event.target.value);
    };
    
    const [text, setText] = useState("");

    //useEffect 수행 코드 : console.log("---useEffect 실행")

    // 변하는게 있을때 useEffect 실행
    useEffect(() => {
        console.log("---useEffect 실행---");
    });

    // 한번만 ! 확인하고 실행
    useEffect(() => {
        console.log("---useEffect 한번만 실행---");
    }, []);

    // number 가 변할때 만 useEffect 실행
    useEffect(() => {
        console.log("---useEffect number---");
    },[number]);

    // text 가 변할때 만 useEffect 실행
    useEffect(() => {
        console.log("---useEffect text---");
    },[text]);
    
    // text 가 변할때 만 useEffect 실행
    useEffect(() => {
        console.log("---useEffect number, text---");
    },[number, text]);


    return(
        <div>
            <div>
                <button onClick={updateNumber} >+1</button>
                <span>Current Number {number}</span>
            </div>
                <input type="text" onChange={inputValueChange}/>
            <div>
                <span>{text}</span>
            </div>
        </div>
    );
};

export default UseEffect1;