import React, { useState } from "react";

function Usestate2() {
    let students = ["신현채", "성종헌"];
    const [names, setNames] = useState(students);
    const inputValueChange = (event) => {
        // console.log("입력값 함수 동작");
        // console.log(event.target.value);
        setInput(event.target.value);

    }

    const [input, setInput] = useState("");

    const inputValueRecord = () => {
        setNames((previousValue) => {
            // console.log(typeof previousValue);
            // console.log(typeof input);
            console.log(previousValue);
            return previousValue.concat(input);
            // [input, previousValue];
        });
        setInput("");
    }

    const inputValueReset = () => {
        setNames((previousValue) => {
            previousValue = [];
            setInput("");
            return previousValue
        })
    }


    return (
        <div>
            <input type="text" onChange={inputValueChange} value={input}></input>
            <button onClick={inputValueRecord}>Record!</button>
            <button onClick={inputValueReset}>reset!</button>
            {names.map((name, idx) => {
                return <p key={idx}>{name}</p>;
            })}

        </div>
    )
}
export default Usestate2;
