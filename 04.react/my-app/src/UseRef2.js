import React, { useRef, useState } from "react";
// 컴포넌트는 함수형이라 표현형으로 가능
function UseRef2(){
    let number = 0;

    const refNumber = useRef(0);


    const updateNumber = () => {
        number = number + 1;
        console.log("Number:", number);
    };
    // console.log("---렌더링---")

    // useRef : 내부적으로는 실행 되지만 렌더링은 일어나지 않는다
    // console.log(refNumber);
    // console.log(refNumber.current);

    const updateRefNumber = () => {
        refNumber.current = refNumber.current + 1;
        console.log("RefNumber : ", refNumber.current);
    };

    const [renderVar, setRenderNumber] = useState(0);

    const renderPage = () => {
        setRenderNumber(renderVar + 1);
    };

    const renderNumbers = () => {
        console.log();
        console.log("Number :", number, "-RefNumber : ", refNumber.current)
    }

    return(
        <div>
            <div>
                <p>Number : {number}</p>
                <button onClick={updateNumber}>stateNumber+1</button>
            </div>
            <hr/>
            <div>
                <p>refNumber : {refNumber.current}</p>
                <button onClick={updateRefNumber}>refNumber+1</button>
            </div>
            <hr/>
            <div>
                <button onClick={renderPage}>Render</button>
            </div>
            <hr/>
            <div>
                <button onClick={renderNumbers}>Show Number</button>
            </div>
        </div>
    );
};

export default UseRef2;